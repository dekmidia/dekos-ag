---
name: task-criar-site
agent: dex
squad: Engineering
departamento: Desenvolvimento
version: "1.0.0"
human_approval_required: true
output_dir: PROJETOS/[cliente]/creative/
---

# Task: Criar Site ou Landing Page

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "O que vamos construir?
>
> 1. Landing Page — foco em conversão, uma página
> 2. Site One-page — apresentação completa em uma página
> 3. Site Institucional — múltiplas páginas
> 4. Loja Virtual — e-commerce
> 5. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] O negócio já tem site? Se sim, qual URL?
- [ ] Tem referências visuais ou URLs de concorrentes? *(opcional)*
- [ ] Briefing em até 5 linhas: o que o negócio faz, para quem, e qual o objetivo principal do site
- [ ] Existe logo ou identidade visual na pasta `PROJETOS/[cliente]/referencias/`?

Perguntas adicionais por tipo:
- **Landing Page:** Qual a ação principal do visitante? (preencher formulário, chamar no WhatsApp, comprar)
- **Site Institucional:** Quais páginas são necessárias? (ex: Home, Sobre, Serviços, Contato)
- **Loja Virtual:** Quantos produtos aproximadamente? Tem sistema de pagamento definido?

> ⚠️ Não escrever nenhuma linha de código antes de ter briefing e objetivo principal confirmados.

---

## Etapas de Execução

1. **Contextualização** — Confirmar todos os inputs. Verificar `referencias/` do cliente.
2. **Categorização** — Definir categoria do projeto (A: HTML simples / B: LP premium com GSAP / C: Web App com React) conforme `developer.md`.
3. **Estrutura** — Definir arquitetura de páginas e seções antes de codar.
4. **Desenvolvimento** — Construir o site seguindo os padrões de `developer.md` e skills aplicáveis.
5. **QA** — Acionar Guard para checklist de qualidade pré-entrega.
6. **Entrega** — Salvar na pasta de output e informar ao usuário.

## Outputs

- `index.html` (+ arquivos de suporte se necessário) → Site completo
- Salvo em `PROJETOS/[cliente]/creative/lp/` ou `creative/site/` conforme o tipo

## Acceptance Criteria

- [ ] Briefing e objetivo confirmados antes de codar
- [ ] Identidade visual do cliente aplicada (cores, logo, tipografia)
- [ ] Responsivo (mobile-first)
- [ ] CTA principal visível e funcional
- [ ] Checklist do Guard executado e aprovado
- [ ] Aprovação humana antes de marcar como entregue

## human_approval_required

Apresentar o resultado ao usuário antes de finalizar. Aguardar confirmação explícita ("aprovado" ou feedback de ajuste).
