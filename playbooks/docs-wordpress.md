---
title: Docs Wordpress
author: DekMidia
tags: [docs]
---
# 📘 DEK-OS — WordPress Playbook
> SOP Operacional | Versão 1.0 | DekMidia  
> ⚡ Atualizado para **Full Site Editing + Performance + LGPD** — Março/2026

---

## Índice

1. [⚡ O Núcleo do Ecossistema DEK-OS](#0-o-nucleo-do-ecossistema-dek-os)
2. [Infraestrutura e Hospedagem](#1-infraestrutura-e-hospedagem)
3. [Tema, Elementor e Construtores](#2-tema-elementor-e-construtores)
4. [Stack de Plugins Essenciais](#3-stack-de-plugins-essenciais)
5. [SEO On-Page e Arquitetura](#4-seo-on-page-e-arquitetura)
6. [Performance e Core Web Vitals](#5-performance-e-core-web-vitals)
7. [Segurança, Hardening e Backups](#6-seguranca-hardening-e-backups)
8. [Rastreamento e Integrações de Marketing](#7-rastreamento-e-integracoes-de-marketing)
9. [LGPD e Conformidade](#8-lgpd-e-conformidade)
10. [Fluxo Editorial e Conteúdo](#9-fluxo-editorial-e-conteudo)
11. [Manutenção e Atualizações](#10-manutencao-e-atualizacoes)
12. [Checklists Rápidos](#11-checklists-rapidos)

---

## 0. ⚡ O Núcleo do Ecossistema DEK-OS

> **O mais importante:** O WordPress no projeto Antigravity não é só um site — é o hub central de conversão, SEO e rastreamento. Todo tráfego pago, orgânico e de redes sociais converge aqui. A configuração correta desde o início define o teto de crescimento do projeto.

### O papel do WordPress

O DEK-OS usa o WordPress como sistema operacional da presença digital: publica conteúdo, captura leads, distribui para campanhas e alimenta os pixels de rastreamento. Uma instalação mal configurada desperdiça budget de tráfego pago e invisibiliza conteúdo no Google.

**A divisão de responsabilidades:**

| Camada | Responsabilidade | Ferramenta |
|--------|-----------------|------------|
| Publicação e conteúdo | Posts, páginas, landing pages | WordPress + Elementor |
| Visibilidade orgânica | SEO on-page e estrutura | Yoast / RankMath |
| Captura de leads | Formulários e pop-ups | Elementor Forms / WPForms |
| Rastreamento | Pixels, GA4 e eventos | GTM + PixelYourSite |
| Performance | Velocidade e Core Web Vitals | WP Rocket + Cloudflare |
| Segurança | Firewall, backup, 2FA | Wordfence + UpdraftPlus |
| Conformidade | LGPD e consentimento | CookieYes + política |

### O que mais impacta resultados no WordPress de 2026

**Performance:**
- Core Web Vitals virou fator direto de ranqueamento e afeta Quality Score de páginas usadas em anúncios
- LCP > 2.5s penaliza SEO e aumenta bounce rate de tráfego pago
- O Google prioriza páginas com boa experiência em mobile

**Estrutura:**
- Permalinks e arquitetura de URLs definem rastreabilidade e autoridade de página
- Schema Markup (dados estruturados) gera rich snippets que aumentam CTR orgânico
- Sitemap bem configurado acelera indexação de novo conteúdo

**Novidades ativas (2025-2026):**

| Recurso | O que muda | Ação |
|---------|-----------|------|
| **Full Site Editing (FSE)** | Editor de blocos controla header, footer e templates globais | Avaliar migração gradual |
| **WordPress 6.x** | Performance nativa melhorada, lazy loading aprimorado | Manter atualizado |
| **Interactivity API** | Blocos interativos sem JS pesado | Usar em novos projetos |
| **Core Web Vitals INP** | Substituiu FID como métrica de interatividade | Monitorar mensalmente |

### SOP — Framework de lançamento de novo site

```
Passo 1 — Infraestrutura (Dia 1)
  └── Contratar hospedagem com PHP 8.2+, SSD NVMe, SSL gratuito
  └── Registrar domínio e apontar para Cloudflare
  └── Criar banco de dados MySQL dedicado
  └── Instalar WordPress e configurar wp-config.php

Passo 2 — Configuração base (Dia 1-2)
  └── Definir permalinks: /%postname%/
  └── Instalar tema leve (Hello Elementor ou Astra)
  └── Instalar e configurar Elementor
  └── Remover plugins padrão desnecessários (Hello Dolly, Akismet*)

Passo 3 — Stack de plugins (Dia 2-3)
  └── SEO: RankMath ou Yoast SEO
  └── Cache/Performance: WP Rocket ou LiteSpeed Cache
  └── Segurança: Wordfence + UpdraftPlus
  └── Rastreamento: Google Site Kit ou MonsterInsights + PixelYourSite

Passo 4 — Conteúdo e estrutura (Semana 1)
  └── Criar páginas essenciais: Home, Sobre, Serviços, Contato
  └── Configurar menus de navegação
  └── Montar header e footer globais no Elementor
  └── Configurar formulários de captura e testar envios

Passo 5 — Rastreamento e conformidade (Semana 1)
  └── Instalar GTM e configurar GA4 + Pixel Meta
  └── Configurar banner de consentimento LGPD
  └── Publicar Política de Privacidade e Cookies
  └── Verificar site no Google Search Console e enviar sitemap

Passo 6 — Go live e monitoramento (Semana 2)
  └── Testar velocidade: PageSpeed Insights (meta: 90+ mobile)
  └── Testar formulários de contato em produção
  └── Verificar disparos de conversão no Meta e GA4
  └── Configurar alertas de uptime (UptimeRobot ou similar)
```

### Checklist — Validação pré-lançamento

- [ ] HTTPS ativo e forçado em todas as URLs
- [ ] Redirects www → sem www (ou vice-versa) configurado
- [ ] Permalinks definidos como `/%postname%/`
- [ ] Sitemap XML gerado e enviado ao Search Console
- [ ] Google Analytics 4 registrando sessões corretamente
- [ ] Pixel Meta disparando PageView e eventos de formulário
- [ ] Banner de consentimento LGPD ativo
- [ ] Formulários de contato testados (envio + notificação por e-mail)
- [ ] Velocidade mobile > 70 no PageSpeed Insights
- [ ] Nenhuma página indexável com "em construção" ativa

---

## 1. Infraestrutura e Hospedagem

### Requisitos mínimos de servidor

| Componente | Mínimo | Recomendado |
|-----------|--------|-------------|
| PHP | 8.1 | 8.2 ou 8.3 |
| MySQL / MariaDB | 8.0 / 10.4 | 8.0+ / 10.6+ |
| RAM | 2 GB | 4-8 GB |
| Disco | HDD 20 GB | SSD NVMe 50 GB+ |
| SSL | Let's Encrypt | Let's Encrypt + Cloudflare |
| CDN | Opcional | Cloudflare (gratuito) |
| Backup | Manual | Automático diário — 30 dias |

### Provedores recomendados por perfil

| Perfil | Provedor | Motivo |
|--------|---------|--------|
| Sites novos / custo-benefício | Hostinger BR | Barato, rápido, LiteSpeed nativo |
| Nacional com suporte PT-BR | KingHost | Suporte local, boa latência BR |
| Alta performance | WP Engine | Infraestrutura dedicada WordPress |
| Controle técnico total | DigitalOcean / AWS Lightsail | VPS configurável |
| Volume médio c/ painel fácil | SiteGround | Ferramentas de cache próprias |

> ⚠️ **Evitar:** hospedagens compartilhadas sem suporte a PHP 8.2+, sem SSD ou sem possibilidade de configurar cabeçalhos HTTP. Sites lentos desperdiçam budget de tráfego pago.

### Configuração de Cloudflare

```
Passo 1 — Adicionar domínio ao Cloudflare (gratuito)
  └── Alterar nameservers do registrador para os da Cloudflare
  └── Aguardar propagação (até 48h, geralmente < 1h)

Passo 2 — Configurações essenciais
  └── SSL/TLS: modo "Completo (estrito)"
  └── Redirecionar HTTP → HTTPS: ativar "Always Use HTTPS"
  └── Habilitar HSTS (em SSL/TLS > Edge Certificates)
  └── Nível de segurança: Médio

Passo 3 — Performance
  └── Auto Minify: HTML, CSS, JS (ativar)
  └── Brotli: ativar
  └── Rocket Loader: testar — pode quebrar scripts, checar antes
  └── Cache Level: Standard

Passo 4 — Regras de cache (Page Rules ou Cache Rules)
  └── wp-admin/* → Cache bypass (nunca cachear painel)
  └── *?* → Cache bypass para URLs com query string dinâmica
  └── /wp-login.php → Cache bypass
```

### Estrutura de DNS essencial

| Registro | Tipo | Valor |
|---------|------|-------|
| `@` (raiz) | A | IP do servidor |
| `www` | CNAME | `@` ou IP |
| `mail` | A | IP do servidor de e-mail |
| `@` | MX | Servidor de e-mail |
| `@` | TXT | SPF, DKIM, DMARC do e-mail |

### SOP — Instalação do WordPress

- [ ] Criar banco de dados MySQL com usuário dedicado (não root)
- [ ] Baixar WordPress em wordpress.org/download
- [ ] Configurar `wp-config.php`: credenciais de DB, chaves de segurança (via api.wordpress.org/secret-key/1.1/salt/), timezone `America/Sao_Paulo`
- [ ] Acessar domínio e concluir instalação via assistente
- [ ] Definir permalinks: `/%postname%/` em Configurações > Links Permanentes
- [ ] Deletar usuário `admin` padrão — criar admin com nome seguro
- [ ] Deletar posts e páginas de exemplo
- [ ] Desativar e deletar plugins padrão desnecessários
- [ ] Configurar e-mail de envio via SMTP (plugin WP Mail SMTP)

---

## 2. Tema, Elementor e Construtores

### Escolha do tema base

| Tema | Tipo | Performance | Indicação |
|------|------|------------|-----------|
| Hello Elementor | Gratuito | ⚡⚡⚡ | Máximo controle com Elementor, mínimo overhead |
| Astra | Gratuito / Pro | ⚡⚡⚡ | Popular, rápido, rico em integrações |
| GeneratePress | Gratuito / Premium | ⚡⚡⚡ | Mais leve da categoria, excelente SEO base |
| OceanWP | Gratuito / Pro | ⚡⚡ | Recursos nativos sem muitos plugins extras |
| Kadence | Gratuito / Pro | ⚡⚡⚡ | Moderno, bom FSE, ótimo com Gutenberg |

> **Recomendação DEK-OS:** Hello Elementor + Elementor Pro para projetos onde Elementor é o construtor principal. Astra ou GeneratePress para projetos com foco em velocidade máxima.

### Configuração essencial do Elementor

```
Configurações > Estilo
  └── Cor padrão: desativar (usar kit global)
  └── Fonte padrão: desativar (usar kit global)

Configurações > Avançado
  └── Método de carregamento de CSS: arquivo externo (melhor para cache)
  └── Editor de estilo inline: desativar
  └── Melhorias de performance: ativar todas

Configurações > Experimentos
  └── Otimizar carregamento de CSS: ativar
  └── Preload de fontes: ativar
  └── Lazy load de imagens: ativar
```

### Kit de site — Padrões globais

```
Elementor > Kit do Site > Configurações Globais

Cores globais:
  └── Primária:    #[cor-principal]
  └── Secundária:  #[cor-secundária]
  └── Texto:       #333333
  └── Accent:      #[cor-acento]

Tipografia global:
  └── Primária:  [Font principal] — Títulos
  └── Secundária: [Font secundária] — Corpo de texto
  └── Texto:     16px / line-height 1.6

Espaçamentos de conteúdo:
  └── Largura do conteúdo: 1200px (ou conforme layout)
  └── Espaço entre colunas: 20px
```

### Templates obrigatórios no Theme Builder

| Template | Tipo | Aplica em |
|---------|------|-----------|
| Header Global | Header | Todo o site |
| Footer Global | Footer | Todo o site |
| Single Post | Single | Posts individuais do blog |
| Archive | Archive | Listagem de blog e categorias |
| 404 | Página de erro | Erro 404 |
| Landing Page | Página | Páginas sem header/footer (campanhas) |

### SOP — Criação de landing page para campanha

- [ ] Duplicar template de Landing Page base
- [ ] Renomear seguindo padrão: `LP_[Serviço]_[Campanha]_[Data]`
- [ ] Criar slug descritivo: `/lp-depilacao-laser-promo/`
- [ ] Configurar no-index se for página exclusiva de anúncio (sem valor SEO)
- [ ] Incluir formulário com campo oculto para identificar fonte da campanha
- [ ] Testar formulário: envio + notificação + disparo de evento no Pixel
- [ ] Configurar página de obrigado para rastreamento de conversão
- [ ] Testar velocidade antes de ativar campanha (meta: LCP < 2.5s)

---

## 3. Stack de Plugins Essenciais

### SEO e Visibilidade

| Plugin | Função | Prioridade |
|--------|--------|-----------|
| RankMath / Yoast SEO | SEO on-page, sitemaps, schema | Obrigatório |
| Redirection | Gerenciar redirects 301/302, monitorar 404 | Obrigatório |
| Schema Pro | Schema markup avançado para serviços, reviews | Alto |
| Broken Link Checker | Detectar links quebrados automaticamente | Médio |

### Performance e Cache

| Plugin | Função | Prioridade |
|--------|--------|-----------|
| WP Rocket | Cache completo, minificação, CDN, lazy load | Obrigatório (pago) |
| LiteSpeed Cache | Gratuito, excelente em servidores LiteSpeed | Alternativa ao Rocket |
| Imagify / ShortPixel | Compressão de imagens e conversão para WebP | Obrigatório |
| Autoptimize | Minificação CSS/JS (alternativa gratuita) | Médio |

> **Regra:** usar apenas **um** plugin de cache por vez. WP Rocket + Cloudflare = combinação mais robusta para DEK-OS.

### Segurança

| Plugin | Função | Prioridade |
|--------|--------|-----------|
| Wordfence Security | Firewall, scanner de malware, bloqueio de IPs | Obrigatório |
| UpdraftPlus | Backup automático para Google Drive / S3 | Obrigatório |
| WP 2FA | Autenticação em dois fatores | Obrigatório |
| WP Mail SMTP | E-mail transacional confiável via SMTP | Obrigatório |
| Limit Login Attempts Reloaded | Bloquear força bruta no login | Alto |

### Captura de Leads e Conversão

| Plugin | Função | Prioridade |
|--------|--------|-----------|
| Elementor Pro (Forms) | Formulários avançados com integrações nativas | Alto |
| WPForms | Formulários profissionais com lógica condicional | Alternativa |
| OptinMonster / Popup Maker | Pop-ups de captura estratégicos | Médio |
| HubSpot for WP | CRM integrado, rastreamento de lead journey | Alto |

### Rastreamento e Analytics

| Plugin | Função | Prioridade |
|--------|--------|-----------|
| PixelYourSite | Pixel Meta + eventos de conversão precisos | Obrigatório |
| Google Site Kit / MonsterInsights | GA4 integrado ao painel WP | Obrigatório |
| Google Tag Manager WP | GTM sem editar código do tema | Alto |
| Hotjar | Mapas de calor e gravação de sessões | Médio |

### LGPD e Conformidade

| Plugin | Função | Prioridade |
|--------|--------|-----------|
| CookieYes | Banner de consentimento e gestão de cookies | Obrigatório |
| Complianz | Alternativa robusta com relatórios de conformidade | Obrigatório |

### Conteúdo e Produtividade

| Plugin | Função | Prioridade |
|--------|--------|-----------|
| ACF (Advanced Custom Fields) | Campos customizados para tipos de post | Alto |
| CPT UI | Criar Custom Post Types sem código | Médio |
| Duplicate Page | Clonar páginas para acelerar criação | Alto |
| TablePress | Tabelas responsivas em posts e páginas | Médio |

---

## 4. SEO On-Page e Arquitetura

### Arquitetura de URLs recomendada para DEK-OS

```
/ → Página inicial
/sobre → Institucional e proposta de valor
/servicos → Hub de serviços (página pai)
  └── /servicos/trafego-pago
  └── /servicos/gestao-redes-sociais
  └── /servicos/criacao-de-sites
/blog → Listagem de artigos
  └── /blog/nome-do-artigo
/cases → Portfólio de resultados
/contato → Formulário e dados de contato
/lp-[servico]-[campanha] → Landing pages de campanha
```

> ⚠️ **Nunca mudar URLs de páginas já indexadas sem configurar redirect 301.** Quebrar URL de página ranqueada é um dos maiores erros de SEO.

### Configuração do RankMath / Yoast

```
Configurações Globais:
  └── Tipo de entidade: Empresa
  └── Nome, logo e URLs das redes sociais
  └── Separador do título: | ou —
  └── Sitemap XML: ativar e enviar ao Search Console

Indexação:
  └── Desindexar: páginas de tag, autor (se sem estratégia)
  └── Desindexar: resultados de busca interna (?s=)
  └── Desindexar: páginas de paginação (se conteúdo duplicado)
  └── Indexar: categorias (se tiverem conteúdo editorial próprio)

Breadcrumbs:
  └── Ativar e inserir via shortcode ou widget do Elementor
  └── Separador: >
  └── Item raiz: Home
```

### Schema Markup por tipo de página

| Página | Schema recomendado |
|--------|-------------------|
| Página inicial | `Organization` + `WebSite` |
| Página de serviço | `Service` + `LocalBusiness` |
| Artigo de blog | `Article` ou `BlogPosting` |
| Case de sucesso | `Article` + `Review` |
| Página de contato | `ContactPage` + `LocalBusiness` |
| FAQ | `FAQPage` |

### Checklist SEO por página

- [ ] Keyword principal definida — uma por página
- [ ] Title Tag: keyword no início, máximo 60 caracteres
- [ ] Meta Description: CTA claro, keyword natural, 120-160 caracteres
- [ ] URL: curta, descritiva, sem stop words desnecessárias
- [ ] H1: único, contendo keyword principal
- [ ] H2/H3: hierarquia lógica, keywords secundárias onde natural
- [ ] Imagens: alt text descritivo com keyword onde relevante
- [ ] Links internos: mínimo 2-3 para páginas relacionadas
- [ ] Link externo: pelo menos 1 fonte de autoridade (quando aplicável)
- [ ] Schema markup configurado para o tipo de conteúdo
- [ ] RankMath/Yoast: verde ou pontuação alta antes de publicar

### Nomenclatura padrão Antigravity para conteúdo

```
Posts de blog: [keyword-principal]-[subtema]-[ano]
Exemplos:
  depilacao-laser-resultado-2026
  gestao-trafego-pago-para-clinicas
  como-aumentar-leads-meta-ads

Landing Pages: lp-[servico]-[campanha]
Exemplos:
  lp-depilacao-promo-verao
  lp-trafego-pago-pequenas-empresas
```

---

## 5. Performance e Core Web Vitals

### Metas de velocidade DEK-OS

| Métrica | Significado | Meta |
|---------|------------|------|
| LCP | Maior elemento visível carregado | < 2.5s |
| INP | Tempo de resposta à interação | < 200ms |
| CLS | Estabilidade visual (sem elementos pulando) | < 0.1 |
| FCP | Primeiro conteúdo visível | < 1.8s |
| TTFB | Resposta inicial do servidor | < 800ms |
| PageSpeed Score Mobile | Pontuação geral Google | > 70 |
| PageSpeed Score Desktop | Pontuação geral Google | > 90 |

### Configuração WP Rocket (obrigatório)

```
Aba Cache:
  └── Habilitar cache para usuários móveis: sim
  └── Expiração do cache: 10 horas

Aba Arquivos:
  └── Minificação HTML: sim
  └── Minificação CSS: sim (testar, pode quebrar Elementor)
  └── Combinação CSS: não (geralmente quebra)
  └── Minificação JS: sim
  └── Combinação JS: não
  └── Carregar JS diferido: sim (testar scripts críticos)

Aba Mídia:
  └── Lazy load imagens: sim
  └── Lazy load iframes/vídeos: sim
  └── Adicionar dimensões ausentes: sim
  └── WebP: ativar se Imagify/ShortPixel estiver ativo

Aba Pré-carregamento:
  └── Pré-carregar cache: sim
  └── Sitemap para pré-carga: inserir URL do sitemap

Aba CDN:
  └── Ativar CDN Cloudflare se usando integração
```

### Otimização de imagens

```
Regras obrigatórias para upload de imagens:

Formato:     WebP (converter automaticamente via Imagify/ShortPixel)
             AVIF como fallback para navegadores modernos (se suportado pelo plugin)
Tamanho:     Nunca subir imagem maior que o necessário para o layout
             Hero/banner: 1920px × 600-900px
             Post thumbnail: 800px × 450px (16:9)
             Logotipos: SVG quando possível
Peso:        < 100kb para imagens de conteúdo
             < 300kb para banners e heroes
Alt text:    Sempre descritivo, keyword onde natural — nunca vazio em imagem de conteúdo
Lazy load:   Todas exceto a primeira imagem acima da dobra (above the fold)
```

### SOP — Diagnóstico de performance

```
Passo 1 — Medir linha de base
  └── PageSpeed Insights: testar home, página de serviço e post de blog
  └── Anotar LCP, INP, CLS e score mobile/desktop

Passo 2 — Identificar gargalos mais comuns
  └── LCP alto → imagem hero grande sem lazy load correto, servidor lento (TTFB alto)
  └── CLS alto → imagens sem dimensões definidas, fontes trocando (FOUT)
  └── INP alto → JavaScript bloqueante, scripts de terceiros pesados
  └── Score baixo → minificação não ativa, render-blocking resources

Passo 3 — Ações corretivas por prioridade
  └── Comprimir todas as imagens e converter para WebP
  └── Ativar cache do servidor + CDN Cloudflare
  └── Minificar CSS e JS via WP Rocket
  └── Preconnect para domínios externos (Google Fonts, GTM)
  └── Carregar Google Fonts localmente (GDPR + performance)

Passo 4 — Validar e monitorar
  └── Re-testar após cada mudança
  └── Verificar CrUX (dados reais) no Search Console > Experiência
  └── Revisão mensal de Core Web Vitals
```

---

## 6. Segurança, Hardening e Backups

### Checklist de hardening pós-instalação

**Acesso e autenticação:**
- [ ] URL de login alterada (padrão `/wp-admin` → URL customizada via plugin)
- [ ] 2FA ativado para todos os usuários editor+
- [ ] Limite de tentativas de login: máximo 3 antes de bloqueio
- [ ] XML-RPC desativado (se não usar Jetpack ou app móvel WP)
- [ ] Cabeçalho `X-Powered-By` e versão do WP removidos do HTML

**Arquivos e permissões:**
```
wp-config.php    → 600 (leitura apenas pelo servidor)
.htaccess        → 644
wp-content/      → 755
wp-content/uploads/ → 755
wp-content/themes/  → 755
wp-content/plugins/ → 755
```

**Cabeçalhos de segurança HTTP:**
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: (configurar conforme scripts utilizados)
```

> Configurar via Cloudflare (Transform Rules) ou `.htaccess` no servidor.

### Configuração do Wordfence

```
Firewall:
  └── Modo: Proteção estendida (nível ativo)
  └── Atualizar regras do firewall: automático

Scan:
  └── Frequência: diário (plano gratuito) ou tempo real (premium)
  └── Notificações: e-mail para arquivos modificados e novos admins

Rate Limiting:
  └── Crawlers humanos: 240 req/min
  └── Crawlers não humanos: 60 req/min
  └── 404 errors: bloquear após 20 em 1 min

Alertas obrigatórios:
  └── Novo usuário administrador criado: sim
  └── Login de admin fora do Brasil: sim (se plano premium)
  └── Arquivo do core modificado: sim
```

### Política de backup DEK-OS

| Tipo | Frequência | Destino | Retenção |
|------|-----------|---------|----------|
| Banco de dados | Diário | Google Drive | 30 dias |
| Arquivos completos | Semanal | Google Drive | 4 semanas |
| Backup completo (DB + Files) | Mensal | Google Drive + S3 | 12 meses |
| Pré-atualização major | A cada deploy | Local + Google Drive | Indefinido |

```
Configuração UpdraftPlus:
  └── Backup automático: diário (DB) + semanal (arquivos)
  └── Destino: Google Drive (autenticar conta DekMidia)
  └── Criptografia: ativar se plano premium
  └── Notificação por e-mail: sim
  └── Excluir da pasta uploads: arquivos de cache e logs
```

### SOP — Protocolo de atualização segura

- [ ] Realizar backup completo antes de qualquer atualização
- [ ] Ativar modo de manutenção para visitantes
- [ ] Verificar compatibilidade do plugin/tema com nova versão do WP
- [ ] Atualizar em ordem: **WordPress Core → Tema → Plugins**
- [ ] Testar após cada etapa: home, formulários, checkout (se houver)
- [ ] Se algo quebrar: restaurar backup e investigar conflito
- [ ] Desativar modo de manutenção e monitorar por 24h
- [ ] Registrar no log de manutenção: data, versões atualizadas, status

---

## 7. Rastreamento e Integrações de Marketing

### Configuração do Google Tag Manager

```
Estrutura de tags obrigatórias:

Tag: GA4 — Configuration
  └── Trigger: All Pages
  └── ID de medição: G-XXXXXXXX

Tag: GA4 — FormSubmit (Lead)
  └── Trigger: Envio de formulário de contato
  └── Evento: generate_lead

Tag: GA4 — WhatsApp Click
  └── Trigger: Clique em link wa.me
  └── Evento: contact (method: whatsapp)

Tag: GA4 — Scroll Depth 50%
  └── Trigger: Scroll Depth 50% em páginas de serviço
  └── Evento: scroll

Tag: Meta Pixel — PageView
  └── Trigger: All Pages

Tag: Meta Pixel — Lead
  └── Trigger: Envio de formulário OU página de obrigado
  └── Evento: Lead

Tag: Google Ads — Conversão
  └── Trigger: Página de obrigado ou evento de form
  └── Conversion Label: XXXXX
```

### Configuração do Pixel Meta via PixelYourSite

```
Configurações básicas:
  └── ID do Pixel: inserir ID do Meta Business Suite
  └── Ativar WooCommerce (se e-commerce): sim
  └── Ativar eventos avançados: sim

Eventos a ativar:
  └── PageView: todas as páginas — sim
  └── ViewContent: páginas de serviço — sim
  └── Lead: envio de formulário — sim
  └── Contact: clique em WhatsApp/telefone — sim
  └── Purchase: página de obrigado de venda — sim (se aplicável)

Conversions API (CAPI):
  └── Ativar se tiver > 30% de usuários com ad blockers
  └── Configurar token de acesso da CAPI no plugin
  └── Ativar deduplicação browser + server
  └── Parâmetros de qualidade: email hash, telefone hash
```

### UTMs — Padrão Antigravity

```
Estrutura obrigatória para todas as campanhas:

utm_source   → origem: meta | google | instagram | email | whatsapp
utm_medium   → mídia: cpc | organic | email | social | referral
utm_campaign → nome da campanha: [projeto]-[serviço]-[periodo]
utm_content  → variação do criativo: criativo-v1 | copy-a | video-b
utm_term     → keyword (apenas Google Search): gestao-trafego-pago

Exemplos:
Meta Ads:
  ?utm_source=meta&utm_medium=cpc&utm_campaign=dek-os-depilacao-mar26&utm_content=criativo-v1

Google Search:
  ?utm_source=google&utm_medium=cpc&utm_campaign=dek-os-servicos&utm_term=trafego+pago+sjc

Instagram Orgânico (bio link):
  ?utm_source=instagram&utm_medium=social&utm_campaign=dek-os-bio
```

### Integrações com ferramentas de marketing

| Ferramenta | Método | Prioridade |
|-----------|--------|-----------|
| RD Station | Plugin oficial + webhook de formulários | Alto |
| HubSpot | Plugin gratuito + CRM nativo | Alto |
| MailChimp | Plugin oficial + API Key | Médio |
| ActiveCampaign | Plugin AC + formulários Elementor | Médio |
| Zapier / Make | Webhook de formulários para automações | Alto |
| WhatsApp Business | Link wa.me + widget de chat JS | Alto |

---

## 8. LGPD e Conformidade

### Obrigações legais no WordPress (Lei 13.709/2018)

Sites que coletam dados de usuários brasileiros precisam de:

- [ ] Banner de consentimento de cookies com opções granulares (aceitar todos / apenas essenciais / personalizar)
- [ ] Política de Privacidade publicada e acessível em todas as páginas (link no footer)
- [ ] Política de Cookies detalhando cada categoria utilizada
- [ ] Formulário de exercício de direitos do titular (acesso, correção, exclusão, portabilidade)
- [ ] Registro de consentimentos com timestamp (CookieYes / Complianz geram automaticamente)
- [ ] Todos os plugins de terceiros revisados para coleta mínima de dados

> ⚠️ **O Pixel do Facebook, Google Analytics e GTM coletam dados pessoais.** Eles só podem carregar APÓS o consentimento do usuário — configurar bloqueio condicional no banner de LGPD.

### Configuração do CookieYes

```
Categorias de cookies a configurar:
  └── Necessários: WordPress (sessão, login) — sempre ativos
  └── Funcionais: formulários, preferências do usuário
  └── Analíticos: Google Analytics, Hotjar
  └── Marketing: Meta Pixel, Google Ads, PixelYourSite

Comportamento:
  └── Bloquear cookies de marketing até consentimento: sim
  └── Geolocalização: ativar bloqueio apenas para BR (reduz impacto global)
  └── Re-consentimento: a cada 12 meses ou em mudança de política

Personalização:
  └── Idioma: Português do Brasil
  └── Posição: barra inferior ou modal central (testar UX)
  └── Botão primário: "Aceitar todos"
  └── Botão secundário: "Gerenciar preferências"
```

### SOP — Documentos obrigatórios

- [ ] Página `/politica-de-privacidade` criada e atualizada (incluir: quais dados coletamos, por quê, por quanto tempo, como exercer direitos)
- [ ] Página `/politica-de-cookies` criada (listar cookies por categoria com nome, provedor e duração)
- [ ] E-mail de DPO / encarregado de dados visível na Política de Privacidade
- [ ] Formulário de solicitação de direitos do titular acessível (pode ser link para e-mail)

---

## 9. Fluxo Editorial e Conteúdo

### Tipos de conteúdo DEK-OS

| Tipo | Objetivo | Frequência | Índexar? |
|------|---------|-----------|---------|
| Artigo de blog | SEO orgânico + autoridade | 2-4x/mês | Sim |
| Landing page de serviço | Conversão + SEO | Conforme serviço | Sim |
| Landing page de campanha | Conversão de tráfego pago | Conforme campanha | Não* |
| Case de sucesso | Prova social + portfólio | 1x/mês | Sim |
| FAQ page | Long tail SEO + suporte | Contínuo | Sim |
| Página de obrigado | Rastreamento de conversão | Conforme form | Não |

*Landing pages de campanha podem ser indexadas se tiverem valor de conteúdo.

### Fluxo de aprovação de conteúdo

```
1. Briefing
   └── Objetivo: conversão, SEO, branding?
   └── Keyword principal e secundárias
   └── Persona e estágio do funil
   └── CTA principal

2. Produção
   └── Redação com SEO on-page integrado
   └── Imagens otimizadas + alt text
   └── Links internos e externos mapeados

3. Revisão editorial
   └── Tom de voz alinhado ao DEK-OS
   └── Gramática e ortografia (PT-BR)
   └── CTA claro e testável

4. SEO Review
   └── RankMath/Yoast: verde ou alta pontuação
   └── Schema markup configurado
   └── Preview de título e meta description validados

5. Aprovação
   └── Responsável do projeto aprova antes de publicar

6. Publicação
   └── Agendar horário de pico ou publicar imediatamente
   └── Categoria e tags definidas

7. Distribuição
   └── Compartilhar em redes sociais
   └── Incluir em newsletter (se aplicável)
   └── Notificar Google via Search Console (Inspeção de URL)

8. Monitoramento
   └── Acompanhar métricas por 30 dias: cliques, impressões, posição
   └── Otimizar se não performar após 60 dias
```

### Template — Briefing de conteúdo

```markdown
## Briefing: [Título provisório]
**Data:** 
**Responsável:**
**Tipo:** [ ] Artigo  [ ] Landing Page  [ ] Case  [ ] FAQ

### Objetivo
- Meta principal: SEO / Conversão / Branding
- KPI de sucesso:

### SEO
- Keyword principal:
- Keywords secundárias:
- Intenção de busca: Informacional / Navegacional / Transacional
- Concorrentes a superar:

### Conteúdo
- Persona-alvo:
- Estágio do funil: ToFu / MoFu / BoFu
- CTA principal:
- Links internos obrigatórios:

### Prazo
- Entrega do rascunho:
- Publicação:
```

---

## 10. Manutenção e Atualizações

### Rotina de manutenção DEK-OS

| Periodicidade | Tarefa | Responsável |
|--------------|--------|------------|
| Diário | Verificar backup automático e alertas Wordfence | Automático + Dev |
| Semanal | Atualizar plugins não-críticos, revisar métricas GA4 | Dev |
| Quinzenal | Atualizar tema, revisar formulários, checar Core Web Vitals | Dev |
| Mensal | Atualizar WP Core, auditar plugins inativos, relatório de performance | Dev + Marketing |
| Trimestral | Auditoria completa: SEO, velocidade, segurança, UX | Dev + Marketing |

### Classificação de criticidade para atualizações

| Tipo de atualização | Urgência | Ação |
|--------------------|---------|------|
| Patch de segurança (WordPress Core) | Crítica — atualizar em 24h | Atualizar imediatamente com backup |
| Atualização de segurança de plugin | Alta — atualizar em 48h | Atualizar com backup |
| Atualização minor de plugin | Normal — semana seguinte | Atualizar em janela semanal |
| Major de plugin (ex: v3 → v4) | Avaliar — pode quebrar | Testar em staging primeiro |
| WordPress Core minor (ex: 6.4.1 → 6.4.2) | Normal | Janela semanal com backup |
| WordPress Core major (ex: 6.4 → 6.5) | Cauteloso | Staging + backup + janela específica |

### Template — Log de manutenção

```markdown
## Manutenção: [DD/MM/AAAA]
**Responsável:**
**Duração:**

### Backup realizado
- [ ] Banco de dados
- [ ] Arquivos
- **Destino:** Google Drive / Local
- **Status:** OK / Erro

### Atualizações
- WordPress Core: [versão anterior] → [versão nova]
- Tema: [nome] [versão anterior] → [versão nova]
- Plugins atualizados:
  - [plugin]: [versão]
  - [plugin]: [versão]

### Verificações pós-atualização
- [ ] Home carregando corretamente
- [ ] Formulários de contato funcionando
- [ ] Pixel Meta disparando
- [ ] PageSpeed: antes [X] | depois [X]

### Problemas encontrados e resolvidos
-

### Próxima manutenção: [data]
```

---

## 11. Checklists Rápidos

### ✅ Checklist — Nova instalação WordPress

- [ ] PHP 8.2+ configurado no servidor
- [ ] SSL ativo e forçado (HTTPS)
- [ ] Permalinks: `/%postname%/`
- [ ] Usuário `admin` padrão deletado
- [ ] Autenticação em 2 fatores ativa
- [ ] URL de login customizada
- [ ] Tema leve instalado (Hello Elementor / Astra)
- [ ] WP Rocket ou LiteSpeed Cache configurado
- [ ] Wordfence ativo e configurado
- [ ] UpdraftPlus com backup automático para Google Drive
- [ ] Sitemap XML gerado e enviado ao Search Console
- [ ] GTM instalado e GA4 registrando sessões
- [ ] Pixel Meta disparando PageView
- [ ] Banner LGPD ativo com bloqueio condicional de cookies
- [ ] Política de Privacidade publicada

### ✅ Checklist — Lançamento de landing page

- [ ] URL seguindo padrão Antigravity: `/lp-[servico]-[campanha]/`
- [ ] No-index ativado (se exclusiva para anúncio)
- [ ] Header e footer simplificados (sem menu de navegação)
- [ ] Formulário testado: envio + notificação + evento no Pixel
- [ ] Página de obrigado configurada para rastreamento de conversão
- [ ] LCP < 2.5s no PageSpeed Mobile
- [ ] UTMs testados: tráfego chega corretamente ao GA4
- [ ] Pixel Meta: evento Lead disparando na submissão do form
- [ ] Preview em mobile e desktop validado
- [ ] CTA claro, visível acima da dobra

### ✅ Checklist — Publicação de artigo

- [ ] Keyword principal definida e não canibaliza outra página
- [ ] Title Tag: keyword no início, máximo 60 caracteres
- [ ] Meta Description: CTA claro, 120-160 caracteres
- [ ] URL: curta, descritiva, sem stop words
- [ ] H1 único com keyword principal
- [ ] Imagem destacada: 800×450px, WebP, alt text descritivo
- [ ] Links internos: mínimo 2 para páginas relacionadas
- [ ] Schema markup: BlogPosting configurado
- [ ] RankMath/Yoast: verde ou pontuação alta
- [ ] Categoria e tags definidas
- [ ] Revisar visualização mobile antes de publicar

### ✅ Checklist — Diagnóstico de site lento

- [ ] TTFB alto (> 1s) → problema no servidor ou ausência de cache
- [ ] LCP alto → imagem hero grande, sem lazy load ou sem WebP
- [ ] CLS alto → imagens sem dimensões, fontes com FOUT, ads sem reserva de espaço
- [ ] INP alto → JavaScript pesado bloqueando interação, scripts de terceiros
- [ ] Score baixo mobile → render-blocking CSS/JS, sem minificação ativa
- [ ] Google Fonts carregando de CDN externo → hospedar localmente
- [ ] Plugins em excesso → desativar e deletar plugins não utilizados
- [ ] Muitas imagens PNG/JPG → converter para WebP

### ✅ Checklist — Auditoria mensal de segurança

- [ ] Nenhum alerta crítico no Wordfence
- [ ] Backup da semana anterior verificado e restaurável
- [ ] Todos os plugins, temas e WP Core atualizados
- [ ] Nenhum usuário administrador desconhecido
- [ ] Tentativas de login excessivas de IPs bloqueados
- [ ] Relatório de Wordfence Scan: nenhum arquivo infectado
- [ ] Certificado SSL válido (checar expiração)
- [ ] Cabeçalhos de segurança HTTP ativos (verificar em securityheaders.com)

---

*Playbook Antigravity — WordPress | DekMidia*  
*Versão 1.0 — Março/2026 | Inclui: Performance + LGPD + Elementor + Rastreamento | Revisar a cada 60 dias*
