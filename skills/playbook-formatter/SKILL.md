---
name: playbook-formatter
description: Garante que novos playbooks sigam o padrão técnico do DEK-OS (YAML frontmatter + Markdown estruturado).
---

# Skill: Playbook Formatter

Esta skill formata ou valida arquivos de playbook para garantir consistência no sistema DEK-OS.

## Como usar

1. Forneça o conteúdo ou arquivo do playbook.
2. A skill adicionará o frontmatter necessário e estruturará as seções.

## Padrão de Frontmatter

```yaml
---
title: [Título do Playbook]
tags: [tag1, tag2]
author: DekMidia
version: "1.0.0"
squads_que_usam: [Squad1, Squad2]
---
```

### Exemplo de Estrutura de Corpo

- ### Playbook: [Título]

- #### Contexto

- #### Passo a Passo / Processo

- #### Ferramentas Necessárias

- #### Metas / KPIs

- #### Checklist de Qualidade
