// =============================================
// DEK-OS — Skill: Landing Page Analyzer
// Análise de LPs: velocidade, pixels, SEO
// =============================================

import { SkillDefinition } from '../../shared/types';

/** Definição da skill */
export const landingPageAnalyzerSkill: SkillDefinition = {
    id: 'landing-page-analyzer',
    name: 'Landing Page Analyzer',
    description: 'Análise de LPs: velocidade, pixels, SEO on-page e Core Web Vitals',
    version: '0.1.0',
    category: 'engineering',
    usedByAgents: ['auditor', 'qa-tester', 'seo-specialist', 'scout'],
};

/** Tipos de pixel rastreáveis */
export type TrackingPixel = 'google-ads' | 'meta-pixel' | 'tiktok-pixel' | 'google-analytics' | 'gtm';

/** Input para análise de LP */
export interface LandingPageInput {
    url: string;
    checkPixels?: TrackingPixel[];
    checkSEO?: boolean;
    checkPerformance?: boolean;
    checkCompliance?: boolean;
}

/** Resultado de performance */
export interface PerformanceResult {
    loadTimeMs: number;
    loadTimeStatus: 'good' | 'needs-improvement' | 'poor';
    lcp?: number;
    fid?: number;
    cls?: number;
    lighthouseScore?: number;
}

/** Resultado de SEO */
export interface SEOResult {
    hasTitle: boolean;
    titleLength?: number;
    hasMetaDescription: boolean;
    metaDescriptionLength?: number;
    hasH1: boolean;
    h1Count: number;
    hasAltTags: boolean;
    missingAltCount: number;
    hasCanonical: boolean;
    hasSitemap: boolean;
    hasRobotsTxt: boolean;
    score: number;
}

/** Resultado de pixel */
export interface PixelResult {
    pixel: TrackingPixel;
    found: boolean;
    firing: boolean;
    pixelId?: string;
}

/** Resultado de compliance técnica */
export interface TechnicalComplianceResult {
    hasHTTPS: boolean;
    hasCookieConsent: boolean;
    hasPrivacyPolicy: boolean;
    hasTermsOfUse: boolean;
    brokenLinks: string[];
    isMobileResponsive: boolean;
}

/** Resultado completo da análise */
export interface LandingPageOutput {
    url: string;
    analyzedAt: Date;
    overallScore: number;
    performance?: PerformanceResult;
    seo?: SEOResult;
    pixels?: PixelResult[];
    compliance?: TechnicalComplianceResult;
    issues: LPIssue[];
    recommendations: string[];
}

/** Issue encontrada na LP */
export interface LPIssue {
    category: 'performance' | 'seo' | 'pixel' | 'compliance';
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    recommendation: string;
}

/**
 * Classifica o tempo de carregamento.
 */
export function classifyLoadTime(loadTimeMs: number): 'good' | 'needs-improvement' | 'poor' {
    if (loadTimeMs <= 2000) return 'good';
    if (loadTimeMs <= 3000) return 'needs-improvement';
    return 'poor';
}

/**
 * Calcula score geral da LP baseado nos resultados parciais.
 */
export function calculateOverallScore(output: Partial<LandingPageOutput>): number {
    let score = 100;
    const issues = output.issues || [];

    for (const issue of issues) {
        switch (issue.severity) {
            case 'critical': score -= 25; break;
            case 'high': score -= 15; break;
            case 'medium': score -= 8; break;
            case 'low': score -= 3; break;
        }
    }

    return Math.max(0, Math.min(100, score));
}

/**
 * Gera recomendações baseadas nos issues encontrados.
 */
export function generateRecommendations(issues: LPIssue[]): string[] {
    const recommendations: string[] = [];

    // Priorizar por severidade
    const sorted = [...issues].sort((a, b) => {
        const order = { critical: 0, high: 1, medium: 2, low: 3 };
        return order[a.severity] - order[b.severity];
    });

    for (const issue of sorted) {
        recommendations.push(`[${issue.severity.toUpperCase()}] ${issue.recommendation}`);
    }

    return recommendations;
}
