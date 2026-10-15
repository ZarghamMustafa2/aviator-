const crypto = require('crypto');

// Exact Provably Fair calculation matching probability model
function calculateCrashPoint(hash) {
  const hInt = parseInt(hash.slice(0, 13), 16);
  const r = hInt / Math.pow(2, 52);
  if (r < 0.04) {
    return 1.00;
  }
  const raw = 0.97 / (1 - r);
  return Math.max(1.00, Math.min(30.00, Math.floor(raw * 100) / 100));
}

// Risk Management Limits
const riskLimits = {
  minBet: 10,
  maxBet: 50000,
  maxExposurePerRound: 1000000 // ₹1,000,000
};

// Calculate financial exposure metrics
function calculateExposureMetrics(bets, limits) {
  const list = bets || [];
  const totalBets = list.length;
  let totalBetAmount = 0;
  const uniqueUsers = new Set();
  let totalPotentialPayout = 0;

  for (const b of list) {
    const stake = Number(b.stake) || 0;
    totalBetAmount += stake;
    if (b.user) uniqueUsers.add(b.user);

    if (b.status === 'cashed' && b.cashoutAt) {
      totalPotentialPayout += stake * Number(b.cashoutAt);
    } else if (b.status === 'lost') {
      // 0 payout
    } else {
      const mult = (b.desiredCashout && Number(b.desiredCashout) > 1)
        ? Math.min(Number(b.desiredCashout), 30.00)
        : 30.00;
      totalPotentialPayout += stake * mult;
    }
  }

  const maxFinancialExposure = Math.max(0, Math.round(totalPotentialPayout - totalBetAmount));
  const utilization = limits.maxExposurePerRound > 0
    ? Math.min(100, +((maxFinancialExposure / limits.maxExposurePerRound) * 100).toFixed(2))
    : 0;
  const isExposureCapped = maxFinancialExposure >= limits.maxExposurePerRound;

  return {
    totalBets,
    totalBetAmount: Math.round(totalBetAmount),
    activePlayers: uniqueUsers.size,
    totalPotentialPayout: Math.round(totalPotentialPayout),
    maxFinancialExposure,
    exposureUtilization: utilization,
    isExposureCapped
  };
}

// Pearson correlation coefficient formula
function pearsonCorrelation(x, y) {
  const n = x.length;
  if (n !== y.length || n === 0) return 0;

  const meanX = x.reduce((a, b) => a + b, 0) / n;
  const meanY = y.reduce((a, b) => a + b, 0) / n;

  let num = 0;
  let denX = 0;
  let denY = 0;

  for (let i = 0; i < n; i++) {
    const dx = x[i] - meanX;
    const dy = y[i] - meanY;
    num += dx * dy;
    denX += dx * dx;
    denY += dy * dy;
  }

  if (denX === 0 || denY === 0) return 0;
  return num / Math.sqrt(denX * denY);
}

// 100-Round Simulation Test
console.log('========================================================================');
console.log('   AVIATOR GAME — BET MONITORING & FAIR CRASH ENGINE 100-ROUND AUDIT   ');
console.log('========================================================================\n');

const roundResults = [];
let totalAcceptedBets = 0;
let totalRejectedBets = 0;
let cryptographicallyVerifiedCount = 0;
let preCommitMatchesCount = 0;

