import json

path = r"c:\Users\crist\Documents\Dev\ANTIGRAVITY\dekos-ag\registry.json"

with open(path, "r", encoding="utf-8") as f:
    data = json.load(f)

# A
if "skills" not in data["squads"]["ops"]:
    data["squads"]["ops"]["skills"] = []
data["squads"]["ops"]["skills"].extend([
    "skills/activity-logger/SKILL.md",
    "skills/workflow-optimizer/SKILL.md"
])

# B
for squad in ["prospection", "creative", "growth", "engineering", "performance", "success", "automations"]:
    if "skills" not in data["squads"][squad]:
        data["squads"][squad]["skills"] = []
    if "skills/activity-logger/SKILL.md" not in data["squads"][squad]["skills"]:
        data["squads"][squad]["skills"].append("skills/activity-logger/SKILL.md")

# D
data["squads"]["ops"]["memory"] = {
  "optimizer-memory": "squads/ops/memory/optimizer-memory.json"
}
data["squads"]["ops"]["logs"] = {
  "activity-log": "squads/ops/data/activity-log.json"
}

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
