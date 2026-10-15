const fs = require('fs');
const js = fs.readFileSync('reference_data/assets/Aviator-_8Beb6PJ.js', 'utf8');
const lines = js.split('\n');
console.log('Total lines in Aviator bundle:', lines.length);

// Static asset paths
const assetRegex = /(?:["'`])([^"'`]+\.(?:png|jpg|jpeg|svg|gif|mp3|wav|ogg|webp|woff2?))(?=["'`])/gi;
const assets = new Set();
let match;
while ((match = assetRegex.exec(js)) !== null) {
  assets.add(match[1]);
}
console.log('--- Static Assets Found ---');
assets.forEach(a => console.log('Asset:', a));

// Look for audio URLs
const audioRegex = /(?:["'`])([^"'`]+\.(?:mp3|wav|ogg))(?=["'`])/gi;
const audios = new Set();
while ((match = audioRegex.exec(js)) !== null) {
  audios.add(match[1]);
}
console.log('--- Audios Found ---');
audios.forEach(a => console.log('Audio:', a));

// Look for canvas / drawing
console.log('--- Key variables and functions ---');
const functionDefs = js.match(/function\s+([a-zA-Z0-9_$]+)\s*\(/g) || [];
console.log('Function count:', functionDefs.length);

// Search for state values (e.g. bet, fly, crash, waiting)
const stateKeywords = ['waiting', 'flying', 'crashed', 'bets_open', 'countdown', 'cashout', 'multiplier', 'round'];
stateKeywords.forEach(k => {
  const count = (js.match(new RegExp(k, 'gi')) || []).length;
  console.log(`Keyword "${k}": ${count} occurrences`);
});
