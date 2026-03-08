---
name: task-onboarding-cliente
agent: welcome
squad: Growth
departamento: Atendimento
version: "1.0.0"
human_approval_required: true
output_dir: PROJETOS/[cliente]/
---

# Task: Onboarding de Cliente

## Intake Obrigatório

Antes de qualquer ação, apresentar o menu abaixo e aguardar a escolha do usuário:

---

> "Vamos iniciar. Qual o momento deste cliente?
>
> 1. Cliente novo — onboarding completo (estrutura do zero)
> 2. Cliente retomado — atualizar briefing de projeto existente
> 3. Cliente ativo — adicionar novo serviço
> 4. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Nome do cliente e nicho
- [ ] Serviço(s) contratado(s)
- [ ] Tem site atual? Se sim, qual URL?
- [ ] Tem identidade visual? (logo, paleta de cores, manual de marca)
- [ ] Contrato assinado? *(sim = libera execução / não = aguardar antes de prosseguir)*

> ⚠️ Não criar estrutura de projeto sem contrato confirmado.

---

## Etapas de Execução

1. **Validação** — Confirmar todos os inputs. Bloquear execução se contrato não estiver assinado.
2. **Criação da estrutura** — Seguir o workflow `onboarding-cliente.md` para criar pastas e arquivos base em `PROJETOS/[cliente]/`.
3. **Briefing inicial** — Preencher `briefing.md` com as informações coletadas no intake.
4. **Atualização de sessão** — Preencher `SESSAO_ATIVA.md` com os dados do novo cliente.
5. **Confirmação** — Informar ao usuário que o projeto foi inicializado e quais os próximos passos sugeridos.

## Outputs

- `PROJETOS/[cliente]/briefing.md` → Briefing inicial preenchido
- `PROJETOS/[cliente]/project.json` → Metadados do projeto
- `SESSAO_ATIVA.md` → Atualizado com o cliente ativo
- Estrutura de pastas conforme `onboarding-cliente.md`

## Acceptance Criteria

- [ ] Contrato confirmado antes de qualquer criação
- [ ] Todas as pastas base criadas conforme padrão
- [ ] `briefing.md` preenchido com dados do intake
- [ ] `SESSAO_ATIVA.md` atualizado
- [ ] Usuário informado dos próximos passos
