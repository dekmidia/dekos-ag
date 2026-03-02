// =============================================
// DEK-OS — Skills Registry
// Catálogo central de skills compartilhadas
// =============================================

import { SkillDefinition } from '../shared/types';
import { metricsAnalyzerSkill } from './metrics-analyzer';
import { complianceCheckerSkill } from './compliance-checker';
import { reportGeneratorSkill } from './report-generator';
import { landingPageAnalyzerSkill } from './landing-page-analyzer';
import { documentGeneratorSkill } from './document-generator';
import { sentimentAnalyzerSkill } from './sentiment-analyzer';
import { map2webSkill } from './map2web';

/**
 * Registry de todas as skills disponíveis no DEK-OS.
 */
export const skillsRegistry: SkillDefinition[] = [
    metricsAnalyzerSkill,
    complianceCheckerSkill,
    reportGeneratorSkill,
    landingPageAnalyzerSkill,
    documentGeneratorSkill,
    sentimentAnalyzerSkill,
    map2webSkill,
];

/**
 * Busca uma skill pelo ID.
 */
export function getSkillById(id: string): SkillDefinition | undefined {
    return skillsRegistry.find(s => s.id === id);
}

/**
 * Retorna todas as skills de um agente.
 */
export function getSkillsByAgent(agentId: string): SkillDefinition[] {
    return skillsRegistry.filter(s => s.usedByAgents.includes(agentId));
}

/**
 * Retorna todas as skills de uma categoria.
 */
export function getSkillsByCategory(category: SkillDefinition['category']): SkillDefinition[] {
    return skillsRegistry.filter(s => s.category === category);
}

// Re-exportar todas as skills
export { metricsAnalyzerSkill } from './metrics-analyzer';
export { complianceCheckerSkill } from './compliance-checker';
export { reportGeneratorSkill } from './report-generator';
export { landingPageAnalyzerSkill } from './landing-page-analyzer';
export { documentGeneratorSkill } from './document-generator';
export { sentimentAnalyzerSkill } from './sentiment-analyzer';
export { map2webSkill } from './map2web';
