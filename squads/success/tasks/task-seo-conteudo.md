---
name: task-seo-conteudo
agent: apex
squad: Success
departamento: Conteúdo & SEO
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/[cliente]/seo/
---

# Task: SEO e Conteúdo

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "O que vamos trabalhar?
>
> 1. Auditoria técnica de SEO do site
> 2. Pesquisa de palavras-chave
> 3. Otimização de página existente
> 4. Estratégia de conteúdo (blog / orgânico)
> 5. Produção de artigo otimizado
> 6. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] URL do site do cliente
- [ ] Nicho e principais serviços ou produtos
- [ ] Tem trabalho de SEO anterior? *(sim → o que já foi feito / não → partir do zero)*
- [ ] Região de atuação (local, estadual, nacional)
- [ ] Tem blog ativo? *(sim / não)*

> ⚠️ Para auditoria e otimização de página, a URL é obrigatória. Não iniciar sem ela.

---

## Etapas de Execução

1. **Contextualização** — Confirmar todos os inputs. Consultar `briefing.md` do cliente.
2. **Diagnóstico** — Avaliar situação atual de SEO (técnico, on-page, autoridade).
3. **Execução** — Realizar a entrega escolhida no menu (auditoria, pesquisa de palavras-chave, artigo etc.).
4. **Priorização** — Para auditorias, classificar achados por impacto (alto / médio / baixo).
5. **Entrega** — Salvar documento na pasta de output.

## Outputs

- `seo-[tipo]-[cliente]-[data].md` → Entrega de SEO ou conteúdo

## Acceptance Criteria

- [ ] URL do cliente analisada diretamente (não por suposição)
- [ ] Para auditorias: achados classificados por impacto com recomendação para cada um
- [ ] Para palavras-chave: volume estimado, dificuldade e intenção de busca documentados
- [ ] Para artigos: estrutura H1/H2/H3 otimizada, palavra-chave principal no título e primeiro parágrafo
- [ ] Arquivo salvo em `PROJETOS/[cliente]/seo/`
