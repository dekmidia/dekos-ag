---
description: Executa a cadencia completa de follow-up para um lead que nao respondeu ao primeiro contato.
---

# Workflow: Cadencia de Follow-Up

## Parametros

- id_lead | canal_inicial | data_primeiro_contato

## Passo 1: Verificacao

Leia a ficha do lead em PROJETOS/_prospection/leads-qualificados/quentes/
Se o lead JA respondeu: encerre e notifique equipe. Se nao: continue.

## D+3: Follow-Up com Conteudo de Valor

Pesquise 1 dado de mercado atual do segmento do lead.
Gere mensagem curta compartilhando esse dado SEM mencionar servicos.
Estrutura: [NOME], [DADO_MERCADO]. Para [SEGMENTO] em [CIDADE] isso significa [IMPACTO]. Qualquer hora que quiser conversar, estou aqui.

## D+5: Case de Segmento Similar

Prepare case curto: problema que tinha + resultado obtido em prazo real.
Nao exagere nem invente numeros. Convide para ver o mesmo para o negocio deles.

## D+7: Ultima Tentativa com Isca

Aplique a skill diagnostico-digital para este lead.
Oferte o diagnostico gratuito com prazo de 48h.
Estrutura: [NOME], ultima mensagem. Montei um diagnostico de [NOME_EMPRESA]. 20 min para apresentar. Se nao for o momento, sem problemas.

## D+14: Reativacao por Canal Diferente

Use canal diferente do inicial.
Gere nova mensagem com angulo diferente dos anteriores.
Se ainda sem resposta: arquivar por 30 dias.

## Desfecho

Respondeu: notifique equipe, agende reuniao, status = CONVERTIDO
Nao respondeu: status = ARQUIVADO, data reativacao = +30 dias
Salve relatorio em PROJETOS/_prospection/relatorios/followup-{id_lead}.md
