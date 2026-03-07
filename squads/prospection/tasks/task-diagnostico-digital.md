---
name: task-diagnostico-digital
agent: lens
squad: Prospection
departamento: Prospecção
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/_prospection/diagnosticos/
---

# Task: Diagnóstico Digital

## Intake Obrigatório

Apresentar o menu abaixo e aguardar escolha:

---

> "Qual o escopo do diagnóstico?
>
> 1. Diagnóstico rápido (site + redes sociais)
> 2. Diagnóstico completo (site + redes + anúncios + SEO)
> 3. Diagnóstico focado (apenas um canal — especifique)
> 4. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Nome do lead e segmento
- [ ] URL do site *(ou "não tem site" — registrar como oportunidade)*
- [ ] Perfis nas redes sociais (Instagram, Facebook etc.)
- [ ] Foco principal da análise: o que mais interessa? *(ex: "site ruim", "não aparece no Google", "anúncios mal estruturados")*

> ⚠️ Se o lead não tiver site, documentar isso como ponto crítico e oportunidade de venda.

---

## Etapas de Execução

1. **Contextualização** — Confirmar inputs.
2. **Análise do site** — Avaliar velocidade, responsividade, clareza de oferta, CTA e SEO on-page básico.
3. **Análise das redes** — Frequência de posts, qualidade visual, engajamento, bio e link.
4. **Análise de anúncios** *(diagnóstico completo)* — Verificar se há campanhas ativas via Facebook Ad Library ou Google.
5. **Análise de SEO** *(diagnóstico completo)* — Presença no Google Maps, palavras-chave posicionadas, backlinks básicos.
6. **Síntese** — Identificar os 3 principais problemas e 3 principais oportunidades.
7. **Relatório** — Gerar diagnóstico seguindo `template-diagnostico-digital.md`.
8. **Checklist** — Rodar `checklist-diagnostico-entrega.md` antes de finalizar.

## Outputs

- `diagnostico-[lead]-[data].md` → Diagnóstico completo
- `diagnostico-[lead]-[data].pdf` → Versão para apresentação ao lead *(quando for entregue ao cliente)*

## Acceptance Criteria

- [ ] Todos os canais do escopo escolhido analisados
- [ ] Mínimo de 3 problemas identificados com justificativa
- [ ] Mínimo de 3 oportunidades identificadas com sugestão de solução
- [ ] Tom do diagnóstico consultivo (não crítico ou agressivo)
- [ ] Template `template-diagnostico-digital.md` seguido
- [ ] Checklist `checklist-diagnostico-entrega.md` executado
- [ ] Arquivo salvo em `PROJETOS/_prospection/diagnosticos/`
