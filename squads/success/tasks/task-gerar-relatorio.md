---
name: task-gerar-relatorio
agent: relay
squad: Success
departamento: Relatórios & Dados
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/[cliente]/reports/
---

# Task: Gerar Relatório ou Análise de Dados

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "Qual relatório vamos gerar?
>
> 1. Relatório mensal — Google Ads
> 2. Relatório mensal — Meta Ads
> 3. Relatório consolidado (Google + Meta)
> 4. Relatório de SEO
> 5. Dashboard ou análise de dados customizada
> 6. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Qual o cliente?
- [ ] Período de referência (mês e ano)
- [ ] Tem acesso às métricas ou o usuário vai colar os dados manualmente?
- [ ] Formato de entrega: só visualização no sistema, ou exportar para o cliente? *(sim → gerar `.pdf` ou `.md` formatado)*

> ⚠️ Sem dados do período não é possível gerar relatório. Solicitar métricas antes de prosseguir.

---

## Etapas de Execução

1. **Coleta de dados** — Solicitar ou receber as métricas do período informado.
2. **Análise** — Identificar tendências, variações relevantes e pontos de atenção.
3. **Comparativo** — Comparar com período anterior quando os dados estiverem disponíveis.
4. **Insights** — Destacar os 3 principais aprendizados do período.
5. **Recomendações** — Sugerir ações para o próximo período com base nos dados.
6. **Formatação** — Estruturar o relatório no formato adequado à entrega.

## Outputs

- `relatorio-[tipo]-[cliente]-[mes-ano].md` → Relatório completo

## Acceptance Criteria

- [ ] Período de referência claramente indicado
- [ ] Métricas principais presentes (CTR, CPL, CPC, conversões ou equivalentes por plataforma)
- [ ] Comparativo com período anterior (quando disponível)
- [ ] Mínimo de 3 insights documentados
- [ ] Mínimo de 3 recomendações para o próximo período
- [ ] Resumo executivo no início (máximo 5 linhas)
- [ ] Arquivo salvo em `PROJETOS/[cliente]/reports/`
