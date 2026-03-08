---
name: map2web
description: Use esta skill sempre que o usuário fornecer uma URL do Google Maps ou Google Perfil da Empresa (GMB), ou solicitar a criação de um site para um negócio local. Ela coleta e valida os dados do negócio e gera um site completo, responsivo, com SEO On-page, design premium e Tailwind CSS.
version: "2.0.0"
squads_que_usam: [Engineering]
agente_principal: Dex
---

# Local Business Web Architect — map2web

Esta Skill transforma informações de negócios locais em código de alta performance e design premium.

---

## ⚠️ REGRA ANTI-ALUCINAÇÃO (CRÍTICA — LEIA PRIMEIRO)

**O Antigravity NÃO tem capacidade de raspar dados automaticamente de URLs do Google Maps.**

O arquivo `index.ts` desta skill contém uma função de simulação (`extractBusinessData`) com dados fictícios hard-coded. **NÃO USE esses dados fictícios em nenhuma hipótese.**

### Protocolo Obrigatório de Coleta de Dados

Antes de escrever uma linha de código, siga este protocolo:

**Passo 1 — Verificar SESSAO_ATIVA.md**

Leia o arquivo `SESSAO_ATIVA.md` na raiz do repositório.

- Se `gmb_nome_oficial` e outros campos GMB estiverem preenchidos → use esses dados e **pule para o Passo 3**.
- Se os campos estiverem `null` → execute o **Passo 2**.

**Passo 2 — Coletar Dados via Perguntas ao Usuário**

Se o usuário forneceu uma URL do Google Maps, peça a ele que copie e cole as informações diretamente do perfil. Faça **uma única mensagem** com todas as perguntas:

> "Para criar o site com dados reais e precisos, preciso que você me informe:
> 1. **Nome oficial** do negócio (como aparece no Google Meu Negócio)
> 2. **Endereço completo**
> 3. **Telefone(s) de contato**
> 4. **Horário de funcionamento** (dias e horas)
> 5. **Categoria/nicho** do negócio (ex: clínica odontológica, restaurante japonês)
> 6. **2 ou 3 avaliações reais** de clientes (nome, estrelas e texto do comentário)
> 7. **Serviços principais** oferecidos (liste de 3 a 6)
> 8. Existe **logo ou imagens** na pasta `referencias/` do projeto?"

**Passo 3 — Validar Dados Recebidos**

Antes de usar qualquer dado, confirme:
- [ ] Nome do negócio é o nome real (não um placeholder)
- [ ] Endereço contém cidade e estado
- [ ] Telefone tem DDD
- [ ] Há pelo menos 1 avaliação real para prova social
- [ ] Nicho/categoria está definido

Se algum campo crítico estiver faltando, pergunte especificamente. **Nunca invente ou complete com dados fictícios.**

---

## Fluxo de Desenvolvimento (após dados validados)

### Etapa 1 — Análise de Identidade Visual

1. Verificar se existe pasta `PROJETOS/[cliente]/referencias/` com logo, cores ou design system.
2. Se existir logo → extrair paleta de cores dominante do logo para usar no site.
3. Se não existir → perguntar ao usuário: *"Você tem preferência por alguma paleta de cores ou estilo visual? (Ex: tons dourados e escuros para transmitir sofisticação, azul e branco para transmitir confiança, etc.)"*

### Etapa 2 — Escolha do Design System

Com base no nicho, selecione o preset visual mais adequado:

| Nicho | Preset Recomendado | Paleta Base |
|---|---|---|
| Saúde, Clínicas, Bem-estar | Elegante + Clean | Verdes/dourados escuros ou azuis frios |
| Beleza, Estética, Salões | Luxo + Feminino | Rosé, dourado, creme ou nude |
| Restaurantes, Gastronomia | Quente + Apetitoso | Terroso, bordeaux, âmbar |
| Advocacia, Contabilidade | Institucional + Sério | Azul marinho, grafite, branco |
| Construção, Engenharia | Robusto + Confiável | Laranja, cinza escuro, branco |
| Educação, Cursos | Acessível + Motivador | Azul, amarelo, branco |
| Fitness, Academia | Energético + Dinâmico | Preto, vermelho, laranja |

**NUNCA use:**
- Gradientes roxos genéricos
- Fonte Inter como escolha padrão
- Layout centralizado com hero branco básico
- Cards cinzas com bordas sutis sem personalidade

### Etapa 3 — Estrutura HTML Premium

Gere HTML5 semântico com as seguintes seções obrigatórias:

```
1. NAVBAR — pill-shaped, fixed, com blur ao rolar
2. HERO — 100vh, imagem de fundo com overlay, CTA destacado, título impactante
3. SOBRE — história do negócio com dado real de anos de atuação ou diferenciais
4. SERVIÇOS — cards com ícones SVG, descrição e micro-interação no hover
5. PROVA SOCIAL — avaliações reais do cliente (dados coletados no Passo 2)
6. CTA INTERMEDIÁRIO — WhatsApp ou telefone com senso de urgência
7. LOCALIZAÇÃO — mapa embed do Google Maps + endereço formatado
8. FOOTER — horários, contatos, redes sociais, rodapé DekMídia
```

### Etapa 4 — Requisitos Técnicos Obrigatórios

**Performance:**
- Tailwind CSS via CDN (não via build)
- Imagens com `loading="lazy"` e `alt` descritivo
- CSS crítico inline para LCP rápido

**Animações (obrigatório — site não pode ser estático):**
- Intersection Observer para fade-in-up nas seções
- Hover effects nos botões com `transform: translateY(-2px)`
- Transição suave no navbar ao rolar

**SEO On-page:**
- `<title>` com palavra-chave + cidade (máx 60 chars)
- Meta `description` com CTA (máx 155 chars)
- Schema JSON-LD: `LocalBusiness` com todos os campos reais
- Schema JSON-LD: `FAQPage` com 3 perguntas frequentes do nicho
- H1 único, H2 para seções, H3 para subseções

**Legal (obrigatório LGPD):**
- Modal de Cookie Notice funcional
- Link para `politica-privacidade.html` no footer
- Página `politica-privacidade.html` gerada automaticamente

**Rodapé obrigatório:**
```html
Desenvolvido por <a href="https://www.dekmidia.com.br">DekMídia</a>
```

### Etapa 5 — Estrutura de Arquivos de Saída

```
PROJETOS/[cliente]/creative/lp/
├── index.html              ← página principal
├── politica-privacidade.html
├── sitemap.xml
├── robots.txt
├── css/
│   └── style.css           ← estilos customizados além do Tailwind
└── js/
    └── main.js             ← animações, cookie notice, interações
```

---

## Checklist de Entrega (rodar antes de salvar)

- [ ] Todos os dados usados são REAIS (coletados do usuário, sem fictícios)
- [ ] Nome do negócio está correto e consistente em todo o HTML
- [ ] Telefone está correto e clicável (`href="tel:..."`)
- [ ] WhatsApp link funcional com mensagem pré-preenchida
- [ ] Endereço está correto no embed do Maps e no schema JSON-LD
- [ ] Avaliações são reais (não foram inventadas)
- [ ] Hero tem imagem (não placeholder cinza)
- [ ] Site não é estático (animações funcionando)
- [ ] Mobile-first verificado (testar em 375px de largura)
- [ ] Cookie Notice funcional
- [ ] Schema JSON-LD válido (nenhum campo com valor fictício)
- [ ] Rodapé com link DekMídia presente
