---
name: doc-synchronizer
description: Sincroniza tabelas de Agentes, Squads e Skills do registry.json com README.md e help.md.
---

# Skill: Doc Synchronizer

Esta skill garante que as documentações de ajuda do usuário estejam sempre atualizadas com o estado real do sistema definido no `registry.json`.

## Como usar

Execute o script de sincronização após fazer alterações estruturais (novas squads, agentes ou skills):

```powershell
python scripts/sync_docs.py
```

## O que ela faz

1. Lê o `registry.json`.
2. Gera tabelas em Markdown para Squads, Agentes e Skills.
3. Localiza os marcadores `<!-- TABLE_START -->` e `<!-- TABLE_END -->` nos arquivos `README.md` e `.agents/workflows/help.md`.
4. Substitui o conteúdo antigo pelo novo conteúdo sincronizado.
