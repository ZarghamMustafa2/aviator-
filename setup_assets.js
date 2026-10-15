const fs = require('fs');
const path = require('path');

function copy(src, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('Copied', src, '->', dest, '(' + fs.statSync(dest).size + ' bytes)');
}

const map = [
  ['reference_data/plane.gif', 'public/assets/games/aviatorx-ref/plane.gif'],
  ['reference_data/loading-fan.svg', 'public/assets/games/aviatorx-ref/loading-fan.svg'],
  ['reference_data/crashedmusic.mp3', 'public/assets/games/aviatorx-ref/crashedmusic.mp3'],
  ['reference_data/newplane.png', 'public/assets/games/aviator-ref/newplane.png'],
  ['reference_data/aviatorexplosion.gif', 'public/assets/games/aviator-ref/aviatorexplosion.gif'],
  ['reference_data/MainN.webp', 'public/assets/games/aviator-ref/MainN.webp'],
  ['reference_data/RepeatN.webp', 'public/assets/games/aviator-ref/RepeatN.webp'],
  ['reference_data/aviatorbg.mp3', 'public/assets/games/aviator-ref/aviatorbg.mp3'],
  ['reference_data/RobotoCondensed-400-normal-latin-Cxzi1x1i.woff2', 'public/fonts/RobotoCondensed-400.woff2'],
  ['reference_data/rajdhani-700-BPDUZo87.woff2', 'public/fonts/rajdhani-700.woff2'],
  ['reference_data/Poppins-400-normal-latin-cpxAROuN.woff2', 'public/fonts/Poppins-400.woff2'],
  ['reference_data/Poppins-500-normal-latin-C8OXljZJ.woff2', 'public/fonts/Poppins-500.woff2']
];

map.forEach(([s, d]) => copy(s, d));
console.log('All static assets staged.');
