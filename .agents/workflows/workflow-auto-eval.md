---
description: Loop de Auto-Avaliação — o agente criador entrega, o agente revisor critica, e o ciclo se repete até a qualidade ser aprovada (máx. 2 iterações).
---

# Workflow: Self Evaluation Loop (Loop de Auto-Avaliação)

**Quando usar:** Em entregas de alta criticidade onde o padrão de qualidade precisa ser garantido antes de chegar ao usuário. Ideal para: Landing Pages, textos de email frio, relatórios executivos, scripts de ADS.

**Nunca usar** para tarefas rápidas e pontuais (criação de legenda única, uma resposta curta, etc).

---

## Papéis do Fluxo

| Papel | Responsabilidade | Agente DEK-OS |
|---|---|---|
| **Criador** | Executa a tarefa e entrega um draft | Dex, Ink, Hype (quem receber o briefing) |
| **Revisor** | Analisa o draft com base em critérios claros | Guard (QA, Engineering), ou o próprio Criador em reflexão iterativa |

---

## Passos

1. **O Criador gera o Draft V1** dentro dos critérios do briefing do usuário.
2. **O Revisor recebe o Draft V1** e avalia com base em 3 critérios obrigatórios:
   - O output resolve o problema/objetivo central do usuário?
   - A qualidade técnica/criativa está dentro do padrão DEK-OS (veja `AGENTS.md`)?
   - Há erros, inconsistências ou brechas que precisam de correção?
3. **Se aprovado:** O Revisor sinaliza `[APROVADO]` e o entregável vai ao usuário.
4. **Se reprovado:** O Revisor devolve ao Criador indicando **exatamente** o que corrigir (nunca um feedback vago como "melhore o texto").
5. **O Criador gera o Draft V2** incorporando somente o feedback objetivo.
6. **Limite de ciclos:** Máximo de **2 iterações**. Se no Draft V2 ainda existir problema, entregue ao usuário com uma flag explícita: `⚠️ Revisão pendente: [descreva o ponto em aberto]`.

---

## Exemplo Prático

```
Usuário: "Crie um email frio para prospectar clínicas de estética."

→ Ink (Criador): Gera o email completo [Draft V1]
→ Ink (Auto-Revisão) verifica:
  - Resolve o objetivo? ✅ Sim, endereça dores da clínica.
  - Padrão DEK-OS? ❌ Subject line é genérico demais.
  - Erros? Nenhum.
→ Ink reescreve apenas o subject line [Draft V2]
→ Ink verifica novamente:
  - Todos os critérios: ✅
→ Entrega ao usuário [APROVADO]
```
