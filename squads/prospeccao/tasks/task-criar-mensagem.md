---
name: Criar Mensagem de Abordagem
squad: Prospeccao
agent: abordagem
version: "1.0.0"
inputs:
  id_lead: "string"
  canal: "whatsapp|linkedin|email"
outputs:
  - 3 variacoes de mensagem para aprovacao humana
  - registro de contato apos aprovacao e envio
checklist: checklist-mensagem-abordagem
human_approval_required: true
acceptance_criteria:
  - Zero frases de data/frases-proibidas.json
  - Mensagem menciona dado especifico e real
  - checklist-mensagem-abordagem 100% concluido
  - Aprovacao humana explicita antes de marcar como enviada
---

# Task: Criar Mensagem de Abordagem

## Passos de Execucao

1. Carregar ficha do lead
2. Ler `data/frases-proibidas.json`
3. Identificar dado mais especifico do perfil do lead
4. Gerar 3 variacoes (A / B / C)
5. Rodar `checklist-mensagem-abordagem` em cada variacao
6. Apresentar ao usuario com recomendacao e horario ideal
7. AGUARDAR aprovacao explicita
8. Apos aprovacao: salvar em `contatos-realizados/[ID].json`
9. Criar entradas de follow-up (Dias 3, 5, 7, 14)
