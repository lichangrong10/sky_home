import urllib.request, re
url = 'https://lichangrong10.github.io/sky_home/assets/index-D1_1mbpG.js'
c = urllib.request.urlopen(url).read().decode('utf-8')
idx = c.find('function q(')
if idx >= 0:
    print('Found q function:', c[idx:idx+120])
elif '/sky_home/' in c:
    print('sky_home prefix found')
    i = c.find('/sky_home/')
    print('context:', c[max(0,i-20):i+40])
else:
    i = c.find('/16.jpg')
    if i >= 0:
        print('bare /16.jpg found - OLD build!')
        print('context:', c[max(0,i-30):i+30])
    else:
        print('Neither found - checking for minified patterns')
        for m in re.finditer(r'(?:/16\.jpg|img\()', c):
            ctx = c[max(0,m.start()-40):m.end()+40]
            print(f'Found: {ctx}')
