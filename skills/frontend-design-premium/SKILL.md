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

### 6. Elementos Visuais Premium Obrigatórios

Sempre que o contexto permitir, calibre a intensidade ao nicho do cliente e implemente os seguintes recursos:

- **Glassmorphism:** Use `backdrop-filter: blur()`, bordas semi-transparentes e fundo rgba em cards e painéis, especialmente sobre fundos com gradiente ou imagem.
- **Contadores Animados:** Números escaláveis que contam de 0 até o valor final ao entrar na viewport (ex: anos de experiência, projetos entregues).
- **Parallax Decorativo:** Círculos, formas geométricas ou gradientes que se movem suavemente em parallax com o scroll da página.
- **Blobs Animados no Hero:** Formas orgânicas no background de hero sections animadas via `keyframes` em loop lento para criar profundidade.
- **Bordas/Linhas Animadas:** Elementos SVG decorativos que se "desenham" usando `stroke-dashoffset` ao entrarem na viewport.
- **Backgrounds com Parallax:** Seções onde a imagem de fundo tem uma velocidade diferente do scroll (usando `background-attachment: fixed` ou via JS).
- **Hover 3D em Cards:** Uso de `perspective` aliado a `rotateX` e `rotateY` suaves no evento de movimento do mouse para sensação tátil/espacial.
- **Mesh Gradients Complexos:** Fundos formados por múltiplos `radial-gradient` coloridos sobrepostos simulando malhas volumétricas.
- **Texto com Gradiente Animado:** Títulos ou *highlights* utilizando `background-clip: text` com um background size maior (ex: 200% 200%) e animação de background pulse/motion fluid.

---

### 7. UX, QA e Elementos Funcionais Obrigatórios

Para garantir que a imersão visual não prejudique a usabilidade diária, aplique sempre as seguintes regras funcionais premium:

- **QA Visual de Logotipos e Contrastes:**
  - Garantir legibilidade máxima. Antes de finalizar o header e footer, verificar se o logo tem contraste. Se o fundo for escuro e o logo não tiver: aplicar `filter: brightness(0) invert(1)` ou drop-shadow intenso. Se for claro e escurecer, manter original ou adicionar pill badge. Nunca deixe o logo "apagado".
  - Teste de Contraste OBRIGATÓRIO (mínimo WCAG AA) para textos sobre imagens ou color blocks.
- **Cards de Depoimento - Altura Uniforme:**
  - Todos os cards de depoimento devem obrigatoriamente ter a mesma altura. No container CSS, garanta `align-items: stretch` (ou Grid com layout esticado).
  - Cada card deve possuir `display: flex; flex-direction: column; justify-content: space-between` contendo um `min-height` fixo (para lidar com textos pequenos vs grandes).
  - O texto do depoimento em si deve usar `flex: 1` para preencher o espaço flutuante de forma elegante.
- **Estrelas de Avaliação Dinâmicas:**
  - Estrelas estáticas são proibidas. Ao entrarem na viewport (scroll), elas devem explodir (`scale(0) -> scale(1.2) -> scale(1)`) de forma estagiada (delay de 0.15s entre cada estrela).
  - Em casos de nota máxima (5.0), aplicar também um `text-shadow` de Glow Dourado contínuo após a abertura.
  - A nota numérica associada (ex: `5.0`) deve surgir dinamicamente via script com ease interpolado (0 até a nota real).
- **Navbar Comportamental Responsiva:**
  - Ao scrollar além de 80px, a altura da Navbar deve reduzir suavemente (ex: padding menor, logo levemente reduzido) numa transição `0.3s ease`.
  - Ao retornar ao topo (y=0), deve restaurar a altura original automaticamente.
  - Ao scrollar, deve acionar a classe `backdrop-filter: blur(16px)` com um fundo de cor semi-translúcido para emoldurar o conteúdo em rolagem.
- **WhatsApp Flutuante Fixo:**
  - Se for disponibilizado número de WhatsApp, inclua um botão flutuante no canto inferior direito.
  - Estilo: O botão deve imitar os de chat nativos (fundo verde), contendo um efeito de "pulse" ou anéis em animação contínua para prender atenção, além de um tooltip "Fale conosco" ao Hover.
  - Ao clicar, abrir a API do WhatsApp (wa.me) em target `_blank`.
- **Botão "Scroll to Top" Discreto:**
  - Botão fixo no canto inferior direito (posicionado ligeiramente acima do WhatsApp).
  - Oculto no primeiro fold: deve realizar `fade-in` apenas após 300px de scroll da tela inicial.
  - Evento de clique dispara script com `behavior: smooth` até o topo da página HTML.

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

**Elementos Premium (Nova Regra Ouro):**

- [ ] Elementos de Glassmorphism aplicados onde couber
- [ ] Texto com gradiente animado no Hero/Títulos de destaque
- [ ] Blobs e Mesh Gradients para profundidade de fundo
- [ ] Efeito Parallax em elementos decorativos ou imagens fluídas
- [ ] Hover 3D ativo nos Cards principais
- [ ] Contadores animados para números de prova social

**UX e Elementos Funcionais:**

- [ ] Logo rigorosamente destacado (aplicar brigthness/invert caso o fundo escureça a marca)
- [ ] Textos testados contra fundo, sem ofuscação (contraste AA)
- [ ] Cards de Portfólio ou Depoimento alinhados perfeitamente (flex + height uniforme)
- [ ] Estrelas de rating animadas (pop stagger e glow 5 star) e contagem decimal atuante
- [ ] Navbar reduz de altura ao scrollar para maximizar área de tela
- [ ] Botão do WhatsApp flutuante vivo, animado e com tooltip funcional
- [ ] Botão "Voltar ao topo" que só existe após 300px de barra descida

---

## O Teste Final

Antes de entregar, responda:

1. Se eu mostrar este site para alguém sem dizer que foi feito por IA, ele pareceria de uma agência profissional?
2. Existe pelo menos UMA coisa visual neste site que surpreende ou impressiona?
3. A identidade visual é coerente com o nicho e o público do cliente?

Se a resposta a qualquer uma for "não" — refine antes de entregar.
