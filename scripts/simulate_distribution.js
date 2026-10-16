const crypto = require('crypto');

const PROBABILITY_CONFIG = {
  edge: 0.04,
  scale: 0.85,
  alpha: 0.65,
  maxMultiplier: 30.00
};

function calculateCrashPoint(hash) {
  if (!hash || typeof hash !== 'string') return 1.00;
  const hInt = parseInt(hash.slice(0, 13), 16);
  const r = hInt / Math.pow(2, 52);
  if (r < PROBABILITY_CONFIG.edge) {
    return 1.00;
  }
  const normalizedR = (r - PROBABILITY_CONFIG.edge) / (1 - PROBABILITY_CONFIG.edge);
  const raw = 1.01 + PROBABILITY_CONFIG.scale * (1 / Math.pow(1 - normalizedR, PROBABILITY_CONFIG.alpha) - 1);
  return Math.max(1.00, Math.min(PROBABILITY_CONFIG.maxMultiplier, Math.floor(raw * 100) / 100));
}

function runSimulation(numRounds = 100000) {
  console.log(`Starting simulation of ${numRounds.toLocaleString()} independent rounds...`);
  
  let below2x = 0;
  let between2and5x = 0;
  let above5x = 0;
  let above10x = 0;
  let instant1x = 0;
  let maxMultiplierObserved = 0;
  let minMultiplierObserved = 999;

  const first10Rounds = [];

  for (let i = 0; i < numRounds; i++) {
    const seed = crypto.randomBytes(32).toString('hex');
    const hash = crypto.createHash('sha256').update(seed).digest('hex');
    const cp = calculateCrashPoint(hash);

    if (i < 15) {
      first10Rounds.push({ round: i + 1, seed: seed.slice(0, 12) + '...', hash: hash.slice(0, 12) + '...', cp });
    }

    if (cp < minMultiplierObserved) minMultiplierObserved = cp;
    if (cp > maxMultiplierObserved) maxMultiplierObserved = cp;

    if (cp === 1.00) instant1x++;
    if (cp < 2.00) below2x++;
    else if (cp <= 5.00) between2and5x++;
    else above5x++;

    if (cp > 10.00) above10x++;
  }

  // Theoretical calculations
  const theoreticalBelow2 = (PROBABILITY_CONFIG.edge + (1 - PROBABILITY_CONFIG.edge) * (1 - Math.pow(1 + (2.00 - 1.01) / PROBABILITY_CONFIG.scale, -1 / PROBABILITY_CONFIG.alpha))) * 100;
  const theoreticalAbove5 = ((1 - PROBABILITY_CONFIG.edge) * Math.pow(1 + (5.00 - 1.01) / PROBABILITY_CONFIG.scale, -1 / PROBABILITY_CONFIG.alpha)) * 100;
  const theoretical2to5 = 100 - theoreticalBelow2 - theoreticalAbove5;
  const theoreticalAbove10 = ((1 - PROBABILITY_CONFIG.edge) * Math.pow(1 + (10.00 - 1.01) / PROBABILITY_CONFIG.scale, -1 / PROBABILITY_CONFIG.alpha)) * 100;

  console.log('\n--- SIMULATION RESULTS (N = ' + numRounds + ') ---');
  console.log(`Below 2x:   ${(below2x / numRounds * 100).toFixed(2)}% (Theoretical: ${theoreticalBelow2.toFixed(2)}%)`);
  console.log(`2x - 5x:    ${(between2and5x / numRounds * 100).toFixed(2)}% (Theoretical: ${theoretical2to5.toFixed(2)}%)`);
  console.log(`Above 5x:   ${(above5x / numRounds * 100).toFixed(2)}% (Theoretical: ${theoreticalAbove5.toFixed(2)}%)`);
  console.log(`Above 10x:  ${(above10x / numRounds * 100).toFixed(2)}% (Theoretical: ${theoreticalAbove10.toFixed(2)}%)`);
  console.log(`Instant 1x: ${(instant1x / numRounds * 100).toFixed(2)}% (Theoretical edge: ${(PROBABILITY_CONFIG.edge * 100).toFixed(2)}%)`);
  console.log(`Min Multiplier: ${minMultiplierObserved.toFixed(2)}x, Max Multiplier: ${maxMultiplierObserved.toFixed(2)}x`);

  console.log('\n--- SAMPLE 15 CONSECUTIVE ROUNDS (Checking for non-cyclical behavior) ---');
  first10Rounds.forEach(r => {
    console.log(`Round ${String(r.round).padStart(2)}: Multiplier = ${r.cp.toFixed(2)}x (Hash: ${r.hash})`);
  });

  return {
    below2xPct: (below2x / numRounds * 100).toFixed(2),
    between2and5xPct: (between2and5x / numRounds * 100).toFixed(2),
    above5xPct: (above5x / numRounds * 100).toFixed(2),
    above10xPct: (above10x / numRounds * 100).toFixed(2)
  };
}

runSimulation(100000);
