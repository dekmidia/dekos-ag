# 🛡️ Padrão DEK-OS: Apresentações e QA

Este playbook descreve as regras rígidas adotadas por todos os agentes sobre a criação de apresentações e o fluxo de Quality Assurance (QA).

## 1. Regra de Imagens Obrigatórias

**NENHUMA apresentação pode ser de texto puro.**

* **TODAS** as apresentações criadas pelo DEK-OS AG devem obrigatoriamente conter imagens de alta qualidade (geradas por IA ou do cliente).
* A estética da apresentação deve seguir padrões visuais ricos, evitando o aspecto de documento "em branco".

## 2. Regra Executiva de QA (Quality Assurance)

Antes de entregar ou apresentar o resultado final gerado para o usuário, o projeto DEVE passar pelo aval do QA.

* **Agente Responsável:** Guard (@qa-tester) ou validação autônoma (via Subagente / Auto-avaliação).
* O QA tem a autoridade para **bloquear** a apresentação se houver quebras visuais (ex: tela em branco, texto invisível, assets que não carregam).
* Apenas após a confirmação de que os elementos críticos funcionam, o link pode ser compartilhado com o usuário final.

## 3. Padrão de Tipografia e Proporção (Golden Ratio)

Para evitar apresentações visualmente desproporcionais e amadoras ("títulos gigantes"), todo o design CSS/HTML e as especificações de design devem respeitar a seguinte escala tipográfica base classificada como "Premium Keynote":

* **H1 (Títulos Principais / Capas):** `2.5em` a `3em` (Nunca ultrapassar este limite estético).
* **H2 (Subtítulos / Títulos de Slide):** `2em` a `2.2em`.
* **H3 (Destaques Menores):** `1.5em` a `1.8em`.
* **Corpo do Texto (P / Textos de apoio):** `1em` a `1.2em`.

> ⚠️ _É estritamente proibido o uso de inline-styles como `font-size: 4em` ou `5em`, pois quebram a responsividade e a proporção estética do Reveal.js e de designs focados em elegância._

> ⚠️ _Padrão estabelecido durante o projeto Lumière Depil por solicitação direta do usuário._
