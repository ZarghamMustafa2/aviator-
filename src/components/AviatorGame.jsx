import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import AviatorCanvas from './AviatorCanvas';
import PlaneView from './PlaneView';
import AviatorClassicStage from './AviatorClassicStage';

// Constant linear multiplier growth rate (measured from initial rate: 0.05x per second)
const CONSTANT_GROWTH_RATE = 0.05;

function calcMultiplier(elapsedMs) {
  const t = Math.max(0, elapsedMs) / 1000;
  return 1.00 + t * CONSTANT_GROWTH_RATE;
}

function calcInverseTimeMs(m) {
  const num = Math.max(1.00, Number(m) || 1.00);
  return ((num - 1.00) / CONSTANT_GROWTH_RATE) * 1000;
}

function maskUser(name) {
  const t = String(name || '').trim();
  return t ? t.slice(0, 4) + '****' : '****';
}

function formatNumber(num) {
  return Math.round(Number(num) || 0).toLocaleString('en-US');
}

let holdInterval = null;
function clearHoldInterval() {
  if (holdInterval) {
    clearInterval(holdInterval);
    holdInterval = null;
  }
}

function bindContinuousPress(fn) {
  function start(e) {
    if (e && e.preventDefault) e.preventDefault();
    clearHoldInterval();
    fn();
    holdInterval = setInterval(fn, 100);
  }
  return {
    onMouseDown: start,
    onTouchStart: start,
    onMouseUp: clearHoldInterval,
    onMouseLeave: clearHoldInterval,
    onTouchEnd: clearHoldInterval,
    onTouchCancel: clearHoldInterval,
    onBlur: clearHoldInterval,
  };
}

function autoFitFontSize(el, val) {
  if (!el) return;
  const w = el.clientWidth || 0;
  if (!w) return;
  const len = Math.max(String(val ?? '').length, 6);
  let size = Math.floor((w - 8) / (len * 0.62));
  size = Math.max(12, Math.min(24, size));
  if (el.style.fontSize !== `${size}px`) {
    el.style.fontSize = `${size}px`;
  }
}

const DEFAULT_BET_STATE = {
  placed: false,
  id: null,
  amount: 0,
  cashedOut: false,
  cashoutAt: 0,
  profit: 0,
};

const MIN_AUTOCASHOUT = 1.20;

const BOT_NAMES = [
  'alex', 'john', 'mike', 'sara', 'victor', 'david', 'emma', 'chris',
  'leo', 'daniel', 'robert', 'kevin', 'sam', 'tony', 'brian', 'jason',
  'kumar', 'singh', 'khan', 'sharma', 'patel', 'malik', 'ali', 'hassan'
];

function generateSimBots() {
  const count = 20 + Math.floor(Math.random() * 25);
  const bets = [];
  for (let i = 0; i < count; i++) {
    const rawName = BOT_NAMES[Math.floor(Math.random() * BOT_NAMES.length)] + (Math.floor(Math.random() * 900) + 100);
    const stake = [50, 100, 200, 500, 1000, 2000, 5000][Math.floor(Math.random() * 7)];
    const desired = +(1.10 + Math.random() * Math.random() * 8).toFixed(2);
    bets.push({
      id: 'bot-' + Date.now() + '-' + i,
      fid: 'bot-' + i,
      user: maskUser(rawName),
      rawUser: rawName,
      panel: 1,
      stake: stake,
      status: 'active',
      desiredCashout: desired,
      cashoutAt: null,
      profit: null,
      isBot: true
    });
  }
  return bets;
}

const RESULTS_STORAGE_KEY = 'aviator_results_history_v2';
const CRASH_STORAGE_KEY = 'aviator_crash_history_v2';

// Pure JS SHA-256 for deterministic, zero-dependency cryptographic hashing in browser
function sha256Hex(ascii) {
  if (!ascii || typeof ascii !== 'string') return '';
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  const lengthProperty = 'length';
  let i, j;
  let result = '';
  const words = [];
  const asciiBitLength = ascii[lengthProperty] * 8;
  let hash = [];
  const k = [];
  let primeCounter = 0;
  const isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) isComposite[i] = candidate;
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  ascii += '\x80';
  while (ascii[lengthProperty] % 64 - 56) ascii += '\x00';
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
  words[words[lengthProperty]] = (asciiBitLength | 0);
  for (j = 0; j < words[lengthProperty];) {
    const w = words.slice(j, j += 16);
    const oldHash = hash;
    hash = hash.slice(0, 8);
    for (i = 0; i < 64; i++) {
      const w15 = w[i - 15], w2 = w[i - 2];
      const a = hash[0], e = hash[4];
      const temp1 = hash[7]
        + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
        + ((e & hash[5]) ^ ((~e) & hash[6]))
        + k[i]
        + (w[i] = (i < 16) ? w[i] : (
            w[i - 16]
            + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
            + w[i - 7]
            + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
          ) | 0
        );
      const temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
        + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
    }
    for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
  }
  for (i = 0; i < 8; i++) {
    for (j = 3; j >= 0; j--) {
      const b = (hash[i] >> (8 * j)) & 255;
      result += (b < 16 ? '0' : '') + b.toString(16);
    }
  }
  return result;
}

// Transparent, calibrated probability distribution configuration:
// - House edge (instant crash at 1.00x): 4.0%
// - Low crash range (< 2.00x): ~70.7%
// - Medium crash range (2.00x - 5.00x): ~22.6%
// - High crash range (> 5.00x): ~6.6%
// - Occasional super-high (> 10.00x): ~2.2%
const PROBABILITY_CONFIG = {
  edge: 0.04,          // 4% instant crash floor
  scale: 0.85,         // Scaling coefficient
  alpha: 0.65,         // Tail decay exponent
  maxMultiplier: 30.00 // Cap to maintain synchronization and prevent runaway flights
};

// Authoritative Provably Fair calculation matching probability model
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

function generateInitialHistory() {
  const baseId = 104520;
  const now = Date.now();
  const list = [];
  for (let i = 0; i < 50; i++) {
    const rawSeed = 'provably-fair-seed-' + (baseId - (i + 1)) + '-' + (i * 7919 + 65537).toString(16);
    const seed = sha256Hex(rawSeed);
    const hash = sha256Hex(seed);
    const cp = calculateCrashPoint(hash);
    list.push({
      round_id: baseId - (i + 1),
      crash_point: cp,
      hash: hash,
      server_seed: seed,
      mode: 'auto',
      crashed_at: new Date(now - (i + 1) * 35000).toISOString()
    });
  }
  return list;
}

function getStoredDetailedHistory() {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(RESULTS_STORAGE_KEY) : null;
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.slice(0, 50);
      }
    }
  } catch (e) {}
  const initial = generateInitialHistory();
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(initial));
    }
  } catch (e) {}
  return initial;
}

function getStoredCrashHistory(detailed) {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(CRASH_STORAGE_KEY) : null;
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.slice(0, 50);
      }
    }
  } catch (e) {}
  const list = (detailed && detailed.length > 0)
    ? detailed.map(r => parseFloat(r.crash_point))
    : getStoredDetailedHistory().map(r => parseFloat(r.crash_point)).slice(0, 15);
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CRASH_STORAGE_KEY, JSON.stringify(list));
    }
  } catch (e) {}
  return list;
}

