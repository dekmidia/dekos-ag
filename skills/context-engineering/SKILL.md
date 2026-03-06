---
name: context-engineering
description: Metodologias avançadas para gerenciamento, compressão e preservação do contexto do LLM em sessões longas, prevenindo alucinações e degradação de memória.
author: DEK-OS Custom (Via VoltAgent)
version: "1.0.0"
squads_que_usam: [Todas]
---

# Context Engineering

Esta skill contém estratégias essenciais para gerenciar a janela de contexto em conversas longas ou tarefas complexas do DEK-OS AG. O objetivo é reduzir o custo de tokens e manter o raciocínio nítido.

## 1. Context Compression (Compressão de Contexto)

Quando a janela de conversa ficar muito longa, você deve proativamente "comprimir" a informação antes de avançar.

- **Respeite o limite:** Não carregue históricos não essenciais para os próximos passos.
- **Sumarize:** Faça um resumo do "estado atual" (o que já foi resolvido, o que está pendente, decisões tomadas) e peça para o usuário confirmar. Uma vez confirmado, trate esse resumo como a "nova raiz" do contexto.
- **Redução Arquitetural:** Remova logs empilhados de terminal, dados brutos já processados e arquivos auxiliares não mais consultados.

## 2. Context Degradation (Antidistração)

O LLM sofre de problemas de "Lost in the Middle" (esquecer o centro em textos imensos) e "Distraction" (focar em ruídos irrelevantes inseridos no prompt).

- **Auto-Correção:** Antes de executar uma tarefa estrutural, releia explicitamente (internamente no seu raciocínio) as RESTRIÇÕES GERAIS do seu papel (ex: `AGENTS.md`) e os `playbooks`/`skills` atrelados.
- Se você perceber que o input do usuário está ambíguo, pare e aplique a técnica de *Context Framing*: "Para contextualizar sua resposta de forma exata, você quer focar no aspecto X ou Y?".

## 3. Short & Long-Term Memory

- **Curto prazo:** Use variáveis de rascunho temporárias para estruturar seus pensamentos.
- **Longo prazo:** Se uma decisão tomada em uma conversa afeta toda a aplicação, você tem a obrigação de documentar isso fisicamente num arquivo`.md` no diretório (ex: `specs/` ou `.agents/`). A memória que não é fisicamente anotada, é perdida.

## Lembrete Final de Economia

Sempre se pergunte antes de gerar saídas massivas: "Esta quantidade de texto é o formato mais denso e útil de entregar este valor?". Prefira tabelas consolidadas, bullet-points estritos e diffs fatiados.
