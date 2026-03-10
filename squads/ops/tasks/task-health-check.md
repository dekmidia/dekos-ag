---
name: task-health-check
agent: sentinel
squad: Ops
departamento: Sistema
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/_ops/health-checks/
---

# Task: Health Check do Sistema DEK-OS

## Quando Executar

- Toda segunda-feira antes da revisão semanal de performance
- Após qualquer push/merge no repositório Git
- Quando um agente retornar erro de "arquivo não encontrado"
- Sob demanda com o comando: `health check`

## Intake Obrigatório

Sem intake — esta task executa automaticamente quando acionada.
Apresentar menu de escopo ao usuário:

> "Escopo do health check:
> 1. Completo (recomendado após merge)
> 2. Apenas registry.json
> 3. Squad específico — qual?"

## Etapas de Execução

1. **Registry** — Ler `registry.json` e verificar cada caminho no disco
2. **Squads** — Para cada squad: confirmar squad.yaml, agentes, tasks e references
3. **Agentes** — Verificar frontmatter obrigatório e seções de Handoff e NAO usar para
4. **Skills** — Confirmar que SKILL.md / SPECS.md existem nos caminhos declarados
5. **Workflows** — Confirmar que todos os workflows estão no disco e no registry
6. **Relatório** — Gerar e salvar relatório de saúde

## Outputs

- `PROJETOS/_ops/health-checks/health-[DATA].md` — Relatório completo

## Acceptance Criteria

- [ ] Todos os caminhos do registry verificados
- [ ] Problemas classificados por severidade (crítico / alerta)
- [ ] Cada problema acompanhado de correção sugerida
- [ ] Resumo executivo no topo (totais de OK / quebrados / suspeitos)
- [ ] Relatório salvo com data no nome
