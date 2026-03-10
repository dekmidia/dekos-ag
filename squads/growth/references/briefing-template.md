---
template: briefing-cliente
version: "1.0.0"
gerado_por: Welcome (@onboarding)
instrucoes: >
  Este arquivo é o briefing central do cliente no DEK-OS.
  Todos os agentes (Boost, Cipher, Relay, Lens) leem este arquivo antes de agir.
  Preencha cada seção no onboarding e mantenha atualizado mensalmente.
  Campos marcados com ⚠️ são obrigatórios para o agente funcionar corretamente.
---

# 📁 Briefing do Cliente — [NOME DO CLIENTE]

> **Caminho deste arquivo:** `PROJETOS/[cliente]/briefing.md`
> **Última atualização:** [DATA]
> **Responsável:** Kile

---

## 🏢 Identificação

```
nome_cliente: [Nome completo da empresa]
nome_contato: [Nome do responsável pelo cliente]
nicho: [ex: clínica estética, restaurante, e-commerce, salão de beleza]
cidade: [cidade]
estado: [estado]
site: [URL]
instagram: [@handle]
google_meu_negocio: [link ou "não possui"]
whatsapp_comercial: [número]
```

---

## 📋 Contrato

```
data_inicio_contrato: [DD/MM/AAAA]  ⚠️ obrigatório para Relay calcular evolução histórica
data_renovacao: [DD/MM/AAAA ou "mensal automático"]
servicos_contratados:
  - [ex: Gestão de tráfego Meta Ads]
  - [ex: Relatório mensal]
  - [ex: Criação de landing page]
valor_mensalidade: R$ [valor]
budget_ads_mensal: R$ [valor]
plataformas_ativas: [Google Ads / Meta Ads / ambas / nenhuma]
```

---

## 🎯 Objetivos e Metas

```
objetivo_principal: [ex: gerar leads qualificados para agendamento]
meta_cpa: R$ [valor]            ⚠️ obrigatório para Boost monitorar
meta_roas: [valor]x             ⚠️ obrigatório para Boost monitorar
meta_leads_mes: [número]
meta_taxa_conversao: [%]        (lead → venda)
prazo_para_resultados: [ex: 90 dias]
```

---

## 🔑 Acessos

```
google_ads:
  conta_id: [ID da conta]
  acesso: [Confirmado / Pendente / Não necessário]

meta_ads:
  conta_id: [ID da conta Business]
  acesso: [Confirmado / Pendente / Não necessário]

google_analytics:
  propriedade_id: [ID]
  acesso: [Confirmado / Pendente / Não necessário]

pixel_meta:
  instalado: [Sim / Não / Pendente]
  disparando_conversoes: [Sim / Não / Pendente]

google_tag_manager:
  instalado: [Sim / Não / Pendente]

google_meu_negocio:
  acesso: [Confirmado / Pendente / Não necessário]
```

---

## 💼 Dados de Vendas do Cliente

> ⚠️ **Obrigatório para o Cipher calcular ROI real.**
> Atualizar mensalmente com dados do próprio cliente.
> Se o cliente não fornecer, registrar "Não disponível" e sinalizar no relatório.

```
ticket_medio: R$ [valor]
leads_recebidos_mes: [número]
leads_convertidos_mes: [número]
taxa_conversao_leadxvenda: [%]
receita_gerada_mes: R$ [valor]
canal_principal_de_fechamento: [WhatsApp / presencial / telefone / outro]
observacoes_mes: [ex: "março teve promoção de aniversário", "semana 2 com atendimento lento"]
atualizado_em: [DATA]
```

---

## 📊 Histórico de Decisões

> ⚠️ **Obrigatório para o Boost fechar o loop entre sessões.**
> Após cada análise semanal, cole aqui o bloco gerado pelo Boost.
> Entradas mais recentes no topo.

```
---
data: [DATA]
periodo_analisado: [ex: 03/03/2026 a 09/03/2026]
situacao: [resumo em 2 linhas do que os dados mostravam]
acao_decidida: [o que foi implementado ou recomendado]
responsavel: Kile
resultado_observado: [preenchido na sessão seguinte — o que mudou após a ação]
proxima_revisao: [data sugerida]
---
```

*Cole novos blocos acima deste texto conforme o sistema for operando.*

---

## 📈 Histórico de Performance Mensal

> Atualizado pelo Relay ao final de cada mês.
> Usado para gerar a seção "Evolução desde o início" nos relatórios.

| Mês/Ano | Investimento | Leads | CPA | ROAS | Receita Cliente | Observação |
|---------|-------------|-------|-----|------|-----------------|------------|
| [MM/AAAA] | R$ [valor] | [nº] | R$ [valor] | [valor]x | R$ [valor] | [contexto relevante] |

*Adicionar nova linha ao final de cada mês.*

---

## 🧠 Contexto do Negócio

> Informações que ajudam os agentes a dar recomendações mais precisas.
> Preenchido no onboarding e atualizado quando houver mudança relevante.

```
sazonalidade: [ex: "pico em dezembro e janeiro", "baixa em julho"]
diferenciais_competitivos: [ex: "único na cidade com equipamento X"]
perfil_cliente_ideal: [ex: "mulheres 30-50 anos, classe B, interesse em estética"]
concorrentes_principais:
  - [Nome do concorrente 1]
  - [Nome do concorrente 2]
restricoes_de_campanha: [ex: "não pode usar palavra 'garantido'", "CONAR: setor regulado"]
tom_de_comunicacao: [ex: "profissional e acolhedor", "descontraído e jovem"]
```

---

## 🚨 Alertas e Observações Ativas

> Registro de situações em andamento que qualquer agente precisa saber.
> Limpar após resolução.

```
[DATA] — [descrição do alerta ou observação]
ex: "2026-03-09 — Cliente sinalizou insatisfação com volume de leads. Risco de churn. Kile fará contato em 10/03."
ex: "2026-02-15 — Conta Meta suspensa por 48h. Campanha pausada. Reativada em 17/02."
```

---

## 📁 Estrutura de Pastas do Projeto

```
PROJETOS/[cliente]/
├── briefing.md                     ← este arquivo
├── onboarding/
│   ├── proposta-[data].md
│   ├── contrato-[data].md
│   └── checklist-acessos.md
├── performance/
│   ├── auditoria/
│   └── campanhas/
├── reports/
│   ├── raw/                        ← CSVs exportados das plataformas
│   ├── analysis/                   ← Análises do Cipher
│   └── [relatorio-tipo-data].md    ← Relatórios do Relay
└── creative/
    └── briefings/
```
