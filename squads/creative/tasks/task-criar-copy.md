---
name: task-criar-copy
agent: ink
squad: Creative
departamento: Criação
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/[cliente]/creative/copy/
---

# Task: Criar Copy

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "Que tipo de copy vamos criar?
>
> 1. Anúncio (Google Ads ou Meta Ads)
> 2. Copy para landing page / site
> 3. Email marketing / sequência
> 4. Script de vídeo ou VSL
> 5. Roteiro de stories
> 6. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Produto ou serviço sendo comunicado
- [ ] Público-alvo e principal dor ou desejo
- [ ] Ação que o texto deve provocar (CTA)
- [ ] Tom de voz da marca (formal, descontraído, técnico, empático)
- [ ] Exemplos de copies que a marca já usou e aprovou *(opcional)*

> ⚠️ Não escrever nenhuma linha de copy antes de ter público-alvo e CTA definidos.

---

## Etapas de Execução

1. **Contextualização** — Confirmar todos os inputs. Consultar `briefing.md` do cliente se disponível.
2. **Pesquisa de dores** — Identificar as principais objeções e desejos do público-alvo para o produto/serviço.
3. **Estrutura** — Definir o framework de copy adequado ao tipo (AIDA, PAS, BAB, storytelling etc.).
4. **Redação** — Escrever a copy completa com variações quando aplicável (mínimo 2 versões para anúncios).
5. **Revisão** — Checar CTA, clareza, tom de voz e aderência à marca.
6. **Entrega** — Salvar na pasta de output com nomenclatura padronizada.

## Outputs

- `copy-[tipo]-[cliente]-[data].md` → Copy finalizada com variações

## Acceptance Criteria

- [ ] CTA claro e presente em todas as versões
- [ ] Tom de voz consistente com a marca
- [ ] Público-alvo e dor principal endereçados explicitamente
- [ ] Mínimo de 2 variações para anúncios
- [ ] Arquivo salvo em `PROJETOS/[cliente]/creative/copy/`
