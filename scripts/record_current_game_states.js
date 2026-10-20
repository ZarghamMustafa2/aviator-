const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'http://localhost:5000';
const ARTIFACTS_DIR = 'C:\\Users\\NEW PC TECH\\.gemini\\antigravity\\brain\\e99b565c-1034-41ff-b2de-0a51de45a63f';

(async () => {
  console.log('Connecting to local Aviator game at 480x1068 mobile viewport...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=480,1068']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 480, height: 1068, isMobile: true });
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });

  const captured = {};
  const needed = [
    'waiting',
    'countdown',
    'betting_open',
    'bet_lock_3s',
    'round_start',
    'early_flight',
    'medium_flight',
    'higher_mult_flight',
    'crash_transition',
    'flew_away_result',
    'next_round_reset'
  ];

  console.log('Capturing equivalent states for synchronized comparison...');
  const start = Date.now();
  let prevPhase = '';

  while (Object.keys(captured).length < needed.length && (Date.now() - start) < 180000) {
    const st = await page.evaluate(async () => {
      let serverState = null;
      try {
        const r = await fetch('/api/aviator/state');
        serverState = await r.json();
      } catch (e) {}

      const mult = document.querySelector('.avtr-mult span');
      const flew = document.querySelector('.avtr-flew');
      const overlay = document.querySelector('.avtr-overlay-text');
      const betBtn = document.querySelector('.avtr-bet-btn');

      return {
        serverState,
        multVal: mult ? parseFloat(mult.innerText) : 1.0,
        multText: mult ? mult.innerText.trim() : '',
        hasFlew: !!flew,
        overlayText: overlay ? overlay.innerText.trim() : '',
        btnText: betBtn ? betBtn.innerText.trim() : '',
        btnDisabled: betBtn ? betBtn.disabled : false
      };
    });

    if (!st || !st.serverState) {
      await new Promise(r => setTimeout(r, 200));
      continue;
    }

    const { serverState, multVal, multText, hasFlew, overlayText, btnText } = st;
    const phase = serverState.phase;
    const countdown = serverState.countdown;

    // 1. Waiting state
    if (phase === 'waiting' && !captured['waiting']) {
      const p = path.join(ARTIFACTS_DIR, 'current_1_waiting.png');
      await page.screenshot({ path: p });
      captured['waiting'] = p;
      console.log('Captured 1: waiting');
    }

    // 2. Countdown / 3. Betting Open
    if (phase === 'betting' && countdown > 3 && !captured['betting_open']) {
      const p = path.join(ARTIFACTS_DIR, 'current_3_betting_open.png');
      await page.screenshot({ path: p });
      captured['betting_open'] = p;
      console.log('Captured 3: betting_open');
    }

    if (phase === 'betting' && countdown > 3 && !captured['countdown']) {
      const p = path.join(ARTIFACTS_DIR, 'current_2_countdown.png');
      await page.screenshot({ path: p });
      captured['countdown'] = p;
      console.log('Captured 2: countdown');
    }

    // 4. Bet Lock 3s
    if (phase === 'betting' && countdown <= 3 && !captured['bet_lock_3s']) {
      const p = path.join(ARTIFACTS_DIR, 'current_4_bet_lock_3s.png');
      await page.screenshot({ path: p });
      captured['bet_lock_3s'] = p;
      console.log('Captured 4: bet_lock_3s');
    }

    // 5. Round Start (flying, mult between 1.00 and 1.08)
    if (phase === 'flying' && multVal >= 1.00 && multVal <= 1.08 && !captured['round_start']) {
      const p = path.join(ARTIFACTS_DIR, 'current_5_round_start.png');
      await page.screenshot({ path: p });
      captured['round_start'] = p;
      console.log('Captured 5: round_start');
    }

    // 6. Early Flight (1.10 - 1.35)
    if (phase === 'flying' && multVal >= 1.15 && multVal <= 1.35 && !captured['early_flight']) {
      const p = path.join(ARTIFACTS_DIR, 'current_6_early_flight.png');
      await page.screenshot({ path: p });
      captured['early_flight'] = p;
      console.log('Captured 6: early_flight at ' + multText);
    }

    // 7. Medium Flight (1.45 - 2.50)
    if (phase === 'flying' && multVal >= 1.60 && multVal <= 2.20 && !captured['medium_flight']) {
      const p = path.join(ARTIFACTS_DIR, 'current_7_medium_flight.png');
      await page.screenshot({ path: p });
      captured['medium_flight'] = p;
      console.log('Captured 7: medium_flight at ' + multText);
    }

    // 8. Higher Mult Flight (> 2.50)
    if (phase === 'flying' && multVal >= 2.50 && !captured['higher_mult_flight']) {
      const p = path.join(ARTIFACTS_DIR, 'current_8_higher_mult_flight.png');
      await page.screenshot({ path: p });
      captured['higher_mult_flight'] = p;
      console.log('Captured 8: higher_mult_flight at ' + multText);
    }

    // 9. Crash Transition & 10. Flew Away Result
    if (phase === 'crashed' && hasFlew && !captured['flew_away_result']) {
      const p = path.join(ARTIFACTS_DIR, 'current_10_flew_away_result.png');
      await page.screenshot({ path: p });
      captured['flew_away_result'] = p;
      captured['crash_transition'] = p;
      console.log('Captured 9 & 10: crash_transition / flew_away_result');
    }

    // 11. Next-Round Reset (transitioning from crashed back to betting)
    if (prevPhase === 'crashed' && phase === 'betting' && !captured['next_round_reset']) {
      const p = path.join(ARTIFACTS_DIR, 'current_11_next_round_reset.png');
      await page.screenshot({ path: p });
      captured['next_round_reset'] = p;
      console.log('Captured 11: next_round_reset');
    }

    prevPhase = phase;
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`Captured ${Object.keys(captured).length} states.`);
  await browser.close();
})();
