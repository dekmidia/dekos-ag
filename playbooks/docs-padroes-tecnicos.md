# Playbook: Padrões Técnicos e Manipulação de Dados
> SOP Operacional | Versão 1.0 | DekMidia

Este documento contém os padrões técnicos obrigatórios para a manipulação de arquivos e dados dos clientes e do sistema interno DEK-OS.

## 1. Manipulação de Planilhas (Excel/XLSX)

Ao atualizar planilhas de controle de leads, gestão de tráfego ou orçamentos, o agente deve garantir a **Integridade Visual**.

- ❌ **PROIBIDO:** Usar bibliotecas destrutivas como `pandas.to_excel()` ou `csv.writer()` diretamente em arquivos formatados, pois elas removem estilos, cores, filtros e objetos de tabela.
- ✅ **OBRIGATÓRIO:** Usar `openpyxl` (Python) ou similar que suporte a edição de células específicas mantendo a estrutura original do arquivo.
- ✅ **OBRIGATÓRIO:** Preservar Objetos de Tabela (`ListObjects`), Filtros, Negrito, Cores de Fundo e Larguras de Coluna.
- ✅ **REGRA DE OURO:** Se o arquivo possui identidade visual (cores da agência, estilos de sucesso), qualquer automação deve atuar cirurgicamente sem afetar o design.

## 2. Padrões de Diretórios

- As propostas devem estar sempre em: `PROJETOS/[cliente]/propostas/`
- Arquivos temporários de processamento de dados devem residir em `/tmp/` e nunca serem movidos para a raiz do projeto sem limpeza prévia.

---
*Playbook Padrões Técnicos — DekMidia | Março/2026*
