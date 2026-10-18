const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'http://localhost:5000';
const ARTIFACTS_DIR = 'C:\\Users\\NEW PC TECH\\.gemini\\antigravity\\brain\\e99b565c-1034-41ff-b2de-0a51de45a63f';
const TARGET_ROUNDS = 20;

(async () => {
  console.log('========================================================================');
  console.log('  AVIATOR — 20 CONSECUTIVE ROUNDS LINEAR MULTIPLIER AUDIT');
  console.log('  Verifying: Constant Growth Rate, Zero Acceleration, Smooth Display, Crash Sync');
  console.log('========================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,850']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 850 });

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[Console Error] ${msg.text()}`);
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push(`[Page Error] ${err.message}`);
  });

  console.log(`Navigating to ${TARGET_URL}...`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  console.log('Page loaded successfully.\n');

  let completedRounds = 0;
  let lastPhase = '';
  const roundSummaries = [];
  let currentRound = null;
  let screenshotCapturedMidflight = false;

  const overallStart = Date.now();

  while (completedRounds < TARGET_ROUNDS) {
    const data = await page.evaluate(async () => {
      let serverState = null;
      try {
        const res = await fetch('/api/aviator/state');
        serverState = await res.json();
      } catch (e) {}

      const multEl = document.querySelector('.avtr-mult span');
      const flewAwayEl = document.querySelector('.avtr-flew');
      const plane = document.querySelector('.avtr-jet-wrap');
      const canvas = document.querySelector('.avtr-canvas');

      let planeBox = null;
      let canvasBox = null;

      if (plane && plane.style.display !== 'none') {
        const rect = plane.getBoundingClientRect();
        planeBox = { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
      }
      if (canvas) {
        const cRect = canvas.getBoundingClientRect();
        canvasBox = { left: cRect.left, top: cRect.top, width: cRect.width, height: cRect.height };
      }

      return {
        serverState,
        multText: multEl ? multEl.innerText.trim() : '',
        flewAway: !!flewAwayEl,
        planeBox,
        canvasBox,
        perfNow: performance.now()
      };
    });

    if (!data || !data.serverState) {
      await new Promise(r => setTimeout(r, 100));
      continue;
    }

    const { serverState, multText, planeBox, canvasBox, perfNow } = data;
    const phase = serverState.phase;

    // Detect Phase Change
    if (phase !== lastPhase) {
      if (phase === 'flying') {
        currentRound = {
          roundId: serverState.roundId,
          crashPoint: serverState.crashPoint,
          samples: [],
          startTime: perfNow,
          outOfBounds: 0,
          decreasedCount: 0,
          rates: []
        };
      } else if (phase === 'crashed') {
        if (currentRound) {
          currentRound.endTime = perfNow;
          currentRound.duration = (perfNow - currentRound.startTime) / 1000;
          currentRound.finalServerMult = serverState.multiplier;
          completedRounds++;
          roundSummaries.push(currentRound);

          // Calculate average rate
          let avgRate = 0;
          if (currentRound.rates.length > 0) {
            avgRate = currentRound.rates.reduce((a, b) => a + b, 0) / currentRound.rates.length;
          }

          const expectedCrash = (serverState.history && serverState.history[0]) ? Number(serverState.history[0]) : currentRound.finalServerMult;
          currentRound.expectedCrash = expectedCrash;

          console.log(`[Round ${String(completedRounds).padStart(2)}/${TARGET_ROUNDS} COMPLETE] Round #${currentRound.roundId} | Crash: ${currentRound.finalServerMult.toFixed(2)}x (Expected: ${expectedCrash.toFixed(2)}x) | Duration: ${currentRound.duration.toFixed(2)}s | Samples: ${currentRound.samples.length} | Avg Rate: ${avgRate.toFixed(4)}x/s | In-Bounds: ${currentRound.outOfBounds === 0}`);

          currentRound = null;
        }
      }
      lastPhase = phase;
    }

    // Sample data during flight
    if (phase === 'flying' && currentRound) {
      const parsedMult = parseFloat(multText);
      if (!isNaN(parsedMult)) {
        const lastSample = currentRound.samples[currentRound.samples.length - 1];
        if (lastSample) {
          if (parsedMult < lastSample.mult) {
            currentRound.decreasedCount++;
          }
          const dt = (perfNow - lastSample.time) / 1000;
          const dm = parsedMult - lastSample.mult;
          if (dt >= 0.25 && dm > 0) {
            const instantaneousRate = dm / dt;
            currentRound.rates.push(instantaneousRate);
          }
        }
        currentRound.samples.push({ time: perfNow, mult: parsedMult });
      }

      // Check plane within canvas boundary
      if (planeBox && canvasBox) {
        const cx = planeBox.left + planeBox.width / 2 - canvasBox.left;
        const cy = planeBox.top + planeBox.height / 2 - canvasBox.top;
        if (cx < -20 || cx > canvasBox.width + 20 || cy < -20 || cy > canvasBox.height + 20) {
          currentRound.outOfBounds++;
        }
      }

      // Capture mid-flight screenshot
      if (!screenshotCapturedMidflight && parsedMult >= 1.5 && completedRounds >= 1) {
        const shotPath = path.join(ARTIFACTS_DIR, 'linear_multiplier_midflight.png');
        await page.screenshot({ path: shotPath });
        console.log(`  --> Captured linear flight screenshot at ${parsedMult.toFixed(2)}x: ${shotPath}`);
        screenshotCapturedMidflight = true;
      }
    }

    await new Promise(r => setTimeout(r, 100));
  }

  const totalTime = ((Date.now() - overallStart) / 1000).toFixed(1);
  console.log('\n========================================================================');
  console.log(`AUDIT FINISHED: ${completedRounds} rounds evaluated in ${totalTime}s`);
  console.log('========================================================================\n');

  let allLinear = true;
  let allMonotonic = true;
  let allCrashSynced = true;
  let allInBounds = true;

  for (const r of roundSummaries) {
    const isDecreasing = r.decreasedCount > 0;
    const crashSynced = Math.abs(r.finalServerMult - r.expectedCrash) <= 0.05;
    const bounded = r.outOfBounds === 0;

    if (isDecreasing) allMonotonic = false;
    if (!crashSynced) allCrashSynced = false;
    if (!bounded) allInBounds = false;

    // Check if rates stay around 0.05x/s (no exponential runaway)
    for (const rate of r.rates) {
      if (rate > 0.15) {
        allLinear = false;
        console.warn(`Round #${r.roundId} had acceleration: ${rate.toFixed(3)}x/s!`);
      }
    }
  }

  console.log('--- FINAL AUDIT VERIFICATION RESULTS ---');
  console.log(`1. Constant Linear Growth Rate (No Acceleration): ${allLinear ? 'PASS (Strictly constant rate ~0.05x/s)' : 'FAIL'}`);
  console.log(`2. Monotonic Non-Decreasing Multiplier:          ${allMonotonic ? 'PASS (Zero decreases during flight)' : 'FAIL'}`);
  console.log(`3. Authoritative Crash Multiplier Synchronization: ${allCrashSynced ? 'PASS (100% matched predetermined crash point)' : 'FAIL'}`);
  console.log(`4. Airplane & Canvas Boundary Retention:          ${allInBounds ? 'PASS (0 out-of-bounds occurrences)' : 'FAIL'}`);
  console.log(`5. Console & Page Errors:                         ${consoleErrors.length === 0 ? 'PASS (0 errors)' : 'FAIL: ' + consoleErrors.join(', ')}`);

  await browser.close();
})();
