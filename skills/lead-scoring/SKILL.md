---
name: lead-scoring
type: code-skill
squad: prospection
inputs: [LeadData]
outputs: [ScoreResult]
---

# Lead Scoring — Skill (TypeScript)

## Descrição

Calcula o score de um lead com base nos 4 critérios DekMídia (A, B, C, D).
Retorna score (0-100), classificação, nível de maturidade e próxima ação.
Diferente das skills de prompt, esta é uma skill de **código executável (TypeScript)**.

## Arquivos da Skill

- `SKILL.md`: Esta documentação de metadados e specs.
- `index.ts`: Implementação da lógica de cálculo e interfaces TypeScript.

## Estrutura de Scoring

O cálculo é dividido em 4 dimensões (0 a 100 pontos):

- **A) Potencial de Receita** (até 30 pontos)
- **B) Dor Digital** (até 30 pontos)
- **C) Validação do Negócio** (até 20 pontos)
- **D) Acessibilidade** (até 20 pontos)

## Uso

A skill deve ser importada e utilizada via código:

```typescript
import { calcularLeadScore, LeadData } from '../skills/lead-scoring/index';

const dadosDoLead: LeadData = {
  // preencher dados
};

const result = calcularLeadScore(dadosDoLead);
```

As interfaces completas `LeadData` e `ScoreResult` estão documentadas e tipadas dentro do `index.ts`.
