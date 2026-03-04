---
title: Automacao de Workflows e Agentes AI com n8n
tags: [n8n, automacao, workflows, ai-agents, langchain, rag, mcp, antigravity, subworkflows]
author: DekMidia
version: "1.0.0"
squads_que_usam: [automation]
---

# Playbook: Automacao de Workflows e Agentes AI com n8n

## Principio Fundamental

Automacao sem estrutura e caos em escala.
Cada workflow deve ter um unico objetivo, ser testavel em partes e falhar de forma controlada.
Construa pequeno, reutilize sempre e nunca deixe um erro passar em silencio.

---

## Visao Geral do n8n no DEK-OS

O n8n e o motor de execucao de todos os workflows do DEK-OS Antigravity.
Ele conecta os squads, executa os agentes AI, processa dados e integra todas as ferramentas da agencia.

| Item                  | Detalhe                                                           |
|-----------------------|-------------------------------------------------------------------|
| Versao recomendada    | n8n >= 1.82 (AI Agent node unificado como Tools Agent)            |
| Deploy recomendado    | Self-hosted Docker + PostgreSQL + Redis (queue mode)              |
| Deploy alternativo    | n8n Cloud (para times pequenos ou inicio rapido)                  |
| Linguagem de codigo   | JavaScript (Code node) — TypeScript nao suportado nativamente     |
| Motor AI              | LangChain JS (nativo no n8n — sem instalacao extra)               |
| Integracao MCP        | Disponivel via MCP Client Tool node (>= n8n 1.88)                 |
| Repositorio DEK-OS    | github.com/dekmidia/dekos-ag                                      |

---

## Arquitetura de um Workflow Profissional

Todo workflow do DEK-OS segue esta estrutura em 4 camadas:

```
[TRIGGER] → [VALIDACAO] → [LOGICA PRINCIPAL] → [OUTPUT + ERRO]
```

| Camada            | Nodes Recomendados                                  | Obrigatorio |
|-------------------|-----------------------------------------------------|-------------|
| TRIGGER           | Webhook, Schedule, Chat Trigger, HTTP Request       | Sim         |
| VALIDACAO         | IF, Switch, Set, Code (validar campos e tipos)      | Sim         |
| LOGICA PRINCIPAL  | Nodes de acao, AI Agent, Sub-workflows, HTTP        | Sim         |
| OUTPUT + ERRO     | Respond to Webhook, Slack/Email + Error Trigger     | Sim         |

---

## Tipos de Trigger — Quando Usar Cada Um

| Trigger               | Quando Usar                                            | Observacao                                   |
|-----------------------|--------------------------------------------------------|----------------------------------------------|
| Webhook               | Receber dados externos em tempo real (forms, apps)     | Preferir a polling — reativo e sem desperdicio|
| Schedule Trigger      | Tarefas periodicas (relatorios, sincronizacoes)        | Use cron expression para precisao            |
| Chat Trigger          | Chatbots e agentes conversacionais                     | Habilita streaming de resposta por padrao    |
| HTTP Request (poll)   | APIs sem webhook — verificar mudancas                  | Ultimo recurso — use intervalo minimo de 5min|
| Email Trigger (IMAP)  | Processar emails recebidos automaticamente             | Combinar com filtros de assunto/remetente    |
| Error Trigger         | Workflow exclusivo para capturar erros de outros       | Criar 1 workflow de erro global para a agencia|
| Activation Trigger    | Executar algo quando um workflow e ativado/desativado  | Util para setup inicial                      |

---

## Nodes Essenciais — Referencia Rapida

### Core Nodes (Logica e Dados)

