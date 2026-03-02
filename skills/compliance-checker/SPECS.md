# Compliance Checker — Skill

## Descrição

Skill compartilhada de verificação de conteúdo contra políticas de plataformas de anúncios e legislação brasileira. Garante que todo conteúdo publicado esteja em conformidade.

## Categoria

🛡️ Compliance

## Usada por

- **Auditor** — Revisão completa antes de publicar
- **Media Buyer** — Validação rápida antes de criar anúncios
- **Copywriter** — Self-check de copies geradas

## Regras Verificadas

### Plataformas

- **Google Ads:** Misrepresentation, Healthcare, Financial Services, Gambling
- **Meta Ads:** Personal Attributes, Crypto, Before/After, Sensationalism
- **TikTok Ads:** Misleading Claims, Restricted Products

### Legislação BR

- **LGPD:** Cookies, política de privacidade, coleta de dados
- **CONAR:** Publicidade enganosa, comparativa, direcionada a menores
- **CDC:** Clareza em garantias, reembolsos, condições

## Output

```typescript
interface ComplianceCheckResult {
    approved: boolean;
    risks: ComplianceRisk[];
    checkedAt: Date;
    platforms: string[];
}
```
