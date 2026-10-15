const fs = require('fs');
const js = fs.readFileSync('reference_data/assets/tpstudio-BPQXDLhP.js', 'utf8');

const needle = 'function rd(';
const idx = js.indexOf(needle);
if (idx !== -1) {
  console.log('function rd:');
  console.log(js.substring(idx, idx + 800));
} else {
  console.log('Searching for rd definition:');
  const m = js.match(/(?:const|var|let)\s+rd\s*=[^;]+;/g);
  console.log(m);
}
