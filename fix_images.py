import re, sys

filepath = sys.argv[1]
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

def replacer(m):
    prefix = m.group(1) or ""
    path = m.group(2)
    if prefix == "src=":
        return 'src={img("' + path + '")}'
    else:
        return 'img("' + path + '")'

content = re.sub(r'(src=)?"(/(?:\d+|jllll|jianglin|\u5fae\u4fe1[^"]*?)\.(?:jpg|png))"', replacer, content)

if 'import { img }' not in content:
    m = re.search(r"^import .+", content, re.MULTILINE)
    if m:
        eol = content.index("\n", m.end())
        content = content[:eol+1] + 'import { img } from "../utils";\n' + content[eol+1:]

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed:", filepath)
