---
name: brand-guidelines
description: Aplica regras rígidas de branding corporativo (cores, fontes e design systems) a qualquer entregável. Usado para gerar consistência visual em documentos e páginas.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Creative]
---

# Brand Styling & Guidelines

## Visão Geral

Use esta skill sempre que trabalhar com formatação visual (em apresentações, sites, posts ou PDFs) para forçar o AI a respeitar as cores da marca.

## Funcionalidades

1. Extraia o manual da marca em `PROJETOS/[cliente]/referencias/` (ex: valores HEX, RGB oficiais, fontes principais).
2. Se o formato de saída for web (React/Tailwind), configure o arquivo de configurações de tema (ex: `tailwind.config.js`) com as exatas definições de cor. Nunca chame a cor de "red-500" se a marca tiver um "brand-primary".
3. Se a saída for documento (docx/pptx), use códigos RGB estritos acessando a API nativa de estilo.

## Hierarquia Tipográfica

Busque configurar fontes exatas (ex: Poppins para títulos, Lora para corpo), incluindo fallbacks seguros da web (Arial/Georgia).
Nunca assuma estilos genéricos caso o manual de marca dite o contrário.
