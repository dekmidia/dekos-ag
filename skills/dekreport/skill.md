---
name: dekreport
description: Skill especialista em transformar relatórios CSV de Google Ads e Meta Ads em dashboards visuais (HTML/Tailwind). Esta skill gerencia a estrutura de pastas em dekreport/clientes/reports, organizando por nome de cliente e período. Entrega sempre nos dois formatos: HTML interativo + PDF.
---

# DekReport Skill

Esta Skill é o motor de inteligência e organização do **DekReport**. Ela processa dados brutos e automatiza a criação de uma estrutura de diretórios profissional para o armazenamento dos relatórios gerados.

## When to use this skill
- Quando o usuário fornecer dados de tráfego pago na pasta `dekreport/data`.
- Quando houver necessidade de organizar relatórios por cliente e data de análise.
- Para gerar dashboards HTML/Tailwind padronizados e visualmente atraentes.

## Execution Steps / Checklist

1.  **Coleta de Metadados (Obrigatório)**:
    - O agente **deve** perguntar via prompt:
        1. *"Qual é o nome do Cliente?"*
        2. *"Qual é o período que vamos analisar? (ex: Janeiro-2024)"*
        3. *"Este relatório é referente a Google Ads ou Meta Ads?"*
        4. *"Você possui informações de contexto adicionais sobre este período (ex: promoções especiais, problemas no site, pausas, feriados importantes)? Forneça-as para cruzarmos com as métricas no relatório."*

2.  **Localização e Validação de Dados**:
    - Busque os arquivos CSV obrigatoriamente em: `dekreport/data/`.
    - Confirme com o usuário qual arquivo corresponde ao cliente e período informados.

3.  **Processamento de Métricas**:
    - **Google Ads**: Foco em `Cost`, `Clicks`, `Impressions`, `Conversions`, `Avg. CPC`.
    - **Meta Ads**: Foco em `Amount Spent`, `Link Clicks`, `Reach`, `Results`, `Cost per Result`.
    - Calcule ROAS e CTR automaticamente para exibição em destaque.

4.  **Organização de Sistema de Arquivos**:
    - O agente deve criar (ou validar) a seguinte estrutura de pastas:
      `dekreport/clientes/reports/[Nome_do_Cliente]/[Periodo_Analisado]/`
    - O arquivo final `index.html` (o relatório) deve ser salvo obrigatoriamente dentro dessa pasta de período.

5.  **Geração do Dashboard (HTML/Tailwind)**:
    - Gerar código único com Tailwind CSS e Chart.js.
    - **Branding**: O cabeçalho deve exibir o Nome do Cliente e o Período de forma proeminente.

6.  **Geração do Relatório Executivo (PDF e DOCX Obrigatórios)**:
    - O dashboard `index.html` foi feito para telas, com dark mode e cores vibrantes. É **obrigatória** a geração de um relatório limpo e formatado profissionalmente (fundo branco, tabelas legíveis, tipografia clara) para entrega em PDF e DOCX.
    - ✅ **Para o PDF:**
      - Crie o arquivo base estático `relatorio-print.html` (A4 e fundo branco).
      - **Copie e utilize o script:** `[SKILL_DIR]/scripts/generate-pdf.js` — ajuste apenas os caminhos internos antes de rodar via Node/Puppeteer.
    - ✅ **Para o DOCX:**
      - **Copie e utilize o script:** `[SKILL_DIR]/scripts/generate-docx.py` — essa base em `python-docx` recria a identidade executiva e já tem os módulos de tabelas e caixas formatadas.
    - **Entrega final obrigatória**: `index.html` (dashboard interativo) **+** `relatorio.pdf` (versão para impressão limpa) **+** `relatorio.docx` (editável limpo).

## Best Practices & Rules
- **Nomenclatura**: Use nomes de pastas sem espaços ou caracteres especiais (ex: `Cliente_X` em vez de `Cliente X`).
- **Padrão Visual Dashboard**: Google Ads: Primária `blue-600`. Meta Ads: Primária `indigo-700`.
- **Padrão Visual Executivo**: Arquivos PDF e DOCX devem ser documentos formais, em fundo branco, sem temas escuros. Usar fontes corporativas fáceis de ler (Inter, Calibri, Roboto).
- **Limpeza**: Garanta que o script de processamento ignore linhas totais de rodapé do CSV.
- **Tripé de entrega**: SEMPRE entregar `index.html`, `relatorio.pdf` (limpo) e `relatorio.docx` (editável) na pasta do período.

## Folder Structure Logic

| Nível | Caminho do Diretório | Conteúdo |
| :--- | :--- | :--- |
| **Root Data** | `dekreport/data/` | Arquivos CSV brutos |
| **Client Root** | `dekreport/clientes/reports/[Cliente]/` | Pasta base do cliente específico |
| **Report Dashboard** | `.../[Cliente]/[Periodo]/index.html` | Dashboard visual interativo (Dark) |
| **Report Print View** | `.../[Cliente]/[Periodo]/relatorio-print.html` | Base estática para gerar PDF |
| **Report PDF** | `.../[Cliente]/[Periodo]/relatorio.pdf` | Versão PDF executiva legível |
| **Report DOCX** | `.../[Cliente]/[Periodo]/relatorio.docx` | Versão Word para o cliente |

---
*Gerado por Antigravity Architect - Organização e Performance em escala.*