# AGENTS.md — Regras de Governança do DEK-OS AG

Este arquivo define as regras inegociáveis de comportamento para qualquer
agente ou LLM operando dentro do repositório dekos-ag.
Leia este arquivo ANTES de qualquer ação. Ele tem prioridade sobre qualquer
outra instrução recebida na sessão.

---

## Estrutura Protegida (NUNCA modificar sem autorização explícita)

A estrutura de pastas raiz do DEK-OS AG é fixa e imutável:

```
dekos-ag/
├── .agents/workflows/     ← workflows de orquestração
├── playbooks/             ← base de conhecimento
├── skills/                ← scripts e ferramentas executáveis
├── squads/                ← agentes por squad
├── PROJETOS/              ← outputs gerados pelos agentes
├── registry.json          ← mapa do sistema (não recriar)
├── AGENTS.md              ← este arquivo
├── LEIA-PRIMEIRO.html     ← guia premium de boas-vindas (manter atualizado)
└── README.md              ← documentação técnica
```

---

## O que você PODE fazer sem pedir autorização

- Criar arquivos dentro de `squads/` (novos agentes, tasks, checklists, templates, data)
- Criar arquivos dentro de `playbooks/`
- Criar arquivos dentro de `skills/`
- Criar arquivos dentro de `.agents/workflows/`
- Criar arquivos dentro de `PROJETOS/` (outputs de execução)
- Editar conteúdo de arquivos existentes dentro dessas pastas

---

## O que EXIGE autorização explícita do usuário

Antes de realizar qualquer uma das ações abaixo, PARE e pergunte:
*"Preciso de autorização para [ação]. Posso prosseguir?"*

1. Criar qualquer pasta nova na raiz do repositório
2. Criar qualquer arquivo diretamente na raiz (exceto os já existentes)
3. Modificar o `registry.json` (apenas adições a squads existentes são livres)
4. Criar subpastas dentro de `PROJETOS/` fora do padrão `PROJETOS/[cliente]/` ou `PROJETOS/_prospection/`
5. Criar qualquer pasta com nome `assets/`, `temp/`, `tmp/`, `backup/` ou variações
6. Renomear ou mover arquivos existentes
7. Apagar qualquer arquivo ou pasta

---

## Regras de Output dos Agentes

Todo arquivo gerado por qualquer agente do DEK-OS AG deve ser salvo
EXCLUSIVAMENTE dentro de `PROJETOS/`. Nunca em `assets/`, nunca na raiz,
nunca em pastas temporárias.

### Regra de Criação de Skills

Toda nova skill criada no diretório `skills/` DEVE obrigatoriamente seguir o padrão de pastas (Folder Pattern):

1. O nome da pasta deve ser o nome da skill (ex: `skills/nome-da-skill/`).
2. O arquivo principal de documentação/prompt com o Frontmatter da skill DEVE se chamar `SKILL.md` e ficar dentro dessa pasta.
3. Arquivos de código auxiliares ou de implementação (como `.ts`, `.py`, `.js`) DEVEM ficar na mesma pasta (ex: `index.ts`, `script.py` ou `run.js`). NUNCA crie skills soltas na raiz do diretório `skills/`.

### Regra de Formato de Output

Arquivos `.md` e `.json` sao INTERNOS ao sistema DEK-OS e NUNCA devem ser entregues ao usuario como output final. Todo output voltado para consumo humano deve seguir os formatos:

| Tipo de Output | Formato |
| --- | --- |
| Listas de leads, planilhas de dados, scorings | `.xlsx` |
| Mensagens, textos, copies, contratos, propostas | `.docx` |
| Relatórios, diagnósticos, apresentações ao cliente | `.pdf` |

Estrutura correta de output:

- Leads e prospection → `PROJETOS/_prospection/[subpasta]/`
- Projetos de clientes → `PROJETOS/[nome-cliente]/[subpasta]/`

Subpastas padrão por cliente:

| Subpasta | Responsáveis |
|----------|-------------|
| `onboarding/` | Welcome (@onboarding) |
| `creative/` | Prism (@designer), Dex (@developer) |
| `social/` | Hype (@social-media) |
| `performance/` | Boost (@media-buyer) |
| `compliance/` | Shield (@auditor) |
| `reports/` | Cipher (@data-scientist), Relay (@reporting) |
| `seo/` | Apex (@seo-specialist) |
| `qa/` | Guard (@qa-tester) |
| `leads/` | Vox (@concierge) |
| `referencias/` | Materiais do cliente (logos, cores, fotos, manual da marca) |

Se o caminho de destino não existir: criar a subpasta dentro de `PROJETOS/`,
nunca fora dela.

