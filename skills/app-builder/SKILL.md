---
name: app-builder
description: Orquestrador massivo de geração de apps (Fullstack, SaaS, CLI, Mobile). Analisa requisitos e coordena agentes para criar pastas estruturadas.
author: Awesome Skills (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Engineering]
---

# App Builder - Application Orchestrator

Diferente do `web-artifacts-builder` que foca em componentes rápidos React em arquivo único, o `app-builder` é o engenheiro que ergue projetos maciços de Várias Páginas.

## Fluxo

1. Descubra o tipo do projeto (ex: SaaS Next.js, FastAPI, Extension Chrome).
2. Defina a Stack ideal para as dependências atuais.
3. Liste o plano de execução:
   ├─ Configuração inicial
   ├─ Banco de dados e ORM
   ├─ Rotas de Servidor
   └─ Interface
4. Execute passo a passo gerando a arquitetura em diretórios reais (sob `PROJETOS/`).
5. Avise ao usuário que a aplicação está instanciada de ponta a ponta.
