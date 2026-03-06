---
name: web-artifacts-builder
description: Suite de ferramentas para criar artefatos HTML multi-componentes complexos usando tecnologias frontend modernas (React, Tailwind CSS, shadcn/ui). Use para landing pages, calculadoras e dashboards que precisam de estado ou roteamento.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Engineering]
---

# Web Artifacts Builder

Para construir artefatos frontend poderosos para o usuário, siga estes passos:

1. **Inicialize o projeto frontend:** crie a estrutura básica (usando Vite, React 18, Tailwind CSS, shadcn/ui).
2. **Desenvolva o artefato:** edite o código gerado focando na responsividade e na experiência do usuário.
3. **Faça o bundle (empacotamento):** compile todo o código (JS, CSS, dependências) em um único arquivo HTML usando ferramentas como Parcel e inlining.
4. **Exiba o artefato:** salve o HTML final na pasta correta do projeto (`PROJETOS/[projeto]/creative/lp/`, por exemplo) e retorne o link do arquivo para o usuário.

**Stack Tecnológica:** React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

## Diretrizes de Design & Estilo

MUITO IMPORTANTE: Para evitar designs genéricos ("AI slop"), evite o uso excessivo de layouts centralizados, gradientes roxos padronizados, cantos arredondados uniformes e a fonte Inter básica.
Sempre persiga um design cinematográfico e premium.

## Resumo do Uso Prático

- Use para projetos que requerem gerenciamento de estado complexo.
- Se for uma página estática muito simples, `HTML+CSS` puros ainda são preferíveis. Esta skill brilha em LPs elaboradas e Web Apps.
- Certifique-se de empacotar tudo em um `.html` único no final para facilitar a visualização pelo cliente sem precisar rodar `npm start`.

## Referência

- **Componentes shadcn/ui:** <https://ui.shadcn.com/docs/components>
