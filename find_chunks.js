const fs = require('fs');
const js = fs.readFileSync('reference_data/assets/tpstudio-BPQXDLhP.js', 'utf8');

const matches = js.match(/react-assets\/[a-zA-Z0-9_\-\.]+\.(?:js|css)/g) || [];
const unique = Array.from(new Set(matches));
console.log('Total unique chunks found:', unique.length);
unique.forEach(u => console.log('Chunk:', u));
