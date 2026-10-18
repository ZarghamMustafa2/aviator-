const assert = require('assert');

console.log('========================================================================');
console.log('  AVIATOR — CONSTANT LINEAR MULTIPLIER GROWTH AUDIT');
console.log('========================================================================\n');

const CONSTANT_GROWTH_RATE = 0.05; // 0.05x per second

function calcMultiplier(elapsedMs) {
  const t = Math.max(0, elapsedMs) / 1000;
  return 1.00 + t * CONSTANT_GROWTH_RATE;
}

function calcInverseTimeMs(m) {
  const num = Math.max(1.00, Number(m) || 1.00);
  return ((num - 1.00) / CONSTANT_GROWTH_RATE) * 1000;
}

// 1. Audit Rate Across 0 to 120 seconds
console.log('--- 1. Growth Rate Verification (dm/dt) ---');
const sampleTimes = [0, 1, 2, 3, 4, 5, 10, 20, 30, 50, 100, 200];
let prevT = 0;
let prevM = 1.00;

for (const t of sampleTimes) {
  const ms = t * 1000;
  const m = calcMultiplier(ms);
  const formatted = m.toFixed(2);
  let rate = 'N/A';
  if (t > 0) {
    const dt = t - prevT;
    const dm = m - prevM;
    const actualRate = dm / dt;
    assert.strictEqual(Math.round(actualRate * 10000) / 10000, CONSTANT_GROWTH_RATE, `Rate changed at t=${t}!`);
    rate = `${actualRate.toFixed(4)}x / sec`;
  }
  console.log(`t = ${String(t).padStart(3)}s (${String(ms).padStart(6)}ms) | Multiplier = ${formatted}x | Rate = ${rate}`);
  prevT = t;
  prevM = m;
}

// 2. Audit Monotonicity and Non-Decreasing Property over 10,000 increments
console.log('\n--- 2. Monotonic Non-Decreasing Property Audit (10,000 steps) ---');
let lastVal = 0;
for (let ms = 0; ms <= 100000; ms += 10) {
  const m = Math.floor(calcMultiplier(ms) * 100 + 1e-9) / 100;
  assert(m >= lastVal, `Multiplier decreased at ${ms}ms: ${m} < ${lastVal}`);
  lastVal = m;
}
console.log('PASS: Multiplier is strictly non-decreasing across all 10,000 discrete steps.');

// 3. Audit Mathematical Invertibility: calcInverseTimeMs(calcMultiplier(t)) === t
console.log('\n--- 3. Perfect Invertibility Audit ---');
for (let t = 0; t <= 300; t += 5) {
  const ms = t * 1000;
  const m = calcMultiplier(ms);
  const recoveredMs = calcInverseTimeMs(m);
  assert(Math.abs(recoveredMs - ms) < 1e-6, `Inversion failed for t=${t}: expected ${ms}, got ${recoveredMs}`);
}
console.log('PASS: calcInverseTimeMs is 100% invertible across all flight durations.');

console.log('\nAll linear multiplier tests PASSED.\n');
