---
name: task-auditar-campanha
agent: shield
squad: Performance
departamento: Tráfego
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/[cliente]/performance/auditoria/
---

# Task: Auditar Campanha

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "O que vamos auditar?
>
> 1. Campanha Google Ads existente
> 2. Campanha Meta Ads existente
> 3. Auditoria completa (Google + Meta)
> 4. Compliance de criativos (verificar políticas de anúncio)
> 5. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Qual o cliente e a conta?
- [ ] Período da auditoria (últimos 30 / 60 / 90 dias)
- [ ] Qual o problema percebido ou objetivo da auditoria? (ex: CPL alto, baixo CTR, anúncios reprovados)
- [ ] Tem acesso às métricas ou o usuário vai colar os dados manualmente?

> ⚠️ Sem dados de performance não é possível realizar auditoria. Solicitar métricas antes de prosseguir.

---

## Etapas de Execução

1. **Coleta de dados** — Solicitar ou receber métricas do período (CTR, CPL, CPC, conversões, impressões).
2. **Análise estrutural** — Avaliar estrutura de campanhas, grupos/conjuntos e segmentações.
3. **Análise de performance** — Identificar anúncios com baixo desempenho, alto custo e oportunidades de melhoria.
4. **Compliance** — Verificar aderência às políticas da plataforma (texto em imagens, claims proibidos, etc.).
5. **Diagnóstico** — Listar problemas encontrados por prioridade (crítico, médio, baixo).
6. **Recomendações** — Para cada problema, apresentar solução concreta e acionável.
7. **Relatório** — Gerar documento de auditoria completo.

## Outputs

- `auditoria-[plataforma]-[cliente]-[data].md` → Relatório de auditoria com diagnóstico e recomendações

## Acceptance Criteria

- [ ] Período de análise documentado
- [ ] Problemas classificados por prioridade (crítico / médio / baixo)
- [ ] Cada problema acompanhado de recomendação acionável
- [ ] Compliance verificado contra políticas atuais da plataforma
- [ ] Resumo executivo no início do relatório (máximo 5 linhas)
- [ ] Arquivo salvo em `PROJETOS/[cliente]/performance/auditoria/`
