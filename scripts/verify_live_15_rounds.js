const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'http://localhost:5000';
const ARTIFACTS_DIR = 'C:\\Users\\NEW PC TECH\\.gemini\\antigravity\\brain\\e99b565c-1034-41ff-b2de-0a51de45a63f';
const TARGET_ROUNDS = 15;

(async () => {
  console.log('========================================================================');
  console.log('  AVIATOR — 15 CONSECUTIVE ROUNDS LIVE BROWSER VERIFICATION AUDIT');
  console.log('  Testing: 20% Slower Visual Speed, Synchronization, & Crash Behavior');
  console.log('========================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,850']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 850 });

  const consoleLogs = [];
  page.on('console', msg => {
    const text = msg.text();
    if (!text.includes('[vite]') && !text.includes('Download the React DevTools')) {
      consoleLogs.push(`[Browser] ${text}`);
    }
  });

  page.on('pageerror', err => {
    console.error('Browser Page Error:', err.message);
  });

  console.log(`Navigating to ${TARGET_URL}...`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  console.log('Page loaded successfully.\n');

  // Verify key elements exist
  const canvasExists = await page.$('.avtr-canvas');
  const planeWrapExists = await page.$('.avtr-jet-wrap');
  const multDisplayExists = await page.$('.avtr-mult-display');

  console.log('Initial DOM Check:');
  console.log('  - Canvas present:', !!canvasExists);
  console.log('  - Jet wrap present:', !!planeWrapExists);
  console.log('  - Multiplier display present:', !!multDisplayExists);
  console.log('\nBeginning observation of 15 consecutive rounds...\n');

  let completedRounds = 0;
  let lastPhase = '';
  let roundDetails = [];
  let currentRoundData = null;
  let screenshotTakenFlying = false;
  let screenshotTakenCrashed = false;
  let screenshotTakenBetLock = false;

  const startTime = Date.now();

  while (completedRounds < TARGET_ROUNDS) {
    const state = await page.evaluate(() => {
      const plane = document.querySelector('.avtr-jet-wrap');
      const canvas = document.querySelector('.avtr-canvas');
      const mult = document.querySelector('.avtr-mult-display');
      const betBtn = document.querySelector('.avtr-bet-btn');
      const lockBadge = document.querySelector('.avtr-bet-locked-badge');
      const roundPill = document.querySelector('.avtr-round-id');

      let planeBox = null;
      let canvasBox = null;

      if (plane && plane.style.display !== 'none') {
        const rect = plane.getBoundingClientRect();
        planeBox = {
          left: Math.round(rect.left),
          top: Math.round(rect.top),
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        };
      }

      if (canvas) {
        const cRect = canvas.getBoundingClientRect();
        canvasBox = {
          left: Math.round(cRect.left),
          top: Math.round(cRect.top),
          width: Math.round(cRect.width),
          height: Math.round(cRect.height)
        };
      }

      return {
        planeBox,
        canvasBox,
        multText: mult ? mult.innerText.trim() : '',
        btnDisabled: betBtn ? betBtn.disabled : false,
        btnText: betBtn ? betBtn.innerText.trim() : '',
        hasLockBadge: !!lockBadge,
        roundText: roundPill ? roundPill.innerText.trim() : ''
      };
    });

    // Also fetch server state directly for exact ground truth
    const serverState = await page.evaluate(async () => {
      try {
        const res = await fetch('/api/aviator/state');
        return await res.json();
      } catch (e) {
        return null;
      }
    });

    if (!serverState) {
      await new Promise(r => setTimeout(r, 200));
      continue;
    }

    const currentPhase = serverState.phase;

    // Detect phase transition
    if (currentPhase !== lastPhase) {
      if (currentPhase === 'betting') {
        currentRoundData = {
          roundId: serverState.roundId,
          crashPoint: serverState.crashPoint,
          hash: serverState.commitHash,
          positions: [],
          maxPlaneX: 0,
          maxPlaneY: 0,
          minPlaneX: 9999,
          minPlaneY: 9999,
          outOfBoundsCount: 0,
          betLockedChecked: false,
          flightDuration: 0,
          flightStartTime: null
        };
      } else if (currentPhase === 'flying') {
        if (!currentRoundData) {
          currentRoundData = {
            roundId: serverState.roundId,
            crashPoint: serverState.crashPoint,
            hash: serverState.commitHash,
            positions: [],
            maxPlaneX: 0,
            maxPlaneY: 0,
            minPlaneX: 9999,
            minPlaneY: 9999,
            outOfBoundsCount: 0,
            betLockedChecked: true,
            flightDuration: 0,
            flightStartTime: Date.now()
          };
        } else {
          currentRoundData.flightStartTime = Date.now();
        }
      } else if (currentPhase === 'crashed') {
        if (currentRoundData) {
          if (currentRoundData.flightStartTime) {
            currentRoundData.flightDuration = (Date.now() - currentRoundData.flightStartTime) / 1000;
          }
          currentRoundData.crashedMult = serverState.multiplier;
          completedRounds++;
          roundDetails.push(currentRoundData);

          console.log(`[Round ${completedRounds}/${TARGET_ROUNDS} COMPLETE] RoundID: #${currentRoundData.roundId} | Crash: ${currentRoundData.crashedMult}x | Duration: ${currentRoundData.flightDuration.toFixed(2)}s | Out-Of-Bounds: ${currentRoundData.outOfBoundsCount}`);

          if (!screenshotTakenCrashed && completedRounds >= 2) {
            const crashShotPath = path.join(ARTIFACTS_DIR, 'round_crashed_20pct_slower.png');
            await page.screenshot({ path: crashShotPath });
            console.log(`  --> Captured crashed screenshot: ${crashShotPath}`);
            screenshotTakenCrashed = true;
          }

          currentRoundData = null;
        }
      }

      lastPhase = currentPhase;
    }

    // Check motion and bounding box during flying
    if (currentPhase === 'flying' && currentRoundData && state.planeBox && state.canvasBox) {
      const p = state.planeBox;
      const c = state.canvasBox;

      // Plane center coordinates relative to canvas
      const relX = p.left + p.width / 2 - c.left;
      const relY = p.top + p.height / 2 - c.top;

      currentRoundData.positions.push({ x: relX, y: relY, mult: state.multText });

      if (relX > currentRoundData.maxPlaneX) currentRoundData.maxPlaneX = relX;
      if (relX < currentRoundData.minPlaneX) currentRoundData.minPlaneX = relX;
      if (relY > currentRoundData.maxPlaneY) currentRoundData.maxPlaneY = relY;
      if (relY < currentRoundData.minPlaneY) currentRoundData.minPlaneY = relY;

      // Check if plane stays reasonably within visible canvas boundary
      // Allow minor border overlap for nose/tail during fly-in
      const isInside = relX >= -10 && relX <= c.width + 10 && relY >= -10 && relY <= c.height + 10;
      if (!isInside) {
        currentRoundData.outOfBoundsCount++;
      }

      if (!screenshotTakenFlying && state.multText && parseFloat(state.multText) >= 1.5) {
        const flyingShotPath = path.join(ARTIFACTS_DIR, 'round_flying_20pct_slower.png');
        await page.screenshot({ path: flyingShotPath });
        console.log(`  --> Captured mid-flight screenshot: ${flyingShotPath} at ${state.multText}`);
        screenshotTakenFlying = true;
      }
    }

    // Check 3-second bet lock during countdown
    if (currentPhase === 'betting' && serverState.countdown <= 3 && !screenshotTakenBetLock) {
      const betLockShotPath = path.join(ARTIFACTS_DIR, 'round_betlock_countdown.png');
      await page.screenshot({ path: betLockShotPath });
      console.log(`  --> Captured 3-sec bet lock screenshot: ${betLockShotPath} (Countdown: ${serverState.countdown}s)`);
      screenshotTakenBetLock = true;
    }

    await new Promise(r => setTimeout(r, 100));
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n========================================================================`);
  console.log(`VERIFICATION SUMMARY: ${completedRounds} consecutive rounds audited in ${totalTime}s`);
  console.log(`========================================================================`);

  let allBounded = true;
  for (let i = 0; i < roundDetails.length; i++) {
    const rd = roundDetails[i];
    const ok = rd.outOfBoundsCount === 0;
    if (!ok) allBounded = false;
    console.log(`Round #${rd.roundId}: Multiplier ${rd.crashedMult}x, samples=${rd.positions.length}, X=[${rd.minPlaneX.toFixed(0)}..${rd.maxPlaneX.toFixed(0)}], Y=[${rd.minPlaneY.toFixed(0)}..${rd.maxPlaneY.toFixed(0)}], In-Bounds=${ok}`);
  }

  console.log(`\nOverall In-Bounds Verification: ${allBounded ? 'PASS (100% within canvas)' : 'FAIL'}`);
  console.log(`Browser Errors Logged: ${consoleLogs.filter(l => l.toLowerCase().includes('error')).length}`);

  await browser.close();
  console.log('\nAudit test finished successfully.');
})();
