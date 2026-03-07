---
name: envato-design-patterns
description: Use esta skill SEMPRE que for criar um site ou landing page. Ela destila os padrões visuais e estruturais dos melhores templates do Envato/ThemeForest por nicho de mercado — curadoria manual dos top templates de 2025/2026. Combinar obrigatoriamente com html-premium-stack e lp-conversion-bible.
version: "1.0.0"
squads_que_usam: [Engineering, Creative]
agentes_que_usam: [Dex, Prism, Ink]
fontes_analisadas:
  - ai-tool.elementra.themerex.net (AI/Tech/SaaS)
  - green-energy.elementra.themerex.net (Energia/Sustentabilidade)
  - fast-food.elementra.themerex.net (Fast Food)
  - dentist.elementra.themerex.net (Clínica)
  - restics.temptics.com (Restaurante Premium)
  - gramentheme.com/html/fresheat (Alimentação)
  - wpolive.com/tf/php/bliize (Arquitetura/Construção)
  - madebydesignesia.com/themes/residem (Imóveis)
  - html.designingmedia.com/medwell (Saúde/Hospital)
  - html.merku.love/shelly (Escola/Educação)
  - madebydesignesia.com/themes/aivent (Eventos/Conferências)
atualizado: 2026-03
---

# Envato Design Patterns — Referência Visual por Nicho

Esta skill traduz os padrões visuais dos melhores templates premium do Envato/ThemeForest em **regras acionáveis por nicho**. Cada padrão aqui foi observado em múltiplos templates de alta venda e representa uma escolha de design validada pelo mercado.

---

## Padrões Universais (presentes em TODOS os templates premium)

Antes dos padrões por nicho, estes elementos aparecem em 100% dos templates analisados:

### 1. Preloader de entrada
Todo template premium tem uma tela de loading animada antes da página aparecer. Cria percepção de produto profissional desde o primeiro segundo.
```css
#preloader {
  position: fixed; inset: 0;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}
/* Remover após carregamento */
window.addEventListener('load', () => {
  document.getElementById('preloader').style.opacity = '0';
  setTimeout(() => document.getElementById('preloader').remove(), 500);
});
```

### 2. Scroll reveal em cascata
Todos os templates usam animações de entrada escalonadas — nunca elementos estáticos. O padrão é sempre `opacity 0 → 1` + `translateY 30px → 0` com `transition-delay` entre filhos.

### 3. Navbar com mega-menu visual
Os melhores templates têm navbars com dropdowns que mostram **imagem preview + título + descrição** — não apenas lista de links. Mesmo em projetos simples, o hover do menu deve ter profundidade.

### 4. Seção de logos de parceiros/clientes
Barra horizontal com logos em escala de cinza (ficam coloridos no hover) logo abaixo do hero. Comunica credibilidade antes do visitante scrollar qualquer conteúdo.

### 5. Contador de números animado
Seção obrigatória com métricas da empresa: anos de experiência, projetos entregues, clientes satisfeitos. Números começam em zero e contam até o valor real quando entram na viewport.

### 6. Elementos decorativos de fundo
Formas geométricas sutis, blobs de gradiente, pontos em grid, espirais ou círculos semi-transparentes posicionados estrategicamente. Criam profundidade sem adicionar ruído visual. Nunca fundo liso em seções importantes.

### 7. Seção "como funciona" em 3-4 passos
Processo visual numerado com ícone + título + descrição curta. Reduz ansiedade de "não sei como funciona" antes de converter.

### 8. Depoimentos com identidade completa
Nome + foto circular + cargo/cidade. Nunca iniciais ou avatar genérico. Os melhores templates usam carrossel com autoplay suave (sem setas intrusivas).

### 9. CTA com gradiente ou sombra colorida
Botões nunca são cor sólida flat. Sempre têm `box-shadow` colorido no hover ou gradiente suave que reforça a cor accent da marca.