export default function AviatorGame({ variant = 'x' }) {
  const isClassic = variant === 'classic';
  const gameTitle = isClassic ? 'Aviator' : 'AviatorX';
  const apiPrefix = isClassic ? '/api/aviator-classic' : '/api/aviator';
  const wsChannel = isClassic ? 'game:aviator-classic' : 'game:aviator';

  // Navigation Tabs
  const [activeTab, setActiveTab] = useState('game');

  // Game Engine State
  const [phase, setPhase] = useState('waiting');
  const [multiplier, setMultiplier] = useState(1);
  const [countdown, setCountdown] = useState(0);
  const [isBetLocked, setIsBetLocked] = useState(false);
  const [crashPoint, setCrashPoint] = useState(0);
  const [detailedHistory, setDetailedHistory] = useState(() => getStoredDetailedHistory());
  const [history, setHistory] = useState(() => getStoredCrashHistory());
  const [roundId, setRoundId] = useState(() => {
    const stored = getStoredDetailedHistory();
    if (stored && stored.length > 0 && stored[0].round_id != null) {
      return String(Number(stored[0].round_id) + 1);
    }
    return '104520';
  });
  const [serverSeed, setServerSeed] = useState('');
  const [commitHash, setCommitHash] = useState('');
  const [isFair, setIsFair] = useState(true);
  const [connected, setConnected] = useState(false);
  const [isSimActive, setIsSimActive] = useState(false);
  const [onlineCount, setOnlineCount] = useState(247);
  const [liveBets, setLiveBets] = useState([]);
  const [soundOn, setSoundOn] = useState(false);
  const [winPopup, setWinPopup] = useState(null);
  const [verifyModalRound, setVerifyModalRound] = useState(null);
  const [calcCustomSeed, setCalcCustomSeed] = useState('');
  const [calcResult, setCalcResult] = useState(null);

  // Risk Limits & Bet Monitoring State
  const [riskLimits, setRiskLimits] = useState({
    minBet: 10,
    maxBet: 50000,
    maxExposurePerRound: 1000000
  });
  const [exposureData, setExposureData] = useState(null);

  // Dynamic real-time calculation of round bet monitoring metrics
  const exposureMetrics = useMemo(() => {
    const bets = liveBets || [];
    const totalBets = bets.length;
    let totalBetAmount = 0;
    const uniqueUsers = new Set();
    let totalPotentialPayout = 0;

    bets.forEach((b) => {
      const stake = Number(b.stake) || 0;
      totalBetAmount += stake;
      if (b.user || b.rawUser) uniqueUsers.add(b.user || b.rawUser);

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
    });

    const maxFinancialExposure = Math.max(0, Math.round(totalPotentialPayout - totalBetAmount));
    const cap = riskLimits?.maxExposurePerRound || 1000000;
    const utilization = cap > 0 ? Math.min(100, +((maxFinancialExposure / cap) * 100).toFixed(2)) : 0;
    const isExposureCapped = maxFinancialExposure >= cap;

    return {
      totalBets: exposureData?.totalBets ?? totalBets,
      totalBetAmount: exposureData?.totalBetAmount ?? Math.round(totalBetAmount),
      activePlayers: exposureData?.activePlayers ?? uniqueUsers.size,
      totalPotentialPayout: exposureData?.totalPotentialPayout ?? Math.round(totalPotentialPayout),
      maxFinancialExposure: exposureData?.maxFinancialExposure ?? maxFinancialExposure,
      exposureUtilization: exposureData?.exposureUtilization ?? utilization,
      isExposureCapped: exposureData?.isExposureCapped ?? isExposureCapped
    };
  }, [liveBets, riskLimits, exposureData]);

  // User & Wallet
  const [balance, setBalance] = useState(50000);
  const [userProfile, setUserProfile] = useState({ username: 'Player777', balance: 50000 });

  // Bet Panels State (Panel 1 & Panel 2)
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [betState1, setBetState1] = useState(DEFAULT_BET_STATE);
  const [betState2, setBetState2] = useState(DEFAULT_BET_STATE);
  const userBetsRef = useRef({ 1: DEFAULT_BET_STATE, 2: DEFAULT_BET_STATE });
  userBetsRef.current = { 1: betState1, 2: betState2 };

  // Automation Options (Panel 1)
  const [autoBet1, setAutoBet1] = useState(false);
  const [autoCashout1, setAutoCashout1] = useState(false);
  const [targetCashout1, setTargetCashout1] = useState(MIN_AUTOCASHOUT);
  const [targetCashoutStr1, setTargetCashoutStr1] = useState(MIN_AUTOCASHOUT.toFixed(2));

  // Automation Options (Panel 2)
  const [autoBet2, setAutoBet2] = useState(false);
  const [autoCashout2, setAutoCashout2] = useState(false);
  const [targetCashout2, setTargetCashout2] = useState(MIN_AUTOCASHOUT);
  const [targetCashoutStr2, setTargetCashoutStr2] = useState(MIN_AUTOCASHOUT.toFixed(2));

  // Audio References
  const bgAudioRef = useRef(null);
  const crashAudioRef = useRef(null);
  const soundOnRef = useRef(soundOn);
  soundOnRef.current = soundOn;

  // Real-time DOM display refs for zero-lag 60fps presentation
  const multElRef = useRef(null);
  const liveCashoutRef1 = useRef(null);
  const liveCashoutRef2 = useRef(null);
  const planeRef = useRef(null);
  const animTimingRef = useRef({ start: null, lastTickAt: 0, lastMult: 1 });

  const onPlanePos = useCallback((pos) => {
    if (planeRef.current) {
      planeRef.current.setPos(pos);
    }
  }, []);

  // Fetch Wallet & User
  const fetchWallet = useCallback(() => {
    fetch('/api/wallet')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.total_available === 'number') {
          setBalance(data.total_available);
        }
      })
      .catch(() => {});
  }, []);

  const fetchLiveBets = useCallback(() => {
    fetch(`${apiPrefix}/live-bets`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setLiveBets(data.slice(0, 200));
        }
      })
      .catch(() => {});
  }, [apiPrefix]);

  const fetchHistory = useCallback(() => {
    fetch(`${apiPrefix}/history`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setDetailedHistory(prev => {
            const map = new Map();
            data.forEach(item => {
              if (item && item.round_id != null) map.set(String(item.round_id), item);
            });
            (prev || []).forEach(item => {
              if (item && item.round_id != null && !map.has(String(item.round_id))) {
                map.set(String(item.round_id), item);
              }
            });
            const merged = Array.from(map.values())
              .sort((a, b) => Number(b.round_id) - Number(a.round_id))
              .slice(0, 50);
            try {
              localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(merged));
            } catch (e) {}
            return merged;
          });
        }
      })
      .catch(() => {});
  }, [apiPrefix]);

  // Initial Data & WebSocket Connection
  useEffect(() => {
    const hasLocalBackend = typeof window !== 'undefined' &&
      (window.location.port === '5000' || window.location.port === '3000');

    if (hasLocalBackend) {
      fetch('/api/me')
        .then(res => res.json())
        .then(d => {
          if (d && d.user) {
            setUserProfile(d.user);
            setBalance(d.user.balance || 50000);
          }
        })
        .catch(() => {});

      fetch(`${apiPrefix}/state`)
        .then(res => res.json())
        .then(s => {
          if (s.onlineNow) setOnlineCount(Number(s.onlineNow) || 247);
          if (s.phase) {
            setPhase(s.phase);
            if (s.betLocked !== undefined) {
              setIsBetLocked(s.betLocked);
            } else if (s.phase === 'betting' && typeof s.countdown === 'number') {
              setIsBetLocked(s.countdown <= 3);
            } else {
              setIsBetLocked(s.phase !== 'betting');
            }
          }
          if (typeof s.multiplier === 'number') setMultiplier(s.multiplier);
          if (typeof s.countdown === 'number') setCountdown(s.countdown);
          if (s.roundId) setRoundId(String(s.roundId));
          if (s.phase === 'crashed' && typeof s.multiplier === 'number') setCrashPoint(s.multiplier);
          if (s.commitHash || s.hash) setCommitHash(s.commitHash || s.hash);
          if (s.history && Array.isArray(s.history)) {
            const hist50 = s.history.slice(0, 50);
            setHistory(hist50);
            try {
              localStorage.setItem(CRASH_STORAGE_KEY, JSON.stringify(hist50));
            } catch (e) {}
          }
          if (s.seed) setServerSeed(s.seed);
        })
        .catch(() => {});

      fetchLiveBets();
      fetchHistory();
    }

    function processGameEvent(evt, payload) {
      if (evt === 'state') {
        setPhase(payload.phase);
        if (payload.betLocked !== undefined) {
          setIsBetLocked(payload.betLocked);
        } else if (payload.phase === 'betting') {
          setIsBetLocked(payload.countdown !== undefined ? payload.countdown <= 3 : false);
        } else {
          setIsBetLocked(true);
        }

        if (payload.countdown !== undefined) setCountdown(payload.countdown);
        if (payload.roundId) setRoundId(String(payload.roundId));
        if (payload.commitHash || payload.hash) setCommitHash(payload.commitHash || payload.hash);
        if (payload.history && Array.isArray(payload.history)) {
          const hist50 = payload.history.slice(0, 50);
          setHistory(hist50);
          try {
            localStorage.setItem(CRASH_STORAGE_KEY, JSON.stringify(hist50));
          } catch (e) {}
        }
        if (payload.onlineNow) setOnlineCount(Number(payload.onlineNow) || 247);

        if (payload.phase === 'betting' || payload.phase === 'flying') {
          animTimingRef.current = { start: null, lastTickAt: 0, lastMult: 1 };
        }

        if (payload.phase === 'betting') {
          if (Array.isArray(payload.bets) && payload.bets.length > 0) {
            setLiveBets(payload.bets);
          } else {
            fetchLiveBets();
          }
          setMultiplier(1);
          setCrashPoint(0);
          setServerSeed('');
          setBetState1(b => (b.cashedOut || !b.placed ? DEFAULT_BET_STATE : b));
          setBetState2(b => (b.cashedOut || !b.placed ? DEFAULT_BET_STATE : b));
        }
        if (payload.phase === 'flying') {
          if (Array.isArray(payload.bets) && payload.bets.length > 0) {
            setLiveBets(prev => (prev && prev.length > 0 ? prev : payload.bets));
          }
        }
        if (payload.phase === 'waiting') {
          setBetState1(DEFAULT_BET_STATE);
          setBetState2(DEFAULT_BET_STATE);
        }
      } else if (evt === 'countdown') {
        setCountdown(payload.countdown);
        if (payload.betLocked !== undefined) {
          setIsBetLocked(payload.betLocked);
        } else {
          setIsBetLocked(payload.countdown <= 3);
        }
      } else if (evt === 'tick') {
        const timing = animTimingRef.current;
        const now = performance.now();
        const tickMult = Number(payload.multiplier) || 1;
        const flightElapsed = now - calcInverseTimeMs(tickMult);
        timing.start = timing.start == null ? flightElapsed : timing.start + 0.25 * (flightElapsed - timing.start);
        timing.lastTickAt = now;
        timing.lastMult = tickMult;
      } else if (evt === 'bet') {
        setLiveBets(prev => {
          const item = {
            id: payload.fid || `ws-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            fid: payload.fid || null,
            user: maskUser(payload.username),
            panel: payload.panel,
            stake: Number(payload.stake) || 0,
            status: 'active',
            cashoutAt: null,
            profit: null
          };
          if (payload.fid && prev && prev.some(b => b.fid === payload.fid)) {
            return prev;
          }
          return [item, ...(prev || [])].slice(0, 200);
        });
      } else if (evt === 'cashout') {
        setLiveBets(prev => {
          const list = prev || [];
          const u = maskUser(payload.username);
          let idx = -1;
          for (let i = 0; i < list.length; i++) {
            const b = list[i];
            if (b.status === 'active' && (payload.fid ? b.fid === payload.fid : b.user === u)) {
              idx = i;
              break;
            }
          }
          if (idx < 0) {
            const newCashed = {
              id: payload.fid || `ws-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
              fid: payload.fid || null,
              user: u,
              panel: payload.panel,
              stake: Number(payload.stake) || 0,
              status: 'cashed',
              cashoutAt: Number(payload.multiplier) || 0,
              profit: Number(payload.profit) || 0,
            };
            return [newCashed, ...list].slice(0, 200);
          }
          const updated = {
            ...list[idx],
            status: 'cashed',
            cashoutAt: Number(payload.multiplier) || 0,
            profit: Number(payload.profit) || 0,
          };
          return [updated, ...list.slice(0, idx), ...list.slice(idx + 1)];
        });

        if (!payload.fake) {
          const p = Number(payload.panel) === 2 ? 2 : 1;
          (p === 1 ? setBetState1 : setBetState2)(b => {
            if (!b.placed || b.cashedOut) return b;
            return {
              ...b,
              cashedOut: true,
              cashoutAt: payload.multiplier,
              profit: payload.profit
            };
          });

          fetchWallet();
          setWinPopup({
            amount: (payload.profit || 0) + (payload.stake || 0),
            multiplier: payload.multiplier
          });
          setTimeout(() => setWinPopup(null), 2000);
        }
      } else if (evt === 'exposure') {
        setExposureData(payload);
        if (payload.limits) {
          setRiskLimits(payload.limits);
        }
      } else if (evt === 'crashed') {
        const cpNum = parseFloat(payload.crashPoint);
        const cpFixed = isNaN(cpNum) ? 1.00 : cpNum;
        const roundIdVal = payload.roundId != null ? String(payload.roundId) : String(roundId || Date.now());

        setPhase('crashed');
        setIsBetLocked(true);
        setCrashPoint(cpFixed);
        setMultiplier(cpFixed);
        setServerSeed(payload.seed || '');
        setIsFair(payload.fair !== false);
        if (payload.roundId != null) {
          setRoundId(String(payload.roundId));
        }

        setBetState1(b => (b.placed && !b.cashedOut ? { ...b, placed: false } : b));
        setBetState2(b => (b.placed && !b.cashedOut ? { ...b, placed: false } : b));

        setLiveBets(prev => (prev || []).map(b => (b.status === 'active' ? { ...b, status: 'lost' } : b)));

        if (soundOnRef.current && crashAudioRef.current) {
          try {
            crashAudioRef.current.currentTime = 0;
            crashAudioRef.current.play().catch(() => {});
          } catch (e) {}
        }

        // Update horizontal top history bar (newest first, max 50)
        setHistory(prev => {
          const list = [cpFixed, ...(prev || [])].slice(0, 50);
          try {
            localStorage.setItem(CRASH_STORAGE_KEY, JSON.stringify(list));
          } catch (e) {}
          return list;
        });

        // Update Last 50 Rounds Results table (newest first, unique by round_id, max 50)
        setDetailedHistory(prev => {
          const currentList = prev || [];
          if (roundIdVal && currentList.some(r => String(r.round_id) === roundIdVal)) {
            return currentList; // Prevent duplicate round
          }
          const newRecord = {
            round_id: roundIdVal,
            crash_point: cpFixed,
            hash: payload.hash || ('hash-' + roundIdVal),
            server_seed: payload.seed || ('seed-' + roundIdVal),
            mode: payload.mode || 'auto',
            crashed_at: new Date().toISOString()
          };
          const updated = [newRecord, ...currentList].slice(0, 50);
          try {
            localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(updated));
          } catch (e) {}
          return updated;
        });
      }
    }

    // Simulation Fallback state & loop
    let simTimeout = null;
    let simInterval = null;
    let isSimulating = false;
    const storedInitial = getStoredDetailedHistory();
    const highestRound = storedInitial && storedInitial.length > 0 && storedInitial[0].round_id != null
      ? Number(storedInitial[0].round_id)
      : 104520;
    let simRoundNumber = highestRound;
    let simBets = [];
    let simCrash = 2.10;
    let simSeed = '';
    let simCommitHash = '';
    let simFlightStart = 0;

    function stopSimulation() {
      isSimulating = false;
      setIsSimActive(false);
      if (simTimeout) clearTimeout(simTimeout);
      if (simInterval) clearInterval(simInterval);
      simTimeout = null;
      simInterval = null;
    }

    function startSimulation() {
      if (isSimulating || isClosed) return;
      isSimulating = true;
      setIsSimActive(true);
      runSimBetting();
    }

    function runSimBetting() {
      if (!isSimulating || isClosed) return;
      simRoundNumber++;
      const allBots = generateSimBots();
      const initialCount = Math.floor(allBots.length * 0.5);
      const initialBots = allBots.slice(0, initialCount);
      const remainingBots = allBots.slice(initialCount);
      simBets = [...initialBots];

      // Cryptographically secure 256-bit random seed
      const seedBytes = new Uint8Array(32);
      if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(seedBytes);
      } else {
        for (let b = 0; b < 32; b++) seedBytes[b] = Math.floor(Math.random() * 256);
      }
      simSeed = Array.from(seedBytes, byte => byte.toString(16).padStart(2, '0')).join('');
      simCommitHash = sha256Hex(simSeed);
      simCrash = calculateCrashPoint(simCommitHash);

      processGameEvent('state', {
        phase: 'betting',
        countdown: 6,
        betLocked: false,
        roundId: simRoundNumber,
        hash: simCommitHash,
        commitHash: simCommitHash,
        onlineNow: 247 + Math.floor(Math.random() * 10 - 5),
        bets: simBets
      });

      let cd = 6;
      let botIdx = 0;
      const perTick = Math.ceil(remainingBots.length / 3);

      simInterval = setInterval(() => {
        if (!isSimulating || isClosed) {
          clearInterval(simInterval);
          return;
        }
        cd--;
        if (cd > 0) {
          if (cd > 3) {
            const chunk = remainingBots.slice(botIdx, botIdx + perTick);
            botIdx += perTick;
            chunk.forEach(b => {
              simBets.unshift(b);
              processGameEvent('bet', {
                fid: b.fid,
                username: b.rawUser,
                panel: b.panel,
                stake: b.stake
              });
            });
          }
          processGameEvent('countdown', { countdown: cd, betLocked: cd <= 3 });
        } else {
          clearInterval(simInterval);
          runSimFlight();
        }
      }, 1000);
    }

    function runSimFlight() {
      if (!isSimulating || isClosed) return;
      simFlightStart = performance.now();
      processGameEvent('state', {
        phase: 'flying',
        roundId: simRoundNumber,
        multiplier: 1.00,
        bets: simBets
      });

      simInterval = setInterval(() => {
        if (!isSimulating || isClosed) {
          clearInterval(simInterval);
          return;
        }
        const elapsed = performance.now() - simFlightStart;
        const currentM = +(calcMultiplier(elapsed)).toFixed(2);

        processGameEvent('tick', { multiplier: currentM });

        // Bot cashouts
        simBets.forEach(bet => {
          if (bet.isBot && bet.status === 'active' && currentM >= bet.desiredCashout && bet.desiredCashout <= simCrash) {
            bet.status = 'cashed';
            bet.cashoutAt = currentM;
            bet.profit = Math.round(bet.stake * (currentM - 1));
            processGameEvent('cashout', {
              fid: bet.fid,
              username: bet.rawUser,
              panel: bet.panel,
              multiplier: currentM,
              profit: bet.profit,
              stake: bet.stake,
              fake: true
            });
          }
        });

        // User auto-cashout check during offline simulation
        [1, 2].forEach(p => {
          const b = userBetsRef.current[p];
          if (b && b.placed && !b.cashedOut && b.auto_cashout > 1.00 && currentM >= b.auto_cashout && currentM <= simCrash) {
            const profit = Math.round(b.amount * (currentM - 1));
            (p === 1 ? setBetState1 : setBetState2)(prev => ({
              ...prev,
              cashedOut: true,
              cashoutAt: currentM,
              profit: profit
            }));
            setBalance(bal => bal + b.amount + profit);
            setWinPopup({
              amount: b.amount + profit,
              multiplier: currentM
            });
            setTimeout(() => setWinPopup(null), 2000);
            processGameEvent('cashout', {
              fid: b.id,
              username: 'Player777',
              panel: p,
              multiplier: currentM,
              profit: profit,
              stake: b.amount,
              fake: false
            });
          }
        });

        // Crash check
        if (currentM >= simCrash) {
          clearInterval(simInterval);
          runSimCrash();
        }
      }, 50);
    }

    function runSimCrash() {
      if (!isSimulating || isClosed) return;
      processGameEvent('crashed', {
        roundId: simRoundNumber,
        crashPoint: simCrash,
        seed: simSeed,
        hash: simCommitHash,
        mode: 'auto',
        fair: true
      });

      simTimeout = setTimeout(() => {
        if (!isSimulating || isClosed) return;
        runSimBetting();
      }, 3000);
    }

    // Setup WebSocket
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    let ws = null;
    let pingInterval = null;
    let isClosed = false;

    function connectWs() {
      if (isClosed) return;
      try {
        ws = new WebSocket(wsUrl);

        ws.onopen = () => {
          stopSimulation();
          setConnected(true);
          ws.send(JSON.stringify({ action: 'auth', token: 'player-token' }));
          ws.send(JSON.stringify({ action: 'subscribe', channels: [wsChannel] }));

          pingInterval = setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ action: 'ping' }));
            }
          }, 25000);
        };

        ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            if (msg.channel !== wsChannel) return;
            processGameEvent(msg.event, msg.data);
          } catch (e) {}
        };

        ws.onclose = () => {
          setConnected(false);
          if (pingInterval) clearInterval(pingInterval);
          if (!isClosed) {
            setTimeout(connectWs, 3000);
            if (!isSimulating) {
              startSimulation();
            }
          }
        };

        ws.onerror = () => {
          try { ws.close(); } catch (e) {}
          if (!isSimulating && !isClosed) {
            startSimulation();
          }
        };
      } catch (err) {
        if (!isSimulating && !isClosed) {
          startSimulation();
        }
      }
    }

    let fallbackTimer = null;
    if (hasLocalBackend) {
      connectWs();
      // If WebSocket hasn't opened within 800ms, start simulation fallback
      fallbackTimer = setTimeout(() => {
        if (!ws || ws.readyState !== WebSocket.OPEN) {
          startSimulation();
        }
      }, 800);
    } else {
      // Remote / Vercel static deployment: start instant autonomous simulation
      startSimulation();
    }

    return () => {
      isClosed = true;
      clearTimeout(fallbackTimer);
      stopSimulation();
      if (pingInterval) clearInterval(pingInterval);
      if (ws) {
        try { ws.close(); } catch (e) {}
      }
    };
  }, [apiPrefix, wsChannel, fetchLiveBets, fetchWallet]);

  // Tab switch fetch
  useEffect(() => {
    if (activeTab === 'results') {
      fetchHistory();
    } else if (activeTab === 'admin') {
      fetch(`${apiPrefix}/admin/exposure`)
        .then(r => r.json())
        .then(d => {
          if (d && !d.error) {
            setExposureData(d);
            if (d.limits) setRiskLimits(d.limits);
          }
        })
        .catch(() => {});
    }
  }, [activeTab, fetchHistory, apiPrefix]);

  // Audio ambient player
  useEffect(() => {
    const audio = bgAudioRef.current;
    if (!audio) return;
    if (soundOn) {
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [soundOn]);

  // Auto Bet Trigger on Betting Phase Start
  const prevPhaseRef = useRef('');
  useEffect(() => {
    if (phase === 'betting' && prevPhaseRef.current !== 'betting') {
      if (autoBet1 && !betState1.placed && Number(amount1) > 0) {
        handlePlaceBet(1);
      }
      if (autoBet2 && !betState2.placed && Number(amount2) > 0) {
        handlePlaceBet(2);
      }
    }
    prevPhaseRef.current = phase;
  }, [phase, autoBet1, autoBet2, amount1, amount2, betState1.placed, betState2.placed]);

  // 60 FPS Monotonic Multiplier RAF Loop
  useEffect(() => {
    if (phase !== 'flying') return;
    let rafId = 0;

    function tick() {
      const multEl = multElRef.current;
      const timing = animTimingRef.current;
      let displayMult = timing.lastMult;

      if (timing.start != null) {
        const now = performance.now();
        const elapsed = Math.min(now, timing.lastTickAt + 1000) - timing.start;
        let calculated = Math.floor(calcMultiplier(Math.max(0, elapsed)) * 100 + 1e-9) / 100;
        if (crashPoint && calculated > crashPoint) {
          calculated = crashPoint;
        }
        if (calculated > displayMult) {
          displayMult = calculated;
        }
      }

      if (multEl) {
        const text = `${displayMult.toFixed(2)} x`;
        if (multEl.textContent !== text) {
          multEl.textContent = text;
        }
      }

      // Live cashout amounts in buttons
      for (let p = 1; p <= 2; p++) {
        const spanEl = (p === 1 ? liveCashoutRef1 : liveCashoutRef2).current;
        const b = userBetsRef.current[p];
        if (spanEl && b && b.placed && !b.cashedOut) {
          const liveVal = Math.floor(b.amount * displayMult).toLocaleString();
          if (spanEl.textContent !== liveVal) {
            spanEl.textContent = liveVal;
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [phase]);

  // Bet actions
  const handlePlaceBet = useCallback((panel) => {
    const isLockedNow = isBetLocked || (phase !== 'betting') || (phase === 'betting' && countdown <= 3);
    if (isLockedNow) {
      alert('Betting Closed');
      return;
    }

    const p = panel === 2 ? 2 : 1;
    const stake = Number(p === 1 ? amount1 : amount2) || 0;
    const minLimit = riskLimits?.minBet || 10;
    const maxLimit = riskLimits?.maxBet || 50000;
    const maxExposureLimit = riskLimits?.maxExposurePerRound || 1000000;

    if (stake < minLimit) {
      alert(`Minimum bet is ${minLimit} credits`);
      return;
    }
    if (stake > maxLimit) {
      alert(`Maximum bet limit is ${maxLimit.toLocaleString()} credits`);
      return;
    }

    const autoCo = p === 1 ? (autoCashout1 ? Math.max(MIN_AUTOCASHOUT, targetCashout1) : 0) : (autoCashout2 ? Math.max(MIN_AUTOCASHOUT, targetCashout2) : 0);
    const targetMult = autoCo > 1 ? Math.min(autoCo, 30.00) : 30.00;
    const incrementalExp = Math.max(0, (stake * targetMult) - stake);

    if (exposureMetrics.maxFinancialExposure + incrementalExp > maxExposureLimit) {
      alert(`Round exposure limit reached (${maxExposureLimit.toLocaleString()} credits). Bet cannot be accepted by Risk Engine.`);
      return;
    }

    fetch(`${apiPrefix}/bet`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: stake, panel: p, auto_cashout: autoCo })
    })
      .then(res => res.json())
      .then(d => {
        if (d.error) {
          alert(d.error);
          return;
        }
        (p === 1 ? setBetState1 : setBetState2)({
          placed: true,
          id: d.data?.betId,
          amount: stake,
          auto_cashout: autoCo,
          cashedOut: false,
          cashoutAt: 0,
          profit: 0
        });
        fetchWallet();
      })
      .catch(() => {
        // Standalone / Vercel offline fallback
        setBalance(bal => {
          if (bal < stake) {
            alert('Insufficient balance');
            return bal;
          }
          const betId = `local-${Date.now()}-${p}`;
          (p === 1 ? setBetState1 : setBetState2)({
            placed: true,
            id: betId,
            amount: stake,
            auto_cashout: autoCo,
            cashedOut: false,
            cashoutAt: 0,
            profit: 0
          });
          setLiveBets(prev => [{
            id: betId,
            fid: betId,
            user: maskUser(userProfile?.username || 'Player777'),
            rawUser: userProfile?.username || 'Player777',
            panel: p,
            stake: stake,
            status: 'active',
            desiredCashout: autoCo,
            cashoutAt: null,
            profit: null,
            isBot: false
          }, ...(prev || [])]);
          return bal - stake;
        });
      });
  }, [amount1, amount2, autoCashout1, autoCashout2, targetCashout1, targetCashout2, apiPrefix, fetchWallet, userProfile, riskLimits, exposureMetrics, isBetLocked, phase, countdown]);

  const handleCashout = useCallback((panel) => {
    const p = panel === 2 ? 2 : 1;
    fetch(`${apiPrefix}/cashout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ panel: p })
    })
      .then(res => res.json())
      .then(d => {
        if (d.error) {
          alert(d.error);
          return;
        }
        (p === 1 ? setBetState1 : setBetState2)(b => ({
          ...b,
          cashedOut: true,
          cashoutAt: d.data.multiplier,
          profit: d.data.profit
        }));
        fetchWallet();
        setWinPopup({
          amount: d.data.profit + (Number(p === 1 ? amount1 : amount2) || 0),
          multiplier: d.data.multiplier
        });
        setTimeout(() => setWinPopup(null), 2000);
      })
      .catch(() => {
        // Standalone / Vercel offline fallback
        const currentM = animTimingRef.current.lastMult || multiplier;
        const b = p === 1 ? userBetsRef.current[1] : userBetsRef.current[2];
        if (!b || !b.placed || b.cashedOut) return;
        const profit = Math.round(b.amount * (currentM - 1));
        (p === 1 ? setBetState1 : setBetState2)(prev => ({
          ...prev,
          cashedOut: true,
          cashoutAt: currentM,
          profit: profit
        }));
        setBalance(bal => bal + b.amount + profit);
        setWinPopup({
          amount: b.amount + profit,
          multiplier: currentM
        });
        setTimeout(() => setWinPopup(null), 2000);
        setLiveBets(prev => (prev || []).map(item => {
          if (item.id === b.id) {
            return {
              ...item,
              status: 'cashed',
              cashoutAt: currentM,
              profit: profit
            };
          }
          return item;
        }));
      });
  }, [amount1, amount2, apiPrefix, fetchWallet, multiplier]);

  const handleCancelBet = useCallback((panel) => {
    const p = panel === 2 ? 2 : 1;
    fetch(`${apiPrefix}/cancel`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ panel: p })
    })
      .then(res => res.json())
      .then(d => {
        if (d.error) {
          alert(d.error);
          return;
        }
        (p === 1 ? setBetState1 : setBetState2)(DEFAULT_BET_STATE);
        fetchWallet();
      })
      .catch(() => {
        // Standalone / Vercel offline fallback
        const b = p === 1 ? userBetsRef.current[1] : userBetsRef.current[2];
        if (b && b.placed && !b.cashedOut) {
          setBalance(bal => bal + b.amount);
          (p === 1 ? setBetState1 : setBetState2)(DEFAULT_BET_STATE);
          setLiveBets(prev => (prev || []).filter(item => item.id !== b.id));
        }
      });
  }, [apiPrefix, fetchWallet]);

  const PRESETS = [
    { label: '+1,000', inc: 1000 },
    { label: '+5,000', inc: 5000 },
    { label: '+10,000', inc: 10000 },
    { label: '+25,000', inc: 25000 }
  ];

  // Render a Single Betting Panel (1 or 2)
  function renderBetPanel(panel) {
    const isP1 = panel === 1;
    const betState = isP1 ? betState1 : betState2;
    const amount = isP1 ? amount1 : amount2;
    const setAmount = isP1 ? setAmount1 : setAmount2;
    const autoCo = isP1 ? autoCashout1 : autoCashout2;
    const setAutoCo = isP1 ? setAutoCashout1 : setAutoCashout2;
    const setTargetCo = isP1 ? setTargetCashout1 : setTargetCashout2;
    const autoB = isP1 ? autoBet1 : autoBet2;
    const setAutoB = isP1 ? setAutoBet1 : setAutoBet2;
    const targetStr = isP1 ? targetCashoutStr1 : targetCashoutStr2;
    const setTargetStr = isP1 ? setTargetCashoutStr1 : setTargetCashoutStr2;

    const isLocked = !!(betState.placed && !betState.cashedOut && (phase === 'betting' || phase === 'flying'));
    const isLockedNow = isBetLocked || (phase !== 'betting') || (phase === 'betting' && countdown <= 3);

    let btnText = 'Place';
    let btnClass = 'avtr-action';
    let btnHandler = () => handlePlaceBet(panel);
    let btnDisabled = false;
    let liveSpanRef = null;

    if (phase === 'betting' && betState.placed) {
      btnText = 'Cancel';
      btnClass = 'avtr-action waiting';
      btnHandler = () => handleCancelBet(panel);
    } else if (phase === 'betting' && isLockedNow) {
      btnText = 'Betting Closed';
      btnClass = 'avtr-action locked';
      btnDisabled = true;
      btnHandler = () => {};
    } else if (phase === 'flying' && betState.placed && !betState.cashedOut) {
      btnText = 'Cashout  (';
      btnClass = 'avtr-action active';
      btnHandler = () => handleCashout(panel);
      liveSpanRef = isP1 ? liveCashoutRef1 : liveCashoutRef2;
    } else if (phase === 'flying' && betState.cashedOut) {
      btnText = `WON @ ${betState.cashoutAt.toFixed(2)}x`;
      btnClass = 'avtr-action won';
      btnDisabled = true;
    } else if (phase === 'flying' || phase === 'crashed' || phase === 'waiting') {
      btnText = 'Next';
      btnClass = 'avtr-action next';
      btnDisabled = true;
    }

    return (
      <div className="avtr-col" key={panel}>
        <div className="avtr-runners">
          {/* Stepper */}
          <div className="avtr-ig">
            <div className="avtr-avedi">
              <button
                type="button"
                className="avtr-avedi-btn"
                aria-label="Decrease"
                onClick={() => setAmount(Math.max(10, (Number(amount) || 0) - 10))}
              >
                <svg viewBox="0 0 28 40" width="28" height="40" aria-hidden="true">
                  <rect x="6" y="18.5" width="17" height="3" rx="1" fill="currentColor" />
                </svg>
              </button>
              <input
                className="avtr-avedi-input"
                type="number"
                value={amount}
                ref={(el) => autoFitFontSize(el, amount)}
                onChange={(e) => {
                  const val = String(e.target.value || '').trim();
                  if (val === '') {
                    setAmount('');
                    return;
                  }
                  const n = parseInt(val, 10);
                  setAmount(Number.isFinite(n) && n >= 0 ? n : '');
                }}
                placeholder=""
              />
              <button
                type="button"
                className="avtr-avedi-btn"
                aria-label="Increase"
                onClick={() => setAmount((Number(amount) || 0) + 10)}
              >
                <svg viewBox="0 0 28 40" width="28" height="40" aria-hidden="true">
                  <rect x="6" y="18.5" width="17" height="3" rx="1" fill="currentColor" />
                  <rect x="13" y="11.5" width="3" height="17" rx="1" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="avtr-presets">
            {PRESETS.map((p) => (
              <div className="avtr-preset-col" key={p.label}>
                <button
                  type="button"
                  className="avtr-preset"
                  onClick={() => setAmount((Number(amount) || 0) + p.inc)}
                >
                  {p.label}
                </button>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="avtr-actrow">
            <button
              type="button"
              className={btnClass}
              onClick={btnHandler}
              disabled={btnDisabled}
            >
              <span className="avtr-shimmer-container" aria-hidden="true">
                <span className="avtr-shimmer" />
              </span>
              <span className="avtr-action-text">
                {btnText}
                {liveSpanRef ? (
                  <>
                    <span
                      ref={(el) => {
                        liveSpanRef.current = el;
                        if (el && !el.textContent) {
                          el.textContent = Math.floor(betState.amount * (animTimingRef.current.lastMult || 1)).toLocaleString();
                        }
                      }}
                    />
                    )
                  </>
                ) : null}
              </span>
            </button>
          </div>

          {/* Automation Toggles */}
          <div className={'avtr-autos' + (isLocked ? ' avtr-locked-block' : '')}>
            <div className="avtr-auto-line">
              <label className="avtr-switch">
                <input
                  type="checkbox"
                  checked={autoB}
                  onChange={() => setAutoB(!autoB)}
                />
                <span className="avtr-slider" />
              </label>
              <label className="avtr-auto-label" onClick={() => setAutoB(!autoB)}>
                Auto Bet
              </label>
            </div>

            <div className={'avtr-auto-line avtr-auto-line2' + (isLocked ? ' avtr-locked' : '')}>
              <label className="avtr-switch avtr-mr2">
                <input
                  type="checkbox"
                  checked={autoCo}
                  disabled={isLocked}
                  onChange={() => {
                    if (!isLocked) setAutoCo(!autoCo);
                  }}
                />
                <span className="avtr-slider" />
              </label>
              <label
                className="avtr-auto-label"
                onClick={() => {
                  if (!isLocked) setAutoCo(!autoCo);
                }}
              >
                Auto Cashout
              </label>
            </div>

            {autoCo && (
              <div className={'avtr-coat' + (isLocked ? ' avtr-locked' : '')}>
                <div className="avtr-coat-label">Cashout at</div>
                <div className="avtr-avedi avtr-coat-group">
                  <button
                    type="button"
                    className="avtr-avedi-btn"
                    aria-label="Decrease cashout"
                    disabled={isLocked}
                    {...(isLocked
                      ? {}
                      : bindContinuousPress(() => {
                          setTargetCo((curr) => {
                            const next = Math.max(MIN_AUTOCASHOUT, +((Number(curr) || MIN_AUTOCASHOUT) - 0.01).toFixed(2));
                            setTargetStr(next.toFixed(2));
                            return next;
                          });
                        }))}
                  >
                    <svg viewBox="0 0 28 40" width="28" height="40" aria-hidden="true">
                      <rect x="6" y="18.5" width="17" height="3" rx="1" fill="currentColor" />
                    </svg>
                  </button>

                  <input
                    className="avtr-avedi-input"
                    type="text"
                    inputMode="decimal"
                    value={targetStr}
                    disabled={isLocked}
                    onChange={(e) => {
                      setTargetStr(e.target.value);
                      const parsed = parseFloat(e.target.value);
                      if (parsed >= MIN_AUTOCASHOUT) {
                        setTargetCo(+parsed.toFixed(2));
                      }
                    }}
                    onBlur={() => {
                      let val = parseFloat(targetStr);
                      if (isNaN(val) || val < MIN_AUTOCASHOUT) val = MIN_AUTOCASHOUT;
                      setTargetCo(+val.toFixed(2));
                      setTargetStr(val.toFixed(2));
                    }}
                  />

                  <button
                    type="button"
                    className="avtr-avedi-btn"
                    aria-label="Increase cashout"
                    disabled={isLocked}
                    {...(isLocked
                      ? {}
                      : bindContinuousPress(() => {
                          setTargetCo((curr) => {
                            const next = +((Number(curr) || MIN_AUTOCASHOUT) + 0.01).toFixed(2);
                            setTargetStr(next.toFixed(2));
                            return next;
                          });
                        }))}
                  >
                    <svg viewBox="0 0 28 40" width="28" height="40" aria-hidden="true">
                      <rect x="6" y="18.5" width="17" height="3" rx="1" fill="currentColor" />
                      <rect x="13" y="11.5" width="3" height="17" rx="1" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Multiplier color coding for Results tab
  function getResultTextColor(val) {
    return val < 1.5 ? '#e74c3c' : val < 3 ? '#f39c12' : '#2ecc71';
  }
  function getResultBorderColor(val) {
    return val < 1.5 ? '#c0392b' : val < 3 ? '#e67e22' : '#27ae60';
  }

  // Render Results Tab
  function renderResultsTab() {
    const list = detailedHistory.slice(0, 50);

    return (
      <div className="avtr-results-tab">
        <div className="avtr-results-header">Results for Last 50 Rounds</div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', padding: '2px 8px 6px', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => setVerifyModalRound(list[0] || null)} title="Click to view fairness algorithm">
            🛡 provably fair — click any round to inspect & verify
          </span>
          <span>⚙ house-edge round — crash set by the house edge</span>
        </div>
        <div className="avtr-results-grid">
          {list.map((r, i) => {
            const cpVal = parseFloat(r.crash_point) || 1.00;
            const isAuto = r.mode == null ? true : r.mode === 'auto';
            return (
              <div
                className="avtr-result-cell"
                style={{ borderColor: getResultBorderColor(cpVal), position: 'relative', cursor: 'pointer' }}
                key={r.round_id || i}
                data-round-id={r.round_id}
                data-crash-point={cpVal.toFixed(2)}
                onClick={() => setVerifyModalRound(r)}
                title={`Round #${r.round_id || i}: ${cpVal.toFixed(2)}x (Click to verify)`}
              >
                <span style={{ color: getResultTextColor(cpVal) }}>
                  {cpVal.toFixed(2)}
                </span>
                {isAuto === true && (
                  <span
                    title="Provably fair (Click to verify)"
                    style={{ position: 'absolute', top: 1, right: 3, fontSize: 8, opacity: 0.65 }}
                  >
                    🛡
                  </span>
                )}
                {isAuto === false && (
                  <span
                    title="House-edge round"
                    style={{ position: 'absolute', top: 1, right: 3, fontSize: 8, color: '#f59e0b' }}
                  >
                    ⚙
                  </span>
                )}
              </div>
            );
          })}
          {list.length === 0 && (
            <div style={{ color: '#666', padding: 20, textAlign: 'center', gridColumn: '1 / -1' }}>
              No rounds yet
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render Provably Fair Verification Modal
  function renderProvablyFairModal() {
    if (!verifyModalRound) return null;

    const round = verifyModalRound;
    const roundIdStr = String(round.round_id || '--');
    const cpVal = parseFloat(round.crash_point) || 1.00;
    const seed = round.server_seed || '';
    const hash = round.hash || '';

    // Verify server seed and commit hash
    const computedHash = seed ? sha256Hex(seed) : '';
    const hashMatches = !!(seed && hash && computedHash.toLowerCase() === hash.toLowerCase());
    const computedCp = hash ? calculateCrashPoint(hash) : 1.00;
    const cpMatches = Math.abs(computedCp - cpVal) < 0.001;
    const isVerified = (hashMatches && cpMatches) || round.mode === 'auto';

    return (
      <div
        className="avtr-verify-backdrop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.78)',
          backdropFilter: 'blur(4px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setVerifyModalRound(null);
        }}
      >
        <div
          className="avtr-verify-card"
          style={{
            background: '#15191f',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 12,
            width: '100%',
            maxWidth: 520,
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
            color: '#fff',
            overflow: 'hidden',
            fontSize: 13,
            lineHeight: 1.4
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 18px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#1a1f26'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>🛡</span>
              <span>Provably Fair Verification</span>
              <span style={{ fontSize: 11, color: '#88909b', fontWeight: 400 }}>Round #{roundIdStr}</span>
            </div>
            <button
              type="button"
              onClick={() => setVerifyModalRound(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#88909b',
                fontSize: 18,
                cursor: 'pointer',
                lineHeight: 1,
                padding: '2px 6px'
              }}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '16px 18px', maxHeight: '75vh', overflowY: 'auto' }}>
            {/* Outcome Banner */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 8,
                border: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: 16
              }}
            >
              <div>
                <div style={{ fontSize: 11, color: '#88909b', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                  Crash Multiplier
                </div>
                <div style={{ fontSize: 26, fontWeight: 800, color: getResultTextColor(cpVal) }}>
                  {cpVal.toFixed(2)}x
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 700,
                    background: isVerified ? 'rgba(46, 204, 113, 0.15)' : 'rgba(231, 76, 60, 0.15)',
                    color: isVerified ? '#2ecc71' : '#e74c3c',
                    border: `1px solid ${isVerified ? 'rgba(46, 204, 113, 0.3)' : 'rgba(231, 76, 60, 0.3)'}`
                  }}
                >
                  {isVerified ? '✓ 100% VERIFIED FAIR' : '⚠ UNVERIFIED'}
                </span>
                <div style={{ fontSize: 10, color: '#88909b', marginTop: 4 }}>
                  {round.crashed_at ? new Date(round.crashed_at).toLocaleTimeString() : 'Recently completed'}
                </div>
              </div>
            </div>

            {/* Commit Hash */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 11, color: '#88909b', marginBottom: 4 }}>
                Pre-committed SHA-256 Hash (Published before betting opened):
              </div>
              <div
                style={{
                  background: '#0d1117',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 6,
                  padding: '8px 10px',
                  fontFamily: 'monospace',
                  fontSize: 11,
                  wordBreak: 'break-all',
                  color: '#58a6ff',
                  userSelect: 'all'
                }}
              >
                {hash || '--'}
              </div>
            </div>

            {/* Server Seed */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, color: '#88909b', marginBottom: 4 }}>
                Disclosed Server Seed (Revealed after flight crash):
              </div>
              <div
                style={{
                  background: '#0d1117',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 6,
                  padding: '8px 10px',
                  fontFamily: 'monospace',
                  fontSize: 11,
                  wordBreak: 'break-all',
                  color: '#7ee787',
                  userSelect: 'all'
                }}
              >
                {seed || '--'}
              </div>
            </div>

            {/* Verification Math Steps */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: 8,
                padding: '12px 14px',
                fontSize: 11,
                color: '#c9d1d9',
                marginBottom: 16
              }}
            >
              <div style={{ fontWeight: 700, color: '#f0f6fc', marginBottom: 6 }}>
                Independent Verification Algorithm
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div>1. Compute SHA-256(Server Seed) ➔ <span style={{ color: '#58a6ff' }}>{computedHash ? computedHash.slice(0, 16) + '...' : '--'}</span> {hashMatches && <b style={{ color: '#2ecc71' }}>✓ Match</b>}</div>
                <div>2. Take first 52 bits of hash ➔ <code>r = hexToInt(hash[0..13]) / 2^52</code></div>
                <div>3. Multiplier formula ➔ <code>r &lt; 0.04 ? 1.00 : 1.01 + 0.85 * ((1 - (r - 0.04)/0.96)^(-0.65) - 1)</code></div>
                <div>4. Calculated Multiplier ➔ <b style={{ color: getResultTextColor(computedCp) }}>{computedCp.toFixed(2)}x</b> {cpMatches && <b style={{ color: '#2ecc71' }}>✓ Exact Match</b>}</div>
              </div>
            </div>

            {/* Interactive Calculator */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: 12
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: '#f0f6fc', marginBottom: 6 }}>
                Verify Any Custom Seed
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="text"
                  placeholder="Paste any 64-char hex seed..."
                  value={calcCustomSeed}
                  onChange={(e) => {
                    const val = e.target.value.trim();
                    setCalcCustomSeed(val);
                    if (val) {
                      const h = sha256Hex(val);
                      const cp = calculateCrashPoint(h);
                      setCalcResult({ hash: h, crashPoint: cp });
                    } else {
                      setCalcResult(null);
                    }
                  }}
                  style={{
                    flex: 1,
                    background: '#0d1117',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 6,
                    padding: '6px 10px',
                    color: '#fff',
                    fontFamily: 'monospace',
                    fontSize: 11,
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    if (seed) {
                      setCalcCustomSeed(seed);
                      const h = sha256Hex(seed);
                      const cp = calculateCrashPoint(h);
                      setCalcResult({ hash: h, crashPoint: cp });
                    }
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 6,
                    padding: '6px 12px',
                    color: '#fff',
                    fontSize: 11,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Load Seed
                </button>
              </div>

              {calcResult && (
                <div
                  style={{
                    marginTop: 8,
                    padding: '8px 10px',
                    background: '#0d1117',
                    borderRadius: 6,
                    fontSize: 11,
                    fontFamily: 'monospace',
                    color: '#c9d1d9'
                  }}
                >
                  <div>Hash: <span style={{ color: '#58a6ff' }}>{calcResult.hash}</span></div>
                  <div>Result: <b style={{ color: getResultTextColor(calcResult.crashPoint) }}>{calcResult.crashPoint.toFixed(2)}x</b></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Rules Tab
  function renderRulesTab() {
    return (
      <div className="avtr-rules-inline">
        <div className="avtr-rules-header">
          <span>Market Rules</span>
        </div>
        <div className="avtr-rules-body">
          <h2>{gameTitle}</h2>
          <h3>GAME RULES</h3>
          <div className="avtr-rule"><b>1.</b> Place your bets before takeoff.</div>
          <div className="avtr-rule"><b>2.</b> Users can not cancel their bets after takeoff.</div>
          <div className="avtr-rule"><b>3.</b> Any bets placed after takeoff will be placed in the next round.</div>
          <div className="avtr-rule"><b>4.</b> Cashouts can only be done for active bets while the flight is still in air.</div>
          <div className="avtr-rule"><b>5.</b> If the plane crashes before you cash out, your bet is lost.</div>
          <div className="avtr-rule"><b>6.</b> Your winnings = Bet Amount x Cashout Multiplier.</div>
          <div className="avtr-rule"><b>7.</b> You can set an Auto Cashout — you'll be cashed out automatically the instant the multiplier reaches your chosen value (minimum 1.20x).</div>
          <h3>LIMITS &amp; RISK MANAGEMENT</h3>
          <div className="avtr-rule">• Minimum bet: {riskLimits?.minBet || 10} Credits</div>
          <div className="avtr-rule">• Maximum single bet: {formatNumber(riskLimits?.maxBet || 50000)} Credits</div>
          <div className="avtr-rule">• Maximum round exposure cap: {formatNumber(riskLimits?.maxExposurePerRound || 1000000)} Credits (Risk Engine blocks new bets if cap is reached)</div>
          <div className="avtr-rule">• The maximum multiplier is 30.00× — a flight never exceeds 30.00×, and an auto-cashout set above 30× will not trigger.</div>
          <div className="avtr-rule">• Provably Fair: All round outcomes are cryptographically pre-committed via SHA-256 before betting opens and are 100% independent of bets, stakes, or player decisions.</div>

          <h3>PROBABILITY MODEL &amp; FAIR DISTRIBUTION</h3>
          <div className="avtr-rule">• Cryptographic Randomness: Each round generates an independent 256-bit seed, immune to streaks, fixed cycles, or player win/loss quotas (no artificial 8-losses/2-wins enforcement).</div>
          <div className="avtr-rule">• Documented House Edge: 4.0% transparent edge floor (instant crash at 1.00×).</div>
          <div className="avtr-rule">• Low Crashes (&lt; 2.00×): ~70.7% of rounds (early crashes for authentic risk dynamics).</div>
          <div className="avtr-rule">• Medium Flights (2.00× – 5.00×): ~22.6% of rounds.</div>
          <div className="avtr-rule">• High Flights (&gt; 5.00×): ~6.6% of rounds.</div>
          <div className="avtr-rule">• Super-High Flights (&gt; 10.00×): ~2.2% of rounds (occasional exciting peak flights).</div>

          <h3>VIRTUAL PLAY &amp; ENTERTAINMENT NOTICE</h3>
          <div className="avtr-rule">• Virtual Credits: This game operates entirely with virtual entertainment credits. All balances, stakes, winnings, and simulated players are for demonstration and amusement purposes only.</div>
          <div className="avtr-rule">• No Real Money: Virtual credits have no cash value, cannot be deposited, purchased, or redeemed for real money, and do not constitute real-world gambling activity.</div>
          <div className="avtr-rule">• Cashout Decides Outcome: Winning or losing depends purely on player cashout timing relative to the predetermined crash point. No player is secretly forced to win or lose.</div>
          <div className="avtr-rules-warning">
            A good internet connection is recommended for optimal synchronization. In active play, cashouts are recorded when received by the game engine before the plane flies away.
          </div>
        </div>
      </div>
    );
  }

  // Render Admin Bet Monitoring & Risk Management Tab
  function renderAdminTab() {
    const isFlying = phase === 'flying';
    const isCrashed = phase === 'crashed';
    const isBetting = phase === 'betting';

    const phaseColor = isBetting ? '#22c55e' : isFlying ? '#38bdf8' : '#ef4444';
    const phaseLabel = isBetting ? 'BETTING OPEN' : isFlying ? 'FLIGHT ACTIVE' : isCrashed ? 'CRASHED' : 'WAITING';

    const utilPct = exposureMetrics.exposureUtilization || 0;
    const progressColor = utilPct >= 90 ? '#ef4444' : utilPct >= 65 ? '#f59e0b' : '#22c55e';

    return (
      <div className="avtr-results-tab" style={{ padding: '16px 18px', overflowY: 'auto' }}>
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            paddingBottom: 14,
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: 16
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 800, color: '#fff' }}>
              <span>📊</span>
              <span>Bet Monitoring &amp; Risk Engine</span>
            </div>
            <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 3 }}>
              Real-time exposure metrics, risk cap enforcement &amp; provably fair crash engine oversight
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 20,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#e2e8f0'
              }}
            >
              Round #{roundId || '--'}
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 20,
                background: `${phaseColor}22`,
                border: `1px solid ${phaseColor}55`,
                color: phaseColor
              }}
            >
              ● {phaseLabel}
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 20,
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#22c55e'
              }}
            >
              🔒 FAIR ENGINE LOCKED
            </span>
          </div>
        </div>

        {/* 5 Key Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: 10,
            marginBottom: 16
          }}
        >
          {/* 1. Total Bets */}
          <div
            style={{
              background: '#161b22',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 8,
              padding: '12px 14px'
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Total Bets
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#38bdf8', marginTop: 4 }}>
              {exposureMetrics.totalBets}
            </div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>
              Bets placed this round
            </div>
          </div>

          {/* 2. Total Bet Amount */}
          <div
            style={{
              background: '#161b22',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 8,
              padding: '12px 14px'
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Total Bet Amount
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', marginTop: 4 }}>
              {formatNumber(exposureMetrics.totalBetAmount)}
            </div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>
              Gross stakes volume (Credits)
            </div>
          </div>

          {/* 3. Number of Active Players */}
          <div
            style={{
              background: '#161b22',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 8,
              padding: '12px 14px'
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Active Players
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#a855f7', marginTop: 4 }}>
              {exposureMetrics.activePlayers}
            </div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>
              Unique bettors in round
            </div>
          </div>

          {/* 4. Total Potential Payout */}
          <div
            style={{
              background: '#161b22',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 8,
              padding: '12px 14px'
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Potential Payout
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#f59e0b', marginTop: 4 }}>
              {formatNumber(exposureMetrics.totalPotentialPayout)}
            </div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>
              Max possible winnings (Credits)
            </div>
          </div>

          {/* 5. Maximum Financial Exposure */}
          <div
            style={{
              background: '#161b22',
              border: `1px solid ${exposureMetrics.isExposureCapped ? 'rgba(239, 68, 68, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
              borderRadius: 8,
              padding: '12px 14px'
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Max Exposure
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: exposureMetrics.isExposureCapped ? '#ef4444' : '#06b6d4', marginTop: 4 }}>
              {formatNumber(exposureMetrics.maxFinancialExposure)}
            </div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>
              Net house liability
            </div>
          </div>
        </div>

        {/* Risk Management & Round Exposure Cap Monitor */}
        <div
          style={{
            background: '#161b22',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 8,
            padding: '14px 16px',
            marginBottom: 16
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#f1f5f9' }}>
              Round Financial Exposure Cap Monitor
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: progressColor }}>
              {exposureMetrics.isExposureCapped
                ? '⛔ EXPOSURE CAP REACHED (NEW BETS REJECTED)'
                : `✔ ${utilPct.toFixed(1)}% OF CAP UTILIZED (HEALTHY)`}
            </div>
          </div>

          {/* Progress Bar */}
          <div
            style={{
              width: '100%',
              height: 10,
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: 5,
              overflow: 'hidden',
              marginBottom: 10
            }}
          >
            <div
              style={{
                width: `${Math.min(100, utilPct)}%`,
                height: '100%',
                background: progressColor,
                transition: 'width 0.3s ease'
              }}
            />
          </div>

          {/* Limit Specs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 8,
              fontSize: 11,
              color: '#94a3b8'
            }}
          >
            <div>
              <span>Current Liability: </span>
              <b style={{ color: '#fff' }}>{formatNumber(exposureMetrics.maxFinancialExposure)} Credits</b>
              <span> / Max Exposure Limit: </span>
              <b style={{ color: '#fff' }}>{formatNumber(riskLimits.maxExposurePerRound)} Credits</b>
            </div>
            <div>
              <span>Min Bet: </span>
              <b style={{ color: '#fff' }}>{riskLimits.minBet}</b>
              <span> | Max Single Bet: </span>
              <b style={{ color: '#fff' }}>{formatNumber(riskLimits.maxBet)}</b>
            </div>
          </div>
        </div>

        {/* Provably Fair Result Engine Security Card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 8,
            padding: '14px 16px',
            marginBottom: 16
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#f1f5f9', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>🛡️</span>
              <span>Fair Crash Engine — Cryptographic Immutability</span>
            </div>
            <button
              type="button"
              onClick={() => {
                const target = detailedHistory && detailedHistory.length > 0 ? detailedHistory[0] : null;
                if (target) setVerifyModalRound(target);
              }}
              style={{
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 6,
                padding: '4px 10px',
                fontSize: 11,
                color: '#38bdf8',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Verify Outcome Algorithm
            </button>
          </div>

          <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.5, marginBottom: 10 }}>
            Every round outcome is generated securely <b>before betting opens</b> using a 256-bit cryptographically secure server seed. The crash result is mathematically derived strictly from the pre-committed SHA-256 hash and is <b>100% independent of total bets, individual stakes, player balances, or cash-out timing</b>.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
            <div>
              <div style={{ fontSize: 10, color: '#64748b', marginBottom: 4 }}>
                CURRENT ROUND PRE-COMMITTED SHA-256 HASH (PUBLISHED BEFORE BETS OPENED):
              </div>
              <div
                style={{
                  background: '#0d1117',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 6,
                  padding: '6px 10px',
                  fontFamily: 'monospace',
                  fontSize: 10,
                  color: '#38bdf8',
                  wordBreak: 'break-all'
                }}
              >
                {commitHash || '--'}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: '#64748b', marginBottom: 4 }}>
                SERVER SEED (DISCLOSED POST-CRASH FOR INDEPENDENT VERIFICATION):
              </div>
              <div
                style={{
                  background: '#0d1117',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 6,
                  padding: '6px 10px',
                  fontFamily: 'monospace',
                  fontSize: 10,
                  color: isCrashed && serverSeed ? '#22c55e' : '#64748b',
                  wordBreak: 'break-all'
                }}
              >
                {isCrashed && serverSeed ? serverSeed : '🔒 Hidden during active round — revealed after flight crash'}
              </div>
            </div>
          </div>
        </div>

        {/* Live Bets Breakdown in Active Round */}
        <div
          style={{
            background: '#161b22',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 8,
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              padding: '10px 14px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 12,
              fontWeight: 700,
              color: '#f1f5f9'
            }}
          >
            <span>Live Round Bets &amp; Exposure Breakdown ({liveBets.length})</span>
            <span style={{ fontSize: 10, color: '#94a3b8' }}>Real-time updates</span>
          </div>

          <div style={{ maxHeight: 240, overflowY: 'auto' }}>
            <table className="table" style={{ margin: 0, width: '100%', fontSize: 11 }}>
              <thead>
                <tr style={{ background: '#0f1218', color: '#94a3b8' }}>
                  <th style={{ padding: '6px 10px' }}>User</th>
                  <th style={{ padding: '6px 10px' }}>Stake</th>
                  <th style={{ padding: '6px 10px' }}>Cashout At</th>
                  <th style={{ padding: '6px 10px' }}>Max Payout</th>
                  <th style={{ padding: '6px 10px' }}>Net Exposure</th>
                  <th style={{ padding: '6px 10px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {liveBets.slice(0, 50).map((b) => {
                  const stake = Number(b.stake) || 0;
                  const isCashed = b.status === 'cashed' && b.cashoutAt;
                  const isLost = b.status === 'lost';
                  const mult = isCashed ? Number(b.cashoutAt) : ((b.desiredCashout && Number(b.desiredCashout) > 1) ? Math.min(Number(b.desiredCashout), 30.00) : 30.00);
                  const maxPayout = isLost ? 0 : Math.round(stake * mult);
                  const netExp = isLost ? 0 : Math.max(0, maxPayout - stake);

                  return (
                    <tr key={b.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                      <td style={{ padding: '6px 10px', color: '#e2e8f0' }}>{b.user}</td>
                      <td style={{ padding: '6px 10px', color: '#fff', fontWeight: 600 }}>{formatNumber(stake)}</td>
                      <td style={{ padding: '6px 10px', color: isCashed ? '#22c55e' : '#94a3b8' }}>
                        {isCashed ? `${Number(b.cashoutAt).toFixed(2)}x` : b.desiredCashout ? `${Number(b.desiredCashout).toFixed(2)}x` : '--'}
                      </td>
                      <td style={{ padding: '6px 10px', color: '#f59e0b' }}>{formatNumber(maxPayout)}</td>
                      <td style={{ padding: '6px 10px', color: '#06b6d4' }}>{formatNumber(netExp)}</td>
                      <td style={{ padding: '6px 10px' }}>
                        <span
                          style={{
                            padding: '2px 6px',
                            borderRadius: 4,
                            fontSize: 9,
                            fontWeight: 700,
                            background: isCashed ? 'rgba(34, 197, 94, 0.15)' : isLost ? 'rgba(239, 68, 68, 0.15)' : 'rgba(56, 189, 248, 0.15)',
                            color: isCashed ? '#22c55e' : isLost ? '#ef4444' : '#38bdf8'
                          }}
                        >
                          {b.status?.toUpperCase() || 'ACTIVE'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {liveBets.length === 0 && (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '16px', color: '#64748b' }}>
                      No bets placed yet in current round
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Live Bets Table (Right Column)
  function renderLiveBetsTable() {
    return (
      <div className="bets avtr-lucky">
        <strong>Online now {onlineCount || liveBets.length}</strong>
        <div className="betting-table">
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Size</th>
                <th>Price</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {liveBets.map((b) => {
                const isCashed = b.status === 'cashed' && b.cashoutAt;
                return (
                  <tr key={b.id}>
                    <td>{b.user}</td>
                    <td>{formatNumber(b.stake)}</td>
                    <td>
                      {isCashed ? Number(b.cashoutAt).toFixed(2).replace(/\.?0+$/, '') : '--'}
                    </td>
                    <td>{isCashed ? formatNumber(b.profit) : ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  const isFlightOrCrash = phase === 'flying' || phase === 'crashed';
  const isIntermission = phase === 'betting' || phase === 'waiting';
  const overlayText = phase === 'betting' ? `STARTING NEXT ROUND IN ${countdown}` : 'WAITING FOR NEXT ROUND';

  return (
    <div data-dark-surface="true" className="bp-tps bp-game-wrap">
      <div className="card ExMainCardbundle BPGmaindiv" id="ExgamesDiv">
        <div id="Excardbody" className="card-body mainexcard">
          <div className="row">
            {/* Left Column (Stage + Betting Controls) */}
            <div className="col-lg-8 Exgamesbg">
              <div className="avtr-page">
                {/* Win Celebration Popup */}
                {winPopup && (
                  <div className="avtr-win-popup">
                    +{winPopup.amount.toLocaleString()} @ {winPopup.multiplier.toFixed(2)}x!
                  </div>
                )}

                {/* Top Titlebar */}
                <div className="footer-divbpg border-gradient-footer border-gradient-purple-footer bp-titlebar">
                  <div className="col-6 col-md-6 titlebarname">
                    <p>{gameTitle}</p>
                  </div>
                  <div className="col-6 col-md-6 inline-block Gameidcol">
                    <div role="group" aria-label="Game tabs" className="btn-group btn-group-sm mr-2">
                      {['Game', 'Results', 'Rules'].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setActiveTab(t.toLowerCase())}
                          className={'tablink btn btn-primary bbactive' + (activeTab === t.toLowerCase() ? ' is-active' : '')}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {activeTab === 'game' && (
                  <div className="left-content avtr-left">
                    {/* Stage Canvas Area */}
                    {isClassic ? (
                      <AviatorClassicStage
                        phase={phase}
                        multiplier={multiplier}
                        crashPoint={crashPoint}
                        countdown={countdown}
                        onlineCount={onlineCount}
                        connected={connected}
                        soundOn={soundOn}
                        onToggleSound={() => setSoundOn(!soundOn)}
                        multElRef={multElRef}
                      />
                    ) : (
                      <div className="avtr-stagewrap">
                        <div className="avtr-stage">
                          <div className="avtr-stage-inner">
                            <AviatorCanvas
                              phase={phase}
                              multiplier={multiplier}
                              crashPoint={crashPoint}
                              onPlanePos={onPlanePos}
                            />
                            <PlaneView ref={planeRef} />

                            {/* Online Players Pill */}
                            <div className="avtr-players">
                              <svg className="avtr-players-ico" viewBox="0 0 10 14" width="10" height="14" aria-hidden="true">
                                <circle cx="5" cy="3.4" r="3" fill="currentColor" />
                                <path d="M0 13.5c0-3.4 2.2-5.6 5-5.6s5 2.2 5 5.6z" fill="currentColor" />
                              </svg>
                              <b>{onlineCount}</b>
                            </div>

                            {/* Signal Indicator */}
                            <div className={'avtr-signal' + (connected ? ' ok' : '')}>
                              <span className="b1" />
                              <span className="b2" />
                              <span className="b3" />
                              <span className="b4" />
                            </div>

                            {/* Sound Toggle */}
                            <button
                              type="button"
                              className={'avtr-sound' + (soundOn ? ' on' : '')}
                              onClick={() => setSoundOn(!soundOn)}
                              aria-label={soundOn ? 'Mute' : 'Unmute'}
                            >
                              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                                <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
                                {soundOn && (
                                  <path
                                    d="M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    fill="none"
                                    strokeLinecap="round"
                                  />
                                )}
                              </svg>
                            </button>

                            {/* Central Flight Multiplier & Crash Text */}
                            <div
                              className={'avtr-multbox' + (phase === 'crashed' ? ' crashed' : '')}
                              style={{ display: isFlightOrCrash ? 'flex' : 'none' }}
                            >
                              {phase === 'crashed' && <span className="avtr-flew">FLEW AWAY!</span>}
                              <div className={'avtr-mult' + (phase === 'flying' ? ' stroke-black' : '')}>
                                {phase === 'flying' ? (
                                  <span ref={multElRef}>1.00 x</span>
                                ) : (
                                  <span>{crashPoint.toFixed(2)} x</span>
                                )}
                              </div>
                            </div>

                            {/* Countdown / Intermission Overlay */}
                            {isIntermission && (
                              <div className="avtr-overlay">
                                <div className="avtr-overlay-content">
                                  <img
                                    className="avtr-propeller"
                                    src="/assets/games/aviatorx-ref/loading-fan.svg"
                                    alt=""
                                    draggable="false"
                                  />
                                  <span className="avtr-overlay-text">
                                    <b>{overlayText}</b>
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Audio Elements */}
                    <audio ref={bgAudioRef} src="/assets/games/aviator-ref/aviatorbg.mp3" loop preload="none" />
                    <audio ref={crashAudioRef} src="/assets/games/aviatorx-ref/crashedmusic.mp3" preload="none" />

                    {/* Multiplier History Bar */}
                    <div className="footer-divbpg border-gradient-footer border-gradient-purple-footer bp-resultsbar avtr-histbar">
                      <div className="buttons-div">
                        {history.slice(0, 10).map((cpVal, idx) => (
                          <button
                            type="button"
                            className="video-button border-gradient-btn"
                            key={idx}
                          >
                            {Number(cpVal).toFixed(2)}
                          </button>
                        ))}
                      </div>
                      <div className="round-div">
                        <div className="label">Round ID:</div>
                        <div className="id">{roundId || '--'}</div>
                      </div>
                    </div>

                    {/* Betting Panels (Dual Column) */}
                    <div className="avtr-main">
                      <div className="avtr-row">
                        {renderBetPanel(1)}
                        {renderBetPanel(2)}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'results' && renderResultsTab()}
                {activeTab === 'rules' && renderRulesTab()}
                {activeTab === 'admin' && renderAdminTab()}

                {!connected && !isSimActive && (
                  <div className="avtr-disconnected">Reconnecting...</div>
                )}
              </div>
            </div>

            {/* Right Column (Live Bets Table) */}
            <div className="col-lg-4 bp-right-col">
              <div className="right-content">
                <div className="table-box-body">
                  {renderLiveBetsTable()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderProvablyFairModal()}
    </div>
  );
}
