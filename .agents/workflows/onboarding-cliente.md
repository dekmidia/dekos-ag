---
description: Onboarding de Novo Cliente e Criação do Projeto
---
# Workflow de Onboarding de Cliente

Cria a estrutura padrão de pastas para um novo cliente no Hub de PROJETOS do DEK-OS e inicializa seus arquivos base.

## Passos da Execução

1. Solicite ao humano as seguintes informações: Nome do Cliente, Nicho, URL do site atual (opcional).
2. Se o humano já forneceu as informações, pule o passo 1.
3. Crie a pasta raiz em `PROJETOS/[nome-em-kebab-case]`.
4. Crie o arquivo `project.json` na raiz da nova pasta contendo os metadados do projeto (id, nome, nicho, status).
5. Crie as subpastas base da operação:
   - `referencias/` - Logotipo, design system, manual da marca, paleta de cores, tipografias. Crie um README explicativo.
   - `prospection/` - Para salvar os documentos de pré-vendas, diagnósticos e abordagens (em `.md` E em `.pdf`/`.docx` quando destinados a análise humana).
   - `performance/google-ads/` e `performance/meta-ads/` - Para arquivos das campanhas.
   - `creative/site/` e `creative/social-media/` - Para códigos e calendários.
6. Crie um `briefing.md` em branco para acumular o conhecimento da conta ao longo do tempo.
7. Escreva uma mensagem "Projeto [Nome] inicializado com sucesso, todas as pastas configuradas."

## ⚠️ Regra de Formato para Documentos Humanos

> **Documentos destinados à análise humana (não ao sistema) DEVEM ser entregues em formato rico, não apenas `.md`.**

Aplica-se a qualquer documento de prospecção, diagnóstico, proposta, relatório ou briefing que será apresentado ou compartilhado com o cliente ou com a equipe humana.

| Tipo de Documento | Formato obrigatório |
|-------------------|---------------------|
| Diagnóstico digital, relatório de análise | `.pdf` |
| Briefing, proposta comercial, contrato | `.pdf` ou `.docx` |
| Planilha de métricas, orçamento, comparativo | `.xlsx` |

**Como gerar os arquivos:**

- Use `pandoc [arquivo.md] -o [arquivo.pdf]` para conversão de Markdown → PDF (requer pandoc instalado)
- Para `.docx`: `pandoc [arquivo.md] -o [arquivo.docx]`
- Para `.xlsx`: use Python + openpyxl ou exporte manualmente de uma tabela Markdown
- **NÃO crie pastas extras** (como `entregas/`). Salve o arquivo rico (`.pdf`, `.docx`) **na mesma pasta do `.md` de origem**.
  - Diagnósticos e propostas → `prospection/`
  - Layouts e criativos → `creative/`
  - Relatórios de performance → `performance/`
- Mantenha o `.md` original como fonte de verdade para o sistema

**Regra geral:** Se a ação for "enviar para o cliente" ou "apresentar em reunião", o arquivo deve estar em `.pdf` ou equivalente.
