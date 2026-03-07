---
name: effects-library
description: Biblioteca de efeitos visuais prontos para uso. Leia esta skill quando precisar de qualquer efeito animado, interativo ou de profundidade visual. Cada snippet foi extraído dos melhores templates Envato e está pronto para copiar e adaptar. O arquivo effects-demo.html na pasta references/ mostra todos os efeitos rodando ao vivo.
version: "1.0.0"
squads_que_usam: [Engineering]
agentes_que_usam: [Dex]
demo_visual: references/effects-demo.html
leitura: Obrigatória junto com html-premium-stack
---

# Effects Library — Snippets Prontos por Categoria

Cada efeito aqui tem nome, quando usar, e código completo pronto para copiar.
O arquivo `references/effects-demo.html` mostra todos rodando ao vivo no browser.

---

## 01. PRELOADER DE ENTRADA
**Quando usar:** Todo site e landing page, sem exceção. Cria percepção de produto profissional desde o primeiro frame.

```html
<div id="preloader">
  <div class="preloader-logo">MARCA</div>
  <div class="preloader-bar"><div class="preloader-bar-fill"></div></div>
</div>

<style>
#preloader {
  position: fixed; inset: 0; background: var(--bg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  z-index: 9999; transition: opacity 0.6s ease, visibility 0.6s ease;
}
#preloader.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
.preloader-bar { width: 180px; height: 2px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; margin-top: 1.5rem; }
.preloader-bar-fill { height: 100%; width: 0; background: linear-gradient(90deg, var(--primary), var(--accent)); animation: loadBar 1.8s ease forwards; }
@keyframes loadBar { to { width: 100%; } }
</style>

<script>
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 1800);
});
</script>
```

---

## 02. NAVBAR SHRINK + BLUR AO SCROLL
**Quando usar:** Todo site. Navbar que reduz padding e ativa blur quando o usuário scrolla, voltando ao normal no topo.

```html
<nav id="navbar">...</nav>

<style>
#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 1.5rem 2rem;
  transition: padding 0.35s ease, background 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease;
}
#navbar.scrolled {
  padding: 0.75rem 2rem;
  background: rgba(8,8,16,0.85);  /* ajustar para a cor de fundo do site */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.08);
}
</style>

<script>
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});
</script>
```

---

## 03. SCROLL REVEAL EM CASCATA
**Quando usar:** Toda seção com múltiplos elementos (cards, steps, features). Nunca deixar elementos estáticos.

```html
<!-- Adicionar classe .reveal em cada elemento que deve animar -->
<div class="reveal">Elemento 1</div>
<div class="reveal">Elemento 2</div>
<div class="reveal">Elemento 3</div>

<style>
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
/* Stagger automático para grupos */
.reveal:nth-child(1) { transition-delay: 0s; }
.reveal:nth-child(2) { transition-delay: 0.1s; }
.reveal:nth-child(3) { transition-delay: 0.2s; }
.reveal:nth-child(4) { transition-delay: 0.3s; }
.reveal:nth-child(5) { transition-delay: 0.4s; }
</style>

<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
```

---

## 04. BLOBS DE GRADIENTE ANIMADOS (Hero Background)
**Quando usar:** Hero de dark mode. Cria profundidade e movimento sem imagem externa.

```html
<div class="blob blob-1"></div>
<div class="blob blob-2"></div>
<div class="blob blob-3"></div>

<style>
.blob {
  position: absolute; border-radius: 50%;
  filter: blur(80px); pointer-events: none;
  animation: blobFloat 8s ease-in-out infinite;
}
.blob-1 { width:500px; height:500px; background:rgba(123,97,255,0.18); top:-100px; right:-100px; animation-delay:0s; }
.blob-2 { width:400px; height:400px; background:rgba(0,212,255,0.12); bottom:-50px; left:-80px; animation-delay:-3s; }
.blob-3 { width:300px; height:300px; background:rgba(123,97,255,0.1); top:40%; left:40%; animation-delay:-5s; }

@keyframes blobFloat {
  0%,100% { transform: translate(0,0) scale(1); }
  33%     { transform: translate(30px,-20px) scale(1.05); }
  66%     { transform: translate(-20px,15px) scale(0.97); }
}
</style>
```

---

## 05. DOT GRID BACKGROUND
**Quando usar:** Hero e seções de destaque. Grid de pontos cria profundidade discreta.

```css
.dot-grid {
  position: absolute; inset: 0; pointer-events: none;
  opacity: 0.15;
  background-image: radial-gradient(rgba(123,97,255,0.6) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

---

## 06. GLASSMORPHISM
**Quando usar:** Cards sobre fundos com gradiente, imagem ou cor vibrante. Nunca sobre fundo branco liso (não funciona).

```css
/* Glass neutro */
.glass {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
}

/* Glass com cor accent */
.glass-accent {
  background: rgba(123,97,255,0.08); /* trocar 123,97,255 pela cor primary do projeto */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(123,97,255,0.2);
  border-radius: 20px;
}