### 10. Footer com 4 colunas
Logo + tagline / Links rápidos / Serviços / Contato + redes sociais. Sempre com linha de copyright na base. Nunca footer de 1 coluna em template premium.

---

## Padrões por Nicho

### 🤖 Tech / SaaS / AI
*Referência: Elementra AI Tool, AIvent*

**Paleta:** Dark mode como padrão — fundo `#0a0a14` ou `#0d1117`, accent em roxo vibrante `#7B61FF` ou ciano `#00D4FF`, texto em branco `#F8F9FA`

**Tipografia:** Sora, Space Grotesk, Plus Jakarta Sans, DM Sans — fontes geométricas que comunicam precisão técnica

**Hero obrigatório:**
- Título em 2 linhas com palavra de destaque em cor accent ou gradiente de texto
- Elemento visual 3D ou mockup de interface flutuando à direita
- Partículas animadas ou grid de pontos no fundo (movimento muito sutil)
- Badge de credibilidade acima do título: `"#1 AI Tool"` ou `"Trusted by 10,000+ teams"`
- Dois CTAs: primário (Get Started / Free Trial) + secundário (Watch Demo)

**Seções características:**
- Grid de features com ícone animado no hover (não estático)
- Seção de pricing com toggle mensal/anual (com animação de troca)
- FAQ com accordion — perguntas técnicas e de pricing
- Integrations section: logos de apps compatíveis em grid

**Elemento diferencial:** Seção com vídeo demo do produto em tela de mockup (notebook ou browser frame)

---

### 🍔 Restaurante / Fast Food / Alimentação
*Referência: Restics, Fresheat, Elementra Fast Food*

**Paleta:** Duas abordagens opostas — ambas funcionam:
- **Premium/Gourmet:** Dark quente `#1C0F0A` + dourado `#E2A33A` + creme `#F5E6D0`
- **Vibrante/Popular:** Branco + vermelho/laranja intenso + preto para contraste

**Tipografia:** Fraunces, Playfair Display para display / Karla, Nunito para corpo — fontes com personalidade artesanal

**Hero obrigatório:**
- Slider com 3 imagens de pratos em close com títulos chamativos
- Elementos decorativos temáticos flutuando (folhas, formas orgânicas, pontos)
- CTA direto: "ORDER NOW" ou "Ver Cardápio" — nunca "Saiba Mais"
- Ícone de produto cutout saindo da foto (produto com fundo removido sobrepõe o hero)

**Seções características:**
- Menu em abas por categoria (Fast Food / Bebidas / Sobremesas) — filtro visual
- Seção de desconto com countdown timer animado
- "Processo" com 3 ícones: Escolha → Pedido → Entrega
- Seção do Chef com foto + assinatura manuscrita
- Galeria Instagram-style com fotos quadradas em grid

**Elemento diferencial:** Produto cutout (imagem com fundo removido) flutuando sobre o hero ou seções — cria profundidade e faz o produto ser o protagonista visual

---

### 🏥 Saúde / Clínica / Hospital
*Referência: Medwell, Elementra Dentist, Madula*

**Paleta:** Tom de confiança — branco `#FFFFFF` + azul profundo `#1B3A6B` + accent em verde sage `#5DB075` ou verde claro `#4CAF50`. Nunca dark mode — saúde precisa de leveza e higiene visual.

**Tipografia:** Cormorant Garamond ou DM Serif Display para títulos / Lato, Source Sans para corpo — elegância com legibilidade

**Hero obrigatório:**
- Foto de médico/profissional sorrindo em tamanho generoso
- Métricas de credibilidade ao lado: "98% Positive Reviews", "38+ Doctors", "32k Reviews"
- CTA de agendamento em destaque: "Book an Appointment" — com ícone de calendário
- Número de telefone visível no header (sem precisar scrollar)

**Seções características:**
- Grid de especialidades com ícone médico + nome + descrição curta + "Read More"
- Seção "Como Funciona": Consulta → Diagnóstico → Tratamento → Acompanhamento
- Equipe médica: foto + nome + especialidade + hover com redes sociais
- Formulário de agendamento destacado (não escondido no rodapé)
- Seção de estatísticas: anos de experiência, médicos, pacientes atendidos

