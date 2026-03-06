---
name: skill-creator
description: Habilidade meta-linguística que orienta o processo correto de criar, auditar e testar A/B novas Skills para o ecossistema.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Engineering]
---

# Criador e Avaliador de Skills

Ferramenta avançada para usar estatística e iteração na elaboração de instruções de sistema (Skills).

## Passos para Criar uma Skill Ideal

1. **Captura de Intenção (Entrevista e Pesquisa)**: Descubra com o usuário as restrições estritas do que a skill deve fazer e as "regras de ouro" (NUNCA faça X).
2. **Desenvolvendo a Base (`SKILL.md`)**:
   - Forneça *Exemplos Positivos* (o que fazer) e *Exemplos Negativos* (o que não fazer).
   - Seja declarativo, imperativo e estruturado.
   - Forneça as descrições em marcadores simples de markdown.
3. **Casos de Teste (Evals)**: Descreva em script ou mentalmente testes contra comportamentos anômalos. Uma boa skill impede que o Assistant saia dos trilhos.

## Processo de Otimização

1. Rode uma query/prompt no Agente sem a skill.
2. Rode a mesma query com a skill ativada.
3. Compare e tire inferências das alucinações. Ajuste os guidances na `.md` baseado nelas.

Mantenha as descrições sob 200 palavras no cabeçalho do `AGENTS.md` e metadados.
