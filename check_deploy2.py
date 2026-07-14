import re
c = open('E:/sky_lili/check_deploy.py', 'r').read()  # dummy, won't use

# Actually fetch and analyze
import urllib.request
url = 'https://lichangrong10.github.io/sky_home/assets/index-D1_1mbpG.js'
c = urllib.request.urlopen(url).read().decode('utf-8')

# Count occurrences
sky_count = c.count('/sky_home/')
bare_count = c.count('/16.jpg')

print(f'sky_home prefix occurrences: {sky_count}')
print(f'bare /16.jpg occurrences: {bare_count}')

if sky_count > 0:
    i = c.find('/sky_home/')
    print(f'First sky_home context: ...{c[max(0,i-30):i+60]}...')

# Find the REAL q function for images - search backwards from the image array
idx = c.find('q(`/16.jpg`)')
if idx >= 0:
    print(f'q(/16.jpg) found at {idx}')
    before = c[max(0,idx-200):idx]
    print(f'Before: ...{before[-200:]}...')
