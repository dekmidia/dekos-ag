// =============================================
// DEK-OS — Skill: Report Generator
// Geração de relatórios em múltiplos formatos
// =============================================

import { SkillDefinition } from '../../shared/types';

/** Definição da skill */
export const reportGeneratorSkill: SkillDefinition = {
    id: 'report-generator',
    name: 'Report Generator',
    description: 'Geração de relatórios em formatos WhatsApp, PDF e dashboard',
    version: '0.1.0',
    category: 'content',
    usedByAgents: ['reporting', 'data-scientist', 'onboarding'],
};

/** Formato de saída do relatório */
export type ReportFormat = 'whatsapp' | 'pdf' | 'dashboard' | 'json';

/** Período do relatório */
export type ReportPeriod = 'daily' | 'weekly' | 'monthly' | 'custom';

/** Input para geração de relatório */
export interface ReportInput {
    clientName: string;
    clientId: string;
    period: ReportPeriod;
    format: ReportFormat;
    dateRange: { start: Date; end: Date };
    data: ReportData;
}

/** Dados do relatório */
export interface ReportData {
    spend: number;
    leads: number;
    costPerLead: number;
    revenue?: number;
    roas?: number;
    trend: 'rising' | 'stable' | 'falling';
    insights?: string[];
    customMetrics?: Record<string, number>;
}

/** Output gerado */
export interface ReportOutput {
    content: string;
    format: ReportFormat;
    generatedAt: Date;
    metadata: {
        clientId: string;
        period: ReportPeriod;
        dateRange: { start: Date; end: Date };
    };
}

/** Emojis para tendência */
const TREND_EMOJI: Record<string, string> = {
    rising: '📈',
    stable: '➡️',
    falling: '📉',
};

/**
 * Gera relatório no formato WhatsApp (texto curto com emojis).
 */
export function generateWhatsAppReport(input: ReportInput): ReportOutput {
    const { clientName, data, dateRange } = input;
    const trendEmoji = TREND_EMOJI[data.trend] || '➡️';

    let content = `📊 Bom dia ${clientName}! Aqui está o resumo:\n\n`;
    content += `💰 Investimento: R$ ${data.spend.toFixed(2)}\n`;
    content += `👥 Leads gerados: ${data.leads}\n`;
    content += `💵 Custo por lead: R$ ${data.costPerLead.toFixed(2)}\n`;
    content += `${trendEmoji} Tendência: ${data.trend === 'rising' ? 'Subindo' : data.trend === 'falling' ? 'Caindo' : 'Estável'}\n`;

    if (data.roas !== undefined) {
        content += `🎯 ROAS: ${data.roas.toFixed(2)}x\n`;
    }

    if (data.insights && data.insights.length > 0) {
        content += `\n💡 ${data.insights[0]}`;
    }

    content += `\n\nPrecisa de mais detalhes? É só perguntar! 😊`;

    return {
        content,
        format: 'whatsapp',
        generatedAt: new Date(),
        metadata: {
            clientId: input.clientId,
            period: input.period,
            dateRange,
        },
    };
}

/**
 * Gera relatório em formato JSON estruturado para dashboards.
 */
export function generateDashboardReport(input: ReportInput): ReportOutput {
    const content = JSON.stringify({
        client: input.clientName,
        period: input.period,
        dateRange: input.dateRange,
        metrics: {
            spend: input.data.spend,
            leads: input.data.leads,
            costPerLead: input.data.costPerLead,
            revenue: input.data.revenue,
            roas: input.data.roas,
        },
        trend: input.data.trend,
        insights: input.data.insights,
        customMetrics: input.data.customMetrics,
    }, null, 2);

    return {
        content,
        format: 'dashboard',
        generatedAt: new Date(),
        metadata: {
            clientId: input.clientId,
            period: input.period,
            dateRange: input.dateRange,
        },
    };
}

/**
 * Gera relatório no formato adequado baseado no input.
 */
export function generateReport(input: ReportInput): ReportOutput {
    switch (input.format) {
        case 'whatsapp':
            return generateWhatsAppReport(input);
        case 'dashboard':
        case 'json':
            return generateDashboardReport(input);
        case 'pdf':
            // PDF será implementado com integração futura
            return generateDashboardReport({ ...input, format: 'json' });
        default:
            return generateDashboardReport(input);
    }
}
