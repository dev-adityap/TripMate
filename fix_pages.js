const fs = require('fs');
const dir = 'C:/Users/adity/OneDrive/Documents/PROJECTS/Tripmate/client/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
let total = 0;
for (const f of files) {
  const p = dir + '/' + f;
  let s = fs.readFileSync(p, 'utf8');
  let issues = 0;
  // className={${
  const re1 = /className=\{\$/g;
  s = s.replace(re1, 'className={`');
  issues += (s.match(re1) || []).length;
  // double paren fetch((
  const re2 = /fetch\(\(/g;
  s = s.replace(re2, 'fetch(');
  issues += (s.match(re2) || []).length;
  fs.writeFileSync(p, s);
  total += issues;
  console.log(f, 'issues:', issues);
}
console.log('total:', total);
