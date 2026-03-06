---
task_id: task-analisar-ideias
agent: leo
mode: analise
trigger: "Leo, analise as ideias / Leo, debate esta ideia"
output_path: PROJETOS/_ideias/relatorios/
---

# Task: Analisar Ideias

## Input Esperado

Pedido explícito do usuário para analisar, triar ou debater ideias.

Opcionalmente, o usuário pode indicar uma ideia específica. Caso contrário, Leo analisa todas com `status: rascunho`.

## Passos de Execução

1. **Listar todos os arquivos** em `PROJETOS/_ideias/` com `status: rascunho`.
2. **Ler cada arquivo** e extrair: título, ideia bruta, categoria e potencial.
3. **Avaliar cada ideia** em 4 dimensões:
   - 🔧 Viabilidade Técnica (0-10)
   - 💰 Potencial de Receita (0-10)
   - 🧭 Alinhamento Estratégico com DekMídia (0-10)
   - ⚡ Urgência de Mercado (0-10)
4. **Classificar cada ideia**: `🔥 Executar agora` | `🌱 Amadurecer` | `📦 Arquivar`
5. **Gerar o relatório** no formato definido no system prompt do Leo.
6. **Para ideias `🔥`**: Indicar qual squad ou agente deve ser envolvido no próximo passo.
7. **Atualizar o status** de cada arquivo analisado de `rascunho` para `analisado`.

## Critérios de Aceite

- [ ] Todas as ideias com `status: rascunho` foram lidas e avaliadas
- [ ] Cada ideia foi classificada em uma das 3 categorias
- [ ] Ideias `🔥` têm squad sugerida e próximo passo concreto
- [ ] Relatório gerado em Markdown com a frase de Leo
- [ ] Status das ideias atualizado para `analisado`
