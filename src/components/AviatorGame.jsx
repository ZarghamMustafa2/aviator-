import React, { useState, useEffect, useRef, useCallback } from 'react';
import AviatorCanvas from './AviatorCanvas';
import PlaneView from './PlaneView';
import AviatorClassicStage from './AviatorClassicStage';

function calcMultiplier(elapsedMs) {
  const t = elapsedMs / 1000;
  return t <= 4
    ? 1 + 0.05 * t
    : t <= 22
      ? 1.2 + 0.1 * (t - 4)
      : t <= 34.5
        ? 3 + 0.4 * (t - 22)
        : 8 + 1 * (t - 34.5);
}

function calcInverseTimeMs(m) {
  return m <= 1.2
    ? ((m - 1) / 0.05) * 1000
    : m <= 3
      ? (4 + (m - 1.2) / 0.1) * 1000
      : m <= 8
        ? (22 + (m - 3) / 0.4) * 1000
        : (34.5 + (m - 8)) * 1000;
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
  const [crashPoint, setCrashPoint] = useState(0);
  const [history, setHistory] = useState([
    2.15, 1.34, 4.20, 1.12, 15.68, 1.85, 2.76, 1.05, 3.12, 1.94, 1.45, 8.50, 1.20, 6.42, 2.05
  ]);
  const [detailedHistory, setDetailedHistory] = useState([]);
  const [roundId, setRoundId] = useState('104520');
  const [serverSeed, setServerSeed] = useState('');
  const [commitHash, setCommitHash] = useState('');
  const [isFair, setIsFair] = useState(true);
  const [connected, setConnected] = useState(false);
  const [isSimActive, setIsSimActive] = useState(false);
  const [onlineCount, setOnlineCount] = useState(247);
  const [liveBets, setLiveBets] = useState([]);
  const [soundOn, setSoundOn] = useState(false);
  const [winPopup, setWinPopup] = useState(null);

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
        if (Array.isArray(data)) {
          setDetailedHistory(data);
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
          if (s.phase) setPhase(s.phase);
          if (typeof s.multiplier === 'number') setMultiplier(s.multiplier);
          if (typeof s.countdown === 'number') setCountdown(s.countdown);
          if (s.roundId) setRoundId(String(s.roundId));
          if (s.phase === 'crashed' && typeof s.multiplier === 'number') setCrashPoint(s.multiplier);
          if (s.commitHash || s.hash) setCommitHash(s.commitHash || s.hash);
          if (s.history) setHistory(s.history);
          if (s.seed) setServerSeed(s.seed);
        })
        .catch(() => {});

      fetchLiveBets();
    }

    function processGameEvent(evt, payload) {
      if (evt === 'state') {
        setPhase(payload.phase);
        if (payload.countdown !== undefined) setCountdown(payload.countdown);
        if (payload.roundId) setRoundId(String(payload.roundId));
        if (payload.commitHash || payload.hash) setCommitHash(payload.commitHash || payload.hash);
        if (payload.history) setHistory(payload.history);
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
      } else if (evt === 'crashed') {
        setPhase('crashed');
        setCrashPoint(payload.crashPoint);
        setMultiplier(payload.crashPoint);
        setServerSeed(payload.seed || '');
        setIsFair(payload.fair !== false);

        setBetState1(b => (b.placed && !b.cashedOut ? { ...b, placed: false } : b));
        setBetState2(b => (b.placed && !b.cashedOut ? { ...b, placed: false } : b));

        setLiveBets(prev => (prev || []).map(b => (b.status === 'active' ? { ...b, status: 'lost' } : b)));

        if (soundOnRef.current && crashAudioRef.current) {
          try {
            crashAudioRef.current.currentTime = 0;
            crashAudioRef.current.play().catch(() => {});
          } catch (e) {}
        }

        setDetailedHistory(prev => [
          {
            crash_point: payload.crashPoint,
            hash: payload.hash,
            server_seed: payload.seed,
            mode: payload.mode || 'auto',
            crashed_at: new Date().toISOString()
          },
          ...(prev || [])
        ].slice(0, 50));
      }
    }

    // Simulation Fallback state & loop
    let simTimeout = null;
    let simInterval = null;
    let isSimulating = false;
    let simRoundNumber = 104520;
    let simBets = [];
    let simCrash = 2.10;
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

      const r = Math.random();
      simCrash = r < 0.04 ? 1.00 : Math.max(1.00, Math.min(30.00, Math.floor((0.97 / (1 - r)) * 100) / 100));

      processGameEvent('state', {
        phase: 'betting',
        countdown: 5,
        roundId: simRoundNumber,
        hash: 'sim-' + Math.random().toString(16).slice(2, 10),
        onlineNow: 247 + Math.floor(Math.random() * 10 - 5),
        bets: simBets
      });

      let cd = 5;
      let botIdx = 0;
      const perTick = Math.ceil(remainingBots.length / 4);

      simInterval = setInterval(() => {
        if (!isSimulating || isClosed) {
          clearInterval(simInterval);
          return;
        }
        cd--;
        if (cd > 0) {
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
          processGameEvent('countdown', { countdown: cd });
        } else {
          clearInterval(simInterval);
          while (botIdx < remainingBots.length) {
            const b = remainingBots[botIdx++];
            simBets.unshift(b);
            processGameEvent('bet', {
              fid: b.fid,
              username: b.rawUser,
              panel: b.panel,
              stake: b.stake
            });
          }
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
        crashPoint: simCrash,
        seed: 'sim-seed-' + Math.random().toString(16).slice(2, 10),
        hash: 'sim-hash-' + Math.random().toString(16).slice(2, 10),
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
    }
  }, [activeTab, fetchHistory]);

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
        const calculated = Math.floor(calcMultiplier(Math.max(0, elapsed)) * 100 + 1e-9) / 100;
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
    const p = panel === 2 ? 2 : 1;
    const stake = Number(p === 1 ? amount1 : amount2) || 0;
    if (stake < 10) {
      alert('Enter bet amount (min 10)');
      return;
    }
    const autoCo = p === 1 ? (autoCashout1 ? Math.max(MIN_AUTOCASHOUT, targetCashout1) : 0) : (autoCashout2 ? Math.max(MIN_AUTOCASHOUT, targetCashout2) : 0);

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
            panel: p,
            stake: stake,
            status: 'active',
            cashoutAt: null,
            profit: null
          }, ...(prev || [])]);
          return bal - stake;
        });
      });
  }, [amount1, amount2, autoCashout1, autoCashout2, targetCashout1, targetCashout2, apiPrefix, fetchWallet, userProfile]);

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

    let btnText = 'Place';
    let btnClass = 'avtr-action';
    let btnHandler = () => handlePlaceBet(panel);
    let btnDisabled = false;
    let liveSpanRef = null;

    if (phase === 'betting' && betState.placed) {
      btnText = 'Cancel';
      btnClass = 'avtr-action waiting';
      btnHandler = () => handleCancelBet(panel);
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
      btnDisabled = phase !== 'betting';
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
    const list = detailedHistory.length > 0 ? detailedHistory.slice(0, 50) : history.slice(0, 50).map(cp => ({ crash_point: cp, mode: null }));

    return (
      <div className="avtr-results-tab">
        <div className="avtr-results-header">Results for Last 50 Rounds</div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', padding: '2px 8px 6px', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <span>🛡 provably fair — crash from the sealed hash</span>
          <span>⚙ house-edge round — crash set by the house edge</span>
        </div>
        <div className="avtr-results-grid">
          {list.map((r, i) => {
            const cpVal = parseFloat(r.crash_point);
            const isAuto = r.mode == null ? null : r.mode === 'auto';
            return (
              <div
                className="avtr-result-cell"
                style={{ borderColor: getResultBorderColor(cpVal), position: 'relative' }}
                key={i}
              >
                <span style={{ color: getResultTextColor(cpVal) }}>
                  {cpVal.toFixed(2)}
                </span>
                {isAuto === true && (
                  <span
                    title="Provably fair"
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
          <h3>LIMITS</h3>
          <div className="avtr-rule">• Minimum bet is 10.</div>
          <div className="avtr-rule">• Maximum bet and winnings are subject to your account's limits.</div>
          <div className="avtr-rule">• The maximum multiplier is 30× — a round never goes higher, and an auto-cashout set above 30× will not trigger.</div>
          <div className="avtr-rules-warning">
            A good internet connection is required to play Aviator. If players are unable to cashout due to a poor internet connection, the bet will be settled as lost.
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
    </div>
  );
}
