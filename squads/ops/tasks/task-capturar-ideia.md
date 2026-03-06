---
task_id: task-capturar-ideia
agent: leo
mode: captura
trigger: "Leo, anota / Leo, registra"
output_path: PROJETOS/_ideias/
---

# Task: Capturar Ideia

## Input Esperado

Texto livre com a ideia do usuário após o trigger.

**Exemplos:**

- `"Leo, anota: criar um dashboard visual do funil de vendas da agência"`
- `"Leo, registra: e se eu criasse pacotes de serviços empacotados para advogados?"`

## Passos de Execução

1. **Extrair a ideia** do input (tudo após o trigger).
2. **Definir o slug**: converter o título em kebab-case minúsculo (máx 5 palavras).
3. **Definir a data**: usar a data atual no formato `YYYY-MM-DD`.
4. **Criar o arquivo** em `PROJETOS/_ideias/[slug]-[data].md` usando o template abaixo.
5. **Confirmar** ao usuário com 1 frase curta no estilo de Leo.

## Template do Arquivo de Ideia

```markdown
---
data: YYYY-MM-DD
status: rascunho
categoria: [negócio | produto | processo | marketing | tecnologia]
potencial: [baixo | médio | alto | transformador]
---

# [Título inferido da ideia]

## Ideia bruta
[Exatamente o que o usuário disse]

## Primeira impressão de Leo
[2-4 linhas de Leo comentando a ideia]

## Conexões possíveis
[Outros projetos, clientes ou contextos que isso pode tocar]

## Próximos passos
[Deixar em branco — será preenchido no modo análise]
```

## Critérios de Aceite

- [ ] Arquivo criado em `PROJETOS/_ideias/`
- [ ] Ideia bruta preservada sem alterações
- [ ] Slug gerado corretamente
- [ ] Confirmação enviada ao usuário
