/**
 * Skill: Lead Scoring
 * Squad: Prospeccao
 * Versao: 1.0
 *
 * Calcula o score de um lead com base nos criterios do sistema DekMidia.
 * Retorna score (0-100), classificacao e proxima acao recomendada.
 */

interface LeadData {
  segmento: string;
  cidade: string;
  populacao_estimada?: number;
  anos_operacao_estimado?: number;
  tem_site: boolean;
  pagespeed_mobile?: number;
  tem_ads_google: boolean;
  tem_ads_meta: boolean;
  google_perfil_atualizado: boolean; // posts nos ultimos 30 dias
  google_avaliacao?: number;
  google_reviews_count?: number;
  decisor_linkedin_ativo: boolean;
  whatsapp_comercial: boolean;
  email_decisor: boolean;
}

interface ScoreResult {
  score: number;
  breakdown: { A: number; B: number; C: number; D: number };
  classificacao: 'quente' | 'morno' | 'frio' | 'desqualificado';
  nivel_maturidade: 0 | 1 | 2 | 3 | 4;
  servico_recomendado: string;
  proximo_passo: string;
  justificativa: string;
}

const SEGMENTOS_TIER1 = [
  'clinica odontologica', 'clinica estetica', 'clinica medica',
  'academia', 'imobiliaria', 'construtora', 'auto center',
  'escritorio contabil', 'escola de idiomas', 'advogado'
];

function calcularLeadScore(lead: LeadData): ScoreResult {
  let A = 0, B = 0, C = 0, D = 0;

  // Dimensao A — Potencial de Receita
  if (SEGMENTOS_TIER1.some(s => lead.segmento.toLowerCase().includes(s))) A += 10;
  if ((lead.populacao_estimada && lead.populacao_estimada > 100000)) A += 10;
  if (lead.anos_operacao_estimado && lead.anos_operacao_estimado >= 3) A += 10;

  // Dimensao B — Dor Digital
  if (!lead.tem_site || (lead.pagespeed_mobile !== undefined && lead.pagespeed_mobile < 50)) B += 10;
  if (!lead.tem_ads_google && !lead.tem_ads_meta) B += 10;
  if (!lead.google_perfil_atualizado) B += 10;

  // Dimensao C — Validacao
  if (lead.google_avaliacao && lead.google_avaliacao >= 4.2 &&
      lead.google_reviews_count && lead.google_reviews_count >= 30) C += 10;
  if (lead.decisor_linkedin_ativo) C += 10;

  // Dimensao D — Acessibilidade
  if (lead.whatsapp_comercial) D += 10;
  if (lead.email_decisor) D += 10;

  const score = A + B + C + D;

  // Classificacao
  let classificacao: ScoreResult['classificacao'];
  if (score >= 80) classificacao = 'quente';
  else if (score >= 50) classificacao = 'morno';
  else if (score >= 20) classificacao = 'frio';
  else classificacao = 'desqualificado';

  // Nivel de maturidade digital
  let nivel_maturidade: ScoreResult['nivel_maturidade'] = 0;
  if (!lead.tem_site) nivel_maturidade = 0;
  else if (!lead.tem_ads_google && !lead.tem_ads_meta) nivel_maturidade = 2;
  else nivel_maturidade = 3;

  // Servico recomendado
  const servicoMap: Record<number, string> = {
    0: 'pacote-completo',
    1: 'site + google-ads',
    2: 'google-ads + meta-ads',
    3: 'whatsapp-auto + funil',
    4: 'auditoria-gestao-integrada'
  };

  return {
    score,
    breakdown: { A, B, C, D },
    classificacao,
    nivel_maturidade,
    servico_recomendado: servicoMap[nivel_maturidade],
    proximo_passo: classificacao === 'quente' ? 'Abordar em 24h via WhatsApp'
                  : classificacao === 'morno' ? 'Agendar abordagem em 72h'
                  : classificacao === 'frio' ? 'Incluir em sequencia de nutricao'
                  : 'Arquivar com justificativa',
    justificativa: `Score ${score}/100 — A:${A} B:${B} C:${C} D:${D}. Classificado como ${classificacao}.`
  };
}

export { calcularLeadScore, LeadData, ScoreResult };
