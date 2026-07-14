import urllib.request, re
html = urllib.request.urlopen("https://lichangrong10.github.io/sky_home/").read().decode("utf-8")
m = re.search(r"src=\"([^\"]+\.js)\"", html)
js_url = "https://lichangrong10.github.io" + m.group(1)
js = urllib.request.urlopen(js_url).read().decode("utf-8")
i = js.find("/sky_home/")
print("sky_home context:", js[max(0,i-60):i+80])
# also check the q function
for m in re.finditer(r"function\s+(\w+)\s*\(e\)\s*\{\s*return\s*`/sky_home/", js):
    print("Found img function:", m.group())
    break
else:
    print("No function returning /sky_home/ found via regex")
    # search for q(
    for m in re.finditer(r"function\s+q\s*\(", js):
        ctx = js[m.start():m.end()+100]
        print("q function:", ctx)
        break
