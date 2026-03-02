---
title: Docs Google Ads
author: DekMidia
tags: [ads, docs]
---
# 📗 DEK-OS — Google Ads Playbook
> SOP Operacional | Versão 1.0 | DekMidia  
> ⚡ Atualizado para **Performance Max + Smart Bidding** — Março/2026

---

## Índice

1. [⚡ O Novo Paradigma do Google Ads](#0-o-novo-paradigma-do-google-ads)
2. [Estrutura de Conta e Campanhas](#1-estrutura-de-conta-e-campanhas)
3. [Palavras-chave e Segmentação](#2-palavras-chave-e-segmentação)
4. [Criativos e Formatos de Anúncio](#3-criativos-e-formatos-de-anúncio)
5. [Performance Max (PMax)](#4-performance-max-pmax)
6. [Rastreamento e Conversões](#5-rastreamento-e-conversões)
7. [Lances e Orçamento](#6-lances-e-orçamento)
8. [Relatórios e Métricas](#7-relatórios-e-métricas)
9. [Checklists Rápidos](#8-checklists-rápidos)

---

## 0. ⚡ O Novo Paradigma do Google Ads

> **O mais importante:** O Google Ads de 2026 é movido por Smart Bidding + IA generativa. Controle granular de palavras-chave perdeu espaço para sinais de audiência e criativos diversificados. O algoritmo converte — você alimenta ele com bons dados.

### O que mudou

O Google consolidou Performance Max como tipo de campanha padrão para quem quer cobertura total. Campanhas de Search seguem essenciais para capturar intenção, mas a lógica mudou: correspondência ampla + Smart Bidding supera correspondência exata com lance manual em contas com histórico de conversão.

**A mudança fundamental:**

| Antes | Era atual |
|-------|-----------|
| Correspondência exata + lance manual | Correspondência ampla + Smart Bidding |
| Muitos grupos de anúncios hipersegmentados | Grupos temáticos + RSA robusto |
| Controle de onde o anúncio aparece | Controle do que o algoritmo aprende |
| Segmentação de palavras-chave detalhada | Sinais de audiência + intenção de busca |
| Shopping Inteligente separado | Tudo consolidado no Performance Max |

### Impactos diretos na estratégia

**Palavras-chave:**
- Correspondência ampla com Smart Bidding CPA/ROAS funciona bem quando há conversões suficientes
- Exata e frase ainda são recomendadas para contas novas ou com orçamento limitado
- O relatório de Termos de Pesquisa é mais limitado que antes — negativos ficaram mais importantes
- Palavras-chave de marca do concorrente exigem estratégia dedicada

**Estrutura:**
- Performance Max é obrigatório para quem quer Google Shopping
- Search + PMax pode ter conflito — Search tem prioridade se cobrir o mesmo termo
- Campanhas com poucos dados devem usar "Maximizar Conversões" antes de CPA Alvo
- Consolidar campanhas > fragmentar (o algoritmo precisa de volume)

**Novidades ativas (2025-2026):**

| Recurso | O que faz | Ação |
|---------|-----------|------|
| **Demand Gen** | Anúncios visuais no YouTube, Discover e Gmail | Substitui campanhas Discovery |
| **AI Overview Ads** | Anúncios dentro dos resultados de IA do Google | Em expansão — monitorar |
| **Asset Generation (IA)** | Google gera textos e imagens para PMax | Revisar sempre antes de aprovar |
| **Broad Match + Smart Bidding** | Alcance máximo com controle de CPA/ROAS | Ativar após 50+ conversões/mês |

### SOP — Framework de lançamento para nova conta

```
Passo 1 — Configuração base (Semana 1)
  └── Instalar Google Tag / GTM
  └── Configurar ação de conversão principal
  └── Verificar disparo da conversão
  └── Vincular GA4 + Search Console + Merchant Center (se e-com)

Passo 2 — Campanha Search (Semana 1-4)
  └── Correspondência Exata + Frase
  └── CPC Manual ou Maximizar Cliques (início)
  └── 2-3 grupos temáticos por campanha
  └── RSA com 10+ títulos e 4 descrições
  └── Negativos base configurados

Passo 3 — Coleta de dados (Semana 2-6)
  └── Meta: 50 conversões em 30 dias antes de Smart Bidding
  └── Adicionar negativos a partir do relatório de termos
  └── Testar variações de anúncio

Passo 4 — Ativar Smart Bidding (após 50+ conversões)
  └── Mudar para "Maximizar Conversões" primeiro
  └── Após 2 semanas estável → CPA Alvo ou ROAS Alvo

Passo 5 — Expandir com Performance Max (Mês 2+)
  └── Criar PMax com ativos robustos
  └── Adicionar sinais de audiência fortes
  └── Monitorar canibalização com Search
```

### Checklist — Adaptação ao paradigma atual

- [ ] Histórico de conversão ativo (mínimo 30 conversões/mês para Smart Bidding)
- [ ] Google Tag ou GTM instalado e validado
- [ ] Ação de conversão principal configurada (não mais de 3 por conta)
- [ ] Relatório de Termos de Pesquisa sendo revisado semanalmente
- [ ] Negativos atualizados a cada semana
- [ ] RSA com classificação "Bom" ou "Excelente" em todos os grupos
- [ ] Performance Max com vídeo (nunca deixar o Google criar automaticamente)

---

## 1. Estrutura de Conta e Campanhas

### Hierarquia da conta

```
Conta Google Ads
└── Campanha (orçamento, rede, estratégia de lance)
    └── Grupo de Anúncios (tema/produto)
        ├── Palavras-chave
        └── Anúncios (RSA)
```

### Tipos de campanha por objetivo

| Objetivo | Tipo de campanha | Rede | Quando usar |
|----------|-----------------|------|-------------|
| Capturar intenção de compra | Search | Pesquisa | Sempre |
| Reconhecimento visual | Display | Sites parceiros | Branding/Retargeting |
| Produto em vídeo | Vídeo (YouTube) | YouTube | Demonstração |
| E-commerce | Performance Max | Todos os canais | Com feed de produtos |
| Geração de demanda visual | Demand Gen | YouTube/Discover/Gmail | ToFu visual |
| Negócio local | Campanhas Locais | Maps + Pesquisa | Loja física |

### Nomenclatura padrão Antigravity

```
[PROJETO]_[TIPO]_[FUNIL]_[TEMA]_[DATA]

Exemplos:
DEKMIDIA_SEARCH_BOFU_DEPILACAO_2026-03
DEKMIDIA_PMAX_ALLFU_ESTETICA_2026-03
DEKMIDIA_DISPLAY_TOFU_RETARGETING_2026-03
DEKMIDIA_VIDEO_TOFU_BRANDING_2026-03
```

**Legenda:**
- `SEARCH / PMAX / DISPLAY / VIDEO` = tipo de campanha
- `TOFU / MOFU / BOFU / ALLFU` = fase do funil
- `TEMA` = produto, serviço ou segmento principal

### SOP — Criação de nova campanha

- [ ] Definir objetivo e tipo de campanha alinhado à fase do funil
- [ ] Nomear seguindo padrão Antigravity
- [ ] Configurar rede de veiculação (desmarcar Display em campanhas Search)
- [ ] Definir segmentação geográfica (cidade, raio ou estado)
- [ ] Configurar idioma: Português + Inglês (cobre buscas mistas)
- [ ] Selecionar estratégia de lance adequada ao histórico da conta
- [ ] Definir orçamento diário realista (mínimo 3× CPC estimado × cliques/dia desejados)
- [ ] Configurar agenda de anúncios se negócio tiver horário restrito
- [ ] Ativar extensões/ativos: sitelinks, frases de destaque, chamada, local
- [ ] Associar ação de conversão antes de publicar

### Estrutura recomendada por tipo de negócio

**Negócio local (clínica, salão, estética):**
```
Campanha 1: Search — Serviço principal — Exata/Frase — CPA Alvo
Campanha 2: Search — Marca + concorrentes — Exata — CPC Manual
Campanha 3: Display — Retargeting 30d — CPM/Conversões
Campanha 4: PMax — (após 60 dias com histórico)
```

**E-commerce:**
```
Campanha 1: Search — Marca — Exata
Campanha 2: Search — Categoria — Ampla + Smart Bidding
Campanha 3: Performance Max — Feed completo
Campanha 4: Demand Gen — ToFu visual
```

---

## 2. Palavras-chave e Segmentação

### Tipos de correspondência

| Tipo | Sintaxe | Exemplo | Aciona buscas |
|------|---------|---------|---------------|
| Ampla | `depilação laser` | depilação laser | "remover pelo", "depilar sem dor SP" |
| Frase | `"depilação a laser"` | "depilação a laser" | "depilação a laser SP", "melhor depilação a laser" |
| Exata | `[depilação a laser SP]` | [depilação a laser SP] | "depilação laser SP", variantes próximas |

> ⚠️ **Correspondência Ampla Modificada foi descontinuada em 2021** e fundida com Frase. Não usar `+palavra`.

### Estratégia de correspondência por estágio

| Estágio da conta | Estratégia recomendada |
|-----------------|----------------------|
| Novo (< 30 conversões) | Exata + Frase + CPC Manual |
| Crescimento (30-100 conv.) | Frase + início de Ampla em grupos separados |
| Escala (100+ conv./mês) | Ampla + Smart Bidding CPA/ROAS Alvo |

### SOP — Pesquisa e seleção de palavras-chave

```
Passo 1 — Mapeamento inicial
  └── Listar serviços/produtos principais
  └── Pensar nos termos como o cliente pesquisaria
  └── Usar Planejador de Palavras-chave para volume e CPC estimado

Passo 2 — Classificar por intenção
  └── Transacional ("contratar", "preço", "agendar") → Exata/Frase (BoFu)
  └── Informacional ("como funciona", "o que é") → Excluir ou Display
  └── Navegacional (marca do concorrente) → Campanha separada

Passo 3 — Configurar negativos antes de lançar
  └── Lista global: grátis, gratuito, curso, emprego, vagas, tutorial,
      como fazer, DIY, faculdade, estágio, salário
  └── Lista por nicho (ver abaixo)

Passo 4 — Monitorar Relatório de Termos semanalmente
  └── Adicionar termos irrelevantes como negativos
  └── Adicionar termos relevantes como novas palavras-chave
```

### Negativos essenciais por nicho

**Beleza & Estética:**
```
grátis, gratuito, curso, formação, como fazer, DIY,
faculdade, escola, apostila, aprender, emprego, vagas,
reclamação, reclamar, reclamações
```

**Saúde & Clínicas:**
```
grátis, plano de saúde, convênio (se não aceitar),
remédio, bula, comprar, farmácia, receita, caseiro
```

**Serviços B2B:**
```
trainee, estágio, emprego, vagas, salário, freelancer (se não for),
curso, tutorial, grátis, como fazer
```

### Configuração de listas de negativos

- [ ] Criar "Lista Global Antigravity" (aplica em todas as campanhas)
- [ ] Criar "Lista por Nicho — [nome do cliente]"
- [ ] Aplicar listas globais no nível de conta (Ferramentas → Listas de palavras-chave negativas)
- [ ] Revisar termos de pesquisa semanalmente e atualizar listas

### Segmentação geográfica

| Opção | Quando usar |
|-------|-------------|
| Cidade específica | Negócio local com raio de atendimento definido |
| Raio em km | Clínicas, salões — segmenta por proximidade física |
| Estado | Serviços que atendem regionalmente |
| Brasil | E-commerce, serviços digitais, SaaS |

> ⚠️ **Importante:** usar "Presença física confirmada" — não "Presença ou interesse" — para negócios locais que dependem de visita presencial.

### Segmentação de audiência (sobreposição)

| Tipo | Função no Google Ads | Uso recomendado |
|------|---------------------|-----------------|
| In-Market | Usuários pesquisando ativamente | Ajuste de lance +20-30% |
| Remarketing (site) | Visitantes das últimas janelas | Campanha Display dedicada |
| Lista de clientes | CRM uploadado | Exclusão ou lances diferenciados |
| Audiências personalizadas | Palavras-chave que pesquisaram | Sinal para Display/PMax |

---

## 3. Criativos e Formatos de Anúncio

### Anúncio Responsivo de Pesquisa (RSA)

**Especificações:**

| Elemento | Quantidade | Máx. de caracteres |
|---------|------------|-------------------|
| Títulos | 3 a 15 | 30 por título |
| Descrições | 2 a 4 | 90 por descrição |
| Caminho de exibição | 2 campos | 15 por campo |

**Classificação de força:**
- 🔴 **Ruim** — menos de 3 títulos únicos → Urgente: adicionar mais títulos
- 🟡 **Boa** — diversidade razoável → Melhorar com variações diferentes
- 🟢 **Excelente** — alta diversidade e relevância → Manter e testar novas variações

### SOP — Criação de RSA de alta performance

```
Passo 1 — Mapear intenções do grupo
  └── Qual é o problema que o usuário quer resolver?
  └── Qual é o diferencial do serviço/produto?

Passo 2 — Escrever títulos por categoria (não repetir conceito)
  └── 3 títulos com palavra-chave principal (ex: "Depilação a Laser SP")
  └── 3 títulos com benefício (ex: "Resultados em 3 Sessões")
  └── 3 títulos com prova social (ex: "+5.000 Clientes Satisfeitos")
  └── 3 títulos com CTA ou urgência (ex: "Agende Sua Avaliação Grátis")
  └── 2 títulos com diferencial (ex: "Sem Dor | Tecnologia Importada")

Passo 3 — Escrever descrições
  └── Desc 1: benefício principal + CTA
  └── Desc 2: diferencial + prova social ou urgência
  └── Desc 3 e 4: variações com outros ângulos

Passo 4 — Configurar caminhos de exibição
  └── Caminho 1: categoria (ex: depilacao)
  └── Caminho 2: especificação (ex: a-laser) ou local (ex: sao-paulo)
```

### Checklist — RSA antes de publicar

- [ ] Mínimo 10 títulos únicos (conceitos diferentes, não só variações de palavras)
- [ ] Mínimo 3 descrições
- [ ] Palavra-chave principal aparece em pelo menos 1 título
- [ ] Pelo menos 1 CTA claro ("Agende", "Saiba Mais", "Solicite Orçamento")
- [ ] Nenhum título repete o mesmo conceito do anterior
- [ ] Caminho de exibição configurado e relevante
- [ ] Classificação de força "Boa" ou "Excelente"

### Formatos Display e Demand Gen

| Formato | Dimensão | Aspect Ratio | Uso recomendado |
|---------|----------|-------------|----------------|
| Paisagem | 1200×628px | 1.91:1 | Display padrão, Demand Gen |
| Quadrado | 1200×1200px | 1:1 | Display + Demand Gen |
| Vertical | 960×1200px | 4:5 | Mobile-first |
| Logo quadrado | 1200×1200px | 1:1 | Obrigatório PMax/Display |
| Logo paisagem | 1200×300px | 4:1 | Complementar |

### Formatos de vídeo (YouTube / Demand Gen)

| Formato | Pulável? | Duração | Cobrança |
|---------|----------|---------|---------|
| In-stream pulável | Sim (após 5s) | 15s–3min | CPV (30s assistidos ou interação) |
| In-stream não pulável | Não | Máx. 15s | CPM |
| Bumper Ad | Não | Máx. 6s | CPM |
| In-feed (Discovery) | N/A | Qualquer | CPC (clique para assistir) |
| Shorts Ad | Sim/Não | Até 60s | Varia |

**Regra dos primeiros 5 segundos:**  
O botão "Pular" aparece em 5s — o gancho precisa estar nesse trecho. Marca, problema ou oferta devem aparecer antes do skip.

### Checklist — Criativo de vídeo

- [ ] Marca ou produto aparece nos primeiros 5 segundos
- [ ] Hook claro antes do botão de pular
- [ ] CTA verbal e visual no final
- [ ] Legenda/subtítulo ativo (maioria assiste sem som no mobile)
- [ ] Versão vertical (9:16) criada para Shorts
- [ ] Duração adequada: Bumper ≤ 6s | In-stream ≤ 30s para maior retenção

---

## 4. Performance Max (PMax)

### Quando usar PMax

✅ E-commerce com feed de produtos no Merchant Center  
✅ Conta com histórico de 50+ conversões/mês  
✅ Negócio que quer cobertura em todos os canais  
✅ Geração de leads com volume comprovado  

❌ Conta nova sem histórico de conversão  
❌ Orçamento abaixo de R$ 80/dia (dados insuficientes)  
❌ Quando precisar de controle total sobre onde os anúncios aparecem  
❌ Campanhas de marca (use Search dedicada)  

### Estrutura de grupos de ativos

```
Campanha PMax
├── Grupo de Ativos 1: [Produto/Serviço A]
│   ├── Imagens (paisagem + quadrada obrigatórias)
│   ├── Logo (quadrado obrigatório)
│   ├── Vídeo (SEMPRE adicionar — nunca deixar o Google criar)
│   ├── 3-5 Títulos (máx. 30 chars)
│   ├── 1-5 Títulos longos (máx. 90 chars)
│   ├── 2-5 Descrições (máx. 90 chars)
│   └── Sinais de audiência
└── Grupo de Ativos 2: [Produto/Serviço B]
    └── ...
```

### Requisitos mínimos vs. recomendados de ativos

| Ativo | Mínimo | Recomendado |
|-------|--------|-------------|
| Imagens paisagem | 1 | 5-10 |
| Imagens quadradas | 1 | 5-10 |
| Imagens verticais | 0 | 3-5 |
| Logos | 1 | 2 (quadrado + paisagem) |
| Vídeos | 0 (Google cria) | 2-5 (nunca deixar o Google criar) |
| Títulos | 3 | 8-10 |
| Títulos longos | 1 | 3-5 |
| Descrições | 2 | 4-5 |

> ⚠️ **Atenção:** sem vídeo, o Google cria automaticamente a partir das imagens e textos — raramente com qualidade aceitável. Sempre subir ao menos 1 vídeo.

### Sinais de audiência — prioridade

| Sinal | Qualidade | Como criar |
|-------|-----------|-----------|
| Lista de clientes (CRM) | 🔴 Alta | Upload de e-mail/telefone |
| Visitantes do site (remarketing) | 🔴 Alta | Google Tag com janela 30-90d |
| Segmento personalizado (URLs) | 🟡 Média | URLs de concorrentes e parceiros |
| Segmento personalizado (buscas) | 🟡 Média | Palavras-chave intencionais |
| In-Market relevante | 🟢 Base | Categorias do Google |

> Sinais **não segmentam** — aceleram o aprendizado. O algoritmo pode ir além deles.

### Conflito PMax vs. Search

Quando PMax e Search competem pelo mesmo termo:
- **Search tem prioridade** para termos cobertos por suas palavras-chave
- **PMax ganha** para termos sem cobertura em Search
- Usar campanhas Search para termos estratégicos garante controle

### SOP — Configuração de PMax

- [ ] Garantir mínimo de 50 conversões nos últimos 30 dias antes de criar
- [ ] Criar grupo de ativos por tema/produto (não misturar categorias distintas)
- [ ] Subir imagens em alta resolução (mínimo 1200px)
- [ ] Adicionar vídeo próprio (nunca deixar para geração automática)
- [ ] Configurar sinais de audiência com lista de clientes e remarketing
- [ ] Adicionar segmentos personalizados com palavras-chave e URLs de concorrentes
- [ ] Configurar exclusões de URL (páginas de carreira, imprensa, etc.)
- [ ] Definir estratégia de lance: Maximizar Conversões (início) → CPA Alvo (após aprendizado)
- [ ] Orçamento mínimo: R$ 80/dia
- [ ] Aguardar 2-4 semanas de aprendizado antes de julgar resultados

### Checklist — Auditoria de PMax ativo

- [ ] Classificação de força dos ativos está "Boa" ou "Excelente"?
- [ ] Vídeo ativo (não gerado automaticamente pelo Google)?
- [ ] Sinais de audiência incluem remarketing e lista de clientes?
- [ ] CPA/ROAS está estável há 14+ dias?
- [ ] Há pelo menos 50 conversões nos últimos 30 dias?
- [ ] Grupos de ativos separados por tema (não tudo num grupo só)?
- [ ] Excluindo termos de busca irrelevantes (via suporte ou nível MCC)?

---

## 5. Rastreamento e Conversões

### Hierarquia de ações de conversão

| Evento | Quando disparar | Prioridade |
|--------|----------------|------------|
| `purchase` | Após compra confirmada | 🔴 Crítico |
| `submit_lead_form` | Formulário enviado | 🔴 Crítico |
| `book_appointment` | Agendamento concluído | 🔴 Crítico |
| `begin_checkout` | Entrada no checkout | 🟠 Alto |
| `add_to_cart` | Produto adicionado | 🟡 Médio |
| `phone_call` | Clique no número / ligação | 🟠 Alto |
| `page_view` | Todas as páginas | 🟢 Monitoramento |

> ⚠️ **Regra fundamental:** escolha 1-2 conversões primárias por conta. Múltiplas conversões primárias confundem o Smart Bidding. Demais eventos ficam como "secundários" (apenas monitoramento).

### SOP — Configuração do Google Tag

```html
<!-- Adicionar no <head> de TODAS as páginas -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXXX');
</script>
```

**Evento de conversão (formulário enviado):**
```javascript
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/YYYYYYYYYYYY',
  'value': 1.0,
  'currency': 'BRL',
  'transaction_id': '' // opcional, evita duplicatas
});
```

> **Recomendação:** usar Google Tag Manager (GTM) para gerenciar todas as tags sem precisar de acesso ao código em cada alteração.

### Checklist — Instalação e validação

- [ ] Google Tag instalado em todas as páginas (via GTM ou direto no `<head>`)
- [ ] Ação de conversão principal criada e configurada
- [ ] Evento disparando na página de confirmação (não na de formulário)
- [ ] Testar com **Tag Assistant** (extensão Chrome) ou modo de Prévia do GTM
- [ ] Verificar na aba "Conversões" do Google Ads: status "Registrando conversões"
- [ ] Janela de conversão definida: 30 dias (padrão) ou maior para ciclos de venda longos
- [ ] Modelo de atribuição: "Baseado em dados" se disponível, senão "Último clique"
- [ ] Vincular Google Analytics 4 à conta de Ads
- [ ] Importar conversões do GA4 como conversões secundárias (opcional)

### Checklist pós-instalação

- [ ] `page_view` disparando em todas as páginas
- [ ] Evento de conversão principal disparando apenas na confirmação
- [ ] Sem evento duplicado (verificar na aba "Diagnóstico de conversão")
- [ ] Nenhuma conversão com status "Sem atividade recente" após tráfego
- [ ] Ligações rastreadas (se telefone for canal importante)
- [ ] Rastreamento de visitas à loja física ativo (se aplicável)

---

## 6. Lances e Orçamento

### Estratégias de lance por fase

| Fase da conta | Estratégia recomendada | Quando usar |
|--------------|----------------------|-------------|
| Início (< 30 conv.) | Maximizar Cliques | Gerar volume inicial de dados |
| Transição (30-50 conv.) | Maximizar Conversões | Primeiro Smart Bidding sem meta |
| Escala (50+ conv.) | CPA Alvo | Custo por resultado definido |
| E-commerce | ROAS Alvo | Receita por investimento definido |
| Branding | Parcela de Impressões Alvo | Dominar posição para marca |
| Controle total | CPC Manual | Conta nova, orçamento muito restrito |

### Período de aprendizado

- **Duração:** 2-4 semanas após mudança de estratégia
- **Meta do Google:** 50 conversões em 30 dias para sair do aprendizado
- **Regra de ouro:** não faça alterações significativas durante o aprendizado
- Se travar em aprendizado > 3 semanas → problema de volume. Aumentar orçamento ou afrouxar segmentação.

### Regras de orçamento

**Orçamento mínimo diário por tipo de campanha:**

| Campanha | Orçamento mínimo diário |
|---------|------------------------|
| Search (CPC Manual) | R$ 30-50 |
| Search (Smart Bidding CPA) | `CPA meta ÷ 10` por dia |
| Display (Retargeting) | R$ 20-30 |
| Performance Max | R$ 80-150 |
| YouTube (CPV) | R$ 50+ |

**Cálculo de orçamento para CPA Alvo:**
```
Orçamento diário ideal = CPA meta × 2 a 3
Exemplo: CPA meta R$ 80 → orçamento de R$ 160-240/dia
```

### SOP — Escalada de orçamento

- [ ] Aguardar saída do período de aprendizado (mín. 2 semanas estáveis)
- [ ] Verificar CPA/ROAS nos últimos 14 dias vs. meta
- [ ] Aumentar orçamento em **no máximo 20-30%** por vez
- [ ] Aguardar 5-7 dias antes do próximo aumento
- [ ] Nunca dobrar orçamento de uma vez (reseta aprendizado do Smart Bidding)
- [ ] Monitorar CPM e CPC após aumento (alta indica saturação ou competição)
- [ ] Preparar novos ativos/criativos antes de escalar

### Distribuição de orçamento por funil (referência)

```
Orçamento Total
├── 50% → Search BoFu (captura de intenção direta)
├── 25% → Performance Max (escala automatizada)
├── 15% → Display / Demand Gen (retargeting + ToFu visual)
└── 10% → Search Marca (proteção de marca própria)
```

> Ajustar conforme volume de busca e maturidade da conta.

### Ajustes de lance por segmento

| Segmento | Ajuste recomendado | Quando aplicar |
|---------|-------------------|---------------|
| Mobile | -10% a -30% | Se conversão mobile for inferior ao desktop |
| Tablet | -20% a -50% | Geralmente baixa conversão |
| Horário de pico | +10% a +20% | Quando há dados de hora com CPA melhor |
| Localização próxima | +15% a +25% | Negócios locais em raio menor |
| In-Market relevante | +15% a +30% | Audiência com intenção de compra |
| Remarketing | +20% a +50% | Visitantes quentes |

---

## 7. Relatórios e Métricas

### KPIs principais por objetivo

| Objetivo | KPI Primário | KPI Secundário | KPI de Saúde |
|----------|-------------|----------------|--------------|
| Conversões | CPA (Custo por Aquisição) | ROAS / Taxa de Conv. | CTR, QS |
| Leads | CPL (Custo por Lead) | Taxa de conv. lead→venda | CTR, CPC |
| Tráfego | CPC (Custo por Clique) | CTR | Bounce Rate (GA4) |
| Branding | CPM | Parcela de Impressões | Frequência |
| E-commerce | ROAS | Receita Total | CPC, Conv. Rate |

### Benchmarks Brasil — Google Ads (2025-2026)

| Métrica | Bom | Médio | Ruim |
|---------|-----|-------|------|
| CTR Search | > 5% | 2-5% | < 2% |
| CTR Display | > 0.5% | 0.2-0.5% | < 0.2% |
| CPC Search (beleza/estética) | < R$ 2,50 | R$ 2,50-5,00 | > R$ 5,00 |
| Quality Score | 7-10 | 4-6 | 1-3 |
| Taxa de Conversão | > 5% | 2-5% | < 2% |
| Parcela de Impressões (Search) | > 70% | 40-70% | < 40% |

> Benchmarks variam por nicho, localização e sazonalidade. Use como referência, não como regra absoluta.

### Quality Score — componentes e ação

| Componente | Peso | Status ruim → Ação |
|-----------|------|--------------------|
| CTR esperado | ~55% | Reescrever títulos, incluir palavra-chave no título |
| Relevância do anúncio | ~22% | Alinhar kw → anúncio → landing page |
| Experiência na LP | ~22% | Melhorar velocidade, mobile e conteúdo da página |

**Impacto no custo:**
```
Ad Rank = Lance × Quality Score × Impacto dos formatos

QS 10 com R$ 2,00 pode vencer QS 5 com R$ 3,50
→ Melhorar QS reduz custo sem precisar aumentar lance
```

### Cadência de análise e otimização

| Frequência | O que fazer |
|-----------|-------------|
| **Diário** | Checar gastos vs. orçamento, alertas de desempenho |
| **Semanal** | Relatório de Termos de Pesquisa + negativos, análise de RSA, CPA/ROAS |
| **Quinzenal** | Leilão (Auction Insights), ajustes de lance, revisão de extensões |
| **Mensal** | Relatório completo, estratégia de lance, revisão de estrutura e orçamento |

### SOP — Análise semanal

- [ ] Abrir conta com janela dos últimos 7 dias
- [ ] Verificar gasto total vs. orçamento planejado
- [ ] Acessar Relatório de Termos de Pesquisa → adicionar negativos
- [ ] Analisar performance por anúncio (RSA) → pausar "Ruim" com gasto relevante
- [ ] Checar CTR por palavra-chave → pausar abaixo de 1% com QS < 4
- [ ] Verificar Quality Score das palavras-chave principais
- [ ] Conferir conversões: está registrando corretamente?
- [ ] Verificar Parcela de Impressões — se < 50%, avaliar lance ou orçamento
- [ ] Registrar insights no log de otimizações

### Template — Log de Otimizações

```markdown
## Semana: [DD/MM] a [DD/MM/AAAA]
**Responsável:** 
**Conta(s) analisada(s):**

### Resultados
- Investimento total: R$
- Conversões / Leads:
- CPA / CPL:
- ROAS:
- CTR médio Search:

### Ações tomadas
- [ ] Negativos adicionados: [termos]
- [ ] Pausa: [palavra-chave ou anúncio] — motivo:
- [ ] Ajuste de lance: [campanha] — de R$X para R$X
- [ ] Novo anúncio/criativo: [descrição]

### Próximos passos
-
```

---

## 8. Checklists Rápidos

### ✅ Checklist — Antes de lançar qualquer campanha

- [ ] Google Tag / GTM instalado e validado
- [ ] Ação de conversão configurada e disparando corretamente
- [ ] Nomenclatura seguindo padrão Antigravity
- [ ] Segmentação geográfica configurada ("Presença confirmada" para negócios locais)
- [ ] Rede de Display desmarcada em campanhas Search
- [ ] Negativos globais aplicados antes do lançamento
- [ ] RSA com classificação "Boa" ou "Excelente"
- [ ] Mínimo 2 anúncios por grupo de anúncios
- [ ] Extensões configuradas: sitelinks, frases de destaque, chamada
- [ ] Orçamento suficiente (mínimo 3× CPC estimado × volume desejado)
- [ ] Preview dos anúncios validado em mobile e desktop
- [ ] Landing page testada (velocidade < 3s, formulário funcionando)

### ✅ Checklist — Semanal de manutenção

- [ ] Relatório de Termos de Pesquisa revisado
- [ ] Novos negativos adicionados
- [ ] Anúncios com CTR < 1% e gasto relevante → pausar ou reescrever
- [ ] Quality Score das principais palavras-chave verificado
- [ ] CPA/ROAS vs. metas analisado
- [ ] Parcela de impressões verificada
- [ ] Conversões registrando corretamente
- [ ] Log de otimizações atualizado

### ✅ Checklist — Escala de campanha

- [ ] Mínimo 50 conversões no último mês
- [ ] Campanha fora do período de aprendizado (14+ dias estáveis)
- [ ] CPA/ROAS estável e dentro da meta
- [ ] Aumento de orçamento ≤ 30% por vez
- [ ] Aguardar 5-7 dias entre ajustes
- [ ] Parcela de impressões < 70% (há espaço de escala)
- [ ] Novos ativos/criativos preparados antes de escalar
- [ ] Monitorar CPC e CPM após aumento (alta indica saturação)

### ✅ Checklist — Performance Max (pré-lançamento)

- [ ] Conta com 50+ conversões/mês
- [ ] Orçamento mínimo R$ 80/dia reservado
- [ ] Imagens em alta qualidade (paisagem + quadrada obrigatórias)
- [ ] Vídeo próprio adicionado (nunca deixar geração automática)
- [ ] Logo em alta resolução (quadrado + paisagem)
- [ ] Sinais de audiência: remarketing + lista de clientes configurados
- [ ] Grupos de ativos separados por tema/produto
- [ ] Exclusões de URL configuradas (carreira, imprensa, etc.)
- [ ] Campanha Search ativa cobrindo termos estratégicos (Search tem prioridade)

### ✅ Checklist — Diagnóstico de campanha com baixa performance

- [ ] CTR baixo (< 1% Search) → problema no anúncio ou palavra-chave errada
- [ ] CPC muito alto → QS baixo ou concorrência alta — melhorar relevância
- [ ] Muitos cliques, poucas conversões → landing page ou oferta com problema
- [ ] QS < 5 → revisar tríade: kw ↔ anúncio ↔ landing page
- [ ] Campanha em aprendizado > 3 semanas → orçamento baixo ou evento raro
- [ ] Impressões baixas → lance muito baixo, negativos demais ou segmentação restrita
- [ ] ROAS abaixo da meta → avaliar valor das conversões, otimizar LP, revisar produtos

---

*Playbook Antigravity — Google Ads | DekMidia*  
*Versão 1.0 — Março/2026 | Inclui: Performance Max + Smart Bidding + Demand Gen | Revisar a cada 60 dias*
