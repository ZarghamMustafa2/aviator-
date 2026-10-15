const http = require('http');
const express = require('express');
const { WebSocketServer, WebSocket } = require('ws');
const crypto = require('crypto');
const path = require('path');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Multiplier formula exact reference reproduction
function calcMultiplier(elapsedMs) {
  const t = elapsedMs / 1000;
  if (t <= 4) return 1 + 0.05 * t;
  if (t <= 22) return 1.2 + 0.1 * (t - 4);
  if (t <= 34.5) return 3 + 0.4 * (t - 22);
  return 8 + 1 * (t - 34.5);
}

function calcInverseTimeMs(m) {
  if (m <= 1.2) return ((m - 1) / 0.05) * 1000;
  if (m <= 3) return (4 + (m - 1.2) / 0.1) * 1000;
  if (m <= 8) return (22 + (m - 3) / 0.4) * 1000;
  return (34.5 + (m - 8)) * 1000;
}

// Simulated User & Wallet State
let userWallet = {
  id: 1,
  username: "Player777",
  balance: 50000,
  total_available: 50000,
  bet_presets: {
    stakes: [1000, 5000, 10000, 25000],
    plus: [1000, 5000, 10000, 25000]
  }
};

// Provably fair calculation algorithm
function calculateCrashPoint(hash) {
  const hInt = parseInt(hash.slice(0, 13), 16);
  const r = hInt / Math.pow(2, 52);
  if (r < 0.04) {
    return 1.00;
  }
  const raw = 0.97 / (1 - r);
  return Math.max(1.00, Math.min(30.00, Math.floor(raw * 100) / 100));
}

// Seed initial history of 50 rounds (newest first)
let historyRounds = [];
for (let i = 0; i < 50; i++) {
  const seed = crypto.randomBytes(32).toString('hex');
  const hash = crypto.createHash('sha256').update(seed).digest('hex');
  const cp = calculateCrashPoint(hash);
  historyRounds.push({
    round_id: 104500 - (i + 1),
    crash_point: cp,
    hash: hash,
    server_seed: seed,
    mode: 'auto',
    crashed_at: new Date(Date.now() - (i + 1) * 35000).toISOString()
  });
}

// Game State
let gameState = {
  roundId: 104500,
  phase: 'betting', // 'waiting' | 'betting' | 'flying' | 'crashed'
  multiplier: 1.00,
  countdown: 5,
  crashPoint: 2.15,
  serverSeed: '',
  commitHash: '',
  onlineNow: 247,
  flightStartTime: null,
  activeBets: [], // All live bets including user and bots
  userBets: { 1: null, 2: null }
};

function generateRoundHash() {
  gameState.roundId++;
  gameState.serverSeed = crypto.randomBytes(32).toString('hex');
  gameState.commitHash = crypto.createHash('sha256').update(gameState.serverSeed).digest('hex');
  gameState.crashPoint = calculateCrashPoint(gameState.commitHash);
}

generateRoundHash();

// WebSocket Server
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

const clients = new Set();

function broadcast(channel, event, data) {
  const payload = JSON.stringify({
    channel: channel,
    event: event,
    data: data
  });
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN && client.subscribedChannels?.has(channel)) {
      client.send(payload);
    }
  }
}

function broadcastAll(event, data) {
  broadcast('game:aviator', event, data);
  broadcast('game:aviator-classic', event, data);
}

wss.on('connection', (ws) => {
  clients.add(ws);
  ws.subscribedChannels = new Set(['game:aviator', 'game:aviator-classic']);

  ws.on('message', (msgStr) => {
    try {
      const msg = JSON.parse(msgStr);
      if (msg.action === 'auth') {
        // Auth accepted
      } else if (msg.action === 'subscribe') {
        if (Array.isArray(msg.channels)) {
          msg.channels.forEach(c => ws.subscribedChannels.add(c));
        }
      } else if (msg.action === 'ping') {
        ws.send(JSON.stringify({ action: 'pong' }));
      }
    } catch (e) {}
  });

  ws.on('close', () => {
    clients.delete(ws);
  });
});

// Bot names for authentic multiplayer simulation
const BOT_NAMES = [
  'alex', 'john', 'mike', 'sara', 'victor', 'david', 'emma', 'chris',
  'leo', 'daniel', 'robert', 'kevin', 'sam', 'tony', 'brian', 'jason',
  'kumar', 'singh', 'khan', 'sharma', 'patel', 'malik', 'ali', 'hassan'
];

function maskUser(name) {
  const t = String(name || '').trim();
  return t ? t.slice(0, 4) + '****' : '****';
}

