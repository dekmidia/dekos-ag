---
name: task-analise-mercado
agent: scout
squad: Growth
departamento: Atendimento
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/_prospection/analise-mercado/
---

# Task: Análise de Mercado

## Intake Obrigatório

Antes de qualquer ação, apresentar o menu abaixo e aguardar a escolha do usuário:

---

> "Olá! Vou conduzir esta análise de mercado. O que precisamos explorar?
>
> 1. Identificar oportunidades em um novo nicho
> 2. Analisar concorrentes de um cliente
> 3. Mapear potencial de uma região específica
> 4. Avaliar viabilidade de um novo serviço DekMídia
> 5. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Qual o contexto da análise? (nicho, região ou serviço a explorar)
- [ ] Qual decisão esta análise vai embasar? (ex: "decidir se vale entrar no nicho X", "montar proposta para cliente Y")
- [ ] Tem análises anteriores sobre este tema no sistema? (verificar `PROJETOS/_prospection/`)

> ⚠️ Não iniciar a análise sem ter os três itens acima confirmados.

---

## Etapas de Execução

1. **Contextualização** — Confirmar todos os inputs. Se algo estiver vago, perguntar antes de prosseguir.
2. **Mapeamento** — Identificar players do nicho/região, volume de mercado estimado e tendências.
3. **Análise competitiva** — Mapear pontos fortes e fracos dos principais concorrentes.
4. **Identificação de oportunidades** — Gaps de mercado, nichos mal atendidos, diferenciais possíveis.
5. **Recomendação** — Síntese direta com posicionamento sugerido para a DekMídia ou para o cliente.
6. **Documentação** — Salvar relatório na pasta de output.

## Outputs

- `analise-[nicho-ou-tema]-[data].md` → Relatório completo da análise

## Acceptance Criteria

- [ ] Decisão que embasou a análise está documentada no início do relatório
- [ ] Pelo menos 3 concorrentes ou referências mapeados
- [ ] Oportunidades identificadas com justificativa
- [ ] Recomendação clara e acionável no final
- [ ] Arquivo salvo em `PROJETOS/_prospection/analise-mercado/`
