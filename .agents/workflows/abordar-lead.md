---
description: >
  Executa o primeiro contato com um lead especifico. Personaliza a mensagem
  com base nos dados reais da ficha, aguarda aprovacao humana e programa
  a cadencia de follow-up automaticamente.
inputs:
  id_lead: "string"
  canal: "whatsapp|linkedin|email (opcional)"
human_checkpoints:
  - "[CHECKPOINT] Aprovacao da mensagem antes do envio (Passo 3)"
---

# Workflow: Abordar Lead

## Passo 1 - Carregar e Validar Ficha

Localizar JSON em PROJETOS/_prospection/leads-qualificados/
Confirmar: classificacao=quente, contato valido, dor_principal preenchida.

Se lead MORNO sem diagnostico: executar workflow diagnostico-gratuito.md primeiro.

---

## Passo 2 - Definir Canal

| Disponivel             | Canal Recomendado | Motivo                         |
|------------------------|-------------------|--------------------------------|
| WhatsApp comercial     | WhatsApp          | Maior taxa de abertura         |
| LinkedIn do decisor    | LinkedIn          | Abordagem consultiva direta    |
| So e-mail              | Email             | Menor prioridade               |

---

## Passo 3 - Criar Mensagem Personalizada

Agente: Abordagem | Task: task-criar-mensagem
Gerar 3 variacoes com recomendacao e horario ideal.

## [CHECKPOINT HUMANO] - Aprovacao da Mensagem

Aguardar confirmacao explicita antes de registrar como enviada.

---

## Passo 4 - Registrar Contato

Criar PROJETOS/_prospection/contatos-realizados/[ID_LEAD].json:
{
  "id_lead", "data_contato", "canal", "variacao_mensagem",
  "mensagem_enviada", "status": "enviado",
  "data_resposta": null, "proximo_followup": "[+2 dias]",
  "aprovado_por": "humano"
}

Atualizar status do lead para "em-contato".

---

## Passo 5 - Programar Cadencia

Follow-up Dia 3: mensagem de valor
Follow-up Dia 5: prova social
Follow-up Dia 7: diagnostico gratuito
Reativacao Dia 14: canal diferente

Se n8n disponivel: disparar webhook com as datas.

---

## Criterios de Sucesso

- [ ] Aprovacao humana registrada
- [ ] Zero frases proibidas na mensagem enviada
- [ ] Status do lead atualizado para "em-contato"
- [ ] Cadencia programada
