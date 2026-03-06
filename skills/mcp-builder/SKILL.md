---
name: mcp-builder
description: Guia de desenvolvimento de servidores MCP (Model Context Protocol). Ajuda a planejar, codar, revisar e avaliar servidores MCP robustos baseados nas documentações oficiais da Anthropic.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Automations, Engineering]
---

# MCP Server Development Guide

Este guia é feito para criar servidores MCP confiáveis e maduros. Siga estritamente as 4 fases.

## 🚀 Fluxo de Trabalho de Alto Nível

### Fase 1: Pesquisa Profunda e Planejamento

Antes de escrever código, certifique-se de entender os requisitos e a documentação oficial do MCP.
Você desenhará a arquitetura e listará as ferramentas (tools) e recursos (resources) que o servidor deve exportar.

### Fase 2: Implementação

Implemente o servidor usando os SDKs oficiais (em Python ou TypeScript).
Assegure-se de usar logging intenso via STDERR para depuração (já que STDOUT é usado para o tráfego MCP).

### Fase 3: Revisão e Testes

Use o MCP Inspector (`npx @modelcontextprotocol/inspector`) para testar o servidor localmente antes de dizer ao usuário que terminou.
Crie scripts clientes de teste se apropriado.

### Fase 4: Avaliação

Escreva benchmarks ou suítes de teste (Evals) para garantir que ferramentas retornam os schemas corretos no formato que o Assistant (Claude) espera.

## Dicas Críticas

- **Logging:** Todo `console.log` regular pode quebrar a comunicação MCP (se usar transporte stdio). Envie logs sempre para STDERR ou para um arquivo log externo.
- **Tipagem:** Defina Zod (TypeScript) ou Pydantic (Python) para os parâmetros das ferramentas de maneira extremamente estrita.
