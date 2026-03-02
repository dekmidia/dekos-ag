# DEK-OS Antigravity (dekos-ag)

Bem-vindo ao **DEK-OS AG**, a versão do Sistema Operacional Agêntico da DekMidia **otimizada para execução via LLMs com acesso a arquivos** (como o Antigravity).

Ao invés de depender de um CLI baseado em prompts rígidos para o usuário humano, esta estrutura foi desenhada para servir de **Cérebro (Base de Conhecimento e Workflows)** para agentes autônomos.

## 🏗️ A Estrutura

- `registry.json`: O mapa mental do sistema. Ensina ao Antigravity quais squads existem, onde estão os agentes e como as pastas se comportam.
- `squads/`: Diretório que contém os Prompts de Sistema dos agentes (`.md`).
- `playbooks/`: A Base de Conhecimento técnica da agência (`.md`).
- `skills/`: Ferramentas ou scripts que a IA pode executar (`.ts`, `.py`, etc).
- `.agents/workflows/`: O **Coração da Orquestração**. Sequências de passos que o Antigravity lê nativamente e executa de ponta a ponta.

---

## 🛠️ Como Alimentar e Expandir

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

- *"Faça o workflow de **prospeccao**, nicho: advogados, cidade: são paulo."*
- *"Invoque o **Copywriter** (Creative) e peça para ele criar um carrossel baseando-se no playbook de **Alta Conversão**."*
- *"Leia este PDF aqui e crie um novo **Playbook** de Atendimento em `playbooks/atendimento-whatsapp.md` com o frontmatter adequado."*

O Antigravity lerá os arquivos, fará o "Roleplay" exato do agente, cruzará com as orientações do playbook e entregará o trabalho, sem você precisar rodar 1 linha de CLI!