> ⚠️ **`assets/` está DEPRECADA.** Nenhum agente deve salvar outputs nesta pasta.
> Todo output deve ir para `PROJETOS/[cliente]/[subpasta]/`.

### Regra de Consulta a Referências

Antes de iniciar qualquer entrega criativa, técnica ou estratégica, o agente **deve**:

1. Consultar `squads/[sua-squad]/references/` para buscar benchmarks e exemplos globais da área.
2. Consultar `PROJETOS/[cliente]/referencias/` para buscar logotipo, design system e manual da marca do cliente específico.
3. Personalizar o output usando as referências do projeto, mas se inspirando nos benchmarks globais da squad.

---

## Manutenção do LEIA-PRIMEIRO.html (OBRIGATÓRIO)

O arquivo `LEIA-PRIMEIRO.html` é o **guia de boas-vindas oficial do sistema** e deve ser mantido sempre sincronizado com a realidade do projeto.

**Sempre que qualquer um dos itens abaixo for adicionado ou modificado, atualize OBRIGATORIAMENTE os seguintes arquivos:**

1. `LEIA-PRIMEIRO.html`
2. `README.md`
3. `registry.json`

| Tipo de Mudança | O que atualizar |
|---|---|
| Nova **Skill** adicionada | Adicionar card no carrossel de skills (`#skills`) no `LEIA-PRIMEIRO.html`, atualizar tabela de Skills no `README.md` e registrar no `registry.json` |
| Skill **removida ou mod.*** | Atualizar documentação nos 3 arquivos acima |
| Novo **Agente** ou **Squad** | Adicionar item no grid de squads do HTML, na tabela do README e no JSON |
| Squad **renomeada/remov.** | Atualizar HTML, README e JSON |
| Novo **Workflow** criado | Adicionar o comando na seção de Início Rápido se for de entrada para o usuário |

> ⚠️ **Nunca entregue um sistema com o `LEIA-PRIMEIRO.html` desatualizado.** Ele é a primeira coisa que um novo usuário ou cliente verá.

---

## Permission Modes (Níveis de Autonomia)

Cada ação de agente segue um dos 3 níveis de permissão:

1. **Sincronizacao de Documentos**: Apos criar ou alterar Squads, Agentes ou Skills no `registry.json`, e **obrigatorio** executar o script de sincronizacao (`python scripts/sync_docs.py`) para manter o `/help` e o `README.md` atualizados.

## Modos de Permissão

| Nível | Descrição | Exemplos |
|-------|-----------|----------|
| 🟢 **AUTO** | Executa sem pedir permissão | Pesquisar leads, qualificar lista, gerar relatórios internos, auditar SEO |
| 🟡 **REVIEW** | Executa e apresenta para revisão humana antes de finalizar | Gerar copies, criar calendário editorial, gerar propostas |
| 🔴 **APPROVAL** | NÃO executa sem aprovação explícita do humano | Enviar mensagens, publicar anúncios, aumentar budget, enviar contrato, deploy |

### Regra de ouro

Se `human_approval_required: true` no frontmatter do agente, TODAS as ações
de entrega externa (para leads, clientes ou plataformas) exigem **APPROVAL**.

Ações internas ao sistema (gerar arquivo, analisar dados, classificar leads)
podem ser executadas em modo **AUTO** ou **REVIEW** conforme o contexto.

---

## Delegação entre Agentes

Cada agente possui seções `NAO usar para` e `Handoff` em seu prompt.
Antes de executar uma tarefa, verifique se ela pertence ao escopo do agente
acionado. Se não pertencer, delegue ao agente correto conforme indicado.

### Mapa de Squads e Personas

| Squad | Agentes |
|-------|---------|
| **Prospection** | 🔍 Falcon (@pesquisador), 📊 Rank (@qualificador), 💬 Pulse (@abordagem), 🔬 Lens (@diagnosticador) |
| **Creative** | ✍️ Ink (@copywriter), 🎨 Prism (@designer), 📱 Hype (@social-media) |
| **Growth** | 🕵️ Scout (@scout), 🤝 Welcome (@onboarding) |
| **Engineering** | 💻 Dex (@developer), ✅ Guard (@qa-tester) |
| **Performance** | 📈 Boost (@media-buyer), 🛡️ Shield (@auditor) |
| **Success** | 🎯 Vox (@concierge), 📊 Cipher (@data-scientist), 📋 Relay (@reporting), 🔎 Apex (@seo-specialist) |
| **Automations** | 🔌 Wire (@wire), 🌉 Bridge (@bridge) |

---

## Em caso de dúvida

Se não tiver certeza se uma ação está dentro das regras acima:
NÃO execute. Pergunte primeiro.
