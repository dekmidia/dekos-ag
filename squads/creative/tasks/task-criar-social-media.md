---
name: task-criar-social-media
agent: hype
squad: Creative
departamento: Social Media
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/[cliente]/creative/social-media/
---

# Task: Criar Conteúdo para Redes Sociais

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "O que vamos criar para as redes?
>
> 1. Post único (feed)
> 2. Carrossel
> 3. Roteiro de Reels ou Stories
> 4. Calendário editorial mensal
> 5. Legenda para post existente
> 6. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Rede social principal (Instagram, Facebook, LinkedIn, TikTok)
- [ ] Tema ou assunto do conteúdo
- [ ] Objetivo (engajamento, conversão, autoridade, relacionamento)
- [ ] Tom de voz da marca (formal, descontraído, inspiracional, educativo)
- [ ] Referências de perfis ou estilos que admira *(opcional)*

> ⚠️ Para calendários editoriais, confirmar também: quantas publicações por semana e quais tipos de conteúdo (educativo, promocional, bastidores, etc.).

---

## Etapas de Execução

1. **Contextualização** — Confirmar inputs e consultar `briefing.md` do cliente se disponível.
2. **Conceito** — Definir o ângulo criativo e hook de abertura.
3. **Produção** — Escrever o conteúdo completo (legenda, roteiro de carrossel, calendário etc.).
4. **CTA** — Garantir que cada peça tem uma chamada para ação clara.
5. **Revisão** — Checar tom de voz, coerência com a marca e adequação à rede social.
6. **Entrega** — Salvar na pasta de output com nomenclatura padronizada.

## Outputs

- `social-[tipo]-[cliente]-[data].md` → Conteúdo finalizado

## Acceptance Criteria

- [ ] Tom de voz consistente com a marca
- [ ] Hook de abertura forte (primeiras palavras prendem atenção)
- [ ] CTA presente e adequado ao objetivo
- [ ] Formato adaptado à rede social escolhida
- [ ] Para carrosséis: mínimo 5 slides com lógica de progressão
- [ ] Para calendários: mínimo 12 publicações com mix de tipos de conteúdo
- [ ] Arquivo salvo em `PROJETOS/[cliente]/creative/social-media/`
