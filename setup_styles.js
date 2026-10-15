const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'styles');
if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });

// Copy Aviator-GL8K1n5f.css
let avCss = fs.readFileSync('reference_data/assets/Aviator-GL8K1n5f.css', 'utf8');
fs.writeFileSync(path.join(srcDir, 'aviator.css'), avCss, 'utf8');

// Copy tpstudio-C4IiNa1K.css
let tpCss = fs.readFileSync('reference_data/assets/tpstudio-C4IiNa1K.css', 'utf8');
fs.writeFileSync(path.join(srcDir, 'tpstudio.css'), tpCss, 'utf8');

// Create fonts.css
const fontsCss = `@font-face {
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/rajdhani-700.woff2') format('woff2');
}
@font-face {
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/rajdhani-700.woff2') format('woff2');
}
@font-face {
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('/fonts/rajdhani-700.woff2') format('woff2');
}
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/RobotoCondensed-400.woff2') format('woff2');
}
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/RobotoCondensed-400.woff2') format('woff2');
}
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/RobotoCondensed-400.woff2') format('woff2');
}
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/RobotoCondensed-400.woff2') format('woff2');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Poppins-400.woff2') format('woff2');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/Poppins-500.woff2') format('woff2');
}
`;
fs.writeFileSync(path.join(srcDir, 'fonts.css'), fontsCss, 'utf8');

console.log('Styles prepared in src/styles/');
