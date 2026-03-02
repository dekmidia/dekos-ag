---
title: Docs Meta Ads
author: DekMidia
tags: [ads, docs]
---
# 📘 DEK-OS — Meta Ads Playbook
> SOP Operacional | Versão 2.0 | DekMidia  
> ⚡ Atualizado para **Andromeda** + **Threads Ads** — Março/2026

---

## Índice

1. [⚡ Andromeda — O Novo Paradigma](#0-andromeda--o-novo-paradigma)
2. [Estrutura de Campanhas](#1-estrutura-de-campanhas)
3. [Públicos e Segmentação](#2-públicos-e-segmentação)
4. [Criativos e Formatos de Anúncio](#3-criativos-e-formatos-de-anúncio)
5. [Threads Ads](#4-threads-ads)
6. [Pixel e Conversões](#5-pixel-e-conversões)
7. [Orçamento e Lances](#6-orçamento-e-lances)
8. [Relatórios e Métricas](#7-relatórios-e-métricas)
9. [Checklists Rápidos](#8-checklists-rápidos)

---

## 0. ⚡ Andromeda — O Novo Paradigma

> **O mais importante:** O Andromeda mudou a regra fundamental do Meta Ads. O criativo agora é o targeting. Público amplo + criativos diversos = melhor performance.

### O que é o Andromeda

Andromeda é o novo motor de recuperação e entrega de anúncios da Meta, com rollout global concluído em outubro de 2025. Ele usa IA para decidir **qual criativo mostrar para qual pessoa**, em tempo real, baseado em milhares de sinais comportamentais — sem depender das suas configurações de público.

**A mudança fundamental:**

| Antes do Andromeda | Era do Andromeda |
|--------------------|-----------------|
| Segmentação detalhada → público certo | Criativo diverso → algoritmo encontra o público |
| Testar headlines em cima de 1 imagem vencedora | Criar conceitos completamente diferentes |
| Muitos conjuntos, públicos segmentados | Menos conjuntos, mais criativos por conjunto |
| Controlar quem vê o anúncio | Controlar O QUE o algoritmo tem para trabalhar |

### Impactos diretos na estratégia

**Criativos:**
- O criativo é o sinal de targeting — ele define quem vai receber o anúncio
- Alta similaridade entre criativos → algoritmo entende como fadiga → CPMs sobem
- Não adianta mudar só headline ou cor de fundo — o sistema de visão do Meta reconhece o mesmo visual
- Fadiga acontece mais rápido: top performers podem cair em 2–4 semanas

**Estrutura:**
- Advantage+ é agora o padrão para Sales, Leads e App Promotion
- Estrutura recomendada: **1 campanha por objetivo, CBO ativo, 8–15 criativos por conjunto**
- Targeting amplo (broad) funciona melhor — o Andromeda expande além dos lookalikes
- Audiences detalhadas ainda funcionam como sinal de seed, mas o algoritmo vai além delas

**Novas métricas nativas (dashboard do Ads Manager):**

| Métrica | O que indica | Ação |
|---------|-------------|------|
| **Creative Fatigue Score** | Criativo desgastado | Renovar criativos |
| **Creative Similarity** | Biblioteca sem diversidade | Adicionar conceitos novos |
| **Top Creative Themes** | Ângulos que estão funcionando | Produzir mais nesse ângulo |

### SOP — Framework de criativos para Andromeda

```
Passo 1 — Defina Personas + Desejos + Consciência
  └── Persona A: quem é, dor, desejo, nível de consciência
  └── Persona B: diferente da A (ex: iniciante vs. avançado)

Passo 2 — Crie 8–12 CONCEITOS (não variações superficiais)
  └── Conceito 1: hook emocional + prova social
  └── Conceito 2: tutorial / educacional
  └── Conceito 3: objeção reversa
  └── Conceito 4: UGC / depoimento
  └── Conceito 5: oferta direta
  └── ... (formatos e ângulos distintos)

Passo 3 — Use Meta AI para gerar 2–3 variações por conceito
  └── Expansion de imagem, background generation, text variations
  └── ATENÇÃO: revisar copy gerada por IA antes de publicar

Passo 4 — Coloque todos no mesmo conjunto (broad targeting)
  └── 1 conjunto = "cérebro único" de aprendizado
  └── Aguardar 5–7 dias antes de julgar

Passo 5 — Analisar Top Creative Themes quinzenalmente
  └── Pausar os conceitos sem entrega
  └── Criar novos conceitos baseados nos ângulos vencedores
```

### Cadência de renovação de criativos

| Tamanho da conta | Frequência de refresh |
|-----------------|----------------------|
| Pequena (< R$ 3k/mês) | Mensal |
| Média (R$ 3k–15k/mês) | Quinzenal |
| Grande (> R$ 15k/mês) | Semanal |

### Checklist — Adaptação ao Andromeda

- [ ] Estrutura simplificada: máx 3–4 conjuntos ativos por campanha
- [ ] Advantage+ ativado (audiences + placements)
- [ ] 8–15 criativos por conjunto com conceitos distintos
- [ ] Targeting amplo ou Lookalike como seed (não como limite)
- [ ] Monitorar Creative Similarity semanalmente
- [ ] Refresh de criativos conforme cadência da conta
- [ ] Nenhum conjunto com criativos "parecidos" demais visualmente

---

## 1. Estrutura de Campanhas

### Arquitetura padrão (Hierarquia)

```
Conta de Anúncio
└── Campanha (Objetivo)
    └── Conjunto de Anúncios (Público + Verba + Posicionamento)
        └── Anúncio (Criativo)
```

### Objetivos por fase de funil

| Fase | Objetivo no Meta | Quando usar |
|------|-----------------|-------------|
| Topo (ToFu) | Reconhecimento, Alcance, Tráfego, Engajamento | Audiências frias, branding |
| Meio (MoFu) | Tráfego, Leads, Engajamento | Retargeting leve, nutrição |
| Fundo (BoFu) | Conversões, Vendas do Catálogo, Mensagens | Retargeting quente, compra |

### Nomenclatura padrão Antigravity

```
[PROJETO]_[OBJETIVO]_[FUNIL]_[PÚBLICO]_[DATA]

Exemplos:
ANTIGRAVITY_CONV_BOFU_RET30D_2026-03
ANTIGRAVITY_TRAF_TOFU_INTEREST_2026-03
ANTIGRAVITY_LEADS_MOFU_LAL1PCT_2026-03
```

**Legenda:**
- `CONV` = Conversões | `TRAF` = Tráfego | `LEADS` = Geração de Leads
- `TOFU/MOFU/BOFU` = fase do funil
- `RET30D` = Retargeting 30 dias | `LAL1PCT` = Lookalike 1%
- `INTEREST` = Público por interesses

### SOP — Criação de Nova Campanha

- [ ] Definir objetivo alinhado à fase do funil
- [ ] Nomear campanha seguindo padrão Antigravity
- [ ] Habilitar CBO (Campaign Budget Optimization) apenas se testando 3+ conjuntos
- [ ] Definir datas de início e fim (ou deixar contínuo com revisão semanal)
- [ ] Ativar "Vantagem+" apenas se público for amplo (> 5M)
- [ ] Configurar limite de gastos da campanha (opcional, segurança)
- [ ] Associar pixel correto antes de publicar

---

## 2. Públicos e Segmentação

### Tipos de público e prioridade

| Prioridade | Tipo | Descrição | Temperatura |
|------------|------|-----------|-------------|
| 1ª | Custom Audience — Compradores | Lista de clientes / compras | 🔥 Quente |
| 2ª | Custom Audience — Visitantes site | Pixel (30/60/90d) | 🔥 Quente |
| 3ª | Custom Audience — Engajamento | Seguidores, views de vídeo | 🌡️ Morno |
| 4ª | Lookalike 1-3% | Baseado em compradores/leads | 🌡️ Morno |
| 5ª | Lookalike 5-10% | Expansão de escala | ❄️ Frio |
| 6ª | Interesses / Comportamentos | Segmentação manual | ❄️ Frio |

### Tamanhos de público recomendados

| Objetivo | Tamanho ideal |
|----------|--------------|
| Conversões (BoFu) | 50K – 500K |
| Tráfego / Leads | 500K – 2M |
| Reconhecimento / Alcance | 1M – 10M+ |

### Configuração de Custom Audiences — Checklist

**Compradores (CRM/Lista):**
- [ ] Exportar lista com email, telefone, nome (mínimo email)
- [ ] Hashear antes do upload ou deixar o Meta fazer automaticamente
- [ ] Aguardar preenchimento (mínimo 1.000 pessoas para funcionar)
- [ ] Nomear: `CA_COMPRADORES_[MES-ANO]`

**Visitantes do Site (Pixel):**
- [ ] Criar audience de "Todos os visitantes" — janelas: 30d / 60d / 180d
- [ ] Criar audience de "Visitou página de produto"
- [ ] Criar audience de "Iniciou checkout mas não comprou"
- [ ] Excluir compradores das audiences de retargeting

**Engajamento (Instagram/Facebook):**
- [ ] Criar audience de "Interagiu com perfil do Instagram" — 30/60/90d
- [ ] Criar audience de "Assistiu 75%+ dos vídeos"
- [ ] Criar audience de "Clicou no link da bio"

### Lookalike — SOP

- [ ] Fonte: usar Custom Audience de compradores (mínimo 1.000 registros)
- [ ] Criar LAL 1%, 2-3% e 5% separadamente (não juntar em um conjunto)
- [ ] País: Brasil (ou mercado-alvo)
- [ ] Excluir sempre a Custom Audience de origem
- [ ] Testar LAL 1% antes de escalar para 3% ou 5%

### Exclusões obrigatórias por fase

| Campanha | Excluir |
|----------|---------|
| ToFu (frio) | Compradores + Engajados 30d |
| MoFu (morno) | Compradores |
| BoFu (quente) | Compradores recentes (< 30d) |

---

## 3. Criativos e Formatos de Anúncio

### Formatos e especificações

| Formato | Dimensão | Aspect Ratio | Peso máx. | Uso recomendado |
|---------|----------|-------------|-----------|----------------|
| Feed estático | 1080×1080px | 1:1 | 30MB | Branding, produto |
| Feed vertical | 1080×1350px | 4:5 | 30MB | Feed mobile (melhor performance) |
| Stories / Reels | 1080×1920px | 9:16 | 4GB (vídeo) | Engajamento, ToFu |
| Carrossel | 1080×1080px | 1:1 | 30MB/card | Múltiplos produtos/benefícios |
| Vídeo feed | 1080×1080px ou 4:5 | — | 4GB | Demonstração, prova social |

### Estrutura de copy (framework)

```
HOOK (linha 1) → Parar o scroll
PROBLEMA ou DESEJO → Identificar a dor / sonho
SOLUÇÃO → Seu produto/serviço
PROVA → Número, depoimento, resultado
CTA → Ação clara e única
```

**Exemplos de hooks por temperatura:**
- Frio: "Você ainda faz X da forma errada..."
- Morno: "Por que tantas pessoas estão escolhendo Y..."
- Quente: "Seu desconto de 20% expira hoje"

### Regras de criativo

- [ ] Texto sobre imagem: máximo 20% da área (Meta penaliza alcance se ultrapassar)
- [ ] Primeira frase: gancho em até 125 caracteres (corte mobile)
- [ ] Sempre incluir CTA na copy e no botão
- [ ] Vídeos: primeiros 3 segundos decisivos — sem intro de marca longa
- [ ] Legendas em vídeos (85% dos usuários assistem sem som)
- [ ] Testar ao menos 3 variações de criativo por conjunto (A/B implícito)

### Checklist de publicação de criativo

- [ ] Dimensões corretas para o posicionamento escolhido
- [ ] Copy revisada (grafia, CTA, links)
- [ ] URL de destino testada (não pode dar 404)
- [ ] UTMs configurados na URL
- [ ] Pixel disparando na landing page de destino
- [ ] Prévia aprovada em mobile e desktop
- [ ] Categorias especiais verificadas (crédito, emprego, habitação, política?)

### Estrutura de teste de criativos

```
Fase 1 — Discovery (orçamento baixo, 3-5 dias)
  └── 1 conjunto de anúncios
      ├── Criativo A (imagem estática)
      ├── Criativo B (vídeo curto)
      └── Criativo C (carrossel)

Fase 2 — Scale (pausar perdedores, escalar vencedor)
  └── Replicar vencedor em novo conjunto com orçamento maior
```

---

## 4. Threads Ads

> **Oportunidade:** CPMs entre $3–8 (bem abaixo do Facebook e Instagram), competição mínima, e o placement está ativo por padrão. Quem testar cedo aprende antes da concorrência.

### O que é e como funciona

Threads Ads completou rollout global em 26 de janeiro de 2026. O placement "Threads Feed" aparece entre posts orgânicos no feed do app. O mesmo sistema de IA do Andromeda entrega os anúncios — mesma lógica de personalização do Facebook e Instagram.

**Ativação:** Ativo por padrão em novos campaigns via Advantage+ e Manual Placements. Para desativar, só via Manual Placements.

### Formatos suportados no Threads (março/2026)

| Formato | Suporte | Especificações |
|---------|---------|---------------|
| Imagem single | ✅ | 1:1 (1080×1080px) ou 4:5 (1080×1350px) |
| Vídeo single | ✅ | 4:5 (assets maiores são cortados e centralizados) |
| Carrossel (imagem) | ✅ | Somente imagens — vídeo em carrossel não suportado |
| Advantage+ catalog ads | ✅ | Imagens e carrosséis de imagem |
| Slideshow | ❌ | Não suportado |
| Stories / Reels | ❌ | Não existe no Threads |

**Regras de copy no Threads:**
- Texto primário: 80–160 caracteres
- Headline: máx 40 caracteres
- Hashtags e URLs **não funcionam** no texto primário
- Nem todos os CTAs disponíveis no Facebook/Instagram estão disponíveis no Threads

### Estratégia recomendada para Threads

**Posicionamento:** Ambiente conversacional e textual — diferente do visual do Instagram. Funciona melhor como **upper funnel (ToFu)** para alcance e reconhecimento enquanto o algoritmo aprende.

**Tom de voz:** Mais natural, menos "publicitário". O usuário do Threads espera conversa, não banner.

**Abordagem de teste:**
```
Fase 1 (primeiras 2–4 semanas):
  └── Ativar Threads dentro de campanha Advantage+ existente
  └── Monitorar CPM e CTR separados do Facebook/Instagram
  └── Usar criativos 4:5 (melhor para o feed mobile do Threads)

Fase 2 (após dados):
  └── Se CPM baixo + CTR razoável → manter ativo
  └── Se performance superior → criar conjunto dedicado para Threads
  └── Testar copy mais conversacional vs. copy padrão
```

### SOP — Ativar Threads em campanha existente

- [ ] Acessar conjunto de anúncios → Posicionamentos
- [ ] Confirmar que "Threads Feed" está incluído (ou adicionar via Manual Placements)
- [ ] Verificar se criativos têm versão 4:5 (obrigatório para boa entrega)
- [ ] Ajustar texto primário para máx 160 caracteres
- [ ] Remover hashtags e URLs do texto principal
- [ ] Adicionar coluna "Threads Feed" no relatório para monitorar separado
- [ ] Revisar após 7 dias: se CPM > 2× benchmark, pausar e avaliar criativo

### Checklist — Criativo nativo para Threads

- [ ] Formato 4:5 (1080×1350px)
- [ ] Copy curta e conversacional (tom de texto, não de banner)
- [ ] Sem hashtags no texto
- [ ] CTA claro no botão (verificar se está disponível para Threads)
- [ ] Visual funciona sem legenda (ambiente de leitura, não só scroll visual)

---

## 5. Pixel e Conversões

### Eventos padrão — hierarquia de valor

| Evento | Quando disparar | Prioridade |
|--------|----------------|------------|
| `Purchase` | Após compra confirmada | 🔴 Crítico |
| `InitiateCheckout` | Ao entrar no checkout | 🟠 Alto |
| `AddToCart` | Ao adicionar produto | 🟡 Médio |
| `Lead` | Formulário enviado | 🔴 Crítico |
| `CompleteRegistration` | Cadastro finalizado | 🟡 Médio |
| `ViewContent` | Página de produto/serviço | 🟢 Monitoramento |
| `PageView` | Todas as páginas | 🟢 Base |

### SOP — Configuração do Pixel

- [ ] Criar pixel no Gerenciador de Eventos (um por domínio/projeto)
- [ ] Instalar via GTM (recomendado) ou código direto no `<head>`
- [ ] Ativar **Conversions API (CAPI)** para eventos server-side
- [ ] Verificar domínio no Business Manager
- [ ] Configurar eventos prioritários (máx. 8 por domínio — iOS 14+)
- [ ] Testar com **Meta Pixel Helper** (extensão Chrome)
- [ ] Confirmar deduplicação entre Pixel e CAPI (usar `event_id`)

### Configuração de eventos de conversão

```javascript
// Exemplo — Purchase com valor
fbq('track', 'Purchase', {
  value: 297.00,
  currency: 'BRL',
  content_ids: ['produto-123'],
  content_type: 'product'
});
```

### Checklist pós-instalação do Pixel

- [ ] `PageView` disparando em todas as páginas
- [ ] `ViewContent` disparando nas páginas de produto/serviço
- [ ] `Lead` ou `Purchase` disparando corretamente na confirmação
- [ ] Nenhum evento duplicado (verificar na aba "Testar Eventos")
- [ ] Janela de atribuição configurada: 7d clique / 1d view (padrão)
- [ ] CAPI ativo e deduplicando corretamente

---

## 6. Orçamento e Lances

### Estratégias de lance por objetivo

| Objetivo | Estratégia recomendada | Quando usar |
|----------|----------------------|-------------|
| Aprendizado / Escala | Menor custo (sem limite) | Início de campanha, volume |
| Eficiência | Custo por resultado desejado | Quando CPA meta está definido |
| Controle total | Lance máximo | Margens apertadas |
| ROAS mínimo | ROAS desejado | E-commerce com metas claras |

### Regras de orçamento

**Orçamento mínimo por conjunto para aprendizado:**
- Conversões: `CPA meta × 50 ÷ 7 dias` por dia
- Tráfego/Leads: mínimo R$ 20/dia por conjunto
- Reconhecimento: mínimo R$ 10/dia

**Fase de aprendizado:**
- O Meta precisa de ~50 eventos de otimização em 7 dias
- Não editar campanha durante o aprendizado (reseta o algoritmo)
- Se sair de "Aprendizado" → Escalar gradualmente (max 20-30% por vez)

### SOP — Escalada de orçamento

- [ ] Aguardar saída da fase de aprendizado
- [ ] Verificar CPA/ROAS nos últimos 7 dias
- [ ] Aumentar orçamento em **no máximo 20-30%** por vez
- [ ] Aguardar 2-3 dias antes do próximo aumento
- [ ] Nunca duplicar orçamento de uma vez (reseta aprendizado)
- [ ] Alternativa: duplicar conjunto e aumentar no novo (não afeta o original)

### Distribuição de orçamento por funil (referência)

```
Orçamento Total
├── 60% → BoFu (Conversão / Retargeting quente)
├── 25% → MoFu (Leads / Retargeting morno)
└── 15% → ToFu (Reconhecimento / Tráfego frio)
```

> Ajustar conforme volume de audiência e estágio do negócio.

---

## 7. Relatórios e Métricas

### KPIs principais por objetivo

| Objetivo | KPI Primário | KPI Secundário | KPI de Saúde |
|----------|-------------|----------------|--------------|
| Conversões | CPA (Custo por Aquisição) | ROAS | CTR, CPM |
| Leads | CPL (Custo por Lead) | Taxa de conversão lead→venda | CTR |
| Tráfego | CPC (Custo por Clique) | CTR | CPM |
| Reconhecimento | CPM | Alcance | Frequência |
| Engajamento | CPE (Custo por Engajamento) | Taxa de engajamento | Alcance |

### Benchmarks Brasil (referência 2025)

| Métrica | Bom | Médio | Ruim |
|---------|-----|-------|------|
| CTR (Feed) | > 2% | 1-2% | < 1% |
| CPM (geral) | < R$ 15 | R$ 15-30 | > R$ 30 |
| CPC (link) | < R$ 1,50 | R$ 1,50-4 | > R$ 4 |
| Frequência | 1,5-3x | 3-5x | > 5x |
| Score de relevância | Alto | Médio | Baixo |

> Benchmarks variam por nicho, público e oferta. Use como referência, não como regra absoluta.

### Colunas padrão no Gerenciador de Anúncios

**Salvar como preset "Antigravity — Performance":**
```
Entrega → Nome, Status, Veiculação
Desempenho → Resultados, Custo por resultado, Valor conv., ROAS
Engajamento → Impressões, Alcance, Frequência, CTR (link), CPC (link)
Vídeo → Reproduções de 3s, ThruPlays, % assistido
```

### Cadência de análise e otimização

| Frequência | O que fazer |
|------------|-------------|
| **Diário** | Checar gastos vs. meta, pausar anúncios com CTR < 0.5% após R$ 50 gasto |
| **Semanal** | Analisar CPA/ROAS, pausar conjuntos ruins, testar novos criativos |
| **Quinzenal** | Revisar públicos, atualizar Custom Audiences, checar frequência |
| **Mensal** | Relatório completo, ajuste de estratégia, planejamento de verba |

### SOP — Análise semanal

- [ ] Abrir Gerenciador de Anúncios com janela dos últimos 7 dias
- [ ] Filtrar por status "Ativo"
- [ ] Ordenar por Custo por Resultado (crescente)
- [ ] Pausar anúncios com: CPM > 2× benchmark OU CTR < 0,5% com gasto relevante
- [ ] Identificar top 3 criativos — escalar ou criar variações
- [ ] Verificar frequência: se > 4 em público < 100K, trocar criativo ou ampliar público
- [ ] Registrar insights no log de otimizações (ver template abaixo)

### Template — Log de Otimizações

```markdown
## Semana: [DD/MM] a [DD/MM/AAAA]
**Responsável:** 
**Campanha(s) analisada(s):**

### Resultados
- Investimento total: R$
- Conversões / Leads:
- CPA / CPL:
- ROAS:

### Ações tomadas
- [ ] Pausa: [nome do anúncio] — motivo:
- [ ] Escala: [nome do conjunto] — de R$X para R$X
- [ ] Novo criativo: [descrição]

### Próximos passos
-
```

---

## 8. Checklists Rápidos

### ✅ Checklist — Antes de lançar qualquer campanha

- [ ] Objetivo correto para a fase do funil
- [ ] Nomenclatura seguindo padrão Antigravity
- [ ] Pixel instalado e disparando no destino
- [ ] UTMs configurados em todos os links
- [ ] Públicos criados e excluindo sobreposições
- [ ] Mínimo 3 criativos por conjunto
- [ ] Orçamento suficiente para aprendizado (50 eventos / 7d)
- [ ] Estratégia de lance definida
- [ ] Preview aprovado em mobile
- [ ] Pixel Helper validando eventos

### ✅ Checklist — Semanal de manutenção

- [ ] Analisar CPA/CPL/ROAS vs. metas
- [ ] Pausar criativos com desempenho abaixo do benchmark
- [ ] Verificar frequência de públicos pequenos
- [ ] Atualizar Custom Audiences (compradores, visitantes)
- [ ] Checar fase de aprendizado dos conjuntos
- [ ] Registrar no log de otimizações

### ✅ Checklist — Escala de campanha

- [ ] Campanha saiu da fase de aprendizado
- [ ] CPA/ROAS estável por 7+ dias
- [ ] Aumento de orçamento ≤ 30% por vez
- [ ] Aguardar 48-72h entre ajustes
- [ ] Monitorar CPM (aumento indica saturação de público)
- [ ] Preparar novos criativos antes de escalar

### ✅ Checklist — Diagnóstico de campanha ruim

- [ ] CTR baixo (< 1%) → problema no criativo ou público errado
- [ ] CPM alto → público pequeno ou pouco relevante
- [ ] CPC alto + CTR ok → landing page com problema
- [ ] Muitos cliques, pouca conversão → oferta ou LP ruim
- [ ] Frequência alta (> 5) → fadiga criativa, trocar anúncios
- [ ] Campanha em aprendizado há > 7 dias → orçamento baixo ou evento raro

---

*Playbook Antigravity — Meta Ads | DekMidia*  
*Versão 2.0 — Março/2026 | Inclui: Andromeda + Threads Ads | Revisar a cada 60 dias*
