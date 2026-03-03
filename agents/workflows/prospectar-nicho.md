---
description: Executa o ciclo completo de prospeccao para um nicho e cidade especificos. Mapeia leads no Google Maps e LinkedIn, aplica scoring, classifica e prepara lista de abordagem priorizada.
---

# Workflow: Prospectar Nicho

## Entradas Necessarias

Antes de iniciar, confirme com o usuario:
- `NICHO`: qual segmento pesquisar (ex: clinica estetica, academia, imobiliaria)
- `CIDADE`: cidade ou regiao alvo (ex: Sao Jose dos Campos, Santos, Campinas)
- `META_LEADS`: quantidade de leads quentes desejada (padrao: 10)

---

## Passo 1 — Pesquisa no Google Maps

Invocar o **Agente Pesquisador** (`squads/prospeccao/pesquisador.md`) com o seguinte contexto:

```
Nicho: [NICHO]
Cidade: [CIDADE]
Meta: encontrar pelo menos [META_LEADS * 3] candidatos brutos
Fontes: Google Maps + LinkedIn
Criterios de prioridade: avaliacao > 4.0, sem site ou site ruim, perfil desatualizado
```

Salvar resultado em: `PROJETOS/_prospeccao/leads-brutos/[CIDADE]-[NICHO]-[DATA].json`

---

## Passo 2 — Enriquecimento de Dados

Para os TOP 20 leads encontrados, verificar:
1. Google PageSpeed Insights do site (se tiver site)
2. Meta Ad Library — buscar pelo nome da empresa
3. Google Ads Transparency Center — buscar pelo nome
4. LinkedIn — tentar identificar decisor (socio/CEO)

Atualizar os campos `site_speed_mobile`, `tem_ads_google`, `tem_ads_meta`, `contato_linkedin_decisor` nas fichas.

---

## Passo 3 — Scoring e Qualificacao

Invocar o **Agente Qualificador** (`squads/prospeccao/qualificador.md`) para processar todas as fichas.

Aplicar o sistema de scoring (playbook: `playbooks/lead-scoring-system.md`).

Salvar listas separadas:
- `PROJETOS/_prospeccao/leads-qualificados/quentes/[CIDADE]-[NICHO]-[DATA].json`
- `PROJETOS/_prospeccao/leads-qualificados/mornos/[CIDADE]-[NICHO]-[DATA].json`

---

## Passo 4 — Preparacao de Abordagem

Para os leads QUENTES, invocar o **Agente Abordagem** (`squads/prospeccao/abordagem.md`).

Para cada lead quente, gerar:
- Mensagem WhatsApp personalizada (Variacao A ou B, conforme perfil)
- Mensagem LinkedIn de conexao (se decisor identificado)
- Horario sugerido de envio

Salvar em: `PROJETOS/_prospeccao/mensagens-prontas/[CIDADE]-[NICHO]-[DATA].md`

---

## Passo 5 — Relatorio Final

Gerar relatorio resumido com:

```markdown
# Relatorio de Prospeccao — [NICHO] em [CIDADE] — [DATA]

## Resumo
- Total mapeado: X leads
- Leads quentes: X (X%)
- Leads mornos: X (X%)
- Leads frios/descartados: X

## Top 5 Leads Quentes
[lista com nome, score, dor principal e servico recomendado]

## Proximos Passos
- [X] Enviar mensagens WhatsApp para leads quentes (hoje)
- [ ] Fazer conexoes LinkedIn com decisores identificados
- [ ] Programar sequencia de follow-up no n8n (leads mornos)
- [ ] Incluir leads frios na lista de nutricao mensal
```

Salvar em: `PROJETOS/_prospeccao/relatorios/[CIDADE]-[NICHO]-[DATA].md`

---

## Criterios de Sucesso

- Minimo 10 leads quentes (score > 80) por nicho/cidade
- Todas as fichas com pelo menos 1 contato valido
- Mensagens personalizadas prontas para todos os leads quentes
- Relatorio salvo e revisado antes do envio
