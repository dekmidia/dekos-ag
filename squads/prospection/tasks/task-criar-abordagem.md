---
name: task-criar-abordagem
agent: pulse
squad: Prospection
departamento: Prospecção
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/_prospection/abordagens/
---

# Task: Criar Mensagem de Abordagem

## Intake Obrigatório

Apresentar o menu abaixo e aguardar escolha:

---

> "Que tipo de mensagem vamos criar?
>
> 1. DM Instagram ou Facebook
> 2. Mensagem WhatsApp (contato frio)
> 3. Cold email
> 4. Mensagem LinkedIn
> 5. Sequência completa (múltiplos canais)
> 6. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Para qual lead ou segmento?
- [ ] Qual o gancho principal? (dor identificada no diagnóstico, oportunidade percebida, referência a concorrente)
- [ ] Tom desejado (direto, consultivo, descontraído)
- [ ] Tem diagnóstico do lead disponível em `PROJETOS/_prospection/`? *(se sim, consultar antes de escrever)*

> ⚠️ Sempre verificar se existe diagnóstico do lead antes de escrever. Uma abordagem personalizada converte muito mais que uma genérica.

---

## Etapas de Execução

1. **Contextualização** — Confirmar inputs e buscar diagnóstico do lead se disponível.
2. **Gancho** — Identificar o elemento mais relevante para abrir a conversa (dor, oportunidade ou curiosidade).
3. **Redação** — Escrever a mensagem no formato e tom escolhidos.
4. **Variações** — Produzir mínimo de 2 versões para teste A/B.
5. **Checklist** — Rodar `checklist-mensagem-abordagem.md` antes de entregar.
6. **Entrega** — Salvar na pasta de output.

## Outputs

- `abordagem-[canal]-[lead-ou-segmento]-[data].md` → Mensagens prontas com variações

## Acceptance Criteria

- [ ] Gancho personalizado (não genérico)
- [ ] Mensagem com no máximo 3 parágrafos curtos
- [ ] CTA claro no final (ex: "podemos conversar 15 minutos?")
- [ ] Mínimo de 2 variações
- [ ] Checklist `checklist-mensagem-abordagem.md` executado
- [ ] Arquivo salvo em `PROJETOS/_prospection/abordagens/`
