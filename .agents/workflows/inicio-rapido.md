---
description: Inicia uma entrega pontual sem onboarding completo. Cria apenas a pasta contextual do que está sendo desenvolvido.
---

# Workflow de Início Rápido (Sem Onboarding)

Use este workflow quando precisar executar uma entrega específica para um projeto **sem precisar do processo de onboarding completo**.

## Quando usar

- Criar uma landing page isolada para um cliente
- Rodar campanhas de ads sem estrutura de projeto completa
- Produzir um post ou copy pontual
- Qualquer entrega única que não exige toda a estrutura do projeto

---

## Passos da Execução

1. **Identifique o nome do projeto.** Se o usuário não informou, pergunte:
   > *"Qual é o nome ou identificador do projeto? (será usado como nome da pasta, ex: `clinica-odontopro`, `leve-cestaria`)"*

2. **Identifique o tipo de entrega** a partir da solicitação do usuário. Consulte o **Mapa de Entrega → Subpasta** definido em `AGENTS.md` (seção *Regra de Projeto Rápido*) para determinar qual subpasta deve ser criada.

3. **Crie APENAS a subpasta correspondente ao tipo de entrega.** Exemplos:
   - Landing page → `PROJETOS/[projeto]/creative/lp/`
   - Google Ads → `PROJETOS/[projeto]/performance/google-ads/`
   - Post social → `PROJETOS/[projeto]/creative/social-media/`

   > ⚠️ **Nunca crie pastas extras.** Crie somente a pasta onde o arquivo de entrega será salvo agora.

4. **Execute a entrega** normalmente, seguindo as regras do agente acionado (Dex, Ink, Boost, Prism, Hype etc.).

5. **Salve o output** dentro da subpasta criada no passo 3.

6. Informe ao usuário:
   > *"Entrega salva em `PROJETOS/[projeto]/[subpasta]/`. Se este projeto crescer, use `/onboarding-cliente` para criar a estrutura completa."*
