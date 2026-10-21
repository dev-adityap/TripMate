import re
p = r'C:\Users\adity\OneDrive\Documents\PROJECTS\Tripmate\client\src\pages\SettingsPage.jsx'
s = open(p).read()

# Fix size="{N}" -> size={N}
s = re.sub(r'size="\{(\d+)\}"', r'size={\1}', s)

# Fix enabled="{...}" -> enabled={...}
s = re.sub(r'enabled="\{(.+?)\}"', r'enabled={\1}', s)

# Fix onChange="{() => ...}" -> onChange={() => ...}
s = re.sub(r'onChange="\{(.+?)\}"', r'onChange={\1}', s)

# Fix avatar URL brackets (the markdown link style)
old_url = "`[https://ui-avatars.com/api/?name=$](https://ui-avatars.com/api/?name=$){encodeURIComponent(displayName)}&background=f59e0b&color=09090b&bold=true&size=256`"
new_url = "`https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=f59e0b&color=09090b&bold=true&size=256`"
s = s.replace(old_url, new_url)

# Fix onError src URL
old_onerror = "e.currentTarget.src = `[https://ui-avatars.com/api/?name=$](https://ui-avatars.com/api/?name=$){encodeURIComponent(\n                    displayName\n                  )}&background=f59e0b&color=09090b&bold=true&size=256`;"
new_onerror = "e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=f59e0b&color=09090b&bold=true&size=256`;"
s = s.replace(old_onerror, new_onerror)

# Fix background image URL brackets
old_bg = "bg-[url('[https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop)')]"
new_bg = "bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')]"
s = s.replace(old_bg, new_bg)

open(p, 'w').write(s)
print("done")
