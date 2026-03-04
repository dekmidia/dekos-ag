---
name: microsoft-designer-creative
type: prompt-skill
squad: creative
inputs: [produto, objetivo, publico, plataforma, tom, estilo, formato, integracao]
outputs: [design-prompt, image-prompt, creative-brief, copy-set, edit-checklist, export-specs, qa-checklist]
playbooks_recomendados: [playbook-microsoft-designer]
---

# Microsoft Designer Creative — Skill

## Descricao

Skill compartilhada de producao de criativos e imagens AI via Microsoft Designer.
Gera prompts ricos de design e de imagem (MAI-Image-1 / DALL-E 3), direcoes criativas
completas e roteiros de execucao prontos para producao — a partir de qualquer briefing,
mesmo os mais vagos. Complementa a skill Canva com foco em geracao de imagem AI
e integracao com o ecossistema Microsoft 365.

## Categoria

🎨 Creative

## Usada por

- **Art Director** — Geracao de imagens AI e direcao criativa para campanhas
- **Copywriter** — Copy integrado ao layout gerado pelo Designer
- **Social Media** — Posts e imagens para calendario organico com geracao AI
- **Media Buyer** — Criativos AI para Meta Ads e Google Display
- **Scout** — Geracao rapida de visuais para materiais de prospeccao
- **Analyst** — Imagens para relatorios e apresentacoes via integracao M365

## Verificacoes e Entregas

- Decode do briefing (objetivo, publico, plataforma, tom, produto)
- Prompt de design completo para o Designer Creator AI
- Prompt de imagem AI otimizado para MAI-Image-1 / DALL-E 3
- Modificadores de estilo visual por estetica desejada
- Especificacoes tecnicas do formato (dimensao, zona segura, export)
- Roteiro de edicao AI (remove background, generative erase, restyle, blur)
- Copy completo (headline, subheadline, CTA) com alternativas
- Checklist de QA visual, tecnico e estrategico
- Instrucoes de export por destino (web, ads, impressao, M365)

## Inputs Esperados

| Campo      | Obrigatorio | Descricao                                               |
|------------|-------------|---------------------------------------------------------|
| produto    | Sim         | O que esta sendo comunicado (servico, oferta, marca)    |
| objetivo   | Nao         | Conversao, engajamento, autoridade, alcance             |
| publico    | Nao         | Perfil do publico-alvo                                  |
| plataforma | Nao         | Feed, Stories, Ads, Banner, Apresentacao, Email, etc.   |
| tom        | Nao         | Profissional, vibrante, minimalista, urgente            |
| estilo     | Nao         | Fotorrealismo, minimalismo, bold, luxo, organico, tech  |
| formato    | Nao         | Dimensao especifica desejada                            |
| integracao | Nao         | Se precisa exportar para Word, PowerPoint, Teams, etc.  |

## Outputs Gerados

| Output               | Formato      | Descricao                                               |
|----------------------|--------------|---------------------------------------------------------|
| design-prompt        | Texto        | Prompt completo para o Designer Creator AI              |
| image-prompt         | Texto        | Prompt otimizado para geracao de imagem AI              |
| creative-brief       | Markdown     | Direcao criativa completa pronta para execucao          |
| copy-set             | Texto        | Headline + subheadline + CTA + 3 alternativas           |
| edit-checklist       | Checklist    | Ferramentas AI de edicao a aplicar na peca              |
| export-specs         | Tabela       | Formato, dimensao e configuracoes de export             |
| qa-checklist         | Checklist    | Visual, tecnico e estrategico                           |

## Playbook de Referencia

`playbooks/playbook-microsoft-designer.md`

## Diferenciais em relacao a Skill Canva

- Geracao de imagem AI mais avancada (MAI-Image-1 supera DALL-E 3 em fotorrealismo)
- Remove background e generative erase gratuitos (sem necessidade de Pro)
- Integracao nativa com Word, PowerPoint, Teams, Outlook e OneNote
- Ideal para producao rapida de imagens AI unicas sem depender de banco de fotos
- Escrever prompts em ingles gera resultados significativamente melhores

## Restricoes

- Nao executa diretamente no Designer (sem acesso a API publica)
- Entrega instrucoes e prompts prontos para execucao humana ou via automacao externa
- Brand Kit foi descontinuado em outubro de 2025 — consistencia de marca deve ser controlada manualmente
- Contas corporativas Microsoft (trabalho/escola) podem ter acesso restrito ao Designer
- Carrosseis devem ser criados slide a slide — nao ha funcao nativa de carrossel
- Prompts em portugues podem gerar resultados de menor qualidade — preferir ingles
