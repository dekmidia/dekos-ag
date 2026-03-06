---
name: architecture
description: Framework de tomada de decisões para arquitetura de software e sistemas (ADRs). Garante solidez e escolhas corretas de stack.
author: Awesome Skills (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Engineering, Automations]
---

# Architecture Decision Framework

> "Requisitos direcionam a arquitetura. Trade-offs informam as decisões."

## Regra de Ouro

**A simplicidade é a sofisticação suprema.**
Comece o projeto do jeito mais simples possível. Adicione complexidade APENAS quando for provada a necessidade. (É muito mais fácil adicionar camadas depois do que remover código super-arquitetado).

## Fluxo

1. Analise o pedido do usuário;
2. Se houver mudanças profundas no banco de dados, nas APIs ou no deploy, gere mentalmente uma "Documentation of Decision" (ADR).
3. Avalie os trade-offs: por que usar Postgre ao invés de Mongo? Por que REST ao invés de RPC?
4. Só avance com a arquitetura definida.

Utilizado intensamente pelo `developer.md` do Dex e `wire.md` de automações.
