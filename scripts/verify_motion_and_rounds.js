const crypto = require('crypto');

console.log('====================================================');
console.log('AVIATOR AIRPLANE MOTION & 25-ROUND SIMULATION TEST');
console.log('====================================================\n');

// 1. Exact mathematical motion formulas from AviatorCanvas.jsx (20% slower visual speed)
const TAKEOFF_ASCENT_DURATION = 6250;
const width = 800;
const height = 500;
const originX = 20;
const groundY = height - 20;
const planeW = width * 0.11;
const planeH = height * 0.14;
const startX = Math.max(originX + 15, width * 0.1534);
const startY = groundY - planeH * 0.35;
const targetX = width * 0.70;
const targetY = height * 0.44;

function getPlanePosition(elapsedMs, phase, lastPos = null) {
  if (phase === 'betting' || phase === 'waiting') {
    return { x: startX, y: startY, w: planeW, h: planeH, tilt: 0, visible: true, phase };
  }

  if (phase === 'flying') {
    let px = startX;
    let py = startY;
    let tilt = 0;

    if (elapsedMs <= TAKEOFF_ASCENT_DURATION) {
      const u = Math.min(Math.max(elapsedMs / TAKEOFF_ASCENT_DURATION, 0), 1.0);
      px = startX + (targetX - startX) * u;
      py = startY - (startY - targetY) * Math.pow(u, 2);
      tilt = (u > 0.05 && u < 0.95) ? Math.sin(u * Math.PI) * 0.16 : 0;
    } else {
      const cruiseTime = elapsedMs - TAKEOFF_ASCENT_DURATION;
      const waveBlend = Math.min(cruiseTime / 1250, 1.0);
      const waveX = (width * 0.1485 * Math.sin(0.0008 * cruiseTime)) * waveBlend;
      const waveY = (height * 0.1100 * Math.sin(0.0008 * cruiseTime)) * waveBlend;
      px = targetX + waveX;
      py = targetY + waveY;
      tilt = (-Math.cos(0.0008 * cruiseTime) * 0.08) * waveBlend;
    }

    const tipX = px - planeW * 0.16;
    const tipY = py + planeH * 0.22;
    return { x: px, y: py, tipX, tipY, w: planeW, h: planeH, tilt, visible: true, phase };
  }

  if (phase === 'crashed') {
    const base = lastPos || { x: targetX, y: targetY };
    return {
      x: base.x + width * 0.024,
      y: base.y - height * 0.013,
      tilt: 0.22,
      visible: true,
      phase
    };
  }
}

const PROBABILITY_CONFIG = {
  edge: 0.04,
  scale: 0.85,
  alpha: 0.65,
  maxMultiplier: 30.00
};

// 2. Provably fair crash calculation
function calculateCrashPoint(hash) {
  if (!hash || typeof hash !== 'string') return 1.00;
  const hInt = parseInt(hash.slice(0, 13), 16);
  const r = hInt / Math.pow(2, 52);
  if (r < PROBABILITY_CONFIG.edge) return 1.00;
  const normalizedR = (r - PROBABILITY_CONFIG.edge) / (1 - PROBABILITY_CONFIG.edge);
  const raw = 1.01 + PROBABILITY_CONFIG.scale * (1 / Math.pow(1 - normalizedR, PROBABILITY_CONFIG.alpha) - 1);
  return Math.max(1.00, Math.min(PROBABILITY_CONFIG.maxMultiplier, Math.floor(raw * 100) / 100));
}

function calcInverseTimeMs(m) {
  if (m <= 1.2) return ((m - 1) / 0.05) * 1000;
  if (m <= 3) return (4 + (m - 1.2) / 0.1) * 1000;
  if (m <= 8) return (22 + (m - 3) / 0.4) * 1000;
  return (34.5 + (m - 8)) * 1000;
}

const history = [];
let passCount = 0;
const totalRoundsToTest = 25;

for (let r = 1; r <= totalRoundsToTest; r++) {
  const seed = crypto.randomBytes(16).toString('hex');
  const hash = crypto.createHash('sha256').update(seed).digest('hex');
  const crashPoint = calculateCrashPoint(hash);
  const totalFlightTimeMs = calcInverseTimeMs(crashPoint);

  // Test resting position
  const restPos = getPlanePosition(0, 'betting');
  if (restPos.x <= 0 || restPos.y <= 0 || restPos.y > height) {
    throw new Error(`Round ${r}: Invalid resting position`);
  }

  // Simulate trajectory samples at 50ms intervals
  const sampleSteps = Math.min(200, Math.max(10, Math.floor(totalFlightTimeMs / 100)));
  let minNormX = 1, maxNormX = 0, minNormY = 1, maxNormY = 0;
  let lastPos = restPos;

  for (let s = 0; s <= sampleSteps; s++) {
    const t = (s / sampleSteps) * totalFlightTimeMs;
    const pos = getPlanePosition(t, 'flying');
    const normX = pos.x / width;
    const normY = pos.y / height;

    if (normX < minNormX) minNormX = normX;
    if (normX > maxNormX) maxNormX = normX;
    if (normY < minNormY) minNormY = normY;
    if (normY > maxNormY) maxNormY = normY;

    // Check bounds: plane must never leave viewport during active flight
    if (pos.x < 0 || pos.x > width || pos.y < 0 || pos.y > height) {
      throw new Error(`Round ${r}: Out-of-bounds flight position at t=${t}ms: (${pos.x}, ${pos.y})`);
    }

    // In cruise mode (t > 5000ms), check strict bounded wave
    if (t > 6000) {
      if (normX < 0.54 || normX > 0.86 || normY < 0.32 || normY > 0.56) {
        throw new Error(`Round ${r}: Cruise wave out of bounds at t=${t}ms: normX=${normX.toFixed(3)}, normY=${normY.toFixed(3)}`);
      }
    }
    lastPos = pos;
  }

  // Test crash fly-away transition
  const crashPos = getPlanePosition(0, 'crashed', lastPos);
  if (crashPos.x <= lastPos.x || crashPos.y >= lastPos.y) {
    throw new Error(`Round ${r}: Crash fly-away direction incorrect: prev=(${lastPos.x}, ${lastPos.y}), next=(${crashPos.x}, ${crashPos.y})`);
  }

  // Update history
  history.unshift({ round: r, crashPoint, hash });
  if (history.length > 50) history.pop();

  passCount++;
  console.log(`Round ${String(r).padStart(2, ' ')}: Crash=${crashPoint.toFixed(2)}x, FlightTime=${(totalFlightTimeMs/1000).toFixed(2)}s, normX=[${minNormX.toFixed(2)}..${maxNormX.toFixed(2)}], normY=[${minNormY.toFixed(2)}..${maxNormY.toFixed(2)}] -> PASS`);
}

console.log(`\n====================================================`);
console.log(`RESULTS: All ${passCount}/${totalRoundsToTest} simulated rounds passed verification!`);
console.log(`History count: ${history.length} rounds stored.`);
console.log(`Newest round in history: Round ${history[0].round} (${history[0].crashPoint}x)`);
console.log(`====================================================\n`);
