// =============================================
// DEK-OS — Skill: Compliance Checker
// Verificação de conteúdo contra políticas
// =============================================

import { SkillDefinition, ComplianceRisk, ComplianceResult } from '../../shared/types';

/** Definição da skill */
export const complianceCheckerSkill: SkillDefinition = {
    id: 'compliance-checker',
    name: 'Compliance Checker',
    description: 'Verificação de conteúdo contra políticas de plataformas e legislação BR',
    version: '0.1.0',
    category: 'compliance',
    usedByAgents: ['auditor', 'media-buyer', 'copywriter'],
};

/** Plataformas e suas regras */
export type CompliancePlatform = 'google' | 'meta' | 'tiktok' | 'lgpd' | 'conar' | 'cdc';

/** Palavras e padrões proibidos por plataforma */
const FORBIDDEN_PATTERNS: Record<string, string[]> = {
    google: [
        'ganho garantido',
        'resultado garantido',
        'sem risco',
        'cura milagrosa',
        'grátis*',
    ],
    meta: [
        'você que sofre de',
        'pessoas como você',
        'antes e depois',
        'cripto',
        'ganhe dinheiro fácil',
    ],
    tiktok: [
        'resultado comprovado',
        'produto milagroso',
    ],
    lgpd: [
        // Verificações de presença obrigatória (invertido)
    ],
};

/** Input para verificação de compliance */
export interface ComplianceInput {
    content: string;
    contentType: 'ad_copy' | 'landing_page' | 'social_post' | 'email';
    targetPlatforms: CompliancePlatform[];
    clientNiche?: string;
}

/**
 * Verifica conteúdo contra padrões proibidos de uma plataforma.
 */
export function checkPlatformRules(
    content: string,
    platform: CompliancePlatform
): ComplianceRisk[] {
    const risks: ComplianceRisk[] = [];
    const patterns = FORBIDDEN_PATTERNS[platform] || [];
    const contentLower = content.toLowerCase();

    for (const pattern of patterns) {
        const searchPattern = pattern.replace('*', '');
        if (contentLower.includes(searchPattern)) {
            risks.push({
                severity: 'high',
                platform: platform as ComplianceRisk['platform'],
                rule: `Padrão proibido: "${pattern}"`,
                description: `Conteúdo contém "${searchPattern}" que pode violar políticas de ${platform}`,
                suggestion: `Remover ou reformular o trecho que contém "${searchPattern}"`,
            });
        }
    }

    return risks;
}

/**
 * Verifica se promessas de resultado aparecem no conteúdo.
 */
export function checkPromisePatterns(content: string): ComplianceRisk[] {
    const risks: ComplianceRisk[] = [];
    const promisePatterns = [
        { pattern: /garantimos?\s+(resultado|retorno|lucro)/i, rule: 'Promessa de resultado garantido' },
        { pattern: /100%\s+(garantido|comprovado|eficaz)/i, rule: 'Afirmação absoluta' },
        { pattern: /ganhe\s+r?\$\s*[\d.,]+/i, rule: 'Promessa de ganho financeiro específico' },
        { pattern: /emagreça?\s+\d+\s*kg/i, rule: 'Promessa de resultado de saúde específico' },
    ];

    for (const { pattern, rule } of promisePatterns) {
        if (pattern.test(content)) {
            risks.push({
                severity: 'critical',
                platform: 'general',
                rule,
                description: `Conteúdo contém padrão de promessa proibida: ${rule}`,
                suggestion: 'Usar linguagem condicional: "pode ajudar a", "resultados podem variar"',
            });
        }
    }

    return risks;
}

/**
 * Executa verificação completa de compliance.
 */
export function runComplianceCheck(input: ComplianceInput): ComplianceResult {
    const allRisks: ComplianceRisk[] = [];

    // Verificar cada plataforma
    for (const platform of input.targetPlatforms) {
        const platformRisks = checkPlatformRules(input.content, platform);
        allRisks.push(...platformRisks);
    }

    // Verificar promessas gerais
    const promiseRisks = checkPromisePatterns(input.content);
    allRisks.push(...promiseRisks);

    // Determinar aprovação (reprova se houver risco high ou critical)
    const approved = !allRisks.some(r => r.severity === 'high' || r.severity === 'critical');

    return {
        approved,
        risks: allRisks,
        checkedAt: new Date(),
        contentHash: simpleHash(input.content),
    };
}

/** Hash simples para rastreamento de conteúdo */
function simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash).toString(36);
}
