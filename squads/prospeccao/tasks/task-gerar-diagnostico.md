---
name: Gerar Diagnostico Digital
squad: Prospeccao
agent: diagnosticador
version: "1.0.0"
inputs:
  id_lead: "string"
outputs:
  - arquivo Markdown do diagnostico
  - mensagem de envio para aprovacao
checklist: checklist-diagnostico-entrega
template: template-diagnostico-digital
human_approval_required: true
acceptance_criteria:
  - Pelo menos 1 dado real verificado (PageSpeed, posicao Google, etc.)
  - Zero mencao de preco ou servicos DekMidia no corpo
  - CTA presente com link Calendly
  - checklist-diagnostico-entrega 100% concluido
  - Aprovacao humana antes do envio
---

# Task: Gerar Diagnostico Digital

## Passos de Execucao

1. Carregar ficha do lead
2. Coletar dados reais: PageSpeed, posicao Google, Meta Ads, Google Meu Negocio, Instagram
3. Preencher `template-diagnostico-digital.md`
4. Calcular notas por canal (F ate A+)
5. Redigir Top 3 Oportunidades com timelines
6. Estimar impacto em leads/mes
7. Inserir CTA para conversa de 20 minutos
8. Rodar `checklist-diagnostico-entrega`
9. Apresentar para aprovacao humana
10. Apos aprovacao: salvar .md e gerar mensagem de envio
