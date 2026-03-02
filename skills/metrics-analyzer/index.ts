// =============================================
// DEK-OS — Skill: Metrics Analyzer
// Análise de métricas de campanhas de tráfego
// =============================================

import { SkillDefinition } from '../../shared/types';

/** Definição da skill */
export const metricsAnalyzerSkill: SkillDefinition = {
    id: 'metrics-analyzer',
    name: 'Metrics Analyzer',
    description: 'Análise de métricas de campanhas: KPIs, anomalias e tendências',
    version: '0.1.0',
    category: 'analytics',
    usedByAgents: ['media-buyer', 'data-scientist', 'reporting'],
};

/** Plataformas suportadas */
export type AdPlatform = 'google' | 'meta' | 'tiktok';

/** Input para análise de métricas */
export interface MetricsInput {
    platform: AdPlatform;
    campaignId: string;
    dateRange: { start: Date; end: Date };
    metrics: string[];
}

/** Anomalia detectada */
export interface MetricAnomaly {
    metric: string;
    currentValue: number;
    expectedValue: number;
    deviationPercent: number;
    severity: 'low' | 'medium' | 'high' | 'critical';
}

/** Resultado da análise */
export interface MetricsOutput {
    kpis: Record<string, number>;
    anomalies: MetricAnomaly[];
    trend: 'rising' | 'stable' | 'falling';
    periodComparison?: {
        previous: Record<string, number>;
        changePercent: Record<string, number>;
    };
    analyzedAt: Date;
}

/**
 * Calcula KPIs básicos a partir de dados brutos de campanha.
 */
export function calculateKPIs(rawData: {
    spend: number;
    impressions: number;
    clicks: number;
    conversions: number;
    revenue: number;
}): Record<string, number> {
    const { spend, impressions, clicks, conversions, revenue } = rawData;

    return {
        cpa: conversions > 0 ? spend / conversions : 0,
        roas: spend > 0 ? revenue / spend : 0,
        ctr: impressions > 0 ? (clicks / impressions) * 100 : 0,
        cpm: impressions > 0 ? (spend / impressions) * 1000 : 0,
        cpc: clicks > 0 ? spend / clicks : 0,
        conversionRate: clicks > 0 ? (conversions / clicks) * 100 : 0,
    };
}

/**
 * Detecta anomalias comparando valores atuais com thresholds.
 */
export function detectAnomalies(
    current: Record<string, number>,
    thresholds: Record<string, { min?: number; max?: number }>
): MetricAnomaly[] {
    const anomalies: MetricAnomaly[] = [];

    for (const [metric, value] of Object.entries(current)) {
        const threshold = thresholds[metric];
        if (!threshold) continue;

        if (threshold.max !== undefined && value > threshold.max) {
            const deviation = ((value - threshold.max) / threshold.max) * 100;
            anomalies.push({
                metric,
                currentValue: value,
                expectedValue: threshold.max,
                deviationPercent: deviation,
                severity: deviation > 50 ? 'critical' : deviation > 25 ? 'high' : 'medium',
            });
        }

        if (threshold.min !== undefined && value < threshold.min) {
            const deviation = ((threshold.min - value) / threshold.min) * 100;
            anomalies.push({
                metric,
                currentValue: value,
                expectedValue: threshold.min,
                deviationPercent: -deviation,
                severity: deviation > 50 ? 'critical' : deviation > 25 ? 'high' : 'medium',
            });
        }
    }

    return anomalies;
}

/**
 * Determina a tendência baseada em comparação de períodos.
 */
export function determineTrend(
    current: number,
    previous: number,
    thresholdPercent: number = 5
): 'rising' | 'stable' | 'falling' {
    if (previous === 0) return 'stable';
    const changePercent = ((current - previous) / previous) * 100;
    if (changePercent > thresholdPercent) return 'rising';
    if (changePercent < -thresholdPercent) return 'falling';
    return 'stable';
}