| Node              | Funcao Principal                                          | Dica DEK-OS                                        |
|-------------------|-----------------------------------------------------------|----------------------------------------------------|
| IF                | Bifurcar o fluxo com condicao booleana                   | Usar para validar campos obrigatorios na entrada   |
| Switch            | Bifurcar em multiplos caminhos por valor                 | Ideal para classificar intencao do usuario         |
| Set (Edit Fields) | Criar, renomear ou limpar campos do JSON                 | Usar antes de chamar APIs para normalizar payload  |
| Merge             | Juntar dados de dois ramos do workflow                   | Modo "Combine" para enriquecer registros           |
| Split In Batches  | Processar items em lotes                                 | Sempre usar ao processar listas grandes (>50 items)|
| Loop Over Items   | Iterar sobre uma lista item a item                       | Combinar com sub-workflows para evitar timeout     |
| Wait              | Pausar o workflow por tempo ou ate webhook               | Usar em sequencias de followup com delay           |
| Code              | JavaScript customizado quando nao ha node pronto         | Usar como ultimo recurso — preferir nodes nativos  |
| HTTP Request      | Chamar qualquer API REST externa                         | Configurar timeout e retry em todas as chamadas    |
| Execute Sub-workflow | Chamar outro workflow como funcao                    | Base da arquitetura modular do DEK-OS              |
| Stop And Error    | Forcar falha com mensagem customizada                    | Usar apos validacao de dados criticos              |
| AI Transform      | Transformar dados com LLM sem montar agente completo     | Ideal para tarefas simples de reescrita/classificacao|

### Nodes de Saida e Notificacao

| Node              | Funcao                                                    |
|-------------------|-----------------------------------------------------------|
| Send Email        | Enviar email via SMTP ou servico dedicado                 |
| Slack             | Notificacoes e alertas para o time                       |
| WhatsApp (Twilio) | Mensagens WA programaticas                               |
| Google Sheets     | Gravar resultados em planilhas                           |
| Respond to Webhook| Retornar resposta para quem acionou o webhook            |
| Notion            | Criar/atualizar paginas e databases no Notion            |
| Airtable          | Gravar no banco de dados do Airtable                     |

---

## Expressoes e Variaveis — Referencia

Expressoes em n8n usam a sintaxe `{{ }}` com acesso a variaveis especiais:

```javascript
// Acessar dados do node anterior
{{ $json.nome }}
{{ $json['campo-com-hifen'] }}

// Acessar dados de um node especifico pelo nome
{{ $('Nome do Node').item.json.campo }}

// Acessar o item de input atual
{{ $input.item.json.campo }}

// Dados do workflow e execucao
{{ $workflow.name }}
{{ $execution.id }}
{{ $now }}               // DateTime atual (Luxon)
{{ $today }}             // Data atual sem hora

// Variaveis de ambiente
{{ $env.MINHA_VARIAVEL }}

// Funcoes uteis
{{ $json.texto.toLowerCase() }}
{{ $json.lista.length }}
{{ JSON.stringify($json) }}

// Operador ternario (condicional inline)
{{ $json.status === 'ativo' ? 'Sim' : 'Nao' }}

// Tratar valor nulo ou indefinido
{{ $json.campo ?? 'valor_padrao' }}
```

### Expressoes Uteis para o DEK-OS

```javascript
// Data formatada para o Brazil
{{ $now.setZone('America/Sao_Paulo').toFormat('dd/MM/yyyy HH:mm') }}

// Extrair dominio de um email
{{ $json.email.split('@')[1] }}

// Capitalizar nome
{{ $json.nome.charAt(0).toUpperCase() + $json.nome.slice(1).toLowerCase() }}

// Gerar ID unico
{{ $execution.id + '_' + Date.now() }}

// Verificar se campo existe e nao esta vazio
{{ $json.campo && $json.campo.trim() !== '' }}
```

---

## Code Node — Boas Praticas

```javascript
// PADRAO: processar todos os items de entrada
const items = $input.all();
const resultados = [];

for (const item of items) {
  const dado = item.json;

  // Sua logica aqui
  resultados.push({
    json: {
      id: dado.id,
      processado: true,
      resultado: dado.valor * 2,
    }
  });
}

return resultados;

// ATENCAO: o Code node sempre deve retornar
// um array de objetos com a chave "json"
```

```javascript
// Tratar erros dentro do Code node
try {
  const resultado = fazAlgoArriscado();
  return [{ json: { sucesso: true, resultado } }];
} catch (error) {
  return [{ json: { sucesso: false, erro: error.message } }];
}
```

---

## Sub-workflows — Arquitetura Modular

Sub-workflows sao a base da arquitetura DEK-OS. Cada funcao reutilizavel deve ser um sub-workflow proprio.

### Quando Criar um Sub-workflow

- Logica usada em mais de 1 workflow diferente
- Bloco de codigo com mais de 5 nodes
- Operacao que pode ser testada de forma independente
- Processo que pode falhar e precisa de tratamento isolado

