---
name: task-mapear-leads
agent: falcon
squad: Prospection
departamento: Prospecção
version: "2.0.0"
human_approval_required: false
output_dir: PROJETOS/_prospection/leads/
---

# Task: Mapear Leads

## Intake Obrigatório

Apresentar o menu abaixo e aguardar escolha:

---

> "Vamos prospectar. O que precisamos?
>
> 1. Mapear novos leads por nicho e cidade
> 2. Enriquecer lista existente com mais dados
> 3. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Nicho (ex: clínica estética, restaurante japonês, escritório de advocacia)
- [ ] Cidade ou região
- [ ] Quantidade de leads necessária
- [ ] Critérios de exclusão? *(ex: só com site, só CNPJ, só com WhatsApp visível)*

> ⚠️ Nicho e cidade são obrigatórios. Não iniciar pesquisa sem ambos definidos.

---

## Etapas de Execução

1. **Contextualização** — Confirmar inputs antes de pesquisar.
2. **Pesquisa** — Mapear leads conforme nicho e região usando fontes disponíveis (Google Maps, redes sociais, diretórios).
3. **Ficha de lead** — Para cada lead, preencher checklist `checklist-ficha-lead.md`.
4. **Filtragem** — Aplicar critérios de exclusão informados.
5. **Entrega** — Salvar lista na pasta de output e acionar Rank para qualificação.

## Outputs

- `leads-[nicho]-[cidade]-[data].md` → Lista de leads mapeados

## Acceptance Criteria

- [ ] Mínimo de informações por lead: nome, endereço, telefone/WhatsApp, Instagram/site se disponível
- [ ] Critérios de exclusão aplicados
- [ ] Checklist `checklist-ficha-lead.md` preenchido para cada lead
- [ ] Lista salva em `PROJETOS/_prospection/leads/`
- [ ] Rank acionado automaticamente após entrega para qualificação
