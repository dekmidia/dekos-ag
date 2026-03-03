---
title: Sistema de Lead Scoring DekMidia
tags: [scoring, qualificacao, leads, priorizacao]
author: DekMidia
version: 1.0
updated: 2025-01
squads_que_usam: [Prospeccao]
---

# Playbook: Sistema de Lead Scoring

## Logica do Sistema

O scoring DekMidia avalia 4 dimensoes (A, B, C, D) com peso total de 100 pontos.
O objetivo e priorizar o tempo da equipe: leads quentes primeiro, sempre.

## Dimensao A — Potencial de Receita (0-30 pts)

| Criterio | Pontos | Como Verificar |
|---|---|---|
| Segmento de ticket alto | +10 | Comparar com tabela de segmentos Tier 1 |
| Cidade com >100k hab. ou alto fluxo turistico | +10 | Populacao estimada ou cidade de litoral |
| Negocio operando ha mais de 3 anos | +10 | Volume de reviews + data das primeiras |

## Dimensao B — Dor Digital (0-30 pts)

| Criterio | Pontos | Como Verificar |
|---|---|---|
| Sem site ou PageSpeed mobile < 50 | +10 | Google PageSpeed Insights |
| Sem anuncios pagos (Google + Meta) | +10 | Ad Library + Transparency Center |
| Google Meu Negocio desatualizado (>30 dias) | +10 | Verificar data do ultimo post/foto |

## Dimensao C — Validacao do Negocio (0-20 pts)

| Criterio | Pontos | Como Verificar |
|---|---|---|
| Avaliacao Google > 4.2 com >30 reviews | +10 | Google Maps |
| Decisor identificado com LinkedIn ativo | +10 | LinkedIn search |

## Dimensao D — Acessibilidade (0-20 pts)

| Criterio | Pontos | Como Verificar |
|---|---|---|
| WhatsApp comercial identificado | +10 | Google Maps ou site |
| E-mail ou LinkedIn do decisor | +10 | Hunter.io, Apollo.io ou LinkedIn |

## Tabela de Classificacao

| Range | Status | SLA de Abordagem | Servico Mais Provavel |
|---|---|---|---|
| 80-100 | QUENTE | 24 horas | Pacote completo ou servico principal |
| 50-79 | MORNO | 72 horas | Servico especifico + diagnostico gratuito |
| 20-49 | FRIO | Nutricao | Conteudo educativo por email/social |
| 0-19 | DESQUALIFICADO | Arquivar | N/A |

## Exemplos Praticos

**Lead Quente (score 85):**
Clinica estetica em SJC, 4.5 estrelas, 120 reviews, sem site, sem anuncios, WhatsApp Business verificado, decisora identificada no LinkedIn. Score: A(30) + B(20) + C(20) + D(15) = 85.

**Lead Morno (score 55):**
Restaurante em Santos, 4.1 estrelas, 45 reviews, tem site lento, sem anuncios, WhatsApp identificado, sem LinkedIn do decisor. Score: A(10) + B(20) + C(10) + D(10) = 50.

**Lead Frio (score 20):**
Loja de roupas em cidade pequena, 3.8 estrelas, 8 reviews, tem site ok, ja roda Meta Ads, so tem telefone fixo. Score: A(0) + B(10) + C(0) + D(10) = 20.
