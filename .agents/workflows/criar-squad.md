---
description: >
  Cria uma nova squad do zero com estrutura padronizada. Gera pasta,
  agente(s), squad.yaml e registra no registry.json. Garante que toda
  squad nasce com a mesma qualidade da Squad de prospection.
inputs:
  nome_squad: "string (ex: vendas)"
  descricao: "string (ex: Squad responsavel pelo ciclo de vendas)"
  agentes: "lista de nomes (ex: closer, sdr)"
human_checkpoints:
  - "[CHECKPOINT] Aprovacao da estrutura antes de criar os arquivos"
---

# Workflow: Criar Squad

## Passo 1 — Coleta de Informacoes

Pergunte ao usuario (se nao fornecido):

1. **Nome da squad** (ex: vendas, suporte, financeiro)
2. **Descricao** da squad (1-2 frases sobre a missao)
3. **Agentes** que a squad tera (lista de nomes e papeis)
4. **Dominio** de atuacao (interno, externo, hibrido)

---

## Passo 2 — Planejamento da Estrutura

Montar a arvore de arquivos que sera criada:

```
squads/[nome-squad]/
├── squad.yaml              ← manifesto da squad
├── [agente-1].md           ← prompt com persona, NOT for, handoff, comandos
├── [agente-2].md           ← idem
├── references/             ← benchmarks e exemplos globais da area
│   └── README.md           ← orientacoes sobre o que colocar aqui
├── tasks/
│   └── task-[nome].md      ← pelo menos 1 task por agente
├── checklists/
│   └── checklist-[nome].md ← pelo menos 1 checklist
├── templates/              ← (opcional) templates de output
└── data/                   ← (opcional) dados de referencia
```

## [CHECKPOINT HUMANO] — Aprovacao da Estrutura

Apresentar a arvore completa ao usuario.
NAO criar arquivos sem aprovacao explicita.

---

## Passo 3 — Criacao dos Arquivos

Para cada agente, seguir o padrao obrigatorio:

### Frontmatter

```yaml
---
name: [Nome da Persona]
persona: "[emoji] [Nome] (@[handle]) — [Titulo] | [Arquetipo]"
squad: [Nome da Squad]
role: [role-slug]
version: "1.0.0"
tasks: [lista-de-tasks]
checklists: [lista-de-checklists]
playbooks_recomendados: [playbooks relevantes]
output_dir: PROJETOS/[cliente ou _interno]/[subpasta]/
---
```

### Secoes obrigatorias no prompt

1. **Identidade** — tom, referencias, princípios
2. **Regras Obrigatórias** — com emojis ✅/❌
3. **Comandos Rapidos** — 3-5 acoes rapidas
4. **NAO usar para** — com indicacao do agente correto
5. **Handoff** — Recebe de / Entrega para / Dados

### squad.yaml

```yaml
name: Squad de [Nome]
version: "1.0.0"
description: >
  [Descricao da squad]
dekos:
  minVersion: "1.0"
agents:
  - [agente-1]
  - [agente-2]
tasks:
  - [task-1]
checklists:
  - [checklist-1]
tags: [tag1, tag2]
```

---

## Passo 4 — Registro no registry.json

Adicionar a nova squad na secao `squads` do `registry.json`:

```json
"[nome-squad]": {
  "squad_yaml": "squads/[nome-squad]/squad.yaml",
  "descricao": "[descricao]",
  "agents": {
    "[agente-1]": "squads/[nome-squad]/[agente-1].md"
  }
}
```

---

## Passo 5 — Sincronizacao de Documentos

Apos atualizar o `registry.json`, execute a sincronizacao para atualizar o `/help` e o `README.md`:

1. Utilize a skill `doc-synchronizer`.
2. Comando: `python scripts/sync_docs.py`

---

## Passo 6 — Validacao

- [ ] Todos os arquivos criados seguem o padrao
- [ ] Cada agente tem as 5 secoes obrigatorias
- [ ] squad.yaml lista todos os componentes
- [ ] registry.json atualizado
- [ ] Nenhum output aponta para `assets/` (sempre `PROJETOS/`)
