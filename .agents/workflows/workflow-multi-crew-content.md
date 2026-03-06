---
description: Fluxo Multi-Squad para produção de conteúdo: a squad de dados analisa, a squad criativa escreve, e o designer fecha o ciclo — com memória compartilhada entre os times.
---

# Workflow: Multi-Crew Content (Pipeline de Conteúdo)

**Quando usar:** Quando uma entrega envolve análise + criação + visual. Projetos onde uma parte lógica (dados, pesquisa) alimenta diretamente a parte criativa.

Exemplos de uso: Relatório de mercado + artigo + imagem de capa; Análise de leads + copy de campanha + criativo de ad.

---

## Estrutura do Pipeline

```
[SQUAD DADOS] → (memória compartilhada) → [SQUAD CRIATIVA] → (aprovação) → [SQUAD DESIGN]
```

---

## Passos

### 🔬 Fase 1 — Análise e Geração de Memória (Squad: Prospection ou Success)

1. O agente **Cipher (ou Falcon)** executa a análise/pesquisa solicitada.
2. Ao concluir, **salva o output em um arquivo temporário de contexto** na pasta do projeto (ex: `PROJETOS/[cliente]/context-brief.md`).
3. Liga o sinal para a próxima fase: `"Análise concluída. Briefing gravado em context-brief.md."`

### ✍️ Fase 2 — Criação de Conteúdo (Squad: Creative)

1. O agente **Ink (ou Hype)** **lê obrigatoriamente** o arquivo `context-brief.md` gerado na Fase 1 antes de escrever qualquer palavra.
2. Gera o conteúdo (copy, email, artigo, legenda) fundamentado nos dados do briefing.
3. Aplica o `workflow-auto-eval.md` internamente para garantir qualidade antes de seguir.
4. Salva o output de texto em `PROJETOS/[cliente]/copy-final.md`.

### 🎨 Fase 3 — Produção Visual (Squad: Creative/Design)

1. O agente **Prism** lê `copy-final.md` para extrair os conceitos visuais centrais.
2. Gera o prompt de imagem (Canva ou Microsoft Designer) alinhado ao texto.
3. Entrega ao usuário o pacote completo: texto + prompt de arte.

---

## Regra Crítica

**Jamais pule fases.** O Design nunca começa antes da cópia estar aprovada. A Criativa nunca começa antes da análise estar salva. Isso garante coerência entre as peças e elimina retrabalho.

---

## Memória Compartilhada

O arquivo `context-brief.md` é a "memória" deste workflow. Ele deve conter:

- Público-alvo identificado
- Tom de voz recomendado
- Dados/insights chave coletados
- Objetivo da comunicação
