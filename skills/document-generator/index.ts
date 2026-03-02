// =============================================
// DEK-OS — Skill: Document Generator
// Geração de propostas, contratos e checklists
// =============================================

import { SkillDefinition, ClientNiche } from '../../shared/types';

/** Definição da skill */
export const documentGeneratorSkill: SkillDefinition = {
    id: 'document-generator',
    name: 'Document Generator',
    description: 'Geração de propostas, contratos e checklists customizados por nicho',
    version: '0.1.0',
    category: 'content',
    usedByAgents: ['onboarding', 'concierge'],
};

/** Tipo de documento */
export type DocumentType = 'proposal' | 'contract' | 'checklist' | 'briefing';

/** Input para geração de documento */
export interface DocumentInput {
    type: DocumentType;
    clientName: string;
    clientNiche: ClientNiche;
    variables: Record<string, string>;
    services: string[];
    customClauses?: string[];
}

/** Output gerado */
export interface DocumentOutput {
    content: string;
    type: DocumentType;
    format: 'markdown' | 'json';
    generatedAt: Date;
    metadata: {
        clientName: string;
        niche: ClientNiche;
        templateUsed: string;
    };
}

/** Template paths por tipo de documento */
const TEMPLATE_PATHS: Record<DocumentType, string> = {
    proposal: 'templates/proposals/proposta-padrao.md',
    contract: 'templates/contracts/contrato-padrao.md',
    checklist: 'templates/clients/',
    briefing: 'templates/clients/',
};

/** Checklist de acessos por serviço */
const ACCESS_CHECKLIST: Record<string, string[]> = {
    'trafego-pago': [
        'Acesso ao Google Ads (MCC ou diretamente)',
        'Acesso ao Meta Business Manager',
        'Pixel Meta instalado no site',
        'Tag Google Ads instalada no site',
        'Acesso ao Google Analytics',
    ],
    'site': [
        'Acesso ao painel de hospedagem',
        'Acesso ao registrador de domínio',
        'Credenciais FTP/SSH (se aplicável)',
        'Acesso ao Google Search Console',
    ],
    'social-media': [
        'Acesso às páginas do Instagram/Facebook',
        'Acesso ao Meta Business Suite',
        'Briefing de identidade visual',
        'Tom de voz e guidelines',
    ],
    'crm': [
        'Acesso ao CRM do cliente',
        'Fluxo de atendimento atual',
        'Scripts de vendas existentes',
    ],
};

/**
 * Substitui variáveis no template por valores reais.
 */
export function replaceVariables(template: string, variables: Record<string, string>): string {
    let result = template;
    for (const [key, value] of Object.entries(variables)) {
        const pattern = new RegExp(`\\[${key}\\]`, 'gi');
        result = result.replace(pattern, value);
    }
    return result;
}

/**
 * Gera checklist de acessos baseado nos serviços contratados.
 */
export function generateAccessChecklist(services: string[]): string {
    const lines: string[] = ['# Checklist de Acessos\n'];

    for (const service of services) {
        const items = ACCESS_CHECKLIST[service];
        if (items) {
            lines.push(`## ${service}`);
            for (const item of items) {
                lines.push(`- [ ] ${item}`);
            }
            lines.push('');
        }
    }

    return lines.join('\n');
}

/**
 * Retorna o path do template adequado para o tipo de documento.
 */
export function getTemplatePath(type: DocumentType, niche?: ClientNiche): string {
    const basePath = TEMPLATE_PATHS[type];
    if ((type === 'checklist' || type === 'briefing') && niche) {
        return `${basePath}${niche}.md`;
    }
    return basePath;
}