**Elemento diferencial:** Barra de emergência no topo do header com número de telefone 24h e cor de alerta — comunica disponibilidade e urgência sem ser intrusivo

---

### 🏗️ Arquitetura / Construção / Imóveis
*Referência: Bliize, Residem*

**Paleta:** Dois estilos dominantes:
- **Moderno/Premium:** Off-white `#F5F2EE` + quase preto `#2C2C2C` + terracota/cobre `#8B7355`
- **Dark/Luxo:** Preto profundo `#0A0A0A` + branco + dourado `#C9A84C`

**Tipografia:** Libre Baskerville, Cormorant para display / Jost, Raleway para corpo — editorial e refinado

**Hero obrigatório:**
- Foto de projeto em full-bleed (100vw × 100vh) de alta qualidade
- Overlay gradiente sutil (não escuro demais — foto deve respirar)
- Títulos em duas linhas com line-height apertado (aspecto editorial)
- Miniaturas da equipe no canto inferior esquerdo: "Meet Our Team" com fotos circulares
- Scroll indicator animado (seta ou texto "Scroll For More")

**Seções características:**
- Portfólio em grid com hover overlay que revela nome do projeto + categoria
- Seção "Sobre" com layout assimétrico: texto 60% + imagem sobrepostas
- Contador de métricas: anos de experiência, clientes, projetos, escritórios
- Depoimento de cliente com foto grande e citação em destaque
- Seção de serviços sobre foto de fundo escurecida

**Elemento diferencial:** Grid de portfólio com efeito de hover que faz a imagem escurecer e o texto aparecer com `transform: translateY` — elegante e funcional

---

### 🎓 Educação / Escola / Cursos
*Referência: Shelly School, Edumon*

**Paleta:** Alegre e acolhedora — azul `#2563EB` + amarelo `#FCD34D` + branco. Ou verde + laranja para mais energia.

**Tipografia:** Plus Jakarta Sans, Nunito, Poppins — fontes arredondadas que comunicam acessibilidade e otimismo

**Hero obrigatório:**
- Ilustração ou foto de estudante feliz
- Headline focada no resultado: "The Smarter Way to Learn" (benefício) — nunca "Bem-vindo à nossa escola"
- Busca de cursos integrada ao hero (campo de input + botão)
- Badges de credibilidade: "Global Certificate", "Best Program", "Support Service"

**Seções características:**
- Cards de cursos com foto + professor + horário + preço + botão de inscrição
- Grid de professores com foto + nome + especialidade + ícone de "+"  que revela redes sociais
- Galeria de masonry com fotos do ambiente/aulas
- Próximos eventos com data, horário e localização em cards compactos
- Estatísticas: alunos formados, cursos disponíveis, professores, anos de atuação

**Elemento diferencial:** Galeria masonry (colunas com alturas variadas) comunica diversidade e movimento — muito mais rica visualmente que grid quadrado padrão

---

### 🏠 Imóveis / Apartamentos
*Referência: Residem*

**Paleta:** Elegante e neutro — branco/off-white + cinza escuro `#333` + accent em dourado `#B8965A` ou verde escuro `#2D5016` para luxo.

**Tipografia:** Cormorant Garamond, Bodoni Moda para display / Inter, Jost para corpo

**Hero obrigatório:**
- Foto do imóvel em full-screen com overlay leve
- Formulário de busca sobreposto no hero: Localização + Tipo + Preço + "Buscar"
- Indicadores de status: "Disponível", "Novo", "Destaque" em badges coloridos

**Seções características:**
- Listagem em grid com foto + tipo + localização + preço + ícones (quartos, banheiros, m²)
- Mapa interativo ou seção de localização com pontos de interesse
- Processo de compra em 4 passos: Busca → Visita → Proposta → Escritura
- Depoimentos de compradores com foto da residência adquirida
- CTA flutuante para WhatsApp com mensagem pré-preenchida ("Tenho interesse neste imóvel")

