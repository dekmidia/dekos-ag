---
name: html-premium-stack
description: Leia esta skill OBRIGATORIAMENTE antes de escrever qualquer linha de HTML. Ela define a stack técnica exata, os padrões visuais e o protocolo de auto-crítica que transformam uma página gerada por IA em um ativo digital de agência premium. É o equivalente ao system prompt interno do Google AI Studio aplicado ao DEK-OS.
version: "1.0.0"
squads_que_usam: [Engineering]
agentes_que_usam: [Dex]
leitura: OBRIGATÓRIA — antes de qualquer código
---

# HTML Premium Stack — O Padrão Google AI Studio para o DEK-OS

Esta skill define **o que você usa, como você estrutura e como você avalia** antes de entregar qualquer página. Seguindo este protocolo, o resultado vai parecer feito por um estúdio de design, não por uma IA genérica.

---

## Stack Técnica Obrigatória

Toda landing page ou site gerado pelo Dex usa **exatamente esta stack**, sem exceções:

```html
<!-- FONTES — sempre via Google Fonts, nunca system fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- (fontes específicas definidas no design system do projeto) -->

<!-- TAILWIND CSS — via CDN, não build step -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- LUCIDE ICONS — ícones modernos e limpos -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- GSAP — apenas para Categoria B (LPs de alta fidelidade) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

**Por que esta stack:**
- Tailwind elimina CSS manual inconsistente — o resultado é mais refinado e previsível
- Lucide é o padrão visual do Google AI Studio — ícones clean e modernos
- Google Fonts garante tipografia premium em qualquer nicho
- Tudo self-contained num único arquivo HTML — sem dependências externas além dos CDNs

---

## Protocolo de 5 Passos Antes de Codar

### PASSO 1 — Definir o Design System (nunca pular)

Antes de escrever a primeira tag HTML, defina e documente no topo do arquivo como comentário:

```html
<!--
  DESIGN SYSTEM — [Nome do Cliente]
  ================================
  Paleta:
    --primary:    #[hex]   → [uso: botões principais, CTAs]
    --accent:     #[hex]   → [uso: destaques, hovers, ícones]
    --bg:         #[hex]   → [uso: fundo da página]
    --surface:    #[hex]   → [uso: cards, seções alternadas]
    --text:       #[hex]   → [uso: corpo do texto]
    --muted:      #[hex]   → [uso: subtítulos, textos secundários]

  Tipografia:
    Display: [Nome da Fonte] → títulos H1/H2
    Body:    [Nome da Fonte] → parágrafos e UI

  Personalidade Visual: [Elegante / Industrial / Vibrante / Minimal / Luxo / Artesanal]
  Nicho: [ex: comunicação visual, clínica estética, academia]
-->
```

Configure as variáveis CSS logo após:

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          accent: 'var(--accent)',
          surface: 'var(--surface)',
        },
        fontFamily: {
          display: ['[Fonte Display]', 'serif'],
          body: ['[Fonte Body]', 'sans-serif'],
        }
      }
    }
  }
</script>

<style>
  :root {
    --primary: #[hex];
    --accent:  #[hex];
    --bg:      #[hex];
    --surface: #[hex];
    --text:    #[hex];
    --muted:   #[hex];
  }
</style>
```

---

### PASSO 2 — Escolher Tipografia por Nicho

Nunca use Inter, Roboto, Arial ou system-ui como fonte principal. Consulte a tabela:

| Nicho | Display (H1/H2) | Body | Personalidade |
|---|---|---|---|
| Comunicação Visual / Gráfica | Bebas Neue | Barlow | Industrial, direto, bold |
| Clínica / Saúde / Odonto | Cormorant Garamond | Lato | Sofisticado, humano |
| Beleza / Estética / Spa | Playfair Display | Nunito | Elegante, feminino |
| Advocacia / Contabilidade | DM Serif Display | Source Sans 3 | Sério, confiável |
| Restaurante / Gastronomia | Fraunces | Karla | Quente, artesanal |
| Tech / SaaS / Digital | Sora | DM Sans | Moderno, limpo |
| Academia / Fitness / Esporte | Bebas Neue | Barlow | Energético, direto |
| Arquitetura / Interiores | Libre Baskerville | Jost | Editorial, refinado |
| Moda / Varejo Premium | Bodoni Moda | Raleway | Fashion, aspiracional |
| Educação / Cursos | Plus Jakarta Sans | Open Sans | Acessível, confiável |
| Imobiliária | Cormorant | Inter | Premium, sofisticado |
| Indústria / Construção | Oswald | Roboto Condensed | Robusto, direto |

