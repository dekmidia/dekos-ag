import sys
import os
import yaml
import re

def format_playbook(content):
    # Tenta extrair frontmatter existente
    frontmatter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    
    metadata = {
        "title": "Novo Playbook",
        "tags": ["conhecimento"],
        "author": "DekMidia",
        "version": "1.0.0",
        "squads_que_usam": []
    }
    
    body = content
    if frontmatter_match:
        try:
            existing_metadata = yaml.safe_load(frontmatter_match.group(1))
            metadata.update(existing_metadata)
            body = content[frontmatter_match.end():].strip()
        except Exception:
            pass
            
    # Garante estrutura do corpo
    if not body.startswith("# "):
        body = f"# Playbook: {metadata['title']}\n\n" + body
        
    # Reconstrue o arquivo
    formatted = "---\n"
    formatted += yaml.dump(metadata, sort_keys=False, allow_unicode=True)
    formatted += "---\n\n"
    formatted += body
    
    return formatted

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python format.py [caminho_do_arquivo]")
        sys.exit(1)
        
    file_path = sys.argv[1]
    if not os.path.exists(file_path):
        print(f"Erro: Arquivo {file_path} nao encontrado.")
        sys.exit(1)
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    formatted_content = format_playbook(content)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(formatted_content)
        
    print(f"Playbook {os.path.basename(file_path)} formatado com sucesso!")
