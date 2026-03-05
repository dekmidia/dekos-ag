---
description: Exibe a visão geral do DEK-OS AG (Agentes, Squads, Skills e Playbooks).
---

# 📖 DEK-OS: Central de Ajuda

Bem-vindo ao **DEK-OS Antigravity**. Abaixo estão as informações principais para operar no framework.

---

## 👥 Squads e Áreas de Atuação

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

---

## 🤖 Nossos Agentes

<!-- AGENT_TABLE_START -->
| Agente | Squad | Missao Principal |
| --- | --- | --- |
| **🔍 Falcon (@pesquisador)** | Prospection | Pesquisador de Mercado | Hunter |
| **📊 Rank (@qualificador)** | Prospection | Analista de Qualificação | Scorer |
| **💬 Pulse (@abordagem)** | Prospection | Especialista em Outreach | Conector |
| **🔬 Lens (@diagnosticador)** | Prospection | Analista Digital | Consultor |
| **✍️ Ink (@copywriter)** | Creative | Copywriter Persuasivo | Conversor |
| **🎨 Prism (@designer)** | Creative | Designer UI/UX | Criador |
| **📱 Hype (@social-media)** | Creative | Social Media Manager | Estrategista |
| **🕵️ Scout (@scout)** | Growth | Detetive de Negócios | Explorer |
| **🤝 Welcome (@onboarding)** | Growth | Onboarding Manager | Integrador |
| **💻 Dex (@developer)** | Engineering | Lead Developer | Builder |
| **✅ Guard (@qa-tester)** | Engineering | QA Tester | Guardian |
| **📈 Boost (@media-buyer)** | Performance | Media Buyer Sênior | Optimizer |
| **🛡️ Shield (@auditor)** | Performance | Compliance Auditor | Porteiro |
| **🎯 Vox (@concierge)** | Success | Concierge Comercial | Qualificador |
| **📊 Cipher (@data-scientist)** | Success | Data Scientist de Marketing | Analista |
| **📋 Relay (@reporting)** | Success | Reporting Concierge | Comunicador |
| **🔎 Apex (@seo-specialist)** | Success | SEO Specialist | Otimizador |
| **🔌 Wire (@wire)** | Automations | Arquiteto de Fluxos n8n | Builder |
| **🌉 Bridge (@bridge)** | Automations | Integrador de APIs e Sistemas | Connector |
<!-- AGENT_TABLE_END -->

---

## 🛠️ Skills Disponíveis

<!-- SKILL_TABLE_START -->
| Skill | Descricao |
| --- | --- |
| `canva-creative` | Ferramenta do sistema. |
| `doc-synchronizer` | Sincroniza tabelas de Agentes, Squads e Skills do registry.json com README.md e help.md. |
| `lead-scoring` | Script utilitario do sistema. |
| `lp-cinematografica` | Use esta skill sempre que for solicitada a criação de uma landing page ou site de alta fidelidade com estética cinematográfica. Suporta captura de sites de referência via MCP Firecrawl (instalado automaticamente se necessário). Gera código React 19 + Tailwind CSS + GSAP com animações premium, design system completo e presets estéticos. |
| `microsoft-designer-creative` | Ferramenta do sistema. |
| `playbook-formatter` | Garante que novos playbooks sigam o padrão técnico do DEK-OS (YAML frontmatter + Markdown estruturado). |
| `skill-formatter` | Garante que novas skills (Markdown ou Código) sigam o padrão técnico do DEK-OS. |
<!-- SKILL_TABLE_END -->

---

## 📚 Playbooks (Base de Conhecimento)

A pasta `playbooks/` contém o conhecimento técnico especializado que os agentes usam.

### Como gerar um novo Playbook

Para garantir que o framework entenda seu novo conhecimento, ele **deve** seguir este formato:

1. **Frontmatter (Obrigatório):**

```yaml
---
title: [Título do Conhecimento]
tags: [tag1, tag2]
author: DekMidia
version: "1.0.0"
squads_que_usam: [Squad1, Squad2]
---
```

1. **Estrutura:** Use Markdown com headings claros (H1, H2, H3).
2. **Dica:** Você pode usar a skill `playbook-formatter` para validar seu rascunho.

---

## 🚀 Comandos Úteis

- `/help` — Abre esta página de ajuda.
- `/inicio-rapido` — Entrega pontual sem onboarding: cria só a pasta necessária para o que está sendo desenvolvido agora.
- `/criar-squad` — Inicia o fluxo de criação de uma nova squad padronizada.
- `/prospection-nicho` — Inicia ciclo completo de prospecção.
- `/onboarding-cliente` — Inicia estruturação de novo projeto de cliente (estrutura completa).