/* Glass dark (para modais, tooltips) */
.glass-dark {
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
}
```

---

## 07. CARD HOVER 3D
**Quando usar:** Cards de features, serviços, pricing. Efeito de inclinação 3D ao hover.

```css
.card-3d-wrap { perspective: 1000px; }
.card-3d {
  border-radius: 16px; padding: 2rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  transform-style: preserve-3d;
  border: 1px solid rgba(255,255,255,0.07);
}
.card-3d:hover {
  transform: rotateX(-4deg) rotateY(4deg) translateY(-6px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(123,97,255,0.2);
  border-color: rgba(123,97,255,0.25);
}
```

---

## 08. CONTADOR ANIMADO
**Quando usar:** Seção de métricas (anos de experiência, projetos, clientes). Números contam do zero ao valor real.

```html
<div data-target="127">0</div>

<script>
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.counter-section').forEach(el => counterObserver.observe(el));
</script>
```

---

## 09. ESTRELAS ANIMADAS COM GLOW
**Quando usar:** Seção de avaliações Google/rating. Nunca estáticas — estrelas devem aparecer uma a uma com pop.

```html
<div class="stars-row" id="starsRow">
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
</div>
<div id="ratingCounter">0.0</div>

<style>
.star {
  font-size: 2.5rem; color: #FFD700;
  opacity: 0; transform: scale(0) rotate(-30deg);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
  display: inline-block;
}
.star.show {
  opacity: 1; transform: scale(1) rotate(0deg);
  filter: drop-shadow(0 0 8px rgba(255,215,0,0.6));
  animation: starGlow 2s ease-in-out infinite;
}
.star:nth-child(1) { transition-delay: 0s; }
.star:nth-child(2) { transition-delay: 0.12s; }
.star:nth-child(3) { transition-delay: 0.24s; }
.star:nth-child(4) { transition-delay: 0.36s; }
.star:nth-child(5) { transition-delay: 0.48s; }

@keyframes starGlow {
  0%,100% { filter: drop-shadow(0 0 6px rgba(255,215,0,0.5)); }
  50%      { filter: drop-shadow(0 0 16px rgba(255,215,0,0.9)); }
}
</style>

<script>
const starsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.star').forEach((s, i) => {
      setTimeout(() => s.classList.add('show'), i * 150);
    });
    // Rating counter (ajustar targetRating)
    const targetRating = 5.0;
    const ratingEl = document.getElementById('ratingCounter');
    let r = 0;
    const timer = setInterval(() => {
      r = Math.min(r + 0.08, targetRating);
      ratingEl.textContent = r.toFixed(1);
      if (r >= targetRating) clearInterval(timer);
    }, 20);
    starsObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });
starsObserver.observe(document.getElementById('starsRow').parentElement);
</script>
```

---

## 10. DEPOIMENTOS UNIFORMES (altura igual)
**Quando usar:** Toda seção de testimonials. Cards com altura igual independente do tamanho do texto.

```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: stretch; /* ← isso garante altura igual */
}
.testimonial-card {
  display: flex;
  flex-direction: column;
  min-height: 280px;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.07);
}
.testimonial-text {
  flex: 1; /* ← preenche o espaço restante */
  font-style: italic;
  line-height: 1.7;
}
.testimonial-author {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.07);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
```

---

## 11. BOTÕES FLUTUANTES (WhatsApp + Scroll Top)
**Quando usar:** Todo site que tiver número de WhatsApp no briefing. Scroll top sempre.

```html
<div class="fab-group">
  <button class="fab fab-scroll" id="scrollTopBtn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</button>
  <a href="https://wa.me/[NUMERO]" target="_blank" class="fab fab-whatsapp">
    <!-- ícone SVG do WhatsApp -->
  </a>
</div>

<style>
.fab-group { position: fixed; bottom: 2rem; right: 2rem; display: flex; flex-direction: column; gap: 0.75rem; z-index: 200; }
.fab {
  width: 56px; height: 56px; border-radius: 50%; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 1.2rem;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
}
/* Scroll top — usa a cor accent/primary do site */
.fab-scroll {
  background: var(--primary);
  box-shadow: 0 4px 20px rgba(123,97,255,0.4);
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s, transform 0.2s, box-shadow 0.2s;
}
.fab-scroll.visible { opacity: 1; pointer-events: auto; }
.fab-scroll:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(123,97,255,0.6); }

/* WhatsApp — sempre verde, sempre com pulso */
.fab-whatsapp {
  background: #25D366;
  box-shadow: 0 4px 20px rgba(37,211,102,0.4);
  animation: waPulse 2.5s ease-in-out infinite;
}
.fab-whatsapp:hover { transform: scale(1.1); animation: none; box-shadow: 0 8px 30px rgba(37,211,102,0.6); }