---

### PASSO 3 — Escolher Paleta por Nicho e Emoção

Se o cliente não tem identidade visual definida, use como ponto de partida:

| Nicho | Background | Primária | Accent | Feeling |
|---|---|---|---|---|
| Comunicação Visual | `#0a0a0a` dark | `#ffffff` | `#FF6B2B` laranja vibrante | Impacto, precisão |
| Clínica / Saúde | `#F8F6F2` creme | `#1B3A6B` azul profundo | `#7FB069` verde sage | Confiança, cuidado |
| Beleza / Estética | `#1a1a1a` dark | `#B8965A` dourado | `#F5EED8` creme | Sofisticação, desejo |
| Advocacia | `#0F1923` dark | `#C9A84C` dourado | `#ffffff` | Autoridade, seriedade |
| Gastronomia | `#1C0F0A` escuro quente | `#E2A33A` âmbar | `#F5E6D0` creme | Apetite, aconchego |
| Fitness | `#0D0D0D` preto | `#E63B2E` vermelho | `#ffffff` | Energia, poder |
| Tech | `#0D1117` dark | `#7B61FF` roxo vibrante | `#3ecf8e` verde | Inovação, confiança |
| Educação | `#ffffff` branco | `#2563EB` azul | `#FCD34D` amarelo | Otimismo, clareza |
| Arquitetura | `#F5F2EE` off-white | `#2C2C2C` quase preto | `#8B7355` terracota | Refinamento, solidez |

> ⚠️ **Nunca use roxo `#7B61FF` ou gradiente roxo/laranja como padrão** — é o sinal visual mais claro de "IA gerou isso sem pensar". Só use roxo se o nicho justifica (tech/SaaS).

---

### PASSO 4 — Estrutura de Página Obrigatória

Todo site segue esta arquitetura mínima, nesta ordem:

```
1. NAVBAR          → sticky, com blur ao scroll, logo + links + CTA
2. HERO            → 100vh, headline impactante, subheadline, 2 CTAs, elemento visual
3. SOCIAL PROOF    → logos de clientes, número de projetos, avaliações ou depoimento
4. SERVIÇOS        → cards com ícone Lucide, título, descrição curta
5. DIFERENCIAL     → seção "Por que nós" com layout assimétrico (texto + imagem)
6. DEPOIMENTO/CTA  → quote de cliente ou CTA intermediário
7. CONTATO/CTA FINAL → formulário simples ou botão WhatsApp em destaque
8. FOOTER          → logo, links, contato, redes sociais
```

**Regras de layout que nunca quebrar:**
- Hero sempre `min-h-screen` com imagem de fundo, gradiente rico ou cor sólida dramática — nunca fundo branco liso
- Nunca `text-align: center` em tudo — alterne alinhamentos para criar ritmo
- Pelo menos uma seção com layout assimétrico (texto 60% + imagem 40%, ou inverso)
- Espaçamento vertical generoso entre seções (`py-20` a `py-32`)

---

### PASSO 5 — Animações Obrigatórias

Todo projeto tem **no mínimo** estes três níveis de animação:

**Nível 1 — Entrada de seções ao scroll (obrigatório em todo projeto):**

```javascript
// Colocar antes do </body>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal:nth-child(2) { transition-delay: 0.1s; }
.reveal:nth-child(3) { transition-delay: 0.2s; }
.reveal:nth-child(4) { transition-delay: 0.3s; }
```

**Nível 2 — Navbar com blur ao scroll (obrigatório):**

```javascript
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
```

