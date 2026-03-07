---
name: workflow-optimizer
description: Analisa o activity-log.json em busca de padrões repetitivos e propõe otimizações (novos workflows, playbooks ou melhorias de agentes) apenas quando há evidência suficiente. Só age após aprovação humana explícita. Acionar com o comando "otimizar sistema" ou via varredura semanal pela Donna.
version: "1.0.0"
squads_que_usam: [Ops]
agentes_que_usam: [Donna, Leo]
modo: REVIEW
human_approval_required: true
depende_de: activity-logger
thresholds:
  observacao_vira_playbook: 3
  sequencia_vira_workflow: 5
  problema_vira_melhoria: 3
---

# Workflow Optimizer — Motor de Aprendizado do DEK-OS

O Optimizer é chamado deliberadamente — nunca age por conta própria. Quando acionado, varre o log, filtra pelo que tem evidência suficiente, e apresenta propostas para você aprovar, revisar ou rejeitar. Nada é escrito no sistema sem sua autorização.

> 🔒 **Modo REVIEW obrigatório:** Nenhum arquivo é criado ou modificado sem aprovação explícita. O Optimizer propõe — você decide.

---

## Como Acionar

- **Comando manual:** `otimizar sistema`
- **Varredura semanal:** Donna executa toda segunda-feira automaticamente
- **Invocação direta:** `@donna otimizar sistema`

---

## Protocolo Completo

### Passo 1 — Carregar arquivos necessários

Leia os dois arquivos a seguir antes de qualquer análise:

**1a.** `squads/ops/data/activity-log.json` — o histórico de atividades

**1b.** `squads/ops/memory/optimizer-memory.json` — o histórico do próprio Optimizer

Se `optimizer-memory.json` não existir, criar agora em `squads/ops/memory/`:

```json
{
  "_descricao": "Memória do Optimizer. Evita propor a mesma otimização duas vezes. Versionado no Git.",
  "_versao": "1.0.0",
  "ultima_varredura": null,
  "total_varreduras": 0,
  "propostas": []
}
```

Se `activity-log.json` não existir ou tiver menos de 5 registros, informar e encerrar:
> "O log ainda tem poucos registros para análise significativa. Continue usando o sistema e execute o Optimizer novamente em alguns dias."

---

### Passo 2 — Definir escopo da varredura

Verificar `ultima_varredura` no `optimizer-memory.json`:

- **Primeira varredura:** analisa todos os registros do log
- **Varreduras seguintes:** analisa apenas registros com `timestamp` posterior à `ultima_varredura`

Isso evita reprocessar dados já analisados.

---

### Passo 3 — Agregação

Construir internamente uma tabela de frequências. **Nunca processar o log linha a linha na resposta** — isso desperdiça contexto.

Agrupar por:

```
frequencia_por_tipo    → { tipo_tarefa: contagem }
sequencias             → { "tipoA→tipoB": { contagem, clientes[], janela_horas_media } }
problemas_por_tipo     → { tipo_tarefa: { contagem_problemas, motivos[] } }
observacoes_por_tipo   → { tipo_tarefa: [lista de observacoes nao-nulas] }
clientes_frequentes    → { cliente: contagem }
```

**Regra de detecção de sequência:** dois registros do mesmo `cliente`, com `tipo_tarefa` diferentes, e `timestamp` com diferença ≤ 72 horas formam uma sequência candidata.

---

### Passo 4 — Aplicar Thresholds

Só gerar proposta se a evidência for suficiente:

| Padrão detectado | Threshold | O que gera |
|---|---|---|
| Mesma `tipo_tarefa` repetida | **3 ocorrências** | Melhoria de agente ou novo playbook |
| Sequência `tipoA→tipoB` recorrente | **5 ocorrências** | Novo workflow |
| `tipo_tarefa` com problemas recorrentes | **3 ocorrências com problema** | Melhoria de skill ou agente |
| `observacao` com tema recorrente | **3 observações similares** | Novo playbook de conhecimento |
| Mesmo `cliente` com alta frequência | **5 registros** | Workflow dedicado de account |

Padrões abaixo do threshold: ignorar nesta varredura. Acumularão nas próximas.

---

### Passo 5 — Filtrar o que já foi proposto

Para cada padrão que passou o threshold, verificar em `squads/ops/memory/optimizer-memory.json`:

- **`aprovada`** → ignorar, já implementado
- **`rejeitada`** → ignorar, usuário não quis
- **`pendente`** → mencionar que já foi proposto e aguarda decisão
- **Sem registro** → gerar nova proposta

---

### Passo 6 — Apresentar Relatório e Propostas

Se nenhum padrão atingiu o threshold:
> "Varredura concluída. Nenhum padrão com evidência suficiente ainda. Dados continuam sendo coletados — execute novamente na próxima semana."

Se houver padrões, apresentar:

```
📊 Relatório de Varredura — DEK-OS AG
Período: [data início] → [data fim]
Registros analisados: [N novos] (total acumulado: [N total])
Padrões com evidência suficiente: [N]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROPOSTA [N] / [TOTAL]
Tipo: Novo Workflow | Novo Playbook | Melhoria de Agente | Melhoria de Skill
Evidência: [padrão] apareceu [N] vezes (threshold: [X])
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Problema identificado:
[O que está sendo feito repetidamente sem automação]

O que será criado/modificado:
Arquivo: [caminho completo]
Esboço do conteúdo:
  - [tópico 1]
  - [tópico 2]
  - [tópico 3]

Impacto estimado:
  Frequência atual: [N] vezes nas últimas [X] semanas
  Tempo economizado por execução: ~[X] min

Sua decisão:
  [ ] APROVAR — criar agora com o conteúdo proposto
  [ ] REVISAR — aprovar a ideia, mas quero editar o conteúdo
  [ ] REJEITAR — não quero esta otimização
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Após apresentar todas, perguntar uma única vez:
> "Para cada proposta, me informe **aprovar**, **revisar** ou **rejeitar**. Pode responder tudo de uma vez (ex: '1 aprovar, 2 revisar, 3 rejeitar')."

---

### Passo 7 — Processar Decisões

**APROVADA:**
- Criar o arquivo no caminho indicado com conteúdo completo
- Se workflow → adicionar ao `registry.json` (seção `workflows`) e ao `LEIA-PRIMEIRO.html` se for entrada do usuário
- Se playbook → adicionar ao `registry.json` na squad correspondente
- Se melhoria de agente/skill → editar arquivo existente e incrementar `version` no frontmatter
- Registrar no `squads/ops/data/activity-log.json` como `tipo_tarefa: atualizacao-sistema`

**REVISADA:**
- Apresentar o conteúdo completo proposto para edição
- Aguardar versão revisada pelo usuário
- Salvar a versão revisada (não a original)
- Registrar como `atualizacao-sistema` com `observacao: "conteúdo revisado pelo usuário"`

**REJEITADA:**
- Não criar nada
- Registrar a rejeição no `optimizer-memory.json` para não propor novamente

---

### Passo 8 — Atualizar optimizer-memory.json

Adicionar cada proposta ao array `propostas[]` em `squads/ops/memory/optimizer-memory.json`:

```json
{
  "id": "opt-YYYYMMDD-N",
  "timestamp_varredura": "YYYY-MM-DDTHH:MM:SS",
  "padrao_detectado": "tipo_tarefa ou sequencia detectada",
  "tipo_proposta": "workflow | playbook | melhoria-agente | melhoria-skill",
  "arquivo_proposto": "caminho/do/arquivo.md",
  "status": "aprovada | revisada | rejeitada | pendente",
  "timestamp_decisao": null
}
```

Atualizar campos raiz:
```json
"ultima_varredura": "YYYY-MM-DDTHH:MM:SS",
"total_varreduras": [incrementar +1]
```

---

## Exemplo de Ciclo Real

O log registra ao longo de 3 semanas:
- `prospeccao-leads` para clínicas estéticas em SJC: 6 vezes
- Sempre seguida de `abordagem-leads` em ≤ 24h: 5 vezes
- Observações recorrentes: "cliente pede mensagem logo após mapear leads"

O Optimizer detecta:
- **Padrão A:** sequência `prospeccao-leads → abordagem-leads` em 5 ocorrências → propõe workflow `prospeccao-rapida-estetica.md`
- **Padrão B:** 3 observações sobre o mesmo tema → propõe adicionar instrução no `abordagem.md`

Você vê 2 propostas claras com evidência real. Aprova, rejeita ou edita. O sistema só evolui com sua autorização.
