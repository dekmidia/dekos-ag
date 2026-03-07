---
name: frontend-design-premium
description: Use esta skill sempre que for criar sites, landing pages ou qualquer interface web. Ela define os princípios de design de alto nível que transformam código funcional em ativos digitais visualmente impactantes e memoráveis. Combinar com lp-cinematografica e map2web.
version: "1.0.0"
squads_que_usam: [Engineering, Creative]
agentes_que_usam: [Dex]
---

# Frontend Design Premium — Anti-AI-Slop Guide

Esta skill define a **filosofia e os critérios de excelência visual** que o Dex deve aplicar em todo projeto web. O objetivo é produzir sites que pareçam ter sido feitos por um estúdio de design de alto nível, não por uma IA genérica.

---

## A Pergunta que Define Tudo

Antes de escrever qualquer código, faça esta pergunta internamente:

> **"O que tornará este site INESQUECÍVEL?"**

Não "funcional". Não "bonito". **Inesquecível.** Existe uma coisa — uma fonte inusitada, uma animação de entrada, uma composição assimétrica, um contraste de cores ousado — que vai fazer o visitante sentir que este site foi feito especificamente para este negócio. Identifique essa coisa e execute-a com precisão.

---

## Os 5 Pilares do Design Premium

### 1. Tipografia com Caráter

A fonte é a personalidade do site. Nunca use fontes genéricas como escolha padrão.

**Fontes PROIBIDAS como escolha principal:**

- Inter, Roboto, Arial, Helvetica, system-ui — são as fontes do "não me esforcei"

**Combinações que funcionam por nicho:**

| Nicho | Display (Títulos) | Body (Corpo) | Personalidade |
| --- | --- | --- | --- |
| Clínica / Saúde | Cormorant Garamond | Lato | Sofisticado, humano |
| Beleza / Estética | Playfair Display | Nunito | Elegante, feminino |
| Advocacia / Finanças | DM Serif Display | Source Sans 3 | Sério, confiável |
| Restaurante / Food | Fraunces | Karla | Quente, artesanal |
| Tech / SaaS | Sora | DM Sans | Moderno, limpo |
| Academia / Fitness | Bebas Neue | Barlow | Energético, direto |
| Arquitetura / Design | Libre Baskerville | Jost | Editorial, refinado |
| Varejo / Moda | Bodoni Moda | Raleway | Fashion, aspiracional |

**Regra de hierarquia tipográfica:**

- H1: tamanho grande (5xl–8xl), peso bold, espaçamento de letra negativo (-0.02em a -0.04em)
- H2: mix de serif + sans cria tensão visual interessante
- Body: tamanho confortável (base ou lg), line-height generoso (1.6–1.8)

---

### 2. Cor com Intenção

A paleta define emoção. Nunca escolha azul "#3B82F6" ou roxo genérico por inércia.

**Processo de escolha de cores:**

1. Se há logo → extraia as cores dominantes e construa a paleta em torno delas
2. Se não há logo → escolha uma cor primária que representa a emoção do nicho (veja tabela)
3. Defina sempre: primária + accent + background + texto + superfície

**Emoções por setor:**

| Setor | Emoção-alvo | Cor primária sugerida | Accent sugerido |
| --- | --- | --- | --- |
| Saúde / Bem-estar | Confiança + Calma | Azul profundo `#1B3A6B` | Verde sage `#7FB069` |
| Beleza / Estética | Sofisticação + Desejo | Dourado `#B8965A` | Creme `#F5EED8` |
| Gastronomia | Apetite + Aconchego | Bordeaux `#6B2D3E` | Âmbar `#E2A33A` |
| Fitness | Energia + Poder | Preto `#0D0D0D` | Vermelho `#E63B2E` |
| Educação | Confiança + Otimismo | Azul `#2563EB` | Amarelo `#FCD34D` |
| Jurídico | Autoridade + Seriedade | Azul marinho `#0F2044` | Dourado `#C9A84C` |

**Regras de uso:**

- Fundo branco liso é permitido, mas exige tipografia forte e espaçamento generoso para não ser vazio
- Dark mode é sempre mais impactante para nichos premium (beleza, advocacia, tech)
- Accent color deve aparecer em CTAs, ícones e detalhes — nunca em blocos grandes

---

### 3. Movimento com Propósito

Animações que existem só para existir distraem. Animações com propósito impressionam.

**Hierarquia de animações:**

**Alto impacto (use 1 ou 2 por página):**

