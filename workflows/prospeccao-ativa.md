---
description: Executa o ciclo completo de prospeccao ativa de PMEs, desde o mapeamento ate o primeiro contato. Invocar com: segmento + cidade/regiao.
---

# Workflow: Prospeccao Ativa de PMEs

## Parametros de Entrada

- segmento: ex. clinica odontologica, academia, imobiliaria
- cidade_ou_regiao: ex. Sao Jose dos Campos, Vale do Paraiba, Litoral Norte
- quantidade_meta: numero de leads qualificados desejados (padrao: 20)

## Passo 1: Configuracao da Sessao

Leia o playbook prospeccao-pme-regional para calibrar criterios de ICP e regioes de atuacao.
Leia o playbook sinais-de-dor-digital para ter os ganchos de abordagem prontos.
Confirme os parametros recebidos e registre o inicio da sessao com timestamp.

## Passo 2: Mapeamento de Leads

Invoque o agente Pesquisador (squads/prospeccao/pesquisador.md).
Ordem: Pesquise {segmento} em {cidade_ou_regiao}.
Meta: minimo {quantidade_meta} leads mapeados antes de avanar.
Fontes: Google Maps primeiro, LinkedIn em seguida.

## Passo 3: Scoring e Classificacao

Para cada lead mapeado, aplique a skill scoring-leads.
Preencha a ficha padrao JSON completa para cada lead.
Classifique: quente / morno / frio / descartado.
Salve o resultado em PROJETOS/_prospeccao/leads-raw/{segmento}-{cidade}-{data}.md

## Passo 4: Geracao de Mensagens

Para cada lead classificado como QUENTE:
- Aplique a skill copywriting-prospeccao com o canal ideal identificado no scoring
- Gere as 3 variacoes de mensagem e registre na ficha do lead
- Salve em PROJETOS/_prospeccao/contatos/{id_lead}-mensagens.md

Para cada lead classificado como MORNO:
- Aplique a skill diagnostico-digital para preparar o diagnostico gratuito
- Salve em PROJETOS/_prospeccao/diagnosticos/{id_lead}-diagnostico.md

## Passo 5: Relatorio de Sessao

Gere um relatorio resumido contendo:
- Total de leads mapeados
- Distribuicao por classificacao: X quentes, X mornos, X frios, X descartados
- Distribuicao por servico recomendado
- Top 5 leads com maior score e ganchos sugeridos
- Proximas acoes recomendadas com prazos

Salve em PROJETOS/_prospeccao/relatorios/sessao-{data}.md

## Passo 6: Encaminhamento

Leads QUENTES: notifique equipe de abordagem com lista e ganchos
Leads MORNOS: adicione na fila de nutricao do n8n com diagnostico anexo
Leads FRIOS: adicione na sequencia de email marketing segmentado