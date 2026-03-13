# SESSÃO ATIVA — DEK-OS AG

> ⚠️ **TODOS OS AGENTES DEVEM LER ESTE ARQUIVO ANTES DE QUALQUER AÇÃO.**
> Se este arquivo estiver em branco ou com `cliente_ativo: null`, **PARE e pergunte ao usuário qual é o cliente/projeto ativo antes de prosseguir.**

---

## Estado da Sessão

```yaml
cliente_ativo: "hp-signs"
pasta_projeto: "PROJETOS/hp-signs"
briefing_path: "PROJETOS/hp-signs/briefing.md"
objetivo_sessao: "Analisar dados da campanha de Google Ads e gerar relatório de performance."
agentes_envolvidos: [Cipher, Relay]

```

---

## Instruções de Uso

**Antes de iniciar qualquer workflow ou invocar qualquer agente criativo (Dex, Ink, Prism, Hype, Boost, Apex):**

1. Abra este arquivo
2. Preencha os campos acima com os dados do cliente da sessão
3. Salve o arquivo
4. Só então invoque o agente

**Ao encerrar a sessão ou trocar de cliente:**

1. Redefina todos os campos para `null`
2. Salve o arquivo

---

## Template de Sessão Ativa

Substitua os campos abaixo ao iniciar uma nova sessão:

```yaml
cliente_ativo: "Lumière Depil"
pasta_projeto: "PROJETOS/lumiere-depil"
briefing_path: "PROJETOS/lumiere-depil/briefing.md"
referencias_path: "PROJETOS/lumiere-depil/referencias/"

# Dados do Google Meu Negócio
gmb_nome_oficial: "Lumière Depil"
gmb_endereco: null
gmb_telefone: null
gmb_website: "https://www.lumieredepil.com.br/"
gmb_categoria: "Depilação"
gmb_avaliacao: null
gmb_url: null

# Identidade Visual
cor_primaria: "#D4AF37" # Assumindo tom dourado/marroquino premium
cor_secundaria: "#111111"
fonte_principal: "Montserrat"
logo_path: null

# Contexto da Sessão
objetivo_sessao: "Criar apresentação premium animada sobre IA, mostrando eles como case da DekMídia"
agentes_envolvidos: [Ink, Prism, Dex]
```

---

## Regra Anti-Alucinação (CRÍTICA)

**Nenhum agente pode inventar dados que deveriam vir deste arquivo.**

Se um campo está `null` e o agente precisa desse dado para executar a tarefa, ele deve:

1. **PARAR**
2. **PERGUNTAR** ao usuário o dado específico
3. **AGUARDAR** a resposta antes de continuar
4. **NÃO ASSUMIR** valores padrão ou valores de outros clientes

Exemplo correto:
> "Para criar o site, preciso do telefone do cliente. Qual é o número de contato de [cliente_ativo]?"

Exemplo ERRADO (alucinação):
> *(gera o site com "(11) 99999-9999" ou com dados de outro cliente)*

---

## Exemplo de Sessão Preenchida

```yaml
cliente_ativo: "Clínica Estética Bella Vita"
pasta_projeto: "PROJETOS/bella-vita"
briefing_path: "PROJETOS/bella-vita/briefing.md"
referencias_path: "PROJETOS/bella-vita/referencias/"

gmb_nome_oficial: "Clínica Bella Vita - Estética Avançada"
gmb_endereco: "Rua das Orquídeas, 450 - Jardins, São José dos Campos - SP"
gmb_telefone: "(12) 3912-4567"
gmb_website: null
gmb_categoria: "Clínica de Estética"
gmb_avaliacao: "4.8 (127 avaliações)"
gmb_url: "https://maps.google.com/?cid=XXXXXXX"

cor_primaria: "#C9A87C"
cor_secundaria: "#2C2C2C"
fonte_principal: "Cormorant Garamond"
logo_path: "PROJETOS/bella-vita/referencias/logo.png"

objetivo_sessao: "Criar landing page para captação de leads de limpeza de pele"
agentes_envolvidos: [Dex, Ink]
```
