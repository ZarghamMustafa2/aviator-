const fs = require('fs');
const path = require('path');

const srcDir = path.join('reference_data', 'assets');
const destDir = path.join('public', 'react-assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(f => {
  fs.copyFileSync(path.join(srcDir, f), path.join(destDir, f));
  console.log('Copied to public/react-assets:', f);
});