### Como Estruturar

```
Sub-workflow de entrada:
[Execute Sub-workflow Trigger] → [Validar Inputs] → [Logica] → [Retornar resultado]

Workflow pai chama com:
[Execute Sub-workflow] → configurar: workflow ID + campos de entrada
```

### Sub-workflows Padrao para o DEK-OS

| Sub-workflow              | Funcao                                              | Inputs                          |
|---------------------------|-----------------------------------------------------|---------------------------------|
| sw-slack-notificar        | Enviar notificacao formatada no Slack               | canal, mensagem, nivel          |
| sw-validar-lead           | Validar e normalizar dados de lead                  | nome, email, telefone, empresa  |
| sw-enriquecer-empresa     | Buscar dados publicos de CNPJ/empresa               | cnpj ou nome_empresa            |
| sw-gravar-log             | Gravar log de execucao em planilha ou banco         | workflow_id, status, mensagem   |
| sw-enviar-whatsapp        | Enviar mensagem WA via Twilio/WhatsApp API          | telefone, mensagem, template_id |
| sw-classificar-intencao   | Classificar intencao de mensagem via LLM            | mensagem, contexto              |
| sw-gerar-copy             | Gerar copy de marketing via LLM                     | objetivo, produto, publico, tom |

---

## Tratamento de Erros — Estrategia Completa

### Nivel 1 — No Proprio Node (retry)

Habilitar em todo node que chama API externa:
- Settings > Retry On Fail: ON
- Max Tries: 3
- Wait Between Tries: 2000ms

### Nivel 2 — Ramo de Erro no Workflow (continue on fail)

```
[Node critico] --sucesso--> [continua normal]
               --erro-----> [IF: verificar tipo de erro]
                                  --> [erro esperado: tratar e continuar]
                                  --> [erro inesperado: notificar + Stop And Error]
```

### Nivel 3 — Error Workflow Global

Criar um workflow dedicado chamado `error-handler-global`:

```
[Error Trigger]
  → [Set: formatar mensagem de erro]
  → [Slack: notificar #alerts-n8n]
  → [Google Sheets: gravar log de erro]
  → [IF: erro critico?]
      → Sim: [Email: alertar responsavel + PagerDuty se houver]
      → Nao: [encerrar]
```

Em cada workflow de producao: Settings > Error Workflow > error-handler-global

### Tabela de Tipos de Erro

| Tipo de Erro               | Estrategia                              | Node Recomendado                |
|----------------------------|-----------------------------------------|---------------------------------|
| Timeout de API             | Retry 3x com backoff exponencial        | Retry on Fail + Wait node       |
| Rate limit (429)           | Aguardar e tentar novamente             | Wait + IF verifica status code  |
| Dado invalido/ausente      | Validar antes + Stop And Error + alerta | IF + Stop And Error             |
| Credencial expirada        | Notificar time imediatamente            | Error Trigger + Slack           |
| Memoria estourada          | Dividir em batches + sub-workflow       | Split In Batches + Execute Sub  |
| Timeout de execucao        | Dividir workflow em partes menores      | Sub-workflows independentes     |

---

## AI Agents no n8n — Guia Completo

### Arquitetura Base de um Agente

```
[TRIGGER (Chat ou Webhook)]
  → [AI Agent Node (Tools Agent)]
      |-- [LLM Sub-node] (OpenAI, Anthropic, Gemini...)
      |-- [Memory Sub-node] (Simple, Postgres, Redis)
      |-- [Tool 1: HTTP Request Tool]
      |-- [Tool 2: Execute Sub-workflow Tool]
      |-- [Tool 3: Vector Store Tool]
  → [Respond to Webhook / Resposta final]
```

### Tipos de LLM Disponiveis

| LLM                   | Quando Usar                                              | Custo    |
|-----------------------|----------------------------------------------------------|----------|
| OpenAI GPT-4o         | Tarefas complexas, raciocinio avancado, multimodal       | Alto     |
| OpenAI GPT-4o-mini    | Tarefas simples, classificacao, geracao de texto         | Baixo    |
| Anthropic Claude 3.5  | Textos longos, raciocinio, analise de documentos         | Medio    |
| Anthropic Claude 3 Haiku | Tarefas rapidas e baratas, alta velocidade            | Muito Baixo|
| Google Gemini 1.5 Pro | Contexto longo (1M tokens), analise de PDFs/imagens      | Medio    |
| Groq + Llama 3        | Velocidade maxima, baixo custo, uso interno              | Muito Baixo|
| Ollama (local)        | Privacidade total, sem custo de API, self-hosted         | Gratis   |

