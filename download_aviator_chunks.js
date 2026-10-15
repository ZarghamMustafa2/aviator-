const https = require('https');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join('reference_data', 'assets');

const chunks = [
  'react-assets/Aviator-_8Beb6PJ.js',
  'react-assets/Aviator-GL8K1n5f.css',
  'react-assets/AviatorClassic-CxfxYpOF.js',
  'react-assets/BpStageLayout-BZ76c_Vy.js',
  'react-assets/CasinoGameShell-3bO_oJD-.js',
  'react-assets/haptics-BxKo09sP.js',
  'react-assets/useGameSync-CjqJODQ6.js',
  'react-assets/fakeViewers-B0irVvJk.js',
  'react-assets/useBetPresets-D3FQLB7x.js'
];

async function download(rel) {
  const url = `https://www.bpro.life/${rel}`;
  const filename = path.basename(rel);
  const dest = path.join(ASSETS_DIR, filename);
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode !== 200) {
        console.error('Failed', rel, res.statusCode);
        return resolve();
      }
      const s = fs.createWriteStream(dest);
      res.pipe(s);
      s.on('finish', () => {
        s.close();
        console.log('Saved', filename, fs.statSync(dest).size, 'bytes');
        resolve();
      });
    }).on('error', e => {
      console.error(rel, e.message);
      resolve();
    });
  });
}

(async () => {
  for (const c of chunks) await download(c);
})();
