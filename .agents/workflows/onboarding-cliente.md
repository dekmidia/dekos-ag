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
   - `referencias/` - Arquivos de marca como logo, manuais de identidade, hex de cores base. Crie um README explicativo.
   - `prospeccao/` - Para salvar os documentos de pré-vendas e abordagens.
   - `performance/google-ads/` e `performance/meta-ads/` - Para arquivos das campanhas.
   - `creative/site/` e `creative/social-media/` - Para códigos e calendários.
   - `entregas/` - Para os arquivos validados.
6. Crie um `briefing.md` em branco para acumular o conhecimento da conta ao longo do tempo.
7. Escreva uma mensagem "Projeto [Nome] inicializado com sucesso, todas as pastas configuradas."
