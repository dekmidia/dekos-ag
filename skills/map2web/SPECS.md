---
name: map2web
description: Use esta skill sempre que o usuário fornecer uma URL do Google Maps ou Google Perfil da Empresa (GMB). Ela extrai dados do negócio local para gerar um site ou landing page completo, responsivo, com SEO On-page, Tailwind CSS e animações.
---

# Local Business Web Architect Skill

Esta Skill transforma informações de geolocalização e presença digital local em código de alta performance. O foco é a conversão de contexto: extrair a essência do negócio (Niche, Horários, Avaliações, Serviços) e transmutar isso em um boilerplate moderno com Tailwind CSS e SEO agressivo.

## When to use this skill

- Quando um link do Google Maps ou Google Perfil da Empresa for fornecido.
- Quando o usuário solicitar a criação de um site para um negócio local que ainda não possui site.
- Para gerar sites profissionais que seguem rigorosamente os critérios de indexação do Google.

## Execution Steps / Checklist

1. **[Data Extraction]**: Analise a URL para identificar: Nome da empresa, nicho, endereço, telefone, horários e tom de voz (baseado em avaliações).
   - **[Review Extraction]**: Extraia depoimentos reais (Nome, Estrelas, Comentário) para criar prova social imediata no site.
2. **[Reference Assets]**: Verifique se o usuário possui uma pasta `/reference`.
   - **MANDATÓRIO**: Se existirem imagens lá (especialmente `logo.jpg`), use-as obrigatoriamente no código. Ignore placeholders se houver referências reais.
   - Analise as cores do logotipo na pasta `/reference` para definir a paleta de cores do site. O site DEVE ser coerente com a identidade visual do cliente.
3. **[Structure Setup]**: Organize o código na seguinte estrutura de pastas:
   - `/img`: Para imagens e logotipos.
   - `/css`: Para estilos customizados (além do Tailwind).
   - `/js`: Para scripts de animação (AOS, ScrollReveal ou Vanilla).
4. **[Development]**:
   - Gere o **HTML5 Semântico** completo (header, main, section, footer).
   - Aplique classes **Tailwind CSS** para responsividade mobile-first.
   - Adicione animações de entrada e interatividade.
5. **[SEO Injection]**:
   - Tag `<title>` (máx 60 caracteres) com Palavra-chave + Localidade.
   - Meta `description` (máx 155 caracteres) com CTA.
   - Hierarquia de headers (`H1` a `H3`) lógica e otimizada.

## Best Practices & Rules (CRÍTICO)

### 🚨 Regras de Ouro (Não podem faltar)

- **MANDATÓRIO: Conformidade Legal (LGPD)**:
  - Todo site deve ter um modal de **Cookie Notice** (Aviso de Cookies) funcional e visível.
  - A página `politica-privacidade.html` deve existir e estar linkada claramente no rodapé.
- **MANDATÓRIO: Revisão de UX & Espaçamento**:
  - Garanta que textos nunca invadam o espaço de imagens ou outras seções.
  - Revise o posicionamento dos elementos para evitar "vazamentos" visuais em todas as telas.
- **MANDATÓRIO: Animações e Dinamismo**:
  - O site não deve ser estático. Use Intersection Observer para disparar animações de entrada (Ex: `fade-in-up`) conforme o usuário rola a página.
  - Adicione micro-interações (hover effects, transições suaves em botões e links) para uma percepção de modernidade.
- **MANDATÓRIO: Consistência de Design em Páginas Internas**:
  - Todas as páginas internas (Privacidade, Termos, etc.) devem seguir rigorosamente a mesma linha visual do site principal (Mesmas cores, fontes, cabeçalho e rodapé). Nunca entregue páginas jurídicas em texto puro ou design genérico.
- **MANDATÓRIO: Identidade Visual**:
  - Nunca use cores genéricas se houver referências. Extraia as cores do logo e use-as de forma consistente.
  - Imagens reais na pasta `/reference` SEMPRE têm prioridade absoluta sobre placeholders.

### SEO e Performance

- **SEO de Elite**: Garanta que o `H1` seja único. Inclua o schema `LocalBusiness` e `FAQPage` (JSON-LD).
- **Indexação**: Gere sempre os arquivos `sitemap.xml` e `robots.txt`.
- **Acessibilidade**: Atributos `alt` em imagens e `aria-labels` em botões são obrigatórios.
- **Branding**: No rodapé, inclua: "Desenvolvido por DekMídia" com link para `www.dekmidia.com.br`.

## Folder Organization

- `index.html` (raiz)
- `politica-privacidade.html` (raiz)
- `termos-uso.html` (raiz)
- `sitemap.xml` / `robots.txt` (raiz)
- `/img` (ativos do site)
- `/css/style.css` (estilos extras)
- `/js/main.js` (lógica, animações e cookie notice)
