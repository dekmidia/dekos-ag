---
name: brainstorming
description: Framework de raciocínio lógico obrigatório antes de execuções criativas ou estruturais pesadas. Transforma ideias vagas em designs/planos validados.
author: Awesome Skills (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Engineering, Creative, Automations]
---

# Raciocínio de Brainstorming

Nunca inicie um trabalho complexo diretamente gerando arquivos sem passar por este fluxo de pensamento.

## O Processo de Planejamento

1. **Entenda o Contexto:** Antes de pensar na solução, liste as restrições que o usuário deu. Faça perguntas se faltar algo essencial.
2. **Requisitos Não-Funcionais:** Considere aspectos como performance, segurança e escalabilidade antes mesmo de codar.
3. **Explore Abordagens:** Esboce mentalmente ou no papel (scratchpad) ao menos duas formas de resolver o problema. Escolha a mais enxuta e com menor risco de falha (poupe tokens e complexidade).
4. **Alinhamento Final:** Gere um resumo curto da decisão para o usuário aprovar (`notify_user`). Só siga para a execução (coding/design) após a aprovação ou se for trivial.

Com isso, o DEK-OS AG reduz "loops infinitos" de tentativa e erro.
