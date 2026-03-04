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
| **Automations** | Automacoes n8n, WhatsApp Business e integracao entre sistemas |
<!-- SQUAD_TABLE_END -->

---

## 🤖 Nossos Agentes

<!-- AGENT_TABLE_START -->
| Agente | Squad | Missão Principal |
| --- | --- | --- |
| **🔍 Falcon (@pesquisador)** | prospection | Pesquisador de Mercado |
| **📊 Rank (@qualificador)** | prospection | Analista de Qualificação |
| **💬 Pulse (@abordagem)** | prospection | Especialista em Outreach |
| **🔬 Lens (@diagnosticador)** | prospection | Analista Digital |
| **✍️ Ink (@copywriter)** | Creative | Copywriter Persuasivo |
| **🎨 Prism (@designer)** | Creative | Designer UI/UX |
| **📱 Hype (@social-media)** | Creative | Social Media Manager |
| **🕵️ Scout (@scout)** | Growth | Detetive de Negócios |
| **🤝 Welcome (@onboarding)** | Growth | Onboarding Manager |
| **💻 Dex (@developer)** | Engineering | Lead Developer |
| **✅ Guard (@qa-tester)** | Engineering | QA Tester |
| **📈 Boost (@media-buyer)** | Performance | Media Buyer Sênior |
| **🛡️ Shield (@auditor)** | Performance | Compliance Auditor |
| **🎯 Vox (@concierge)** | Success | Concierge Comercial |
| **📊 Cipher (@data-scientist)** | Success | Data Scientist de Marketing |
| **📋 Relay (@reporting)** | Success | Reporting Concierge |
| **🔎 Apex (@seo-specialist)** | Success | SEO Specialist |
<!-- AGENT_TABLE_END -->

---

## 🛠️ Skills Disponíveis

<!-- SKILL_TABLE_START -->
| Skill | Descrição e Exemplo de Uso |
| --- | --- |
| `lp-cinematografica` | **Criação de sites premium.** "Cria uma landing page cinematográfica para a marca [X], analisando o site [URL] como referência." |
| `map2web` | **Google Maps p/ Web.** "Gere um site para este negócio local no Google Maps: [Link do Maps]." |
| `diagnostico-digital` | **Vendas Consultivas.** "Crie um diagnóstico digital gratuito para o lead [Nome] focado em [Segmento]." |
| `landing-page-analyzer` | **Análise de CRO.** "Analise a landing page do concorrente [URL] e extraia os pontos positivos." |
| `doc-synchronizer` | **Manutenção do Sistema.** "Sincronize as tabelas de agentes e skills do sistema." |
| `playbook-formatter` | **Base de Conhecimento.** "Formate este rascunho de conhecimento como um novo playbook." |
| `skill-formatter` | **Padronização Técnica.** "Garante que novas skills sigam o padrão técnico do DEK-OS." |
| `lead-scoring` | **Qualificação de Dados.** "Qualifique a lista de leads brutos gerada hoje." |
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
- `/criar-squad` — Inicia o fluxo de criação de uma nova squad padronizada.
- `/prospection-nicho` — Inicia ciclo completo de prospecção.
- `/onboarding-cliente` — Inicia estruturação de novo projeto de cliente.
