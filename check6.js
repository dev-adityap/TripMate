const fs = require('fs');
const p = 'C:/Users/adity/OneDrive/Documents/PROJECTS/Tripmate/client/src/pages/MapPage.jsx';
const s = fs.readFileSync(p, 'utf8');
const bad = s.match(/size="\{[^}]+\}"/g);
console.log('malformed size props:', bad ? bad.length : 0);
const bad2 = s.match(/\[https:/g);
console.log('bracket urls:', bad2 ? bad2.length : 0);
