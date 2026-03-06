---
name: xlsx
description: Criação, edição e análise avançada de planilhas Excel (XLSX). Garante fórmulas, formatações e integração com modelos financeiros.
author: Anthropic (Adapted for DEK-OS)
version: "1.0.0"
squads_que_usam: [Success, Prospection]
---

# Manipulação de XLSX

Habilidade focada em automação de relatórios, listas de CRM e modelos financeiros em Excel.

## Requisitos de Outputs

1. **Fonte:** Use fontes profissionais em cabeçalhos (ex: Arial).
2. **Zero Erros:** Nunca gere `#NAME?`, `#REF!`, `#VALUE!` em planilhas que o cliente vai abrir. Verifique dependências antes de salvar.
3. **Preserve Templates:** Se o cliente possuir template (em `referencias/`), edite **apenas** a aba/células de input ou dados, sem quebrar os gráficos originais.
4. **Cores:** Siga o padrão do cliente; no caso de DF (Demonstrativos Financeiros), use padrão (ex: azul para inputs, preto para fórmulas).

## Fórmulas vs Hardcode (CRÍTICO)

- NUNCA cole valores já calculados caso a planilha espere uma fórmula.
- ❌ **ERRADO:** Escrever "1500" na célula C3 sendo que deveria ser `=A3+B3`.
- ✅ **CORRETO:** Inserir a fórmula nativa do Excel para que o cliente possa simular cenários depois da entrega.

## Fluxo

Leia os dados recebidos. Se usar Python, libere o poder de `openpyxl` para formatações visuais e fórmulas complexas, e use `pandas` apenas para a leitura ou crunch inicial de bases gigantescas de dados.
Sempre audite se o código calculará as linhas com referências relativas (ex: arrastar a fórmula pra baixo).