function spawnBotBets() {
  const botCount = 20 + Math.floor(Math.random() * 25);
  const bets = [];
  for (let i = 0; i < botCount; i++) {
    const rawName = BOT_NAMES[Math.floor(Math.random() * BOT_NAMES.length)] + (Math.floor(Math.random() * 900) + 100);
    const stake = [50, 100, 200, 500, 1000, 2000, 5000][Math.floor(Math.random() * 7)];
    // Random desired cashout between 1.10 and 20.00
    const desiredCashout = +(1.10 + Math.random() * Math.random() * 8).toFixed(2);
    const bet = {
      id: 'bot-' + Date.now() + '-' + i,
      fid: 'bot-' + i,
      user: maskUser(rawName),
      rawUser: rawName,
      panel: 1,
      stake: stake,
      status: 'active',
      desiredCashout: desiredCashout,
      cashoutAt: null,
      profit: null,
      isBot: true
    };
    bets.push(bet);
  }
  return bets;
}

// Authoritative Game Loop
let loopInterval = null;

function formatActiveBetsForClient(bets) {
  return (bets || []).slice(0, 200).map(b => ({
    id: b.id,
    fid: b.fid,
    user: b.user,
    rawUser: b.rawUser,
    panel: b.panel,
    stake: b.stake,
    status: b.status,
    cashoutAt: b.cashoutAt,
    profit: b.profit,
    isBot: !!b.isBot
  }));
}

function startRoundCountdown() {
  gameState.phase = 'betting';
  gameState.countdown = 5;
  gameState.multiplier = 1.00;
  gameState.flightStartTime = null;
  gameState.userBets = { 1: null, 2: null };

  // Generate bot bets for the new round
  const allBots = spawnBotBets();
  const initialCount = Math.floor(allBots.length * 0.5);
  const initialBots = allBots.slice(0, initialCount);
  const remainingBots = allBots.slice(initialCount);

  gameState.activeBets = [...initialBots];

  broadcastAll('state', {
    phase: 'betting',
    countdown: gameState.countdown,
    roundId: gameState.roundId,
    hash: gameState.commitHash,
    commitHash: gameState.commitHash,
    onlineNow: gameState.onlineNow,
    history: historyRounds.map(r => r.crash_point),
    bets: formatActiveBetsForClient(gameState.activeBets)
  });

  // Incrementally stream remaining bot bets across the 5s countdown
  let botIdx = 0;
  const perTick = Math.ceil(remainingBots.length / 4);

  const countdownTimer = setInterval(() => {
    gameState.countdown--;
    if (gameState.countdown > 0) {
      const chunk = remainingBots.slice(botIdx, botIdx + perTick);
      botIdx += perTick;
      chunk.forEach(bot => {
        gameState.activeBets.unshift(bot);
        broadcastAll('bet', {
          fid: bot.fid,
          username: bot.rawUser,
          panel: bot.panel,
          stake: bot.stake
        });
      });

      broadcastAll('countdown', { countdown: gameState.countdown });
    } else {
      clearInterval(countdownTimer);
      // Flush any remaining bots
      while (botIdx < remainingBots.length) {
        const bot = remainingBots[botIdx++];
        gameState.activeBets.unshift(bot);
        broadcastAll('bet', {
          fid: bot.fid,
          username: bot.rawUser,
          panel: bot.panel,
          stake: bot.stake
        });
      }
      startFlightPhase();
    }
  }, 1000);
}

function startFlightPhase() {
  gameState.phase = 'flying';
  gameState.flightStartTime = Date.now();
  gameState.multiplier = 1.00;

  broadcastAll('state', {
    phase: 'flying',
    roundId: gameState.roundId,
    multiplier: 1.00,
    onlineNow: gameState.onlineNow,
    bets: formatActiveBetsForClient(gameState.activeBets)
  });

  // 30 FPS tick broadcast and check
  const tickTimer = setInterval(() => {
    if (gameState.phase !== 'flying') {
      clearInterval(tickTimer);
      return;
    }

    const elapsed = Date.now() - gameState.flightStartTime;
    const currentMult = +(calcMultiplier(elapsed)).toFixed(2);
    gameState.multiplier = currentMult;

    // Tick broadcast
    broadcastAll('tick', { multiplier: currentMult });

    // Check Auto-cashouts & Bot cashouts
    // 1. Bots
    gameState.activeBets.forEach(bet => {
      if (bet.isBot && bet.status === 'active' && currentMult >= bet.desiredCashout && bet.desiredCashout <= gameState.crashPoint) {
        bet.status = 'cashed';
        bet.cashoutAt = currentMult;
        bet.profit = Math.round(bet.stake * (currentMult - 1));
        broadcastAll('cashout', {
          fid: bet.fid,
          username: bet.rawUser,
          panel: bet.panel,
          multiplier: currentMult,
          profit: bet.profit,
          stake: bet.stake,
          fake: true
        });
      }
    });

    // 2. User auto cashouts
    [1, 2].forEach(p => {
      const ub = gameState.userBets[p];
      if (ub && ub.placed && !ub.cashedOut && ub.auto_cashout > 1.00 && currentMult >= ub.auto_cashout && currentMult <= gameState.crashPoint) {
        ub.cashedOut = true;
        ub.cashoutAt = currentMult;
        ub.profit = Math.round(ub.amount * (currentMult - 1));
        userWallet.balance += ub.amount + ub.profit;
        userWallet.total_available = userWallet.balance;

        broadcastAll('cashout', {
          fid: ub.id,
          username: userWallet.username,
          panel: p,
          multiplier: currentMult,
          profit: ub.profit,
          stake: ub.amount,
          fake: false
        });
      }
    });

    // Crash Check
    if (currentMult >= gameState.crashPoint) {
      clearInterval(tickTimer);
      triggerCrash();
    }
  }, 50);
}

