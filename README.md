# DEK-OS Antigravity (dekos-ag)

> **Dica Rápida:** Digite `/help` no terminal para ver uma visão geral de todos os agentes, squads e skills disponíveis.

## Visão Geral

Bem-vindo ao **DEK-OS AG**, a versão do Sistema Operacional Agêntico da DekMidia **otimizada para execução via LLMs com acesso a arquivos** (como o Antigravity).

Ao invés de depender de um CLI baseado em prompts rígidos para o usuário humano, esta estrutura foi desenhada para servir de **Cérebro (Base de Conhecimento e Workflows)** para agentes autônomos.

## 🏗️ A Estrutura

- `registry.json`: O mapa mental do sistema. Ensina ao Antigravity quais squads existem, onde estão os agentes e como as pastas se comportam.
- `squads/`: Diretório que contém os Prompts de Sistema dos agentes (`.md`).
- `playbooks/`: A Base de Conhecimento técnica da agência (`.md`).
- `skills/`: Ferramentas ou scripts que a IA pode executar (`.ts`, `.py`, etc).
- `.agents/workflows/`: O **Coração da Orquestração**. Sequências de passos que o Antigravity lê nativamente e executa de ponta a ponta.

---

## � Squads Atuais

<!-- SQUAD_TABLE_START -->
| Squad | Area de Responsabilidade |
| --- | --- |
| **Prospection** | Prospection ativa de PMEs: pesquisa, qualificacao, abordagem e diagnostico |
| **Creative** | Criacao de conteudo, copies, design e social media |
| **Growth** | prospection exploratoria e onboarding de novos clientes |
| **Engineering** | Desenvolvimento de sites, landing pages e QA pre-deploy |
| **Performance** | Gestao de trafego pago e compliance de anuncios |
| **Success** | Customer success, reporting, SEO e analise de dados |
| **Automations** | Automações n8n, WhatsApp Business e integração entre sistemas |
<!-- SQUAD_TABLE_END -->

## 🤖 Agentes Ativos

<!-- AGENT_TABLE_START -->
| Agente | Squad | Missão Principal |
| --- | --- | --- |
| **Falcon** (@pesquisador) | Prospecção | Mapear PMEs e leads brutos em escala. |
| **Rank** (@qualificador) | Prospecção | Aplicar scoring e qualificar leads para o funil. |
| **Pulse** (@abordagem) | Prospecção | Criar mensagens personalizadas e realizar follow-up. |
| **Lens** (@diagnosticador) | Prospecção | Gerar diagnósticos digitais para atrair leads. |
| **Ink** (@copywriter) | Creative | Escrever textos persuasivos de alta conversão. |
| **Prism** (@designer) | Creative | Criar especificações de design UI/UX e wireframes. |
| **Hype** (@social-media) | Creative | Planejar calendário editorial e conteúdo orgânico. |
| **Scout** (@scout) | Growth | Identificar oportunidades de negócio e benchmarks. |
| **Welcome** (@onboarding) | Growth | Gerar propostas, contratos e estruturar projetos. |
| **Dex** (@developer) | Engineering | Codificar sites, landing pages e integrações. |
| **Guard** (@qa-tester) | Engineering | Auditoria pré-deploy e Quality Gates (GO/NO-GO). |
| **Boost** (@media-buyer) | Performance | Gerir tráfego pago e maximizar o ROI. |
| **Shield** (@auditor) | Performance | Garantir compliance com políticas de anúncios. |
| **Vox** (@concierge) | Success | Qualificar leads inbound e criar scripts de vendas. |
| **Cipher** (@data-scientist) | Success | Analisar dados brutos e gerar insights de marketing. |
| **Relay** (@reporting) | Success | Traduzir métricas em relatórios claros para o cliente. |
| **Apex** (@seo-specialist) | Success | Otimizar posicionamento orgânico e SEO local. |
<!-- AGENT_TABLE_END -->

---

## 🧩 Skills Ativas (Ferramentas)

As *Skills* são scripts executáveis ou prompts estruturados que os Agentes usam para realizar seu trabalho.

