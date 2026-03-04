---
title: Sistema de Lead Scoring DekMidia
tags: [scoring, qualificacao, leads, priorizacao]
author: DekMidia
version: "1.0.0"
squads_que_usam: [prospection]
---

# Playbook: Sistema de Lead Scoring

## Logica do Sistema

O scoring avalia 4 dimensoes (A, B, C, D) com peso total de 100 pontos.
Use a skill `skills/lead-scoring.ts` para calcular automaticamente.

## Dimensao A - Potencial de Receita (0-30)

+10: Segmento Tier 1 (data/segmentos.json)
+10: Cidade > 100k hab. ou alto fluxo turistico
+10: Negocio com sinais de mais de 3 anos de operacao

## Dimensao B - Dor Digital (0-30)

+10: Sem site ou PageSpeed mobile < 50 (pagespeed.web.dev)
+10: Sem anuncios pagos Google + Meta
+10: Google Meu Negocio desatualizado (> 30 dias sem post)

## Dimensao C - Validacao do Negocio (0-20)

+10: Avaliacao Google > 4.2 com mais de 30 reviews
+10: Decisor identificado com LinkedIn ativo

## Dimensao D - Acessibilidade para Contato (0-20)

+10: WhatsApp comercial identificado e verificado
+10: E-mail comercial ou LinkedIn do decisor

---

## Tabela de Classificacao

| Score  | Status         | SLA      | Acao                        |
|--------|----------------|----------|-----------------------------|
| 80-100 | QUENTE         | 24 horas | Acionar Agente Abordagem    |
| 50-79  | MORNO          | 72 horas | Diagnostico como isca       |
| 20-49  | FRIO           | Mensal   | Sequencia de nutricao       |
| 0-19   | DESQUALIFICADO | -        | Arquivar com motivo         |

---

## Exemplos Praticos

### Lead Quente - Score 85

Clinica estetica em SJC, 4.5 estrelas, 120 reviews, sem site,
sem anuncios, WhatsApp Business, decisora no LinkedIn.
A(30) + B(20) + C(20) + D(15) = 85 - QUENTE

### Lead Morno - Score 50

Restaurante em Santos, 4.1 estrelas, 45 reviews, site lento
(PageSpeed 38), sem anuncios, WhatsApp identificado.
A(20) + B(20) + C(0) + D(10) = 50 - MORNO

### Lead Frio - Score 10

Loja em cidade pequena, 3.8 estrelas, 8 reviews, site ok,
ja roda Meta Ads, so tem telefone fixo.
A(10) + B(0) + C(0) + D(0) = 10 - DESQUALIFICADO
