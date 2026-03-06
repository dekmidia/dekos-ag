---
description: >
  Executa o ciclo completo de prospection para um nicho e cidade especificos.
  Mapeia leads, enriquece dados, aplica scoring, classifica e prepara lista
  de abordagem priorizada com mensagens personalizadas e relatorio final.
inputs:
  nicho: "string (ex: clinica estetica)"
  cidade: "string (ex: Sao Jose dos Campos)"
  meta_leads: "integer (default: 20)"
human_checkpoints:
  - "[CHECKPOINT] Aprovacao das mensagens antes do envio (Passo 4)"
---

# Workflow: Prospection de Nicho

## Passo 1 - Pesquisa de Leads Brutos

Agente: Pesquisador | Task: task-mapear-leads
Meta de pesquisa: [META_LEADS * 3] candidatos brutos
Instrução Especial: OBRIGATÓRIO verificar sempre as informações do Google Perfil da Empresa (Google Meu Negócio) do lead, pois geralmente é lá que fica a informação mais precisa e atualizada sobre se possuem ou não um website.

Salvar em: PROJETOS/_prospection/leads-brutos/[CIDADE]-[NICHO]-[DATA].json

---

## Passo 2 - Enriquecimento de Dados

Para os TOP 20 leads, verificar antes de qualificar:

1. Google PageSpeed Insights (capturar score mobile)
2. Meta Ad Library (anunciando ou nao?)
3. Google Ads Transparency
4. LinkedIn (identificar decisor)

Atualizar: site_speed_mobile, tem_ads_google, tem_ads_meta, contato_linkedin_decisor

---

## Passo 3 - Qualificacao e Scoring

Agente: Qualificador | Task: task-qualificar-lista

Salvar listas em:

- leads-qualificados/quentes/[CIDADE]-[NICHO]-[DATA].json
- leads-qualificados/mornos/[CIDADE]-[NICHO]-[DATA].json
- leads-qualificados/frios/[CIDADE]-[NICHO]-[DATA].json

---

## Passo 4 - Preparacao de Mensagens

Agente: Abordagem | Task: task-criar-mensagem (para cada lead QUENTE)
Gerar 3 variacoes por lead com horario sugerido.

## [CHECKPOINT HUMANO] - Aprovacao das Mensagens

Apresentar ao usuario todas as mensagens geradas.
NAO prosseguir sem aprovacao explicita de cada mensagem.

---

## Passo 5 - Relatorio Final

Template: templates/template-relatorio-prospection.md
Salvar em: PROJETOS/_prospection/relatorios/[CIDADE]-[NICHO]-[DATA].md

---

## Criterios de Sucesso

- [ ] Minimo [META_LEADS] leads quentes (score > 80)
- [ ] Todas as fichas com pelo menos 1 contato valido
- [ ] Mensagens aprovadas para todos os leads quentes
- [ ] Cadencia de follow-up programada
- [ ] Relatorio salvo antes do encerramento
