---
name: task-criar-fluxo
agent: wire
squad: Automations
version: "1.0.0"
human_approval_required: true
output_dir: PROJETOS/[cliente]/automations/
---

# Task: Criar Fluxo n8n

## Objetivo

Projetar e construir um workflow n8n completo e funcional a partir do briefing do cliente, com foco em automações de WhatsApp e/ou integrações entre sistemas.

## Inputs Obrigatórios

- [ ] Nome do cliente
- [ ] Objetivo do fluxo (ex: "atendimento automatizado no WhatsApp com menu de opções")
- [ ] Canal de entrada (WhatsApp via Z-API / Evolution / Meta, Webhook, Formulário, etc.)
- [ ] Integrações necessárias (CRM, planilha, API externa)
- [ ] Comportamento esperado: mapa de fluxo ou descrição textual

## Etapas de Execução

1. **Briefing** — Confirmar inputs com o humano. Se faltar algo, perguntar antes de prosseguir.
2. **Arquitetura** — Desenhar o fluxo em texto (nós e conexões) antes de construir no n8n.
3. **Construção** — Criar o workflow no n8n com nomes descritivos em todos os nodes.
4. **Error Handling** — Adicionar `Error Trigger` com notificação ao cliente.
5. **Teste** — Rodar o workflow com dados reais de teste e validar todos os caminhos.
6. **Documentação** — Gerar `automations-doc-[cliente]-[data].md` com descrição do fluxo.
7. **Exportação** — Exportar o JSON do workflow do n8n.
8. **Checklist** — Rodar `checklist-fluxo-n8n` antes de entregar.

## Outputs

- `[cliente]-workflow-[nome]-[data].json` → JSON exportado do n8n
- `automations-doc-[cliente]-[data].md` → Documentação do fluxo

## Acceptance Criteria

- [ ] Fluxo funciona end-to-end sem erro manual de execução
- [ ] Todos os nodes têm nomes descritivos
- [ ] Error Trigger configurado e testado
- [ ] Credenciais armazenadas via n8n Credentials (nunca hardcoded)
- [ ] Documentação com inputs, outputs e lógica de roteamento preenchida
- [ ] JSON exportado salvo em `PROJETOS/[cliente]/automations/`

## human_approval_required

Antes de apontar o fluxo para o ambiente de produção do cliente, exibir o resultado do teste e aguardar aprovação explícita.