function triggerCrash() {
  gameState.phase = 'crashed';
  gameState.multiplier = gameState.crashPoint;

  // Mark all remaining active bets as lost
  gameState.activeBets.forEach(b => {
    if (b.status === 'active') b.status = 'lost';
  });

  const record = {
    round_id: gameState.roundId,
    crash_point: gameState.crashPoint,
    hash: gameState.commitHash,
    server_seed: gameState.serverSeed,
    mode: 'auto',
    crashed_at: new Date().toISOString()
  };
  if (!historyRounds.some(r => r.round_id === record.round_id)) {
    historyRounds.unshift(record);
    if (historyRounds.length > 50) historyRounds.pop();
  }

  broadcastAll('crashed', {
    roundId: gameState.roundId,
    crashPoint: gameState.crashPoint,
    seed: gameState.serverSeed,
    hash: gameState.commitHash,
    fair: true,
    mode: 'auto'
  });

  // Prepare next round
  setTimeout(() => {
    gameState.phase = 'waiting';
    broadcastAll('state', { phase: 'waiting' });
    generateRoundHash();
    setTimeout(startRoundCountdown, 2000);
  }, 3000);
}

// Fluctuate online players slightly every 4 seconds
setInterval(() => {
  const delta = Math.floor(Math.random() * 15) - 7;
  let next = gameState.onlineNow + delta;
  if (next < 200) next = 200 + Math.floor(Math.random() * 20);
  if (next > 340) next = 340 - Math.floor(Math.random() * 20);
  gameState.onlineNow = next;
}, 4000);

// Start game loop
startRoundCountdown();

// REST Endpoints
app.get('/api/me', (req, res) => {
  res.json({
    user: userWallet
  });
});

app.get('/api/config', (req, res) => {
  res.json({ brand: 'bpro', skin: 'bpro', mode: 'light' });
});

app.get('/api/wallet', (req, res) => {
  res.json({
    total_available: userWallet.balance
  });
});

app.use((req, res, next) => {
  if (req.path.startsWith('/TeenPattiStudio') || req.path.startsWith('/Common/TeenPattiStudio')) {
    return res.sendFile(path.join(__dirname, '..', 'public', 'tps_ref.html'));
  }
  next();
});

app.get('/api/aviator/state', (req, res) => {
  res.json({
    phase: gameState.phase,
    multiplier: gameState.multiplier,
    countdown: gameState.countdown,
    roundId: gameState.roundId,
    hash: gameState.commitHash,
    commitHash: gameState.commitHash,
    seed: gameState.serverSeed,
    onlineNow: gameState.onlineNow,
    history: historyRounds.map(r => r.crash_point)
  });
});

app.get('/api/aviator-classic/state', (req, res) => {
  res.json({
    phase: gameState.phase,
    multiplier: gameState.multiplier,
    countdown: gameState.countdown,
    roundId: gameState.roundId,
    hash: gameState.commitHash,
    commitHash: gameState.commitHash,
    seed: gameState.serverSeed,
    onlineNow: gameState.onlineNow,
    history: historyRounds.map(r => r.crash_point)
  });
});

app.get('/api/aviator/live-bets', (req, res) => {
  res.json(gameState.activeBets.slice(0, 200));
});

app.get('/api/aviator-classic/live-bets', (req, res) => {
  res.json(gameState.activeBets.slice(0, 200));
});

app.get('/api/aviator/history', (req, res) => {
  res.json(historyRounds.slice(0, 50));
});

app.get('/api/aviator-classic/history', (req, res) => {
  res.json(historyRounds.slice(0, 50));
});

app.get('/api/aviator/verify', (req, res) => {
  const seed = req.query.seed || '';
  if (!seed) {
    return res.status(400).json({ error: 'Seed query parameter required' });
  }
  const hash = crypto.createHash('sha256').update(seed).digest('hex');
  const cp = calculateCrashPoint(hash);
  const hInt = parseInt(hash.slice(0, 13), 16);
  const r = hInt / Math.pow(2, 52);
  res.json({
    valid: true,
    seed: seed,
    hash: hash,
    crashPoint: cp,
    rFraction: r,
    instantCrash: r < 0.04,
    formula: 'r < 0.04 ? 1.00 : Math.max(1.00, Math.min(30.00, Math.floor((0.97 / (1 - r)) * 100) / 100))'
  });
});

