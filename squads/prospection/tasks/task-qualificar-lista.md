---
name: Qualificar Lista de Leads
squad: prospection
agent: qualificador
version: "1.0.0"
inputs:
  arquivo_json: "path para arquivo de leads brutos"
outputs:
  - leads em quentes/, mornos/, frios/, arquivados/
  - relatorio Markdown de qualificacao
acceptance_criteria:
  - Todo lead tem score e breakdown registrado
  - Todo lead desqualificado tem motivo registrado
  - Roteamento executado para todos os leads
  - Nenhum lead sem classificacao final
---

# Task: Qualificar Lista de Leads

## Passos de Execucao

1. Carregar arquivo JSON de `PROJETOS/_prospection/leads-brutos/`
2. Para cada lead:
   a. Calcular score (skill `lead-scoring.ts` ou manual)
   b. Registrar breakdown {A, B, C, D}
   c. Classificar: quente / morno / frio / desqualificado
   d. Definir nivel_maturidade_digital (0-4)
   e. Identificar servico_recomendado via `data/servicos-dekmidia.json`
   f. Estimar ticket_estimado_mensal
   g. Registrar justificativa e proximo_passo
3. Salvar arquivos roteados
4. Gerar relatorio em `PROJETOS/_prospection/relatorios/`

## Handoff

QUENTES: acionar Agente Abordagem imediatamente.
MORNOS: salvar + registrar para follow-up em 72h.
FRIOS: salvar + incluir em lista de nutricao.
