---
name: task-integrar-api
agent: bridge
squad: Automations
version: "1.0.0"
human_approval_required: true
output_dir: PROJETOS/[cliente]/automations/
---

# Task: Integrar API / Sistema Externo

## Objetivo

Mapear o ecossistema de ferramentas do cliente e conectar APIs externas e sistemas ao workflow n8n, garantindo fluxo seguro e documentado de dados.

## Inputs Obrigatórios

- [ ] Nome do cliente
- [ ] Lista de ferramentas em uso (CRM, planilha, ERP, etc.)
- [ ] Objetivo da integração (ex: "quando WhatsApp receber lead, criar contato no HubSpot e adicionar em planilha Google Sheets")
- [ ] Credenciais ou acesso para obter as chaves de API necessárias

## Etapas de Execução

1. **Mapeamento** — Levantar todas as ferramentas do cliente e documentar em `mapa-sistemas-[cliente].md`.
2. **Identificar endpoints** — Definir quais endpoints de API serão usados para cada sistema.
3. **Autenticação** — Configurar credenciais no n8n Credentials Manager (nunca hardcoded).
4. **Sandbox** — Testar a integração com dados fictícios em ambiente de teste.
5. **Documentação de endpoint** — Registrar: URL, método HTTP, headers, payload de exemplo e response esperado.
6. **Handoff para Wire** — Entregar mapa de integração para que Wire conecte ao fluxo principal.
7. **Validação em produção** — Após Wire conectar ao fluxo, validar uma execução real completa.

## Outputs

- `mapa-sistemas-[cliente]-[data].md` → Mapeamento de ferramentas e integrações
- Credenciais configuradas no n8n do cliente

## Acceptance Criteria

- [ ] Mapa de sistemas documenta todas as ferramentas em uso pelo cliente
- [ ] Cada integração tem endpoint, método, headers e payload de exemplo documentados
- [ ] ZERO credenciais hardcoded — todas via n8n Credentials
- [ ] Testes com sandbox aprovados antes de apontar para produção
- [ ] Arquivo `mapa-sistemas-[cliente].md` salvo em `PROJETOS/[cliente]/automations/`

## human_approval_required

Antes de usar dados reais do cliente em qualquer integração de produção, apresentar mapa de integrações e aguardar aprovação explícita.
