import pandas as pd
import json

# Carregar os leads qualificados
with open('c:/Users/crist/Documents/Dev/ANTIGRAVITY/dekos-ag/PROJETOS/_prospection/leads-qualificados.json', 'r', encoding='utf-8') as f:
    leads = json.load(f)

# Criar DataFrame
df = pd.DataFrame(leads)

# Reordenar colunas para melhor visualização na planilha
cols = ['id', 'nome_empresa', 'segmento', 'cidade', 'score', 'classificacao', 'nivel_maturidade', 'dor_principal', 'servico_recomendado', 'ticket_estimado_mensal', 'justificativa', 'proximo_passo']
df = df[cols]

# Salvar como XLSX
output_path = 'c:/Users/crist/Documents/Dev/ANTIGRAVITY/dekos-ag/PROJETOS/_prospection/Relatorio_Prospeccao_Dekmidia_Março_2026.xlsx'
df.to_excel(output_path, index=False)

print(f"Relatório gerado em: {output_path}")
