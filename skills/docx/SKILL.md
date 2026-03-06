---
name: docx
description: Ferramenta avançada para criar, editar e analisar documentos DOCX corporativos com formatação premium.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Creative, Success]
---

# Manipulação de DOCX

Esta skill ensina como manipular documentos Microsoft Word (.docx) garantindo alta fidelidade e qualidade corporativa.

## Regras de Criação de Documentos

1. **Estilos:** Sempre sobrescreva os estilos padrão (Built-in Headings) para aplicar a identidade visual do cliente. Se o cliente tiver manual (em `referencias/`), siga-o.
2. **Listas:** NUNCA use marcadores unicode (•). Use os estilos de numeração e bullets nativos da especificação XML do Word.
3. **Tabelas e Imagens:** Formate tabelas com cabeçalhos claros e bordas profissionais. Garanta que as imagens estejam ancoradas corretamente e respeitem as margens da página.
4. **Layout Multi-colunas:** Use divisórias de seção para layouts avançados, separando o título principal (1 coluna) do conteúdo (2 colunas).

## Fluxo de Edição de Existentes

Se o usuário pedir para alterar um Proposta ou Contrato em `.docx`:

- Leia o conteúdo original (descompactando o zip, que é o padrão docx).
- Edite o XML mantendo a integridade do schema (Cuidado com Tracked Changes).
- Reempacote o arquivo e salve em `PROJETOS/[cliente]/entregas/`.
