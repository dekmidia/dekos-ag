---
name: api-design-principles
description: Mestre em princípios de design de APIs REST e GraphQL. Para construir, revisar ou estabelecer padrões escaláveis, legíveis e perfeitos em endpoints e webhooks.
author: Awesome Skills (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Engineering, Automations]
---

# Princípios de Design de API

Instrução fundamental para qualquer agente que esbarre em endpoints, consumo ou produção de dados via APIs.

## Quando usar

- Quando for criar novas integrações REST ou GraphQL no n8n.
- Durante a refatoração do backend para torná-lo amigável ao front (Dx - Developer Experience).
- Na criação da documentação da API em OpenAPI (Swagger).

## Instruções do Agente

1. Antes de codar as rotas, **defina os consumidores, os casos de uso e as restrições**.
2. Estabeleça os retornos e como tratar erros, paginação, versão (v1/v2) e estratégias JWT.
3. Valide o contrato da API (`Payload`) com o usuário antes da execução em si.
4. Evite usar rotas verbo-ação (como `/get-users`). Prefira verbos HTTP corretos + plural: `GET /users`.