### System Prompt — Estrutura Padrao DEK-OS

```
Voce e [NOME DO AGENTE], especialista em [DOMINIO] da DekMidia.

FUNCAO:
[Descricao objetiva do que o agente faz]

REGRAS:
- Sempre responda em portugues do Brasil
- Seja conciso e direto — sem introducoes longas
- Se nao tiver certeza, diga "nao tenho essa informacao"
- Nunca invente dados, numeros ou resultados
- Use os tools disponiveis antes de responder sobre dados especificos

CONTEXTO:
[Informacoes sobre o cliente, produto ou segmento relevante]

FORMATO DE SAIDA:
[Especificar formato JSON, markdown, bullet points, etc.]
```

### Tipos de Memory — Quando Usar Cada Um

| Memory Node           | Persiste?    | Quando Usar                                      |
|-----------------------|--------------|--------------------------------------------------|
| Simple Memory         | Nao (sessao) | Desenvolvimento, testes, demos                   |
| Window Buffer Memory  | Nao (sessao) | Controle de contexto — limitar N ultimas msgs    |
| Postgres Chat Memory  | Sim          | Producao — chatbots com historico persistente    |
| Redis Chat Memory     | TTL          | Alta velocidade — contexto expira apos X horas  |
| Motorhead Memory      | Sim          | Resumo automatico de conversas longas            |

**Padrao DEK-OS para Producao:**
- Session ID: `{{ $json.session_id }}` ou `{{ $json.telefone }}` (identificador unico por usuario)
- Memory: Postgres Chat Memory para historico + Window Buffer para contexto imediato
- Limpeza: workflow agendado para apagar sessoes > 30 dias

---

## RAG (Retrieval Augmented Generation) — Implementacao

RAG permite que agentes respondam com base em documentos proprios da agencia ou do cliente.

### Arquitetura RAG em 2 Workflows

**Workflow 1 — Indexacao (roda uma vez ou sob demanda):**
```
[Trigger Manual ou Schedule]
  → [Buscar documentos] (Google Drive, Notion, pasta local, URL)
  → [Default Data Loader] (chunking do texto)
  → [Embeddings Node] (OpenAI text-embedding-3-small)
  → [Vector Store Insert] (Pinecone, Qdrant, Supabase, Simple)
```

**Workflow 2 — Consulta (roda em tempo real):**
```
[Chat Trigger]
  → [AI Agent]
      |-- [LLM]
      |-- [Memory]
      |-- [Vector Store Tool] (busca semantica nos docs indexados)
  → [Resposta]
```

### Configuracoes de Chunking Recomendadas

| Tipo de Documento         | Chunk Size  | Chunk Overlap | Embedding Model               |
|---------------------------|-------------|---------------|-------------------------------|
| FAQ curto / texto simples | 200-500 tok | 50 tok        | text-embedding-ada-002        |
| Playbooks / documentos    | 500-800 tok | 100 tok       | text-embedding-3-small        |
| Contratos / relatorios    | 800-1200 tok| 200 tok       | text-embedding-3-large        |
| Codigo-fonte              | 300-600 tok | 100 tok       | text-embedding-3-small        |

### Vector Stores Disponiveis no n8n

| Vector Store    | Quando Usar                                          | Custo              |
|-----------------|------------------------------------------------------|--------------------|
| Simple (interno)| Desenvolvimento, testes — nao persiste entre deploys| Gratis             |
| Pinecone        | Producao cloud — facil de usar, escalavel            | Free tier disponivel|
| Qdrant          | Self-hosted — melhor opcao para DEK-OS on-premise    | Gratis self-hosted |
| Supabase        | Se ja usa Supabase — postgres + pgvector             | Free tier disponivel|
| Weaviate        | Projetos complexos com filtros avancados             | Free tier disponivel|

---

## Multi-Agent — Padroes de Orquestracao

### Padrao 1 — Routing (por classificacao)

