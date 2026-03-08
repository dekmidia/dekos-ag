# Skill: Criar Apresentação (criar-apresentacao)

Gera apresentações `.pptx` profissionais e elegantes a partir de um briefing estruturado em JSON.
Usa **PptxGenJS** para renderização, **react-icons** para ícones vetoriais e **sharp** para rasterização.
O resultado é um arquivo `.pptx` compatível com PowerPoint, Google Slides e LibreOffice.

---

## Quando usar esta skill

Use quando o usuário pedir:

- Criar uma apresentação / pitch deck / proposta comercial
- Montar um relatório de resultados em slides
- Gerar uma apresentação de onboarding de cliente
- Preparar slides para reunião, treinamento ou palestra

---

## Dependências

Instale uma única vez no ambiente:

```bash
npm install -g pptxgenjs react react-dom react-icons sharp ts-node typescript
```

---

## Como executar

```bash
# Forma básica
npx ts-node skills/criar-apresentacao/criar-apresentacao.ts --input briefing.json

# Com output e tema customizados
npx ts-node skills/criar-apresentacao/criar-apresentacao.ts \
  --input briefing.json \
  --output ./PROJETOS/cliente-xyz/apresentacao-proposta.pptx \
  --tema tech-innovation
```

---

## Estrutura do briefing (JSON)

```json
{
  "titulo": "Título da Apresentação",
  "subtitulo": "Subtítulo opcional",
  "empresa": "Nome da Empresa",
  "site": "site.com.br",
  "tagline": "Frase de impacto",
  "tema": "gravity-dark",
  "outputPath": "./saida.pptx",
  "slides": [
    {
      "tipo": "capa",
      "titulo": "Nome do Projeto",
      "subtitulo": "Descrição em uma linha"
    },
    {
      "tipo": "problema",
      "titulo": "O título do problema",
      "itens": [
        { "icone": "gear", "valor": "12+", "label": "ferramentas", "desc": "Descrição breve" },
        { "icone": "chart", "valor": "40%", "label": "do tempo", "desc": "Descrição breve" },
        { "icone": "users", "valor": "3×", "label": "mais caro", "desc": "Descrição breve" }
      ]
    },
    {
      "tipo": "solucao",
      "titulo": "Título da solução",
      "itens": [
        { "icone": "brain", "label": "Feature 1", "desc": "Descrição" },
        { "icone": "auto",  "label": "Feature 2", "desc": "Descrição" },
        { "icone": "dashboard", "label": "Feature 3", "desc": "Descrição" }
      ]
    },
    {
      "tipo": "kpis",
      "titulo": "O impacto em números",
      "itens": [
        { "valor": "70%", "label": "Redução de retrabalho" },
        { "valor": "3×",  "label": "Mais produtividade" },
        { "valor": "48h", "label": "Para lançar campanha" },
        { "valor": "100%","label": "Rastreabilidade" }
      ]
    },
    {
      "tipo": "cta",
      "titulo": "Pronto para começar?",
      "corpo": "Texto de apoio ao CTA, explicando o próximo passo."
    }
  ]
}
```

---

## Tipos de slide disponíveis

| tipo | Descrição | Campos principais |
|------|-----------|-------------------|
| `capa` | Slide de abertura com impacto visual | titulo, subtitulo, tagline (empresa/briefing) |
| `problema` | 3 cards com ícone, número e descrição | itens (max 3) |
| `solucao` | Grid 2×3 com ícone + label + desc | itens (max 6) |
| `kpis` | 4 cards com métricas grandes em destaque | itens (max 4) |
| `cta` | Slide de fechamento/call-to-action | titulo, corpo |
| `generico` | Layout dark com título + corpo livre | titulo, subtitulo, corpo |

---

## Temas disponíveis

| tema | Estilo |
|------|--------|
| `gravity-dark` | Escuro premium — padrão DEK-OS (violeta + ciano) |
| `tech-innovation` | Tech azul elétrico sobre fundo escuro |
| `midnight-galaxy` | Roxo profundo, estilo cosmos |
| `corporate-light` | Claro corporativo, azul institucional |

---

## Ícones disponíveis

`rocket`, `target`, `chart`, `gear`, `brain`, `users`, `star`, `check`, `shield`, `light`, `dashboard`, `auto`, `trending`, `integrate`, `money`, `clock`, `globe`, `email`, `phone`.
