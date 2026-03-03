---
name: Executar Follow-up
squad: Prospeccao
agent: abordagem
version: "1.0.0"
inputs:
  id_lead: "string"
  numero_followup: "integer 1-4"
outputs:
  - mensagem de follow-up para aprovacao
  - registro de contato atualizado
checklist: checklist-mensagem-abordagem
human_approval_required: true
acceptance_criteria:
  - Mensagem com angulo diferente do contato anterior
  - Aprovacao humana antes de marcar como enviada
  - Registro de contato atualizado
---

# Task: Executar Follow-up

## Cadencia

| Follow-up | Dia | Conteudo                         |
|-----------|-----|----------------------------------|
| 1         | 3   | Dado/estatistica do segmento     |
| 2         | 5   | Case de cliente similar          |
| 3         | 7   | Oferta de diagnostico gratuito   |
| 4         | 14  | Reativacao - canal diferente     |

## Passos

1. Carregar historico de contatos do lead
2. Identificar qual follow-up executar
3. Consultar `playbooks/cadencia-followup.md`
4. Gerar mensagem (nunca repetir angulo anterior)
5. Se follow-up 3: acionar `task-gerar-diagnostico` em paralelo
6. Rodar `checklist-mensagem-abordagem`
7. Apresentar para aprovacao humana
8. Apos aprovacao: atualizar registro do lead

## Criterios de Saida

- Lead respondeu positivamente -> reuniao agendada
- Lead pediu para nao ser contactado -> registrar e respeitar
- Lead ja tem agencia -> arquivar, reativar em 6 meses
- 4 follow-ups sem abertura -> arquivar
