---
description: >
  Gera um diagnostico digital gratuito e personalizado para converter leads
  mornos ou quentes que pediram mais informacoes. Coleta dados reais,
  preenche o template, aguarda aprovacao humana e envia. Meta: > 30% de
  conversao em reunioes agendadas.
inputs:
  id_lead: "string"
  canal_envio: "whatsapp|email (padrao: whatsapp)"
human_checkpoints:
  - "[CHECKPOINT] Aprovacao do diagnostico antes do envio (Passo 4)"
---

# Workflow: Diagnostico Gratuito

## Quando Usar

- Lead MORNO sem resposta apos 3 contatos
- Lead QUENTE que pediu "me manda mais informacoes"
- Prospect com interesse mas sem conversao
- Follow-up Dia 7 da cadencia

---

## Passo 1 - Carregar Dados do Lead

Ler JSON do lead + historico de contatos.
Campos necessarios: nome_empresa, segmento, cidade, site_url,
instagram_handle, google_avaliacao, google_reviews_count,
tem_ads_google, tem_ads_meta.

---

## Passo 2 - Coleta de Dados Reais

Nenhum numero pode ser estimado ou inventado.

1. Google PageSpeed Insights - score mobile e desktop (pagespeed.web.dev)
2. Posicao no Google - buscar "[segmento] em [cidade]" em aba anonima
3. Meta Ad Library - buscar pelo nome da empresa
4. Google Meu Negocio - data do ultimo post, numero de fotos
5. Instagram - data da ultima postagem, frequencia estimada

---

## Passo 3 - Gerar Diagnostico

Agente: Diagnosticador | Task: task-gerar-diagnostico
Template: templates/template-diagnostico-digital.md

O diagnostico deve:
- Calcular notas por canal (F ate A+)
- Redigir Top 3 Oportunidades com timelines (7d / 30d / 90d)
- Estimar impacto em leads/mes
- Incluir CTA para 20 minutos sem compromisso
- Passar pelo checklist-diagnostico-entrega

---

## Passo 4 - Revisao e Aprovacao

## [CHECKPOINT HUMANO] - Aprovacao do Diagnostico

Verificar antes de aprovar:
- [ ] Todos os numeros sao reais e verificados
- [ ] Tom consultivo, nao comercial
- [ ] Nenhum preco ou servico DekMidia no corpo
- [ ] CTA presente e natural

---

## Passo 5 - Envio e Registro

Mensagem WhatsApp:
"[NOME], preparei o diagnostico para [NEGOCIO].
Encontrei [X] pontos limitando a captacao agora.
Posso enviar o PDF? 3 minutos pra ler.
[Nome | DekMidia]"

Mensagem Email:
Assunto: "Diagnostico Digital - [NEGOCIO] | DekMidia"

Salvar: PROJETOS/_prospeccao/diagnosticos/[EMPRESA]-[DATA].md
Atualizar status do lead para "diagnostico-enviado".

---

## Criterios de Sucesso

- [ ] Diagnostico com dados 100% reais
- [ ] Pelo menos 1 numero concreto verificavel
- [ ] Aprovacao humana registrada
- [ ] Arquivo salvo no diretorio correto
- [ ] Follow-up programado para 3 dias apos envio

KPI alvo: > 30% dos diagnosticos enviados geram reuniao agendada.
