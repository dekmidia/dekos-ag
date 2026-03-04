---
name: Checklist de Validacao de Ficha de Lead
squad: prospection
used_by: [pesquisador, qualificador]
tasks: [task-mapear-leads]
---

# Checklist: Ficha de Lead

Execute em CADA ficha antes de entregar ao proximo agente.
Todos os itens devem estar OK para a ficha ser considerada pronta.

## Dados Basicos
- [ ] nome_empresa preenchido (nao vazio)
- [ ] segmento preenchido e compativel com `data/segmentos.json`
- [ ] cidade preenchida e compativel com `data/cidades-regioes.json`
- [ ] regiao corretamente classificada

## Contato
- [ ] Pelo menos 1 contato valido (whatsapp OU email OU linkedin)
- [ ] Formato do WhatsApp verificado (55 + DDD + numero)
- [ ] E-mail com formato valido (se presente)

## Presenca Digital
- [ ] Campo `tem_site` preenchido (true/false - nunca null)
- [ ] Se tem_site=true: site_url presente E site_speed_mobile verificado
- [ ] Campo `tem_ads_google` verificado
- [ ] Campo `tem_ads_meta` verificado
- [ ] Campo `google_perfil_ativo` verificado

## Qualidade
- [ ] Negocio confirmado como ativo
- [ ] Nenhum campo obrigatorio com string vazia ("")
- [ ] ID no formato: YYYYMMDD-SEGMENTO-SEQ
- [ ] data_captura em ISO8601

Algum item falhou? Corrigir antes de prosseguir.
Campo impossivel de verificar? Marcar como null com comentario.
