---
description: Fluxo de Prospecção com Aprovação Humana — o agente pesquisa e qualifica o lead autonomamente, mas pausa e aguarda aprovação explícita do usuário antes de disparar qualquer comunicação ou ação irreversível.
---

# Workflow: Human-in-the-Loop Prospect (Aprovação Humana na Prospecção)

**Quando usar:** Em todo fluxo de prospecção ou automação que resulte em uma ação de saída irreversível — como envio de email, mensagem no WhatsApp, ou registro em CRM.

**Objetivo:** Manter a autonomia da pesquisa e qualificação de leads, mas preservar o controle humano antes de "apertar o gatilho".

---

## Passos

### 🔍 Fase Autônoma (Sem intervenção humana necessária)

1. O agente **Falcon ou Scout** recebe o nicho e cidade alvos.
2. Executa a varredura e enriquecimento de dados dos leads (nome, telefone, site, Instagram, Google Business).
3. Aplica o scoring de qualidade (critérios definidos no `lead-scoring.ts`).
4. Classifica os leads em 3 níveis: `🔥 Quente | 🟡 Morno | 🔵 Frio`.
5. Gera uma ficha resumida para cada lead qualificado.

### ⏸️ Ponto de Parada (Human Gate — Obrigatório)

**Neste ponto, o agente PARA completamente e apresenta ao usuário:**

```
✋ APROVAÇÃO NECESSÁRIA

Encontrei [N] leads qualificados para [nicho] em [cidade]. Aqui está o resumo:

1. [Nome da Empresa] — 🔥 Quente — Score: 89/100
   Motivo: Sem site profissional, 4.2 estrelas no GMB, 3.200 seguidores no IG.

2. [Nome da Empresa] — 🟡 Morno — Score: 71/100
   Motivo: Site desatualizado, sem Google Meu Negócio reivindicado.

Próxima ação: Enviar mensagem de primeiro contato personalizada.

✅ Confirme para disparar as mensagens  
✏️ Ou me diga se deseja ajustar algum lead da lista
```

### 🚀 Fase de Execução (Após aprovação explícita)

1. Somente após o usuário confirmar com "pode enviar" ou similar, o agente **Relay ou Falcon** executa o disparo.
2. Registra a ação no log do projeto (para rastreamento da cadência de follow-up).
3. Programa automaticamente o lembrete de follow-up conforme o workflow `/cadencia-followup`.

---

## ⚠️ Regra de Ouro

**Nenhuma mensagem, email ou contato é enviado sem aprovação explícita do usuário.** Se o usuário não responder dentro de 24h (em contexto assíncrono), a ação fica congelada em estado pendente — nunca dispara sozinha.