**Elemento diferencial:** Cards de imóveis com badge de status colorido e ícones de características (quartos, banheiros, área) em linha — linguagem visual universal que comunica sem precisar ler

---

## Técnicas de Animação Mais Usadas nos Templates Premium

Ordenadas por frequência de aparição:

| Técnica | Frequência | Como implementar |
|---|---|---|
| Scroll reveal (fade + translateY) | 100% | Intersection Observer + classe `.reveal` |
| Hover em cards (translateY -4px + shadow) | 100% | `transition: transform 0.25s` no CSS |
| Navbar blur ao scroll | 95% | `backdrop-filter: blur(20px)` + JS scroll listener |
| Preloader de entrada | 90% | Div fixo que some após `window.load` |
| Contador de números | 85% | JS: incremento por intervalo ao entrar na viewport |
| Carrossel/Slider no hero | 80% | Swiper.js via CDN |
| Galeria com lightbox | 75% | GLightbox ou Fancybox via CDN |
| Elementos decorativos animados | 70% | CSS `@keyframes` com `animation: float 6s infinite` |
| Produto cutout flutuante | 65% | PNG com fundo removido + `animation: float` |
| Tabs de menu/filtro | 60% | JS toggle de classes `.active` |
| Countdown timer | 40% | JS setInterval com display de dias/horas/min/seg |
| Parallax no hero | 35% | `background-attachment: fixed` ou GSAP ScrollTrigger |

---

## Estrutura de Página por Nicho (seções obrigatórias)

### Tech/SaaS
`Navbar → Hero (com mockup) → Logos parceiros → Features em grid → Como funciona → Pricing → Depoimentos → CTA final → Footer`

### Restaurante/Alimentação
`Navbar → Hero slider → Sobre (com foto chef) → Menu em abas → Promoção com countdown → Depoimentos → Galeria → Reserva/Pedido → Footer`

### Saúde/Clínica
`Header com tel → Navbar → Hero (médico + métricas) → Serviços/Especialidades → Sobre + vídeo → Equipe → Como funciona → Depoimentos → Agendamento → Footer`

### Arquitetura/Construção
`Navbar → Hero full-screen → Sobre assimétrico → Portfólio grid → Serviços → Contadores → Depoimento destaque → Contato → Footer`

### Educação/Escola
`Top bar (tel + email) → Navbar → Hero + busca → Benefícios → Cursos em cards → Professores → Galeria masonry → Eventos → Depoimentos → Footer`

### Imóveis
`Navbar → Hero + formulário busca → Imóveis destaque → Processo de compra → Por que nos escolher → Depoimentos → Contato/WhatsApp → Footer`

---

## Checklist Envato-Level (antes de entregar)

Execute antes de qualquer entrega. Um site "nível Envato" passa em todos:

- [ ] Preloader de entrada implementado
- [ ] Navbar com blur ao scroll e redução de altura
- [ ] Hero com elemento visual dominante (produto cutout, mockup, foto full-bleed)
- [ ] Logos de parceiros/clientes logo abaixo do hero
- [ ] Pelo menos um elemento decorativo animado no fundo (blob, pontos, forma geométrica)
- [ ] Seção "como funciona" em 3-4 passos numerados
- [ ] Contador de números animado ao scroll
- [ ] Cards de serviço com hover (translateY + shadow colorida)
- [ ] Depoimentos com foto + nome completo + cargo/cidade
- [ ] Galeria ou portfólio com hover overlay
- [ ] CTA com sombra colorida no hover (não flat)
- [ ] WhatsApp flutuante (se houver número disponível)
- [ ] Scroll to top button
- [ ] Footer com 3-4 colunas
- [ ] Logo visível no header E no footer (sem escurecer pelo fundo)

**Meta:** Se comparar o resultado com os templates das fontes listadas acima, o cliente não deve sentir diferença de qualidade.
