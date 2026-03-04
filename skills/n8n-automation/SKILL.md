---
name: n8n-automation
type: prompt-skill
squad: automation
inputs: [objetivo, trigger, integradores, tem_agente_ai, precisa_rag, squad, urgencia]
outputs: [workflow-structure, node-configs, expressions, agent-system-prompt, sub-workflow-list, error-handling-strategy, production-checklist]
playbooks_recomendados: [playbook-n8n]
mcp_dependency: n8n-mcp
---

# n8n Automation — Skill

## Descrição

Skill compartilhada de design, construção e revisão de workflows n8n.
Gera estruturas de workflow completas, configurações de nodes, expressões,
system prompts de agentes AI, arquiteturas RAG e padrões de integração com o
DEK-OS Antigravity — a partir de qualquer descrição de automação, mesmo as mais vagas.
Cobre desde workflows simples de integração até arquiteturas multi-agent complexas.

## Categoria

⚙️ Automation

## Dependência MCP — n8n-MCP

Esta skill utiliza o servidor MCP do n8n para construção assistida de workflows diretamente
no Antigravity. Instale e configure antes de usar a skill em modo interativo.

### Instalação

**Pré-requisito:** Node.js instalado na máquina.

```bash
# Instalar globalmente
npm install -g n8n-mcp
```

### Configuração no Antigravity

1. Clique nos três pontos `...` no topo direito do chat → **MCP Servers**
2. Clique em **Manage MCP Servers** → **View raw config**
3. O arquivo `C:\Users\<USER_NAME>\.gemini\antigravity\mcp_config.json` será aberto
4. Adicione a configuração abaixo e salve:

```json
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "node",
      "args": [
        "C:\\Users\\<USER_NAME>\\AppData\\Roaming\\npm\\node_modules\\n8n-mcp\\dist\\mcp\\index.js"
      ],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true",
        "N8N_API_URL": "http://localhost:5678",
        "N8N_BASE_URL": "http://localhost:5678",
        "N8N_API_KEY": ""
      }
    }
  }
}
```

1. Volte para **Manage MCP servers** e clique em **Refresh** — o n8n-mcp estará ativo.

> **Alternativa via npx (sem instalação global):** use `npx n8n-mcp` como command e remova o `args`.
> **Alternativa via Docker:** `docker pull ghcr.io/czlonkowski/n8n-mcp:latest`

**Repositório oficial:** <https://github.com/czlonkowski/n8n-mcp>

---

## Usada por

- **Automation Engineer** — Design e construção de workflows novos
- **AI Agent Builder** — Configuração de agentes LangChain com tools e memory
- **Integration Specialist** — Conexão entre serviços externos e o DEK-OS
- **QA Automation** — Revisão e validação de workflows antes de ir para produção
- **Orchestrator** — Coordenação de execução de workflows a partir do Antigravity

## Verificações e Entregas

- Decode da automação (objetivo, trigger, integradores, output esperado)
- Estrutura de workflow em pseudocódigo (camadas: trigger, validação, lógica, output)
- Configuração de nodes críticos (parâmetros, expressões, credentials)
- System prompt do agente AI (se aplicável)
- Arquitetura de memory (tipo, session_id, TTL)
- Configuração RAG (chunking, embedding model, vector store)
- Padrões de sub-workflow recomendados para modularização
- Tratamento de erros (retry, continue on fail, error workflow)
- Expressões JavaScript prontas para uso
- Convenção de nomes de nodes e workflows
- Checklist de produção

## Inputs Esperados

| Campo          | Obrigatório | Descrição                                                      |
|----------------|-------------|----------------------------------------------------------------|
| objetivo       | Sim         | O que a automação deve fazer (resultado final esperado)        |
| trigger        | Não         | Como a automação é acionada (webhook, schedule, chat, email)   |
| integradores   | Não         | Serviços envolvidos (Slack, Google Sheets, WhatsApp, CRM...)   |
| tem_agente_ai  | Não         | Se precisa de agente LLM (sim/não/não sei)                     |
| precisa_rag    | Não         | Se precisa buscar em documentos próprios (sim/não)             |
| squad          | Não         | Squad DEK-OS responsável pela automação                        |
| urgencia       | Não         | Produção imediata vs. pode ser incremental                     |

## Outputs Gerados

| Output                    | Formato      | Descrição                                                      |
|---------------------------|--------------|----------------------------------------------------------------|
| workflow-structure        | Pseudocódigo | Fluxo completo do workflow com nodes e conexões                |
| node-configs              | Tabela/JSON  | Parâmetros críticos de cada node                               |
| expressions               | JavaScript   | Expressões prontas para mapear e transformar dados             |
| agent-system-prompt       | Texto        | System prompt estruturado para o agente AI                     |
| sub-workflow-list         | Lista        | Sub-workflows recomendados a criar ou reutilizar               |
| error-handling-strategy   | Descrição    | Estratégia de erro em 3 níveis para o workflow                 |
| production-checklist      | Checklist    | Lista de verificação antes de ativar em produção               |

## Playbook de Referência

`playbooks/playbook-n8n.md`

## Nodes Principais Cobertos

- **Trigger:** Webhook, Schedule, Chat Trigger, Email IMAP, Error Trigger
- **Lógica:** IF, Switch, Merge, Split In Batches, Loop Over Items, Wait
- **Dados:** Set (Edit Fields), Code, AI Transform, Aggregate, Compare Datasets
- **AI:** AI Agent, LLM (OpenAI/Anthropic/Gemini/Groq), Memory, Vector Store, Embeddings
- **Integração:** HTTP Request, Execute Sub-workflow, MCP Client Tool
- **Output:** Respond to Webhook, Send Email, Slack, Google Sheets, Notion, Airtable

## Restrições

- Não executa diretamente no n8n (sem acesso à instância sem configuração do MCP)
- Entrega arquitetura e configuração para implementação humana ou via Antigravity
- Código gerado para o Code node é JavaScript — TypeScript não suportado nativamente
- Para workflows com mais de 20 nodes, recomendar divisão em sub-workflows antes de detalhar
- Versão mínima n8n: 1.82 (AI Agent unificado como Tools Agent)
