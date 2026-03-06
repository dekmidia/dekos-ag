---
name: webapp-testing
description: Ferramentas para interagir e testar aplicações web via Playwright. Suporta navegação automatizada, screenshots e validação de seletores DOM em QA.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Engineering]
---

# Web Application Testing

Toolkit para criar scripts nativos de QA com Python e Playwright.

## Fluxo de Decisão

Se a página for **estática (HTML)**: Pode ler o arquivo localmente.
Se for uma **aplicação dinâmica**:

1. Navegue com o Playwright até a URL local.
2. Aguarde o carregamento: `page.wait_for_load_state('networkidle')`.
3. Extraia o DOM da página renderizada (tirando screenshot e analisando `page.content()`).
4. Execute os cliques e verificações de testes usando os seletores corretos.

## Evite Armadilhas

❌ **NÃO:** Inspecione o DOM imediato retornando de uma requisição Axios/Fetch em web apps com React/Vue (o DOM real não estará lá).
✅ **SIM:** Use sempre uma instância real de navegador (Playwright headless) com evento de *networkidle* para ver exatamente o que o usuário vê.

Dica: Nunca tente compilar todo o servidor backend E frontend no mesmo script; levante os servidores em janelas de comandos separadas.
