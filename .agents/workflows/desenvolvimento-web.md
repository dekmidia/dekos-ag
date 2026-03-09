---
description: Sempre utilize este workflow quando o usuário solicitar o desenvolvimento de uma landing page ou site.
---

# Fluxo de Desenvolvimento de Projetos Web / Landing Pages

**CRÍTICO:** JAMAIS inicie a codificação ou o planejamento sem antes cumprir as etapas 1 e 2 deste workflow.

1. **Criar a Pasta do Projeto:**
   - Antes de qualquer planejamento ou código, crie o diretório raiz do projeto dentro de `PROJETOS/`.
   - Exemplo: `c:\Users\crist\Documents\Dev\ANTIGRAVITY\dekos-ag\PROJETOS\nome-do-projeto`.
   - Utilize o comando de sistema adequado para criar o diretório (ex: `New-Item -ItemType Directory -Force`).

2. **Preparar e Coletar Requisitos de Referência:**
   - Crie uma pasta `references` dentro do diretório do projeto criado no passo 1.
   - Pare e pergunte ao usuário (utilizando a tool de notificação) pelos seguintes requisitos indispensáveis, caso ele não os tenha fornecido na primeira mensagem:
     - **Copy/Conteúdo:** Pergunte se o usuário deseja fornecer os textos ou se devemos pedir para a equipe Creative (copywriters) desenvolverem.
     - **Identidade Visual:** Cores da marca, preferência de tipografia. Pergunte também se possuem uma referência visual pronta ou se preferem que o nosso time de Creative desenvolva do zero.
     - **Imagens e Referências:** Peça ao usuário que coloque todas as referências visuais, como logo, modelos, imagens e referências de sites/landing pages, dentro da pasta `references` recém-criada para pesquisa.
     - **Contato e Redes Sociais:** Informações de destino para Calls to Action (CTAs), como número de WhatsApp, e-mail, link ou formulário. Peça também os links das redes sociais (Instagram, Facebook, YouTube, TikTok) e o link do Google Perfil da Empresa (GMB) para a criação dos ícones sociais e SEO.

3. **Aguardar Resposta do Usuário:**
   - Fique bloqueado aguardando as informações do usuário (*BlockedOnUser: true*).

4. **Planejar (Implementation Plan):**
   - Com as respostas em mãos, crie o plano de implementação detalhando os arquivos (HTML, CSS em estilo premium, JS).
   - Coloque as tarefas no `task.md`.

5. **Executar a Codificação:**
   - Desenvolva os arquivos com foco máximo em design premium e responsividade, aplicando as regras globais de estética.
   - **OBRIGATÓRIO:** Se o usuário forneceu um link do Google Perfil da Empresa (GMB) ou um endereço físico, você **DEVE** adicionar uma seção dedicada na Landing Page contendo avaliações (Reviews) e um mapa embarcado (Google Maps). Jamais esqueça desta etapa.
