---
name: activity-logger
description: Use esta skill ao FINALIZAR qualquer tarefa no DEK-OS AG. Registra silenciosamente a atividade no log central (squads/ops/data/activity-log.json). Não notifica, não analisa, não propõe nada — apenas registra. A análise é responsabilidade exclusiva do workflow-optimizer.
version: "1.0.0"
squads_que_usam: [Todas]
agentes_que_usam: [Todos]
modo: AUTO
---

# Activity Logger — Memória Silenciosa do DEK-OS

Este logger é invisível para o usuário. Registra o que aconteceu, guarda e sai do caminho. Nada de notificações, nada de sugestões, nada de análises. Só dados limpos para o Optimizer trabalhar quando for chamado.

> 📁 **Por que squads/ops/data/?**
> O log é um dado persistente do sistema — não um output de projeto. Fica em `squads/ops/data/` para ser versionado no Git junto com o repositório e nunca ser removido quando projetos de clientes são encerrados.

---

## Regra de Ouro

**Registrar sempre. Notificar nunca.**

O logger não interrompe o fluxo de trabalho. O usuário não precisa saber que ele agiu — a menos que algo dê errado ao salvar o arquivo.

---

## Quando Usar

Ao finalizar **qualquer** entrega, sem exceção. O agente invoca esta skill como **último passo** antes de encerrar — depois de salvar o output, antes de fazer o handoff.

---

## Protocolo de Registro

### Passo 1 — Verificar/Criar o arquivo de log

Caminho fixo: `squads/ops/data/activity-log.json`

Se o arquivo não existir, criar com esta estrutura:

```json
{
  "_descricao": "Log central de atividades do DEK-OS AG. Versionado no Git. Não editar manualmente.",
  "_versao": "1.0.0",
  "total_registros": 0,
  "ultima_atualizacao": null,
  "registros": []
}
```

### Passo 2 — Montar o objeto de registro

```json
{
  "id": "log-YYYYMMDD-HHMMSS",
  "timestamp": "YYYY-MM-DDTHH:MM:SS",
  "agente": "@nome-do-agente",
  "squad": "nome-da-squad",
  "tipo_tarefa": "ver tabela abaixo",
  "cliente": "nome do cliente ou null se tarefa interna",
  "inputs_recebidos": "resumo em 1 frase do que foi solicitado",
  "output_gerado": "resumo em 1 frase do que foi entregue",
  "caminho_output": "PROJETOS/[cliente]/[subpasta]/[arquivo]",
  "skills_usadas": ["lista de skills invocadas"],
  "playbooks_consultados": ["lista de playbooks lidos"],
  "tempo_estimado_min": null,
  "status": "concluido | parcial | falhou",
  "problemas_encontrados": null,
  "observacao": "aprendizado relevante ou null"
}
```

### Tabela de tipos de tarefa

| tipo_tarefa | Quando usar |
|---|---|
| `criacao-site` | Landing page, site, one-page |
| `criacao-copy` | Textos, anúncios, emails, copies |
| `criacao-social` | Posts, carrosséis, calendário editorial |
| `criacao-apresentacao` | Slides, decks, propostas |
| `prospeccao-leads` | Mapeamento e pesquisa de leads |
| `qualificacao-leads` | Scoring e classificação de leads |
| `abordagem-leads` | Criação de mensagens de contato |
| `diagnostico-digital` | Análise de presença digital |
| `campanha-google-ads` | Estruturação de campanhas Google |
| `campanha-meta-ads` | Estruturação de campanhas Meta |
| `auditoria-ads` | Revisão e compliance de anúncios |
| `relatorio-performance` | Relatório de resultados |
| `onboarding-cliente` | Setup inicial de novo cliente |
| `automacao-n8n` | Criação ou edição de fluxo n8n |
| `atualizacao-sistema` | Mudanças em agents, skills, workflows |
| `outro` | Qualquer tarefa não listada acima |

### Passo 3 — Inserir e atualizar contadores

1. Adicione o objeto ao array `registros[]`
2. Incremente `total_registros` em +1
3. Atualize `ultima_atualizacao` com o timestamp atual

### Passo 4 — Encerrar silenciosamente

Nenhuma mensagem ao usuário. Nenhuma notificação. Registro feito — siga para o handoff normalmente.

---

## O Campo "observacao" — O Mais Valioso

Este campo transforma uso em conhecimento. Use-o para registrar:

- Um atalho descoberto durante a execução
- Uma dificuldade que poderia ser evitada com instrução melhor
- Um padrão percebido ("este cliente sempre pede X junto com Y")
- Uma adaptação que funcionou bem e merece virar padrão

Exemplos de observações úteis:

```
"Cliente sem logo — paleta extraída de referência de nicho. Poderia virar template para clínicas."
"Tarefa de prospecção sempre seguida de pedido de mensagem de abordagem no mesmo dia."
"Playbook de Meta Ads não cobre campanhas de remarketing — agente teve que improvisar."
```

Observações vazias (`null`) são aceitas. Observações ricas constroem o sistema.
