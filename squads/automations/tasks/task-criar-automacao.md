---
name: task-criar-automacao
agent: wire
squad: Automations
departamento: Automação
version: "2.0.0"
human_approval_required: true
output_dir: PROJETOS/[cliente]/automations/
---

# Task: Criar ou Editar Automação

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "O que vamos automatizar?
>
> 1. Criar novo fluxo n8n do zero
> 2. Editar ou otimizar fluxo existente
> 3. Integrar dois sistemas (especifique quais)
> 4. Automatizar envio de mensagens (WhatsApp ou Email)
> 5. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Objetivo da automação em uma frase *(ex: "quando lead preenche formulário → enviar WhatsApp + criar linha no Sheets")*
- [ ] Sistemas envolvidos *(ex: n8n + WhatsApp Business via Z-API + Google Sheets)*
- [ ] Credenciais e APIs já configuradas? *(sim / não — se não, listar o que precisa ser configurado antes)*
- [ ] Tem fluxo similar existente que pode servir de base? *(verificar `PROJETOS/[cliente]/automations/`)*

> ⚠️ Não construir fluxo sem objetivo claramente definido em uma frase. Se o usuário não souber descrever, ajudar a estruturar antes de prosseguir.

---

## Etapas de Execução

1. **Contextualização** — Confirmar todos os inputs. Listar dependências de credenciais pendentes.
2. **Arquitetura** — Desenhar o fluxo em texto (nodes e conexões) antes de construir.
3. **Construção** — Criar o workflow no n8n com nomes descritivos em todos os nodes.
4. **Error Handling** — Adicionar `Error Trigger` com notificação.
5. **Teste** — Rodar com dados reais de teste e validar todos os caminhos.
6. **Documentação** — Gerar `automations-doc-[cliente]-[data].md` com descrição do fluxo.
7. **Exportação** — Exportar JSON do workflow.
8. **Checklist** — Rodar `checklist-fluxo-n8n.md` antes de entregar.

## Outputs

- `[cliente]-workflow-[nome]-[data].json` → JSON exportado do n8n
- `automations-doc-[cliente]-[data].md` → Documentação do fluxo

## Acceptance Criteria

- [ ] Objetivo da automação documentado no início do arquivo
- [ ] Fluxo funciona end-to-end sem erro manual de execução
- [ ] Todos os nodes com nomes descritivos
- [ ] Error Trigger configurado e testado
- [ ] Credenciais armazenadas via n8n Credentials (nunca hardcoded)
- [ ] Documentação com inputs, outputs e lógica de roteamento
- [ ] Checklist `checklist-fluxo-n8n.md` executado
- [ ] Aprovação humana antes de apontar para produção

## human_approval_required

Apresentar resultado do teste ao usuário antes de ativar em produção. Aguardar confirmação explícita.
