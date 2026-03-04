/**
 * Skill: Lead Scoring
 * Squad: prospection
 * Versao: 1.0.0
 *
 * Calcula o score de um lead com base nos 4 criterios DekMidia (A, B, C, D).
 * Retorna score (0-100), classificacao, nivel de maturidade e proxima acao.
 *
 * Uso:
 *   import { calcularLeadScore } from '../skills/lead-scoring';
 *   const result = calcularLeadScore(dadosDoLead);
 */

export interface LeadData {
  // Dimensao A - Potencial de Receita
  segmento_tier: 1 | 2 | 3;
  populacao_cidade_acima_100k: boolean;
  anos_operacao_estimado: number;

  // Dimensao B - Dor Digital
  tem_site: boolean;
  pagespeed_mobile?: number;           // 0-100, undefined se nao verificado
  tem_ads_google: boolean;
  tem_ads_meta: boolean;
  google_perfil_atualizado: boolean;   // true = posts nos ultimos 30 dias

  // Dimensao C - Validacao do Negocio
  google_avaliacao?: number;
  google_reviews_count?: number;
  decisor_linkedin_ativo: boolean;

  // Dimensao D - Acessibilidade
  whatsapp_comercial: boolean;
  email_ou_linkedin_decisor: boolean;
}

export interface ScoreResult {
  score: number;
  breakdown: { A: number; B: number; C: number; D: number };
  classificacao: 'quente' | 'morno' | 'frio' | 'desqualificado';
  sla: string;
  nivel_maturidade: 0 | 1 | 2 | 3 | 4;
  servico_recomendado: string;
  proximo_passo: string;
  justificativa: string;
}

const SERVICO_POR_NIVEL: Record<number, string> = {
  0: 'pacote-completo',
  1: 'site + google-ads',
  2: 'google-ads + meta-ads',
  3: 'whatsapp-auto + funil-vendas',
  4: 'auditoria + gestao-integrada',
};

export function calcularLeadScore(lead: LeadData): ScoreResult {
  // Dimensao A
  let A = 0;
  if (lead.segmento_tier === 1)           A += 10;
  if (lead.populacao_cidade_acima_100k)   A += 10;
  if (lead.anos_operacao_estimado >= 3)   A += 10;

  // Dimensao B
  let B = 0;
  const siteFraco = !lead.tem_site ||
    (lead.pagespeed_mobile !== undefined && lead.pagespeed_mobile < 50);
  if (siteFraco)                          B += 10;
  if (!lead.tem_ads_google && !lead.tem_ads_meta) B += 10;
  if (!lead.google_perfil_atualizado)     B += 10;

  // Dimensao C
  let C = 0;
  const avaliacaoOk =
    (lead.google_avaliacao ?? 0) >= 4.2 &&
    (lead.google_reviews_count ?? 0) >= 30;
  if (avaliacaoOk)                        C += 10;
  if (lead.decisor_linkedin_ativo)        C += 10;

  // Dimensao D
  let D = 0;
  if (lead.whatsapp_comercial)            D += 10;
  if (lead.email_ou_linkedin_decisor)     D += 10;

  const score = A + B + C + D;

  const classificacao =
    score >= 80 ? 'quente' :
    score >= 50 ? 'morno'  :
    score >= 20 ? 'frio'   : 'desqualificado';

  const sla =
    classificacao === 'quente'        ? 'Abordar em ate 24h'        :
    classificacao === 'morno'         ? 'Abordar em ate 72h'        :
    classificacao === 'frio'          ? 'Nutricao mensal'           :
                                        'Arquivar com justificativa';

  let nivel_maturidade: ScoreResult['nivel_maturidade'];
  if (!lead.tem_site)                                     nivel_maturidade = 0;
  else if (!lead.tem_ads_google && !lead.tem_ads_meta)    nivel_maturidade = 2;
  else if (lead.tem_ads_google || lead.tem_ads_meta)      nivel_maturidade = 3;
  else                                                    nivel_maturidade = 4;

  return {
    score,
    breakdown: { A, B, C, D },
    classificacao,
    sla,
    nivel_maturidade,
    servico_recomendado: SERVICO_POR_NIVEL[nivel_maturidade],
    proximo_passo: sla,
    justificativa:
      `Score ${score}/100 | A:${A} B:${B} C:${C} D:${D} | ` +
      `${classificacao.toUpperCase()} | Nivel ${nivel_maturidade} | ` +
      `Servico: ${SERVICO_POR_NIVEL[nivel_maturidade]}`,
  };
}