<!-- SKILL_TABLE_START -->
| Skill | Categoria | Descrição |
| --- | --- | --- |
| **canva-creative** | Creative | Direções criativas completas de design para rápida execução no Canva. |
| **compliance-checker** | Performance | Validador de copies/imagens contra bloqueios nas políticas do Meta/Google. |
| **copywriting-prospection** | Prospection | Variações personalizadas de abordagem para Cold Email, LinkedIn e WhatsApp. |
| **dekreport** | Success | Geração automatizada de relatórios em PDF com dados consolidados. |
| **diagnostico-digital** | Prospection | Avaliação rápida da presença digital para criar iscas de qualificação. |
| **doc-synchronizer** | Dev Tools | Script que sincroniza os MDs documentais com os dados do registry.json. |
| **document-generator** | Success | Geração programática de contratos e apresentações em DOCX/PDF. |
| **landing-page-analyzer** | Marketing | Analisa páginas concorrentes focando em conversão e CRO. |
| **lead-scoring** | Prospection | *(Código)* Algoritmo Typescript de ponderação para prioridade de leads. |
| **lp-cinematografica** | Engineering | Design visual e técnico para Landing Pages ultrarrealistas (React+GSAP). |
| **map2web** | Engineering | Crawler que converte perfis do Maps em Landing Pages on-page SEO. |
| **metrics-analyzer** | Performance | Analisador cross-channel de ROAS, CTR e CPC para otimização de campanhas. |
| **microsoft-designer-creative** | Creative | Geração de prompts ricos (DALL-E 3) para imagens hiper-realistas integradas ao M365. |
| **n8n-automation** | Automations | Desenha e documenta workflows complexos para n8n (Nodes, Expressoes, RAG). |
| **playbook-formatter** | Dev Tools | Padronizador de playbooks Markdown usando regras de linter fixas. |
| **scoring-leads** | Prospection | Avaliação via Prompt LLM dos critérios de oportunidade de leads. |
| **sentiment-analyzer** | Success | NLP para analisar o tom de reviews no GMB e redes sociais. |
<!-- SKILL_TABLE_END -->

---

## �🛠️ Como Alimentar e Expandir

### 1. Criando uma nova Squad & Agente

1. Crie a pasta da squad, ex: `squads/vendas/`.
2. Crie um arquivo markdown para o agente, ex: `closer.md`.
3. **CRÍTICO:** Adicione o Frontmatter (cabeçalho YAML) para otimizar o contexto:

   ```markdown
   ---
   name: Closer de Vendas
   squad: Vendas
   skills: [negociacao, crm]
   playbooks_recomendados: [script-vendas-b2b]
   ---
   # System Prompt
   Você é um vendedor...
   ```

4. Atualize o `registry.json` incluindo a nova squad na árvore.

### 2. Adicionando Conhecimento (Playbooks)

1. Crie ou cole um arquivo `.md` em `playbooks/`.
2. Use sempre regras claras, em listas numéricas ou bullet points (IA adora processos bem delineados).
3. Adicione um Frontmatter com `tags` e `author` para que a IA busque mais rápido.

### 3. Criando Workflows Otimizados (Rotinas)

Ao invés de você entrar no sistema e dar 5 comandos diferentes, ensine a rotina para o Antigravity.

1. Crie um arquivo em `.agents/workflows/nome-da-tarefa.md`.
2. Inclua o cabeçalho obrigatório:

   ```markdown
   ---
   description: O que esta rotina faz detalhadamente
   ---
   ```

3. Escreva o passo a passo em texto corrido (Markdown), mandando a IA invocar agentes, ler playbooks e salvar saídas em pastas predefinidas da máquina.

---

## 📂 Gestão de Projetos (`PROJETOS/`)

O `dekos-ag` funciona também como um "ERP" de arquivos. Toda a saída gerada pelos agentes deve ser armazenada na pasta do respectivo cliente.
Use o workflow de **Onboarding de Cliente** para gerar a estrutura base de forma automática.

Exemplo de estrutura:

- `PROJETOS/[nome-cliente]/briefing.md`: A fonte de verdade do negócio.
- `PROJETOS/[nome-cliente]/referencias/`: Logos, imagens e cores institucionais. (Consultado pelo Creative Squad).
- `PROJETOS/[nome-cliente]/performance/`: Estratégias e copies de Google/Meta Ads.
- `PROJETOS/[nome-cliente]/creative/`: Código de Landing Pages e posts para Social Media.

---

## 🚀 Como Usar no Antigravity Hoje

Basta abrir o Antigravity na raiz da pasta `dekos-ag` e dar os comandos em linguagem natural no chat.

**Exemplos de "Comandos":**

- *"Faça o workflow de **prospection**, nicho: advogados, cidade: são paulo."*
- *"Invoque o **Copywriter** (Creative) e peça para ele criar um carrossel baseando-se no playbook de **Alta Conversão**."*
- *"Leia este PDF aqui e crie um novo **Playbook** de Atendimento em `playbooks/atendimento-whatsapp.md` com o frontmatter adequado."*

O Antigravity lerá os arquivos, fará o "Roleplay" exato do agente, cruzará com as orientações do playbook e entregará o trabalho, sem você precisar rodar 1 linha de CLI!