```css
#navbar { transition: background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s; }
#navbar.scrolled {
  background: rgba(var(--bg-rgb), 0.85);
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.08);
}
```

**Nível 3 — Micro-interações em elementos clicáveis (obrigatório):**

```css
/* Botão primário */
.btn-primary {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--accent-rgb), 0.35);
}

/* Cards */
.card {
  transition: transform 0.25s ease, border-color 0.25s ease;
}
.card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}
```

---

## Anti-Padrões Proibidos

Se qualquer um destes aparecer no código, reescreva antes de entregar:

| ❌ Proibido | ✅ Substitua por |
|---|---|
| Gradiente roxo/laranja genérico como hero | Cor sólida dramática do nicho ou imagem de fundo |
| `font-family: Inter` como única fonte | Fonte display do nicho + fonte body |
| Cards simétricos 3 em linha com ícone + título + 2 linhas | Cards com variação de tamanho ou layout alternado |
| Hero com fundo branco liso | Hero com cor, gradiente rico ou imagem |
| `text-align: center` em todas as seções | Mix de alinhamentos — esquerda, centro e assimétrico |
| Cores padrão Tailwind (`blue-500`, `purple-600`) sem customização | Variáveis CSS customizadas do design system |
| Seções sem animação de entrada | Classe `.reveal` + Intersection Observer |
| Espaçamento apertado entre seções (`py-8`) | Seções com respiro (`py-20` a `py-32`) |
| Ícones emoji como decoração principal | Lucide Icons via CDN |
| Nenhum efeito no navbar ao scroll | Navbar com blur + background ao scrollar |

---

## Loop de Auto-Crítica (executar antes de entregar)

Após gerar o HTML completo, responda mentalmente estas 6 perguntas. Se qualquer resposta for "não", corrija antes de entregar:

```
1. Se eu mostrar este site sem dizer que foi IA, pareceria de uma agência profissional?
   → Sim / Não

2. Existe pelo menos UMA coisa visual que surpreende ou impressiona?
   (fonte inusitada, composição assimétrica, animação de entrada elegante, seção com atmosfera)
   → Sim / Não — se não, adicione antes de entregar

3. A identidade visual é coerente com o nicho? 
   (comunicação visual ≠ clínica ≠ academia — cada um tem linguagem própria)
   → Sim / Não

4. Todos os anti-padrões proibidos foram evitados?
   → Sim / Não — se não, revisar a lista acima

5. O site tem animações funcionando? (Intersection Observer + navbar blur + hover nos botões)
   → Sim / Não

6. O CTA principal está visível, contrastante e clicável no mobile?
   → Sim / Não
```

**Se 2 ou mais respostas forem "não" — não entregue. Refine primeiro.**

---

## Exemplo de Cabeçalho HTML Completo

Este é o padrão de abertura de todo arquivo gerado:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Nome do Negócio] — [Tagline]</title>
  <meta name="description" content="[Descrição SEO em 150 caracteres]" />

  <!-- DESIGN SYSTEM
    Paleta: primary=#[hex] / accent=#[hex] / bg=#[hex] / surface=#[hex]
    Tipografia: [Display Font] + [Body Font]
    Personalidade: [Adjetivo do nicho]
  -->

  <!-- Fontes -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=[Display]:wght@700;900&family=[Body]:wght@300;400;500;600&display=swap" rel="stylesheet">

  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#[hex]',
            accent: '#[hex]',
            surface: '#[hex]',
          },
          fontFamily: {
            display: ['[Display Font]', 'serif'],
            body: ['[Body Font]', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    :root {
      --primary: #[hex];
      --accent: #[hex];
      --bg: #[hex];
      --surface: #[hex];
      --text: #[hex];
      --muted: #[hex];
    }
    body { font-family: '[Body Font]', sans-serif; background: var(--bg); color: var(--text); }
    h1, h2, h3 { font-family: '[Display Font]', serif; }

    /* Animações de scroll */
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal:nth-child(2) { transition-delay: 0.1s; }
    .reveal:nth-child(3) { transition-delay: 0.2s; }
    .reveal:nth-child(4) { transition-delay: 0.3s; }
  </style>
</head>
```
