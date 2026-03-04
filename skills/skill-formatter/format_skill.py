import sys
import os
import yaml
import re

def format_skill_md(content):
    # Padrão para SKILL.md
    frontmatter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    
    metadata = {
        "name": "nova-skill",
        "description": "Descricao da nova skill."
    }
    
    body = content
    if frontmatter_match:
        try:
            existing_metadata = yaml.safe_load(frontmatter_match.group(1))
            metadata.update(existing_metadata)
            body = content[frontmatter_match.end():].strip()
        except Exception:
            pass
            
    if not body.startswith("# "):
        title = metadata["name"].replace("-", " ").title()
        body = f"# Skill: {title}\n\n" + body
        
    formatted = "--\n"
    formatted += yaml.dump(metadata, sort_keys=False, allow_unicode=True)
    formatted += "--\n\n"
    formatted += body
    return formatted

def format_skill_code(content, ext):
    # Padrão para arquivos de código (.ts, .py, etc)
    header_pattern = r'^\/\*\*.*?\*\/' if ext in ['.ts', '.js'] else r'^""".*?"""'
    
    metadata = {
        "Skill": "Nova Skill",
        "Squad": "Geral",
        "Versao": "1.0.0",
        "Descricao": "Descricao da skill.",
        "Uso": "Instrucoes de uso."
    }
    
    # Tenta extrair cabeçalho existente (simplificado)
    header_match = re.match(header_pattern, content, re.DOTALL)
    body = content
    if header_match:
        body = content[header_match.end():].strip()
        
    if ext in ['.ts', '.js']:
        header = "/**\n"
        for k, v in metadata.items():
            header += f" * {k}: {v}\n"
        header += " */\n\n"
    else:  # Python
        header = '"""\n'
        for k, v in metadata.items():
            header += f"{k}: {v}\n"
        header += '"""\n\n'
        
    return header + body

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python format_skill.py [caminho_do_arquivo]")
        sys.exit(1)
        
    file_path = sys.argv[1]
    ext = os.path.splitext(file_path)[1]
    
    if not os.path.exists(file_path):
        print(f"Erro: Arquivo {file_path} nao encontrado.")
        sys.exit(1)
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    if os.path.basename(file_path).lower() == "skill.md":
        formatted_content = format_skill_md(content)
    elif ext in ['.ts', '.js', '.py']:
        formatted_content = format_skill_code(content, ext)
    else:
        print(f"Formato {ext} nao suportado para auto-formatacao.")
        sys.exit(0)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(formatted_content)
        
    print(f"Skill {os.path.basename(file_path)} formatada com sucesso!")
