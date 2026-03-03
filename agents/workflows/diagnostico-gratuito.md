---
description: Gera um diagnostico digital gratuito personalizado para um lead morno ou quente que pediu mais informacoes. O diagnostico e uma isca de conversao para transformar interesse em reuniao agendada.
---

# Workflow: Diagnostico Gratuito

## Quando Usar

- Lead morno que nao respondeu apos 3 contatos
- Lead quente que disse "me manda mais informacoes"
- Prospect de LinkedIn que demonstrou interesse mas nao converteu
- Como oferta no ultimo follow-up da cadencia (Dia 7)

## Entradas

- `EMPRESA`: nome do negocio
- `SEGMENTO`: tipo de negocio
- `CIDADE`: localizacao
- `SITE_URL`: URL do site (ou "sem site")
- `INSTAGRAM`: arroba ou "nao encontrado"
- `DADOS_GOOGLE`: avaliacao, numero de reviews, status do perfil

---

## Passo 1 — Coleta de Dados para o Diagnostico

Verificar e registrar:
1. Google PageSpeed Insights: rodar o site e capturar score mobile e desktop
2. Verificar se aparece na busca "[SEGMENTO] em [CIDADE]" (posicao 1-10 ou nao aparece)
3. Meta Ad Library: buscar nome da empresa (anunciando ou nao)
4. Perfil Google: data do ultimo post, numero de fotos, categorias
5. Instagram: ultima postagem, media de curtidas, frequencia de posts

---

## Passo 2 — Gerar Diagnostico

Invocar **Agente Diagnosticador** (`squads/prospeccao/diagnosticador.md`) com todos os dados coletados.

Estrutura do diagnostico:
1. Resumo executivo (2 paragrafos)
2. Notas por canal (Site, Google, Social, Ads, Atendimento)
3. Top 3 oportunidades com timeline de implementacao
4. Impacto estimado (leads/mes, comparativo com concorrentes)
5. CTA para reuniao de 20 minutos

---

## Passo 3 — Formatar e Enviar

Salvar diagnostico em: `PROJETOS/_prospeccao/diagnosticos/[EMPRESA]-[DATA].md`

Mensagem de envio (adaptar por canal):

**WhatsApp:**
"[NOME], preparei o diagnostico que mencionei para o [NEGOCIO].
Encontrei [X] pontos que estao limitando sua captacao de clientes agora.
Envio o PDF? Leva 3 minutos pra ler e tem acoes praticas."

**Email:**
Assunto: "Diagnostico Digital — [NEGOCIO] | Exclusivo DekMidia"
Corpo: breve intro + PDF em anexo + link Calendly para reuniao de 20 min

---

## Criterios de Sucesso

- Diagnostico com dados reais (nao apenas suposicoes)
- Pelo menos 1 numero concreto (PageSpeed, posicao no Google, media de posts)
- CTA claro para reuniao de 20 minutos
- Taxa de conversao alvo: > 30% dos diagnosticos enviados geram reuniao
