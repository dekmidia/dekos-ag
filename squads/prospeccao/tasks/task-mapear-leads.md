---
name: Mapear Leads
squad: Prospeccao
agent: pesquisador
version: "1.0.0"
inputs:
  nicho: "string"
  cidade: "string"
  meta_leads: "integer (default 20)"
outputs:
  - JSON com fichas em PROJETOS/_prospeccao/leads-brutos/
  - Resumo Markdown com totais e top 5
checklist: checklist-ficha-lead
template: template-ficha-lead
acceptance_criteria:
  - Minimo [meta_leads] fichas com contato valido
  - Nenhuma ficha com nome_empresa ou cidade vazia
  - Todos campos de presenca digital preenchidos (null aceito se verificado)
  - checklist-ficha-lead 100% concluido
  - Arquivo salvo no diretorio correto com nomenclatura padrao
---

# Task: Mapear Leads

## Objetivo
Encontrar e documentar PMEs qualificaveis no nicho e cidade indicados.

## Passos de Execucao

1. Ler `data/cidades-regioes.json` - confirmar cidade na area de atuacao
2. Ler `data/segmentos.json` - identificar Tier do nicho
3. Pesquisar "[nicho] em [cidade]" no Google Maps
4. Para cada resultado:
   a. Verificar se negocio esta ativo
   b. Preencher todos os campos do `template-ficha-lead.json`
   c. Verificar site no PageSpeed Insights (se tiver)
   d. Verificar Meta Ad Library
   e. Tentar identificar decisor no LinkedIn
5. Rodar `checklist-ficha-lead` em cada ficha
6. Salvar: `[REGIAO]-[NICHO]-[YYYYMMDD].json`
7. Gerar resumo Markdown com totais e top 5

## Handoff

Notificar **Agente Qualificador** com caminho do JSON, total e nicho/cidade.
