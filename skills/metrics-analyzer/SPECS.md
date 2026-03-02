# Metrics Analyzer — Skill

## Descrição

Skill compartilhada de análise de métricas de campanhas de tráfego pago. Lê dados de plataformas de anúncios (via MCP) e calcula KPIs, detecta anomalias e identifica tendências.

## Categoria

📊 Analytics

## Usada por

- **Media Buyer** — Monitoramento contínuo de performance
- **Data Scientist** — Cálculo de ROI real e análise preditiva
- **Reporting** — Geração de relatórios com dados processados

## Capabilities

- Cálculo de KPIs: CPA, ROAS, CTR, CPM, CPC, Frequência
- Detecção de anomalias (desvio padrão, thresholds configuráveis)
- Análise de tendência (subindo, estável, caindo)
- Comparação período a período (dia, semana, mês)
- Benchmark por nicho

## Input

```typescript
interface MetricsInput {
    platform: 'google' | 'meta' | 'tiktok';
    campaignId: string;
    dateRange: { start: Date; end: Date };
    metrics: string[];
}
```

## Output

```typescript
interface MetricsOutput {
    kpis: Record<string, number>;
    anomalies: Array<{ metric: string; value: number; threshold: number; severity: string }>;
    trend: 'rising' | 'stable' | 'falling';
    comparison?: { previous: Record<string, number>; change: Record<string, number> };
}
```
