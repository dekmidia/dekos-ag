---
name: task-estruturar-campanha
agent: boost
squad: Performance
departamento: Tráfego
version: "1.0.0"
human_approval_required: true
output_dir: PROJETOS/[cliente]/performance/
---

# Task: Estruturar Campanha de Tráfego Pago

## Intake Obrigatório

Antes de qualquer ação, verificar `SESSAO_ATIVA.md`. Se `cliente_ativo` for null, perguntar ao usuário qual cliente antes de prosseguir.

Apresentar o menu abaixo e aguardar escolha:

---

> "Qual campanha vamos estruturar?
>
> 1. Google Ads — Search
> 2. Google Ads — Performance Max
> 3. Meta Ads — Topo de funil (Feed + Stories)
> 4. Meta Ads — Remarketing
> 5. Campanha completa (Google + Meta)
> 6. Outro — descreva"

---

Após a escolha, coletar obrigatoriamente:

- [ ] Nicho e produto/serviço anunciado
- [ ] URL de destino (landing page, site, WhatsApp)
- [ ] Orçamento mensal disponível
- [ ] Região de atuação (cidade, estado, nacional)
- [ ] Objetivo principal (leads, vendas, ligações, visitas à loja)
- [ ] Já existe campanha rodando? *(sim → quais os resultados atuais / não → campanha nova)*

> ⚠️ Não estruturar campanha sem URL de destino e orçamento definidos.

---

## Etapas de Execução

1. **Contextualização** — Confirmar todos os inputs. Consultar `briefing.md` do cliente.
2. **Estratégia** — Definir estrutura de campanha, grupos de anúncios e segmentação.
3. **Palavras-chave / Públicos** — Mapear termos (Google) ou audiências (Meta) prioritários.
4. **Copies de anúncio** — Escrever títulos, descrições e CTAs seguindo as boas práticas de cada plataforma.
5. **Configurações técnicas** — Especificar lances, orçamentos por campanha, extensões (Google) ou formatos (Meta).
6. **Documentação** — Gerar documento de estrutura pronto para implementação.

## Outputs

- `campanha-[plataforma]-[cliente]-[data].md` → Estrutura completa da campanha

## Acceptance Criteria

- [ ] Estrutura de campanhas, conjuntos e anúncios claramente definida
- [ ] Mínimo de 3 variações de copy por conjunto de anúncios
- [ ] Segmentação de público ou palavras-chave documentada
- [ ] Orçamento distribuído entre campanhas
- [ ] URL de destino validada e presente em todos os anúncios
- [ ] Aprovação humana antes de marcar como pronta para implementação

## human_approval_required

Apresentar estrutura completa ao usuário antes de finalizar. Aguardar confirmação para prosseguir com a implementação.