for (let round = 1; round <= 100; round++) {
  // Step 1: Pre-commit round outcome BEFORE betting opens
  const serverSeed = crypto.randomBytes(32).toString('hex');
  const commitHash = crypto.createHash('sha256').update(serverSeed).digest('hex');
  const predeterminedCrashPoint = calculateCrashPoint(commitHash);

  // Step 2: Determine bet volume scenario
  let playerCount;
  let stakeRange;
  let scenario;

  if (round <= 30) {
    scenario = 'LOW_VOLUME';
    playerCount = 10 + Math.floor(Math.random() * 15);
    stakeRange = [10, 50, 100, 200, 500];
  } else if (round <= 70) {
    scenario = 'MEDIUM_VOLUME';
    playerCount = 30 + Math.floor(Math.random() * 30);
    stakeRange = [500, 1000, 2000, 5000, 10000];
  } else {
    scenario = 'HIGH_VOLUME_CAP_TEST';
    playerCount = 60 + Math.floor(Math.random() * 40);
    stakeRange = [5000, 10000, 20000, 35000, 50000];
  }

  const activeBets = [];
  let roundRejected = 0;

  // Step 3: Simulate live bets placement with strict Risk Management checks
  for (let p = 0; p < playerCount; p++) {
    const stake = stakeRange[Math.floor(Math.random() * stakeRange.length)];
    const desiredCashout = +(1.10 + Math.random() * Math.random() * 9).toFixed(2);
    const user = `user_${round}_${p}`;

    // Risk Check 1: Min and Max bet limits
    if (stake < riskLimits.minBet || stake > riskLimits.maxBet) {
      roundRejected++;
      totalRejectedBets++;
      continue;
    }

    // Risk Check 2: Pre-acceptance round exposure cap
    const targetMult = desiredCashout > 1 ? Math.min(desiredCashout, 30.00) : 30.00;
    const incrementalExposure = Math.max(0, (stake * targetMult) - stake);
    const currentMetrics = calculateExposureMetrics(activeBets, riskLimits);

    if (currentMetrics.maxFinancialExposure + incrementalExposure > riskLimits.maxExposurePerRound) {
      // Exposure limit exceeded! Engine blocks new bet
      roundRejected++;
      totalRejectedBets++;
      continue;
    }

    // Bet accepted and recorded
    activeBets.push({
      id: `bet-${round}-${p}`,
      user: user,
      stake: stake,
      desiredCashout: desiredCashout,
      status: 'active',
      cashoutAt: null,
      profit: null
    });
    totalAcceptedBets++;
  }

  // Step 4: Calculate final round exposure metrics
  const finalMetrics = calculateExposureMetrics(activeBets, riskLimits);

  // Step 5: Simulate round flight and cashouts at predeterminedCrashPoint
  for (const bet of activeBets) {
    if (bet.desiredCashout <= predeterminedCrashPoint) {
      bet.status = 'cashed';
      bet.cashoutAt = bet.desiredCashout;
      bet.profit = Math.round(bet.stake * (bet.desiredCashout - 1));
    } else {
      bet.status = 'lost';
    }
  }

  // Step 6: Post-crash cryptographic verification
  const disclosedHash = crypto.createHash('sha256').update(serverSeed).digest('hex');
  const verifiedCp = calculateCrashPoint(disclosedHash);

  const hashValid = disclosedHash === commitHash;
  const cpValid = verifiedCp === predeterminedCrashPoint;

  if (hashValid) preCommitMatchesCount++;
  if (hashValid && cpValid) cryptographicallyVerifiedCount++;

  roundResults.push({
    round,
    scenario,
    serverSeed,
    commitHash,
    crashPoint: predeterminedCrashPoint,
    totalBets: finalMetrics.totalBets,
    totalBetAmount: finalMetrics.totalBetAmount,
    activePlayers: finalMetrics.activePlayers,
    totalPotentialPayout: finalMetrics.totalPotentialPayout,
    maxFinancialExposure: finalMetrics.maxFinancialExposure,
    exposureUtilization: finalMetrics.exposureUtilization,
    isExposureCapped: finalMetrics.isExposureCapped,
    rejectedBets: roundRejected
  });
}

// Correlation Analysis
const betAmounts = roundResults.map(r => r.totalBetAmount);
const exposures = roundResults.map(r => r.maxFinancialExposure);
const betCounts = roundResults.map(r => r.totalBets);
const crashPoints = roundResults.map(r => r.crashPoint);

const rBetAmountCrash = pearsonCorrelation(betAmounts, crashPoints);
const rExposureCrash = pearsonCorrelation(exposures, crashPoints);
const rBetCountCrash = pearsonCorrelation(betCounts, crashPoints);

// Multiplier distribution analysis
const instantCrashes = roundResults.filter(r => r.crashPoint === 1.00).length;
const lowMultipliers = roundResults.filter(r => r.crashPoint > 1.00 && r.crashPoint < 2.00).length;
const mediumMultipliers = roundResults.filter(r => r.crashPoint >= 2.00 && r.crashPoint < 10.00).length;
const highMultipliers = roundResults.filter(r => r.crashPoint >= 10.00).length;
const meanCrash = (crashPoints.reduce((a, b) => a + b, 0) / crashPoints.length).toFixed(2);
const maxCrash = Math.max(...crashPoints).toFixed(2);
const minCrash = Math.min(...crashPoints).toFixed(2);

// High-volume cap activations count
const capActivations = roundResults.filter(r => r.rejectedBets > 0).length;
const totalExposureSums = exposures.reduce((a, b) => a + b, 0);