```
[Webhook recebe mensagem]
  → [AI Transform: classificar intencao]
  → [Switch: rota por intencao]
      → 'prospeccao': [Sub-workflow: agente-prospeccao]
      → 'suporte':    [Sub-workflow: agente-suporte]
      → 'relatorio':  [Sub-workflow: agente-relatorio]
      → 'outro':      [Fallback humano via Slack]
```

### Padrao 2 — Orquestrador + Sub-agentes

```
[Chat Trigger]
  → [Agente Orquestrador (GPT-4o)]
      |-- Tool: [Agente Email (Claude Haiku)]
      |-- Tool: [Agente RAG Documentos (GPT-4o-mini)]
      |-- Tool: [Agente CRM (GPT-4o-mini)]
  → [Resposta consolidada]
```

**Regra critica:** o agente orquestrador nao passa contexto completo automaticamente para sub-agentes. Todo contexto necessario deve ser incluido explicitamente no prompt ao chamar cada sub-agente.

### Padrao 3 — Pipeline Sequencial (chain)

```
[Input]
  → [Agente 1: Pesquisar dados]
  → [Agente 2: Analisar e estruturar]
  → [Agente 3: Gerar texto final]
  → [Agente 4: Revisar e ajustar tom]
  → [Output final]
```

Usar quando a ordem das etapas e deterministica e cada agente enriquece o output do anterior.

---

## Integracao com MCP (Model Context Protocol)

O MCP permite que agentes n8n usem servidores MCP externos como ferramentas.

```
[AI Agent]
  |-- [MCP Client Tool node]
          → servidor MCP (Anthropic, filesystem, banco de dados, etc.)
```

### Casos de Uso MCP no DEK-OS

| Servidor MCP             | Funcao no DEK-OS                                    |
|--------------------------|-----------------------------------------------------|
| @anthropic/server-memory | Memoria persistente e compartilhada entre agentes   |
| @modelcontextprotocol/filesystem | Leitura/escrita de arquivos do servidor  |
| mcp-server-github        | Ler/criar issues, PRs e arquivos no repositorio     |
| mcp-server-google-drive  | Acessar e criar arquivos no Google Drive            |
| mcp-server-slack         | Enviar mensagens e ler canais do Slack              |

**Atencao:** usar MCP Tool e mais simples (1 node) mas nao tem system prompt proprio. Para sub-agentes com logica propria, usar AI Agent Tool node + workflow dedicado.

---

## Integracao DEK-OS Antigravity — Padroes

### Como um Agente Antigravity Dispara um Workflow n8n

```
Antigravity le o workflow em .agents/workflows/nome-da-tarefa.md
  → identifica o endpoint do n8n (webhook URL)
  → executa HTTP Request para o webhook
  → aguarda resposta ou executa de forma assincrona
  → processa o resultado retornado
```

### Estrutura de Webhook para Antigravity

Todo workflow que recebe chamada do Antigravity deve:
1. Usar Webhook como trigger (metodo POST)
2. Validar campo `source: "antigravity"` no body
3. Aceitar o campo `session_id` para rastreamento
4. Retornar JSON estruturado com `status`, `resultado` e `erro`

```json
// Input padrao do Antigravity
{
  "source": "antigravity",
  "session_id": "ag_12345",
  "squad": "prospeccao",
  "tarefa": "criar-mensagem",
  "parametros": {
    "nicho": "advogados",
    "cidade": "Sao Paulo",
    "contato": "Dr. Carlos Silva"
  }
}

// Output padrao para o Antigravity
{
  "status": "sucesso",
  "session_id": "ag_12345",
  "resultado": { ... },
  "tempo_execucao_ms": 1250,
  "erro": null
}
```

### Convencao de Nomes de Workflows DEK-OS

| Prefixo         | Tipo de Workflow                                    | Exemplo                         |
|-----------------|-----------------------------------------------------|---------------------------------|
| `wf-`           | Workflow principal acionado externamente            | wf-prospectar-lead              |
| `sw-`           | Sub-workflow reutilizavel                           | sw-validar-lead                 |
| `ag-`           | Workflow de agente AI                               | ag-copywriter-meta-ads          |
| `rag-`          | Workflow de indexacao ou consulta RAG               | rag-indexar-playbooks           |
| `err-`          | Workflow de tratamento de erros                     | err-handler-global              |
| `cron-`         | Workflow agendado periodicamente                    | cron-relatorio-semanal          |

