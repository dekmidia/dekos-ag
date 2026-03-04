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
└── README.md              ← documentação pública
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
4. Criar subpastas dentro de `PROJETOS/` fora do padrão `PROJETOS/[cliente]/` ou `PROJETOS/_prospeccao/`
5. Criar qualquer pasta com nome `assets/`, `temp/`, `tmp/`, `backup/` ou variações
6. Renomear ou mover arquivos existentes
7. Apagar qualquer arquivo ou pasta

---

## Regras de Output dos Agentes

Todo arquivo gerado por qualquer agente do DEK-OS AG deve ser salvo
EXCLUSIVAMENTE dentro de `PROJETOS/`. Nunca em `assets/`, nunca na raiz,
nunca em pastas temporárias.

Estrutura correta de output:

- Leads e prospecção → `PROJETOS/_prospeccao/[subpasta]/`
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
| `referencias/` | Materiais do cliente (logos, cores, fotos) |

Se o caminho de destino não existir: criar a subpasta dentro de `PROJETOS/`,
nunca fora dela.

> ⚠️ **`assets/` está DEPRECADA.** Nenhum agente deve salvar outputs nesta pasta.
> Todo output deve ir para `PROJETOS/[cliente]/[subpasta]/`.

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
| **Prospeccao** | 🔍 Falcon (@pesquisador), 📊 Rank (@qualificador), 💬 Pulse (@abordagem), 🔬 Lens (@diagnosticador) |
| **Creative** | ✍️ Ink (@copywriter), 🎨 Prism (@designer), 📱 Hype (@social-media) |
| **Growth** | 🕵️ Scout (@scout), 🤝 Welcome (@onboarding) |
| **Engineering** | 💻 Dex (@developer), ✅ Guard (@qa-tester) |
| **Performance** | 📈 Boost (@media-buyer), 🛡️ Shield (@auditor) |
| **Success** | 🎯 Vox (@concierge), 📊 Cipher (@data-scientist), 📋 Relay (@reporting), 🔎 Apex (@seo-specialist) |

---

## Em caso de dúvida

Se não tiver certeza se uma ação está dentro das regras acima:
NÃO execute. Pergunte primeiro.
