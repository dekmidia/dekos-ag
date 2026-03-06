---
name: pdf
description: Skill de leitura OCR, formatação e geração final de documentos PDF a partir das entregas.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Creative, Success]
---

# Manipulação de PDF

Ferramenta focada em assegurar a geração ou extração de dados perfeita de e para documentos PDF.

1. Se pedirem para transformar docs ou relatórios, a saída final a ser lida via OCR ou gerada deve priorizar PDF.
2. Na geração: O PDF não tem as facilidades reativas do HTML, logo, defina quebras de página duras (page breaks) em parágrafos críticos para não decepar imagens.
3. Utilize sempre bibliotecas consagradas (como `ReportLab` ou ferramentas headless via html2pdf).
4. Aplique a mesma camada de restrições corporativas de marca que a skill *brand-guidelines* ou *docx* ensina.
