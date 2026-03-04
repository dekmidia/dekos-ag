---
name: checklist-fluxo-n8n
squad: Automations
version: "1.0.0"
agents: [wire, bridge]
---

# Checklist: Fluxo n8n — QA Pré-Entrega

Execute este checklist antes de qualquer entrega de workflow ao cliente.

---

## 🔌 Arquitetura e Nodes

- [ ] Todos os nodes têm nomes descritivos (proibido "HTTP Request", "Code", "IF" soltos sem contexto)
- [ ] O fluxo tem um trigger claramente definido (Webhook, Schedule, WhatsApp, etc.)
- [ ] Nenhum node está desconectado ou órfão no canvas
- [ ] A lógica de roteamento (IF/Switch) cobre todos os cenários possíveis, incluindo fallback

## 🔐 Segurança e Credenciais

- [ ] ZERO credenciais hardcoded no fluxo
- [ ] Todas as chaves de API, tokens e senhas estão no n8n Credentials Manager
- [ ] O JSON exportado não contém nenhuma credencial exposta
- [ ] Permissões de API configuradas com escopos mínimos necessários (principle of least privilege)

## ⚠️ Tratamento de Erros

- [ ] Node `Error Trigger` conectado ao fluxo
- [ ] Em caso de erro, há uma notificação (para o cliente ou para a DekMídia)
- [ ] Nodes críticos têm configuração de retry (quando aplicável)
- [ ] Mensagens de erro ao usuário final são amigáveis (não expõem dados técnicos)

## 🧪 Testes

- [ ] Fluxo foi executado com dados reais de teste (não apenas dados fictícios)
- [ ] Todos os caminhos do fluxo (IF true/false, todos os Switch cases) foram testados
- [ ] Entradas inválidas ou inesperadas foram testadas
- [ ] Performance validada (sem loops infinitos ou timeouts)

## 📄 Documentação

- [ ] Arquivo `automations-doc-[cliente]-[data].md` criado com:
  - [ ] Descrição do objetivo do fluxo
  - [ ] Trigger de entrada
  - [ ] Mapa dos nós principais e suas funções
  - [ ] Outputs gerados
  - [ ] Integrações e sistemas conectados
  - [ ] Instruções de manutenção básica para o cliente
- [ ] JSON do workflow exportado e salvo em `PROJETOS/[cliente]/automations/`

## ✅ Gate Final

- [ ] Wire ou Bridge revisou o fluxo completo
- [ ] Humano (DekMídia) aprovou antes do deploy em produção do cliente
- [ ] Cliente foi orientado sobre como monitorar o fluxo

---

**Resultado: GO 🟢** — Todos os itens acima marcados → Pode entregar.
**Resultado: NO-GO 🔴** — Qualquer item pendente → Resolver antes de entregar.
