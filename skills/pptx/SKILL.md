---
name: pptx
description: Criação, edição e design avançado de apresentações PowerPoint (PPTX) garantindo legibilidade e beleza.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Success]
---

# Manipulação de PPTX

Habilidade focada na criação de apresentações deslumbrantes para relatórios, fechamento corporativo ou reports de marketing.

## Ideias e Design

1. **Antes de Começar:** Procure se há cores/logos do arquivo master na pasta `PROJETOS/[cliente]/referencias/`.
2. **Paleta de Core:** Use sempre a paleta oficial. Crie contraste alto entre texto e fundo.
3. **Tipografia:** Evite fontes padrão como Calibri. Busque as fontes corporativas indicadas.
4. **Respiro (Spacing):** Menos é mais; um slide entulhado é um slide ruim. Deixe espaços em branco e use listas visuais pontuais.
5. **Erros Comuns a Evitar:** Não crie slides com mais de 6 bullets.

## QA Visual (Obrigatório)

Sempre verifique visualmente na sua mente (ou com código Python de inspeção) antes de entregar:

- O título está muito longo cortando o slide?
- As imagens estão achatadas fora da proporção natural?
- Há consistência no tamanho da fonte entre slides?

A entrega final deve ir direto para `PROJETOS/[cliente]/reports/` ou pasta apropriada conforme regra do `AGENTS.md`.
