---
description: Executa o primeiro contato com um lead especifico. Personaliza a mensagem com base na ficha do lead, define o canal ideal, gera as variacoes de mensagem e agenda o follow-up automatico.
---

# Workflow: Abordar Lead

## Entradas Necessarias

- `ID_LEAD`: ID do lead na ficha JSON (ex: 20250115-CLINICA-001)
- `CANAL_PREFERENCIAL`: whatsapp | linkedin | email (ou deixar o agente decidir)

---

## Passo 1 — Carregar Ficha do Lead

Ler o arquivo JSON do lead em `PROJETOS/_prospeccao/leads-qualificados/quentes/`.
Confirmar que o lead tem classificacao = "quente" e pelo menos 1 contato valido.

Se lead for MORNO, verificar se ja tem diagnostico gerado. Se nao, executar Passo 1.5.

---

## Passo 1.5 (Opcional — Leads Mornos) — Diagnostico como Isca

Invocar **Agente Diagnosticador** (`squads/prospeccao/diagnosticador.md`).
Gerar diagnostico digital personalizado antes do contato.
Usar o diagnostico como gancho na mensagem de abordagem.

---

## Passo 2 — Definir Canal e Personalizar Mensagem

Invocar **Agente Abordagem** (`squads/prospeccao/abordagem.md`) com:

```
Lead: [dados completos da ficha]
Canal selecionado: [CANAL]
Dor principal identificada: [do campo dor_principal da ficha]
Servico mais relevante: [do campo servico_recomendado]
Dado especifico para mencionar: [avaliacao, falta de site, velocidade, etc.]
```

Gerar 3 variacoes de mensagem e apresentar ao usuario para aprovacao.

---

## Passo 3 — Registrar Contato

Apos aprovacao e envio, criar registro em `PROJETOS/_prospeccao/contatos-realizados/`:

```json
{
  "id_lead": "[ID]",
  "data_contato": "[ISO8601]",
  "canal": "[CANAL]",
  "variacao_mensagem": "[A|B|C]",
  "status": "enviado",
  "data_resposta": null,
  "proximo_followup": "[DATA + 2 dias]",
  "observacoes": ""
}
```

---

## Passo 4 — Programar Cadencia de Follow-Up

Com base no playbook `playbooks/cadencia-followup.md`, programar:

- Follow-up Dia 3: mensagem de valor (dado do segmento)
- Follow-up Dia 5: prova social (case similar)
- Follow-up Dia 7: oferta de diagnostico gratuito
- Reativacao Dia 14: canal diferente

Se integrado com n8n: disparar webhook para criar os follow-ups no calendario.

---

## Criterios de Sucesso

- Mensagem aprovada pelo usuario antes do envio
- Registro de contato salvo com todos os campos
- Cadencia de follow-up programada
- Lead movido para status "em_contato" no registro