app.get('/api/aviator/round/:roundId', (req, res) => {
  const targetId = Number(req.params.roundId);
  const round = historyRounds.find(r => Number(r.round_id) === targetId);
  if (!round) {
    return res.status(404).json({ error: 'Round not found in recorded history' });
  }
  const computedHash = crypto.createHash('sha256').update(round.server_seed).digest('hex');
  const computedCp = calculateCrashPoint(computedHash);
  res.json({
    round_id: round.round_id,
    crash_point: round.crash_point,
    server_seed: round.server_seed,
    hash: round.hash,
    verified: computedHash === round.hash && computedCp === round.crash_point,
    crashed_at: round.crashed_at
  });
});

app.post('/api/aviator/bet', (req, res) => {
  const { amount, panel, auto_cashout } = req.body;
  const stake = Number(amount) || 0;
  const p = Number(panel) === 2 ? 2 : 1;

  if (stake < 10) {
    return res.status(400).json({ error: 'Minimum bet is 10' });
  }
  if (stake > userWallet.balance) {
    return res.status(400).json({ error: 'Insufficient balance' });
  }
  if (gameState.phase !== 'betting') {
    return res.status(400).json({ error: 'Betting is closed for this round' });
  }

  userWallet.balance -= stake;
  userWallet.total_available = userWallet.balance;

  const betId = 'usr-' + Date.now() + '-' + p;
  const betRecord = {
    placed: true,
    id: betId,
    amount: stake,
    auto_cashout: Number(auto_cashout) || 0,
    cashedOut: false,
    cashoutAt: 0,
    profit: 0
  };
  gameState.userBets[p] = betRecord;

  // Add to active bets table
  gameState.activeBets.unshift({
    id: betId,
    fid: betId,
    user: maskUser(userWallet.username),
    rawUser: userWallet.username,
    panel: p,
    stake: stake,
    status: 'active',
    desiredCashout: Number(auto_cashout) || 0,
    cashoutAt: null,
    profit: null,
    isBot: false
  });

  broadcastAll('bet', {
    fid: betId,
    username: userWallet.username,
    panel: p,
    stake: stake
  });

  res.json({ data: { betId } });
});

app.post('/api/aviator/cashout', (req, res) => {
  const p = Number(req.body.panel) === 2 ? 2 : 1;
  const ub = gameState.userBets[p];

  if (!ub || !ub.placed || ub.cashedOut) {
    return res.status(400).json({ error: 'No active bet to cashout' });
  }
  if (gameState.phase !== 'flying') {
    return res.status(400).json({ error: 'Plane is not flying' });
  }

  const currentMult = gameState.multiplier;
  ub.cashedOut = true;
  ub.cashoutAt = currentMult;
  ub.profit = Math.round(ub.amount * (currentMult - 1));
  userWallet.balance += ub.amount + ub.profit;
  userWallet.total_available = userWallet.balance;

  // Update in activeBets list
  const inList = gameState.activeBets.find(b => b.id === ub.id);
  if (inList) {
    inList.status = 'cashed';
    inList.cashoutAt = currentMult;
    inList.profit = ub.profit;
  }

  broadcastAll('cashout', {
    fid: ub.id,
    username: userWallet.username,
    panel: p,
    multiplier: currentMult,
    profit: ub.profit,
    stake: ub.amount,
    fake: false
  });

  res.json({
    data: {
      multiplier: currentMult,
      profit: ub.profit
    }
  });
});

app.post('/api/aviator/cancel', (req, res) => {
  const p = Number(req.body.panel) === 2 ? 2 : 1;
  const ub = gameState.userBets[p];

  if (!ub || !ub.placed || ub.cashedOut) {
    return res.status(400).json({ error: 'No active bet' });
  }
  if (gameState.phase !== 'betting') {
    return res.status(400).json({ error: 'Cannot cancel after takeoff' });
  }

  userWallet.balance += ub.amount;
  userWallet.total_available = userWallet.balance;
  gameState.userBets[p] = null;
  gameState.activeBets = gameState.activeBets.filter(b => b.id !== ub.id);

  res.json({ success: true });
});

// Serve static frontend in production
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, res) => {
  const distIndex = path.join(__dirname, '..', 'dist', 'index.html');
  if (require('fs').existsSync(distIndex)) {
    res.sendFile(distIndex);
  } else {
    res.send('Backend running. Frontend dist not built yet.');
  }
});

server.listen(PORT, () => {
  console.log(`Authoritative Aviator Game Server running on port ${PORT}`);
});
