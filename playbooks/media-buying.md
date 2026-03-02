---
title: Media Buying
author: DekMidia
tags: [ads]
---
# Playbook: Media Buying (Tráfego Pago)

## Regras de Gestão de Campanhas

---

### 1. Estrutura de Campanha (Google Ads)

```
Conta
├── Campanha Search (Keywords de alta intenção)
├── Campanha Performance Max (Automação do Google)
├── Campanha Display (Remarketing apenas)
└── Campanha YouTube (Awareness, se aplicável)
```

### 2. Regras de Escalação

| Condição | Ação | Limite |
|----------|------|--------|
| ROAS > meta x 1.2 e CPA < meta x 0.8 | Escalar 20% budget | Máx 30%/dia |
| ROAS entre meta x 0.8 e meta x 1.2 | Manter e otimizar | — |
| ROAS < 1.0 por 24h | Pausar campanha | Imediato |
| Frequência > 3.0 | Trocar criativo | Solicitar à Squad Creative |
| CTR < 0.5% | Revisar audiência | Testar nova segmentação |

### 3. Benchmarks por Nicho

| Nicho | CPA Aceitável | ROAS Mínimo | CTR Search |
|-------|--------------|-------------|------------|
| Restaurante | R$ 5-15 | 5.0x | 3-8% |
| Clínica | R$ 30-80 | 3.0x | 5-12% |
| E-commerce | R$ 20-80 | 4.0x | 1-3% |
| SaaS | R$ 50-200 | 3.0x | 2-5% |

### 4. Checklist de Setup

- [ ] Pixel/Tag instalado e disparando
- [ ] Conversão configurada e testada
- [ ] Público de remarketing criado
- [ ] Orçamento diário definido
- [ ] Criativos aprovados pelo Compliance Sentinel
- [ ] Landing page validada pelo QA Tester

### 5. Regras de Segurança

- NUNCA aumentar budget > 30% em um dia
- NUNCA deletar campanhas (apenas pausar)
- SEMPRE manter pelo menos 1 campanha ativa
- Mudanças de budget > R$ 500/dia precisam aprovação humana
