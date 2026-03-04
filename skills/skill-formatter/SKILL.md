---
name: skill-formatter
description: Garante que novas skills (Markdown ou Código) sigam o padrão técnico do DEK-OS.
---

# Skill: Skill Formatter

Esta skill formata ou valida arquivos de skill para garantir consistência no sistema DEK-OS. Ela reconhece tanto folders com `SKILL.md` quanto arquivos isolados de código (`.ts`, `.py`).

## Como usar

1. Forneça o conteúdo ou arquivo da skill.
2. A skill adicionará o frontmatter ou cabeçalho necessário.

## Padrões Suportados

### 1. Folder-based (Antigravity Native) - SKILL.md

```yaml
---
name: [identificador-da-skill]
description: [descrição clara da função]
---
# Skill: [Título Amigável]
...
```

### 2. Code-based (Arquivo de Codigo)

```typescript
/**
 * Skill: [Nome]
 * Squad: [Squad]
 * Versao: 1.0.0
 *
 * [Descrição]
 *
 * Uso:
 *   [Instruções]
 */
```