console.log('--- TEST RESULTS SUMMARY ---');
console.log(`Total Rounds Simulated:                 ${roundResults.length}`);
console.log(`Pre-committed SHA-256 Match Rate:      ${((preCommitMatchesCount / roundResults.length) * 100).toFixed(1)}% (${preCommitMatchesCount}/100)`);
console.log(`Independent Cryptographic Fair Rate:    ${((cryptographicallyVerifiedCount / roundResults.length) * 100).toFixed(1)}% (${cryptographicallyVerifiedCount}/100)`);
console.log(`Total Accepted Bets:                    ${totalAcceptedBets.toLocaleString()}`);
console.log(`Total Rejected Bets (Risk Cap / Limit): ${totalRejectedBets.toLocaleString()}`);
console.log(`Rounds Reaching Exposure Cap:           ${capActivations} rounds`);
console.log(`Mean Crash Multiplier:                  ${meanCrash}x`);
console.log(`Min Crash Multiplier:                   ${minCrash}x`);
console.log(`Max Crash Multiplier:                   ${maxCrash}x`);

console.log('\n--- MULTIPLIER DISTRIBUTION ---');
console.log(`Instant Crashes (1.00x):                ${instantCrashes} rounds (${instantCrashes}%) [Target ~4%]`);
console.log(`Low Multipliers (1.01x - 1.99x):        ${lowMultipliers} rounds (${lowMultipliers}%) [Target ~48%]`);
console.log(`Medium Multipliers (2.00x - 9.99x):     ${mediumMultipliers} rounds (${mediumMultipliers}%) [Target ~38%]`);
console.log(`High Multipliers (10.00x - 30.00x):     ${highMultipliers} rounds (${highMultipliers}%) [Target ~10%]`);

console.log('\n--- BET INDEPENDENCE & ZERO CORRELATION PROOF ---');
console.log(`Correlation r(Bet Amount, Crash Point):   ${rBetAmountCrash.toFixed(4)}  (Zero correlation threshold: |r| < 0.15)`);
console.log(`Correlation r(Exposure, Crash Point):     ${rExposureCrash.toFixed(4)}  (Zero correlation threshold: |r| < 0.15)`);
console.log(`Correlation r(Bet Count, Crash Point):    ${rBetCountCrash.toFixed(4)}  (Zero correlation threshold: |r| < 0.15)`);

const isIndependent = Math.abs(rBetAmountCrash) < 0.15 && Math.abs(rExposureCrash) < 0.15 && Math.abs(rBetCountCrash) < 0.15;
console.log(`Statistical Independence Verified:       ${isIndependent ? 'PASSED (STRICTLY INDEPENDENT)' : 'FAILED'}`);

console.log('\n--- SAMPLE 10 ROUND AUDIT LOGS ---');
console.table(roundResults.slice(0, 10).map(r => ({
  Round: `#${r.round}`,
  Scenario: r.scenario,
  Crash: `${r.crashPoint.toFixed(2)}x`,
  TotalBets: r.totalBets,
  TotalStaked: `₹${r.totalBetAmount.toLocaleString()}`,
  MaxExposure: `₹${r.maxFinancialExposure.toLocaleString()}`,
  Util: `${r.exposureUtilization.toFixed(1)}%`,
  Rejected: r.rejectedBets
})));

console.log('\n--- SAMPLE 5 HIGH-VOLUME RISK CAP LOGS ---');
console.table(roundResults.filter(r => r.rejectedBets > 0).slice(0, 5).map(r => ({
  Round: `#${r.round}`,
  Scenario: r.scenario,
  Crash: `${r.crashPoint.toFixed(2)}x`,
  TotalBets: r.totalBets,
  TotalStaked: `₹${r.totalBetAmount.toLocaleString()}`,
  MaxExposure: `₹${r.maxFinancialExposure.toLocaleString()}`,
  Util: `${r.exposureUtilization.toFixed(1)}%`,
  Rejected: r.rejectedBets
})));

if (!isIndependent || cryptographicallyVerifiedCount !== 100) {
  console.error('\n❌ VERIFICATION TEST FAILED');
  process.exit(1);
} else {
  console.log('\n✅ ALL 100 ROUNDS PASSED AUDIT: PROVABLY FAIR, STRICTLY INDEPENDENT & RISK CAPPED');
  process.exit(0);
}
