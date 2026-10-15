const fs = require('fs');
const js = fs.readFileSync('reference_data/assets/tpstudio-BPQXDLhP.js', 'utf8');

const expMatch = js.match(/export\s*\{([^}]+)\}/);
if (expMatch) {
  const parts = expMatch[1].split(',').map(s => s.trim());
  const iPart = parts.find(p => p.endsWith(' as i') || p === 'i');
  console.log('Export as i:', iPart);
  if (iPart) {
    const orig = iPart.split(' as ')[0].trim();
    console.log('Original variable:', orig);
    // Find where orig is defined
    const defMatch = js.match(new RegExp('(?:const|let|var)\\s+' + orig + '\\s*=[^;]+;', 'g'));
    console.log('Definition:', defMatch);
    // Or if it's assigned in a function
    const assignMatches = js.match(new RegExp(orig + '\\s*=\\s*[^;]+;', 'g')) || [];
    assignMatches.slice(0, 5).forEach(a => console.log('Assign:', a));
  }
}
