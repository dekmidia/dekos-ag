---
name: task-brief-design
agent: prism
squad: Creative
departamento: Criação
version: "1.0.0"
human_approval_required: false
output_dir: PROJETOS/[cliente]/creative/design/
---

# Task: Brief de Design

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "O que vamos criar?
>
> 1. Brief de identidade visual (logo, cores, tipografia)
> 2. Brief de peça específica (banner, card, capa)
> 3. Análise de referências visuais
> 4. Especificação de design para entrega ao cliente
> 5. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Nicho e perfil do negócio
- [ ] Tem identidade visual existente? *(sim → verificar `referencias/` do cliente / não → criar do zero)*
- [ ] Referências visuais de marcas que admira (URLs ou descrição)
- [ ] Onde a peça será usada? (digital, impresso, redes sociais, site)
- [ ] Restrições ou elementos obrigatórios (ex: "precisa ter o telefone", "cores obrigatórias X e Y")

> ⚠️ Sempre verificar a pasta `PROJETOS/[cliente]/referencias/` antes de propor qualquer direção visual.

---

## Etapas de Execução

1. **Contextualização** — Confirmar todos os inputs e verificar referências existentes do cliente.
2. **Moodboard conceitual** — Descrever em texto a direção visual (estilo, atmosfera, referências).
3. **Paleta e tipografia** — Definir paleta de cores com hex codes e tipografias recomendadas.
4. **Especificação da peça** — Detalhar dimensões, elementos, hierarquia visual e instruções de produção.
5. **Entrega do brief** — Documento pronto para ser executado no Canva, Figma ou ferramenta do designer.

## Outputs

- `design-brief-[tipo]-[cliente]-[data].md` → Brief completo de design

## Acceptance Criteria

- [ ] Paleta de cores com códigos hex definida
- [ ] Tipografias especificadas (primária e secundária)
- [ ] Referências visuais descritas ou linkadas
- [ ] Instruções de produção claras o suficiente para execução sem dúvidas
- [ ] Arquivo salvo em `PROJETOS/[cliente]/creative/design/`
