---
name: n8n-expert
description: Repositório nativo de padrões comportamentais, resolução de erros do n8n de validação/execução, e arquiteturas de Nós para squads de automação (Wire/Bridge).
author: DEK-OS Custom (Via czlonkowski / VoltAgent)
version: "1.0.0"
squads_que_usam: [Automations]
---

# Especialista Sénior n8n

Esta skill fornece o domínio técnico sobre conexões, manipulação de dados via Node/JS/Python nativo e resolução de gargalos inerentes ao n8n.

## 1. Padrões de Workflows Estruturais

- **Data Access Patterns (`$json` / `$node`):** Ao ler ou injetar dados iterativos de listas ou JSON payloads, prefira a sintaxe pura moderna `{{ $json.chave }}`. Evite a sintaxe clássica cheia de métodos defasados. Para acessar dados de nós passados (mesmo não o imediato anterior), referencie: `{{ $node["NomeExatoDoNo"].json.chave }}`.
- **Tratamento Dinâmico em Webhooks/HTTP Request:** Estruture chamadas POST/GET para nunca falharem fatalmente. Utilize a aba de *Settings* do Nó para forçar `Continue On Fail: True` em fluxos massivos de loop, separando posteriormente nós que deram *Success* via IF Node.
- **O "For-Each" Nativo e Code Nodes:** Sempre que possível, substitua "Set" ou múltiplos "IFs" curtos por um único nó `Code` (Javascript) limpo lidando com map() ou reduce(), injetando os objetos da lista direto no `$input.all()`.

## 2. Padrões Ocultos de Validação/Erros

- **Bug do "Items empty/Array length > 0":** Antes de injetar outputs de um nó HTTP em banco ou Notion, passe por um Node `IF` validando `{{ $json.length > 0 }}` ou um item check. Se a Array vier vazia, conecte a saída "False" a um No Operation (NoOp) para terminar graciosamente sem Crash Error Alerting.
- **Problema de Types / Strings em DBs:** n8n muitas vezes carrega números como Strings saindo de Webhooks. Forçe casting `parseInt()` em `Code Nodes` antes de rotear via Postgres/AirTable.

## 3. Segurança e Manipulação

- Credenciais não transitam em `$json`. Não as referencie.
- Webhooks sempre priorizem autorizações Header API Key para endpoints expostos, e IP Whitelisting se as saídas do seu CRM/Stripe forem IP-fixes.
- Testes Locais: Use Nodes "Mock Data" (Code Nodes forjados) atrelados a um Switch Node de Debugging para debugar branches pesadas sem consumir quota real de SaaS (ex: API OpenAI).

*Sempre lembre dessa skill ao propor soluções, e faça arquiteturas "Mock-Testable" (testáveis em rascunho sem disparar ações de verdade).*