@keyframes waPulse {
  0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); }
  50%      { box-shadow: 0 4px 35px rgba(37,211,102,0.7), 0 0 0 8px rgba(37,211,102,0.1); }
}
</style>

<script>
window.addEventListener('scroll', () => {
  document.getElementById('scrollTopBtn').classList.toggle('visible', window.scrollY > 300);
});
</script>
```

---

## 12. PRODUTO CUTOUT FLUTUANTE
**Quando usar:** Hero de restaurante, produto físico, app mockup. PNG com fundo removido que flutua suavemente.

```css
.cutout-float {
  animation: floatY 4s ease-in-out infinite;
  filter: drop-shadow(0 30px 50px rgba(0,0,0,0.3));
}
/* Para produtos coloridos, adicionar sombra colorida: */
.cutout-float-colored {
  animation: floatY 4s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px rgba(255,107,53,0.35)); /* ajustar cor do produto */
}
@keyframes floatY {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-20px); }
}
```

---

## 13. GRADIENT MESH BACKGROUND
**Quando usar:** Seções de destaque, CTA final, backgrounds sem imagem. Mais rico que cor sólida.

```css
.mesh-bg {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(123,97,255,0.12) 0%, transparent 55%),
    radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 80%, rgba(123,97,255,0.07) 0%, transparent 45%),
    var(--bg); /* cor de fundo base */
}
/* Versão light mode */
.mesh-bg-light {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(123,97,255,0.06) 0%, transparent 55%),
    radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.04) 0%, transparent 50%),
    #ffffff;
}
```

---

## 14. NOISE TEXTURE OVERLAY
**Quando usar:** Hero cinematográfico, seções de destaque premium. Adiciona textura de película sem arquivo externo.

```css
.noise-section {
  position: relative;
  overflow: hidden;
}
.noise-section::after {
  content: ''; position: absolute; inset: 0;
  pointer-events: none; opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

---

## 15. PROCESSO EM PASSOS COM LINHA CONECTORA
**Quando usar:** Seção "como funciona" em 3-4 passos. A linha conectora visual comunica sequência.

```html
<div class="process-steps">
  <div class="process-step">
    <div class="process-number">01</div>
    <h4>Briefing</h4>
    <p>Descrição do passo</p>
  </div>
  <!-- repetir para cada passo -->
</div>

<style>
.process-steps {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;
  position: relative;
}
/* Linha conectora */
.process-steps::before {
  content: ''; position: absolute; top: 28px;
  left: 12%; right: 12%; height: 1px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  z-index: 0;
}
.process-step { text-align: center; position: relative; z-index: 1; }
.process-number {
  width: 56px; height: 56px; border-radius: 50%;
  margin: 0 auto 1rem;
  background: var(--surface);
  border: 2px solid var(--primary);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; color: var(--primary);
  transition: background 0.3s, transform 0.3s;
}
.process-step:hover .process-number {
  background: var(--primary); color: #fff; transform: scale(1.1);
}
</style>
```

---

## 16. BARRAS DE HABILIDADE ANIMADAS
**Quando usar:** Seção "sobre" ou diferencial, especialmente para serviços. Barras que crescem ao entrar na viewport.

```html
<div id="skill-section">
  <div class="skill-bar-label"><span>Design Premium</span><span>95%</span></div>
  <div class="skill-bar-track">
    <div class="skill-bar-fill" data-width="95"></div>
  </div>
</div>

<style>
.skill-bar-track { height: 6px; background: rgba(255,255,255,0.08); border-radius: 6px; overflow: hidden; margin-bottom: 1rem; }
.skill-bar-fill {
  height: 100%; width: 0; border-radius: 6px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: width 1.2s cubic-bezier(0.22,1,0.36,1);
}
</style>

<script>
const barsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('#skill-section').forEach(el => barsObserver.observe(el));
</script>
```

---

## Referência de uso por Nicho

| Efeito | Tech/SaaS | Restaurante | Clínica | Construção | Escola |
|---|---|---|---|---|---|
| Preloader | ✅ | ✅ | ✅ | ✅ | ✅ |
| Navbar shrink | ✅ | ✅ | ✅ | ✅ | ✅ |
| Blobs animados | ✅ | — | — | — | — |
| Dot grid | ✅ | — | — | — | — |
| Glassmorphism | ✅ | ✅ luxury | — | ✅ dark | — |
| Card 3D hover | ✅ | ✅ | ✅ | ✅ | ✅ |
| Contador | ✅ | ✅ | ✅ | ✅ | ✅ |
| Estrelas animadas | ✅ | ✅ | ✅ | ✅ | ✅ |
| Produto cutout | — | ✅ | — | — | — |
| Gradient mesh | ✅ | — | ✅ | ✅ dark | ✅ |
| Noise texture | ✅ | ✅ luxury | — | ✅ | — |
| Processo passos | ✅ | ✅ | ✅ | ✅ | ✅ |
| WhatsApp + ScrollTop | ✅ | ✅ | ✅ | ✅ | ✅ |
