// =============================================
// DEK-OS — Skill: Sentiment Analyzer
// Análise de sentimento em conversas
// =============================================

import { SkillDefinition } from '../../shared/types';

/** Definição da skill */
export const sentimentAnalyzerSkill: SkillDefinition = {
    id: 'sentiment-analyzer',
    name: 'Sentiment Analyzer',
    description: 'Análise de sentimento em conversas: detecta insatisfação, intenção e risco de churn',
    version: '0.1.0',
    category: 'analytics',
    usedByAgents: ['reporting', 'concierge'],
};

/** Classificação de sentimento */
export type Sentiment = 'positive' | 'neutral' | 'negative';

/** Intenção detectada na mensagem */
export type MessageIntent = 'purchase' | 'complaint' | 'question' | 'cancellation' | 'praise' | 'unknown';

/** Input para análise de sentimento */
export interface SentimentInput {
    messages: MessageEntry[];
    clientId: string;
    context?: string;
}

/** Entrada de mensagem */
export interface MessageEntry {
    text: string;
    sender: 'client' | 'agent' | 'system';
    timestamp: Date;
}

/** Resultado da análise de sentimento */
export interface SentimentOutput {
    overallSentiment: Sentiment;
    sentimentScore: number; // -1.0 a 1.0
    intent: MessageIntent;
    urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
    churnRisk: 'low' | 'medium' | 'high';
    requiresHumanIntervention: boolean;
    analyzedAt: Date;
    details: SentimentDetail[];
}

/** Detalhe por mensagem */
export interface SentimentDetail {
    messageIndex: number;
    sentiment: Sentiment;
    score: number;
    keywords: string[];
}

/** Palavras-chave indicativas de sentimento negativo */
const NEGATIVE_KEYWORDS = [
    'cancelar', 'cancela', 'cancelamento',
    'insatisfeito', 'insatisfação',
    'não funciona', 'não funcionou',
    'péssimo', 'horrível', 'ruim',
    'demora', 'lento', 'nunca',
    'devolver', 'reembolso', 'estorno',
    'processo', 'procon', 'reclamação',
    'decepcionado', 'frustrado', 'raiva',
];

/** Palavras-chave indicativas de sentimento positivo */
const POSITIVE_KEYWORDS = [
    'excelente', 'ótimo', 'maravilhoso',
    'parabéns', 'obrigado', 'obrigada',
    'funcionou', 'perfeito', 'satisfeito',
    'recomendo', 'incrível', 'adorei',
    'muito bom', 'nota 10', 'top',
];

/** Palavras-chave de intenção de cancelamento */
const CANCELLATION_KEYWORDS = [
    'cancelar', 'cancela', 'cancelamento',
    'encerrar', 'parar', 'desistir',
    'não quero mais', 'podem parar',
];

/**
 * Analisa sentimento de um texto individual.
 */
export function analyzeTextSentiment(text: string): { sentiment: Sentiment; score: number; keywords: string[] } {
    const textLower = text.toLowerCase();
    const foundNegative: string[] = [];
    const foundPositive: string[] = [];

    for (const keyword of NEGATIVE_KEYWORDS) {
        if (textLower.includes(keyword)) {
            foundNegative.push(keyword);
        }
    }

    for (const keyword of POSITIVE_KEYWORDS) {
        if (textLower.includes(keyword)) {
            foundPositive.push(keyword);
        }
    }

    const positiveScore = foundPositive.length * 0.3;
    const negativeScore = foundNegative.length * -0.35;
    const rawScore = positiveScore + negativeScore;
    const score = Math.max(-1, Math.min(1, rawScore));

    let sentiment: Sentiment = 'neutral';
    if (score > 0.15) sentiment = 'positive';
    if (score < -0.15) sentiment = 'negative';

    return {
        sentiment,
        score,
        keywords: [...foundNegative, ...foundPositive],
    };
}

/**
 * Detecta intenção de cancelamento.
 */
export function detectCancellationIntent(text: string): boolean {
    const textLower = text.toLowerCase();
    return CANCELLATION_KEYWORDS.some(keyword => textLower.includes(keyword));
}

/**
 * Determina nível de urgência baseado no sentimento e intenção.
 */
export function determineUrgency(
    sentiment: Sentiment,
    intent: MessageIntent,
    churnRisk: 'low' | 'medium' | 'high'
): 'low' | 'medium' | 'high' | 'critical' {
    if (intent === 'cancellation') return 'critical';
    if (sentiment === 'negative' && churnRisk === 'high') return 'critical';
    if (sentiment === 'negative') return 'high';
    if (intent === 'complaint') return 'medium';
    return 'low';
}