- Hero com texto aparecendo letra por letra ou palavra por palavra (SplitText-style)
- Seção com cards que se revelam em cascata ao scroll (stagger 0.1s entre cada)
- Número contador animado (ex: "12 anos de experiência" contando de 0 a 12)

**Médio impacto (use em seções secundárias):**

- Fade-in-up com Intersection Observer (translateY 30px→0 + opacity 0→1)
- Linha horizontal se expandindo da esquerda para direita ao entrar na viewport
- Imagens with scale sutil ao hover (1.0→1.03)

**Micro-interações (use em todos os elementos clicáveis):**

- Botões: `transform: translateY(-2px)` + `box-shadow` mais pronunciado no hover
- Links: underline animado crescendo da esquerda
- Cards: border-color ou background suave no hover

**Código de referência para Intersection Observer (obrigatório em todo projeto):**

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger para grupos de cards */
.animate-on-scroll:nth-child(2) { transition-delay: 0.1s; }
.animate-on-scroll:nth-child(3) { transition-delay: 0.2s; }
.animate-on-scroll:nth-child(4) { transition-delay: 0.3s; }
```

---

### 4. Composição Espacial Ousada

Layouts previsíveis geram sites esquecíveis. Quebre padrões com intenção.

**Técnicas de composição premium:**

- **Assimetria controlada:** Texto à esquerda com imagem flutuando além da borda direita do container
- **Overlap:** Título do hero descendo sobre a primeira seção de conteúdo
- **Grid breaking:** Um elemento que propositalmente ultrapassa a grid (badge flutuante, número gigante de fundo)
- **Espaço negativo generoso:** Padding vertical exagerado em seções-chave cria respiro e sofisticação
- **Full-bleed sections:** Alterna entre seções com fundo colorido que vai de borda a borda

**Evite:**

- Tudo centralizado (text-align: center em tudo é o sinal mais claro de site genérico)
- Cards todos idênticos em linha reta sem variação de tamanho
- Seções que parecem "blocos empilhados" sem ritmo visual entre elas

---

### 5. Atmosfera e Profundidade

Sites planos parecem baratos. Atmosfera é criada com camadas e textura.

**Técnicas de atmosfera:**

```css
/* Ruído de película sobre o hero */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
}

/* Gradiente dramático no hero */
.hero {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0,0,0,0.3) 50%,
    rgba(0,0,0,0.85) 100%
  );
}

/* Glassmorphism para cards sobre fundos coloridos */
.glass-card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.12);
}
```

**Efeitos de profundidade:**

- Hero sempre com imagem de fundo (nunca cor sólida sozinha)
- Sombras com cor tintada (não só `rgba(0,0,0,0.x)`)
- Gradiente mesh no background de seções: `background: radial-gradient(at 30% 50%, #cor1, transparent 60%), radial-gradient(at 80% 20%, #cor2, transparent 60%)`

---

## Checklist de Qualidade Visual (rodar antes de entregar)

**Tipografia:**

- [ ] Fontes importadas do Google Fonts (não system fonts)
- [ ] H1 tem tamanho impactante (mínimo text-5xl no desktop)
- [ ] Contraste de peso/estilo entre título e corpo

**Cores:**

- [ ] Paleta definida em variáveis CSS
- [ ] Nenhum azul/roxo genérico sem justificativa
- [ ] Accent color aplicado consistentemente nos CTAs

**Movimento:**

- [ ] Intersection Observer implementado para animações de scroll
- [ ] Hover effects em todos os botões e links
- [ ] Nenhuma seção completamente estática

**Composição:**

- [ ] Hero ocupa 100vh (nunca um banner baixo)
- [ ] Pelo menos um elemento "quebrando" o padrão de grid
- [ ] Espaçamento vertical generoso entre seções (py-20 a py-32)

**Atmosfera:**

- [ ] Hero com imagem ou gradiente rico (não fundo branco)
- [ ] Textura sutil ou efeito de profundidade em pelo menos uma seção
- [ ] Sombras nos cards e elementos elevados

---

## O Teste Final

Antes de entregar, responda:

1. Se eu mostrar este site para alguém sem dizer que foi feito por IA, ele pareceria de uma agência profissional?
2. Existe pelo menos UMA coisa visual neste site que surpreende ou impressiona?
3. A identidade visual é coerente com o nicho e o público do cliente?

Se a resposta a qualquer uma for "não" — refine antes de entregar.
