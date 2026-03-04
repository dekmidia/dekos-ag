---
name: canva-creative
type: prompt-skill
squad: creative
inputs: [produto, objetivo, publico, plataforma, tom, estilo, formato]
outputs: [creative-brief, copy-set, canva-execution-guide, qa-checklist, format-specs]
playbooks_recomendados: [docs-canva]
---

# Canva Creative — Skill

## Descrição

Skill compartilhada de produção de criativos e artes no Canva.
Gera direções criativas completas (conceito, paleta, tipografia, copy e roteiro de execução)
a partir de qualquer briefing — mesmo os mais vagos — entregando instruções prontas para
execução no Canva com qualidade de agência.

## Categoria

🎨 Creative

## Usada por

- **Art Director** — Direção criativa completa para campanhas e peças avulsas
- **Copywriter** — Copy integrado ao layout (headline, subheadline, CTA)
- **Social Media** — Posts orgânicos, carrosséis e Stories para calendário de conteúdo
- **Media Buyer** — Criativos otimizados para Meta Ads e Google Display
- **Scout** — Avaliação e crítica de materiais visuais de prospects

## Verificações e Entregas

- Decode do briefing (objetivo, público, plataforma, tom, produto)
- Conceito criativo com nome, lógica e emoção alvo
- Paleta de cores com códigos HEX (primária, secundária, accent, neutro)
- Dupla tipográfica compatível com Canva (heading + body)
- Especificações técnicas do formato (dimensão, zona segura, export)
- Roteiro de execução passo a passo no Canva
- Prompt pronto para Magic Design e Dream Lab
- Copy completo (headline, subheadline, CTA) com alternativas
- Checklist de QA visual, técnico e estratégico
- Variações A/B mínimas para campanhas de tráfego pago

## Inputs Esperados

| Campo     | Obrigatório | Descrição                                              |
|-----------|-------------|--------------------------------------------------------|
| produto   | Sim         | O que está sendo comunicado (serviço, oferta, marca)   |
| objetivo  | Não         | Conversão, engajamento, autoridade, alcance            |
| público   | Não         | Perfil do público-alvo                                 |
| plataforma| Não         | Feed, Stories, Ads, Banner, Email, etc.                |
| tom       | Não         | Profissional, vibrante, minimalista, urgente           |
| estilo    | Não         | Referência de estilo visual (ver tabela no playbook)   |
| formato   | Não         | Dimensão específica desejada                           |

## Outputs Gerados

| Output                  | Formato       | Descrição                                              |
|-------------------------|---------------|--------------------------------------------------------|
| creative-brief          | Markdown      | Direção criativa completa pronta para execução         |
| copy-set                | Texto         | Headline + subheadline + CTA + 3 alternativas          |
| canva-execution-guide   | Passo a passo | Roteiro de execução no Canva com prompts prontos       |
| qa-checklist            | Checklist     | Visual, técnico e estratégico                          |
| format-specs            | Tabela        | Dimensões, zona segura e configurações de export       |

## Playbook de Referência

`playbooks/docs-canva.md`

## Restrições

- Não executa diretamente no Canva (não tem acesso a API do Canva)
- Entrega instruções e roteiro para execução humana ou via automação externa
- Para campanha com mais de 5 formatos diferentes, dividir em múltiplas chamadas da skill
