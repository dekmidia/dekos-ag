---
task_id: task-priorizar-dia
agent: donna
trigger: manual
input_format: text_list
output_format: markdown
output_path: PROJETOS/_ops/agenda/
---

# Task: Priorizar Dia

## Input Esperado

Lista de tarefas em qualquer formato (texto livre, bullet points, lista numerada).

**Exemplo de input:**

```
- Reunião com cliente OdontoPro
- Criar proposta para novo cliente
- Responder emails da manhã
- Revisar landing page do LeveCestaria
- Planejar campanha de tráfego do mês
- Fechar relatório mensal
```

## Passos de Execução

1. **Receber a lista** — Leia todas as tarefas sem julgamento de valor.
2. **Consultar `data/tempos-medios.json`** — Mapeie cada tarefa a uma categoria do JSON e atribua o tempo estimado.
3. **Calcular score de prioridade** — Para cada tarefa, avalie:
   - 💰 Impacto Financeiro (0-10)
   - 🏆 Prestígio / Relacionamento (0-10)
   - ⏰ Urgência Real (0-10)
   - **Score Final** = (Financeiro × 0.4) + (Prestígio × 0.3) + (Urgência × 0.3)
4. **Ordenar por score** — Maior score = primeira tarefa do dia.
5. **Aplicar corte de 8h** — Some os tempos em ordem. Quando ultrapassar 8h, mova para "Amanhã".
6. **Gerar output** — Formatado exatamente como definido no System Prompt da Donna.

## Critérios de Aceite

- [ ] Todas as tarefas do input estão no output (no plano do dia OU em Amanhã)
- [ ] Total de horas do plano do dia ≤ 8h
- [ ] Cada tarefa tem justificativa de prioridade
- [ ] Frase de Donna incluída no topo
- [ ] Formato de tabela Markdown correto
