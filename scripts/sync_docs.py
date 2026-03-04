import json
import re
import os


REGISTRY_PATH = "registry.json"
HELP_PATH = ".agents/workflows/help.md"
README_PATH = "README.md"

def load_registry():
    with open(REGISTRY_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)

def parse_yaml_simple(yaml_str):
    """Parse basico de YAML para extrair campos especificos via regex."""
    result = {}
    lines = yaml_str.split('\n')
    for line in lines:
        match = re.match(r'^(\w+):\s*(.*)$', line.strip())
        if match:
            key = match.group(1)
            val = match.group(2).strip()
            # Remove aspas se houver
            if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
                val = val[1:-1]
            result[key] = val
    return result

def generate_squad_table(registry):
    table = "| Squad | Area de Responsabilidade |\n| --- | --- |\n"
    for name, data in registry.get("squads", {}).items():
        title = name.capitalize()
        desc = data.get("descricao", "Sem descricao.")
        table += f"| **{title}** | {desc} |\n"
    return table

def get_agent_info(path):
    if not os.path.exists(path):
        return os.path.basename(path).replace(".md", "").capitalize(), "Agente do sistema."
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    frontmatter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if frontmatter_match:
        try:
            metadata = parse_yaml_simple(frontmatter_match.group(1))
            persona_full = metadata.get("persona", "")
            if not persona_full:
                return metadata.get("name", os.path.basename(path).replace(".md", "").capitalize()), "Gerenciar tarefas."
            
            persona = persona_full.split("—")[0].strip()
            mission = persona_full.split("—")[-1].strip() if "—" in persona_full else "Gerenciar tarefas."
            return persona, mission
        except Exception:
            pass
    return os.path.basename(path).replace(".md", "").capitalize(), "Agente do sistema."

def get_skill_info(path):
    if os.path.isdir(path) or path.endswith("SKILL.md"):
        skill_file = path if path.endswith("SKILL.md") else os.path.join(path, "SKILL.md")
        if os.path.exists(skill_file):
            with open(skill_file, 'r', encoding='utf-8') as f:
                content = f.read()
            frontmatter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
            if frontmatter_match:
                try:
                    metadata = parse_yaml_simple(frontmatter_match.group(1))
                    name = metadata.get('name', os.path.basename(path))
                    desc = metadata.get("description", "Ferramenta do sistema.")
                    return f"`{name}`", desc
                except Exception:
                    pass
    
    name = os.path.basename(path).replace(".ts", "").replace(".py", "")
    return f"`{name}`", "Script utilitario do sistema."

def generate_agent_table(registry):
    table = "| Agente | Squad | Missao Principal |\n| --- | --- | --- |\n"
    for squad_name, squad_data in registry.get("squads", {}).items():
        for agent_id, agent_path in squad_data.get("agents", {}).items():
            name, mission = get_agent_info(agent_path)
            table += f"| **{name}** | {squad_name.capitalize()} | {mission} |\n"
    return table

def generate_skill_table(registry):
    table = "| Skill | Descricao |\n| --- | --- |\n"
    skills_set = set()
    global_skills = registry.get("global_components", { "skills": [] }).get("skills", [])
    for s in global_skills:
        skills_set.add(s)
        
    for squad in registry.get("squads", {}).values():
        for s in squad.get("skills", []):
            skills_set.add(s)
            
    for skill_path in sorted(list(skills_set)):
        name, desc = get_skill_info(skill_path)
        table += f"| {name} | {desc} |\n"
    return table



def update_file(file_path, marker_start, marker_end, new_content):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = re.compile(f"{marker_start}.*?{marker_end}", re.DOTALL)
    if not pattern.search(content):
        # Se nao achar o marcador, apenas ignora ou avisa
        return
        
    new_text = f"{marker_start}\n{new_content}{marker_end}"
    updated_content = pattern.sub(new_text, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)

if __name__ == "__main__":
    reg = load_registry()
    
    s_table = generate_squad_table(reg)
    a_table = generate_agent_table(reg)
    sk_table = generate_skill_table(reg)
    
    # Atualiza Help
    update_file(HELP_PATH, "<!-- SQUAD_TABLE_START -->", "<!-- SQUAD_TABLE_END -->", s_table)
    update_file(HELP_PATH, "<!-- AGENT_TABLE_START -->", "<!-- AGENT_TABLE_END -->", a_table)
    update_file(HELP_PATH, "<!-- SKILL_TABLE_START -->", "<!-- SKILL_TABLE_END -->", sk_table)
    
    # README pode ter as mesmas tabelas se os marcadores forem adicionados
    update_file(README_PATH, "<!-- SQUAD_TABLE_START -->", "<!-- SQUAD_TABLE_END -->", s_table)
    
    print("Documentacao sincronizada com sucesso!")