---

## Boas Praticas e Convencoes DEK-OS

### Nomenclatura de Nodes

- Usar nomes descritivos em portugues: "Validar Email" em vez de "IF"
- Incluir o que o node faz, nao o tipo: "Buscar Lead no CRM" em vez de "HTTP Request"
- Nodes de erro: prefixar com "[ERRO]" para destacar no canvas

### Sticky Notes Obrigatorias

Todo workflow de producao deve ter:
- 1 sticky note no inicio: objetivo, autor, data, versao
- 1 sticky note por secao logica: descricao do bloco
- 1 sticky note em nodes complexos: explicar a logica

### Estrutura de Credentials

- Nunca colocar API keys diretamente em nodes
- Criar credentials nomeadas: `[Servico] - [Ambiente]` (ex: `OpenAI - Producao`)
- Separar credentials de dev e producao
- Usar variaveis de ambiente para valores sensiveis: `{{ $env.OPENAI_API_KEY }}`

### Checklist de Producao

- [ ] Retry on Fail ativo em todos os nodes de API externa
- [ ] Error Workflow configurado em Settings do workflow
- [ ] Validacao de inputs no inicio (IF + Stop And Error)
- [ ] Sticky notes em todas as secoes
- [ ] Testado com dados reais antes de ativar
- [ ] Nomeacao descritiva em todos os nodes
- [ ] Credentials usando variaveis, nao valores hardcoded
- [ ] Sub-workflow criado para logica reutilizavel (>5 nodes)
- [ ] Resposta estruturada com status, resultado e erro
- [ ] Log de execucao configurado (Google Sheets ou banco)

---

## Workflows Padroes DEK-OS — Templates

### Template 1 — Recepcao e Roteamento de Lead

```
[Webhook: receber lead]
  → [IF: validar campos obrigatorios]
      → Invalido: [Stop And Error + notificar Slack]
  → [Set: normalizar dados]
  → [sw-enriquecer-empresa: buscar dados da empresa]
  → [Switch: classificar origem]
      → 'meta-ads':   gravar tag na planilha + iniciar cadencia Meta
      → 'google-ads': gravar tag na planilha + iniciar cadencia Google
      → 'organico':   gravar tag na planilha + notificar vendas
  → [sw-gravar-log: registrar execucao]
  → [Respond to Webhook: confirmar recebimento]
```

### Template 2 — Agente de Copywriting

```
[Webhook ou Chat Trigger: receber briefing]
  → [AI Agent: Copywriter]
      |-- [LLM: Claude 3.5 Sonnet]
      |-- [Memory: Window Buffer (5 msgs)]
      |-- [Tool: buscar-playbook-copy (sub-workflow)]
      |-- [Tool: buscar-referencias-do-cliente (RAG)]
  → [Set: estruturar output]
  → [Respond to Webhook / resposta no chat]
```

### Template 3 — Relatorio Semanal Automatico

```
[Schedule: toda segunda 08h00]
  → [Google Sheets: buscar dados da semana anterior]
  → [AI Transform: gerar analise e insights]
  → [Set: montar corpo do relatorio]
  → [Send Email: enviar para gestores]
  → [Slack: notificar envio do relatorio]
  → [sw-gravar-log: registrar execucao]
```

### Template 4 — Chatbot RAG de Base de Conhecimento

```
[Chat Trigger]
  → [AI Agent]
      |-- [LLM: GPT-4o-mini]
      |-- [Postgres Memory: historico por session_id]
      |-- [Tool: Vector Store (playbooks DekMidia)]
      |-- [Tool: Google Sheets Tool (dados de clientes)]
  → [Streaming: resposta em tempo real]
```

---

## KPIs de Automacao do Squad Automation

| Metrica                                      | Meta     |
|----------------------------------------------|----------|
| Taxa de execucao bem-sucedida                | > 98%    |
| Tempo medio de execucao por workflow         | < 30s    |
| Workflows com error handler configurado      | 100%     |
| Cobertura de sub-workflows (reuso)           | > 60%    |
| Tempo de build de novo workflow              | < 2h     |
| Workflows documentados com sticky notes      | 100%     |
