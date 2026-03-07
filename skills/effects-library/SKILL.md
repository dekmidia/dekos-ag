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

## 17. GOOGLE MAPS INCORPORADO
**Quando usar:** Sempre que o briefing ou `SESSAO_ATIVA.md` tiver endereço físico ou link do Google Meu Negócio. Obrigatório para negócios locais.

```html
<!-- SEÇÃO COMO CHEGAR -->
<section class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="section-label">Localização</div>
    <h2>Como Chegar</h2>

    <div style="display:grid;grid-template-columns:1fr 1.6fr;gap:3rem;align-items:start">

      <!-- Dados de contato ao lado do mapa -->
      <div>
        <div class="reveal" style="display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.5rem">
          <i data-lucide="map-pin" style="width:20px;height:20px;color:var(--accent);flex-shrink:0;margin-top:2px"></i>
          <div>
            <div style="font-weight:600;margin-bottom:0.25rem">Endereço</div>
            <div style="color:var(--muted);font-size:0.9rem">[RUA, NÚMERO — BAIRRO]<br>[CIDADE — ESTADO — CEP]</div>
          </div>
        </div>
        <div class="reveal" style="display:flex;gap:1rem;align-items:center;margin-bottom:1.5rem">
          <i data-lucide="phone" style="width:20px;height:20px;color:var(--accent);flex-shrink:0"></i>
          <div>
            <div style="font-weight:600;margin-bottom:0.25rem">Telefone</div>
            <a href="tel:[TELEFONE]" style="color:var(--muted);font-size:0.9rem;text-decoration:none">[TELEFONE]</a>
          </div>
        </div>
        <div class="reveal" style="display:flex;gap:1rem;align-items:flex-start">
          <i data-lucide="clock" style="width:20px;height:20px;color:var(--accent);flex-shrink:0;margin-top:2px"></i>
          <div>
            <div style="font-weight:600;margin-bottom:0.25rem">Horário</div>
            <div style="color:var(--muted);font-size:0.9rem">[DIAS E HORÁRIOS DE FUNCIONAMENTO]</div>
          </div>
        </div>
        <!-- Botão abrir no Google Maps -->
        <a href="https://maps.google.com/?q=[ENDEREÇO]" target="_blank"
           class="btn-primary reveal" style="display:inline-flex;margin-top:2rem">
          <i data-lucide="navigation" style="width:16px;height:16px"></i>
          Abrir no Google Maps
        </a>
      </div>

      <!-- Mapa embed -->
      <div class="reveal" style="border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08)">
        <iframe
          src="https://maps.google.com/maps?q=[ENDEREÇO COMPLETO DO CLIENTE]&output=embed&z=16"
          width="100%" height="420"
          style="border:0;display:block"
          allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  </div>
</section>
```

**Como gerar o embed URL correto:**
1. Abrir Google Maps no browser
2. Pesquisar o endereço do cliente
3. Clicar em "Compartilhar" → "Incorporar mapa"
4. Copiar o `src` do iframe gerado — é mais preciso que montar manualmente
5. Substituir no código acima

**Regras de QA:**
- Mapa nunca com height fixo em mobile — usar `height: 280px` em telas < 768px
- Sempre com `loading="lazy"` para não impactar performance
- Sempre com `border-radius` e `overflow:hidden` no container para respeitar o design
- Em dark mode, adicionar `filter: grayscale(20%) contrast(1.05)` no iframe para integrar visualmente

---

## 18. WIDGET DE FEED DO INSTAGRAM
**Quando usar:** Sempre que o briefing ou `SESSAO_ATIVA.md` tiver @ do Instagram. Mostra os últimos posts em grid.

**Solução recomendada: Behold.so** (gratuito, estável, sem quebrar com mudanças de API)

```html
<!-- SEÇÃO INSTAGRAM FEED -->
<section class="py-20 px-6">
  <div class="max-w-6xl mx-auto" style="text-align:center">

    <div class="section-label">Instagram</div>
    <h2 class="reveal">Acompanhe nosso trabalho</h2>
    <p class="reveal" style="color:var(--muted);margin-bottom:3rem">
      Últimas publicações de <a href="https://instagram.com/[HANDLE]" target="_blank"
      style="color:var(--accent);text-decoration:none">@[HANDLE]</a>
    </p>

    <!-- PLACEHOLDER: substituir pelo código embed do Behold.so -->
    <!-- Instruções para o cliente: -->
    <!--
      1. Acesse behold.so e crie uma conta gratuita
      2. Conecte seu Instagram (@[HANDLE])
      3. Escolha o layout "Grid" com 9 posts
      4. Copie o código embed gerado
      5. Substitua o bloco abaixo pelo código copiado
    -->
    <div class="reveal" id="instagram-feed-placeholder"
         style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;max-width:700px;margin:0 auto">
      <!-- 9 placeholders visuais enquanto o embed não for configurado -->
      <script>
        for(let i=0;i<9;i++){
          document.currentScript.insertAdjacentHTML('beforebegin',
            `<div style="aspect-ratio:1;background:var(--surface);border-radius:8px;
             border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;
             justify-content:center;color:var(--muted)">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                 <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
               </svg>
             </div>`
          );
        }
      </script>
    </div>
    <!-- FIM DO PLACEHOLDER — substituir pelo embed do Behold -->

    <a href="https://instagram.com/[HANDLE]" target="_blank"
       class="btn-secondary reveal" style="display:inline-flex;margin-top:2.5rem">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
      Ver mais no Instagram
    </a>

  </div>
</section>

<!-- CSS do grid Instagram -->
<style>
/* Grid hover overlay */
#instagram-feed-placeholder > div {
  position: relative; overflow: hidden; cursor: pointer;
  transition: transform 0.25s;
}
#instagram-feed-placeholder > div:hover { transform: scale(1.02); }
</style>
```

**Nota obrigatória na entrega ao cliente:**
> ⚠️ Para ativar o feed do Instagram: acesse behold.so, conecte seu Instagram @[handle], gere o código embed e substitua no arquivo HTML no local indicado. O processo leva menos de 5 minutos e funciona sem precisar de desenvolvedor.

**Alternativa sem configuração (apenas link visual):**
Se o cliente não quiser configurar o Behold, substituir o grid por um CTA clean:
```html
<a href="https://instagram.com/[HANDLE]" target="_blank"
   style="display:block;padding:3rem;background:var(--surface);border-radius:16px;
   border:1px solid rgba(255,255,255,0.08);text-decoration:none;transition:border-color 0.3s"
   onmouseover="this.style.borderColor='rgba(123,97,255,0.3)'"
   onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
  <div style="font-size:2.5rem;margin-bottom:1rem">📸</div>
  <div style="font-weight:700;font-size:1.2rem;color:var(--text)">@[HANDLE]</div>
  <div style="color:var(--muted);margin-top:0.5rem">Siga no Instagram para acompanhar nosso trabalho</div>
</a>
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
| Google Maps embed | ✅ | ✅ | ✅ | ✅ | ✅ |
| Instagram feed | ✅ | ✅ | ✅ | ✅ | ✅ |
