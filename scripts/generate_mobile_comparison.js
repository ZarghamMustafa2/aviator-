const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = 'C:\\Users\\NEW PC TECH\\.gemini\\antigravity\\brain\\e99b565c-1034-41ff-b2de-0a51de45a63f';

function toDataUri(filePath) {
  const buf = fs.readFileSync(filePath);
  return 'data:image/png;base64,' + buf.toString('base64');
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1800 });

  const ref1 = toDataUri(path.join(ARTIFACTS_DIR, 'ref_frame_waiting_countdown.png'));
  const cur1 = toDataUri(path.join(ARTIFACTS_DIR, 'current_2_countdown.png'));

  const ref2 = toDataUri(path.join(ARTIFACTS_DIR, 'ref_frame_mid_flight.png'));
  const cur2 = toDataUri(path.join(ARTIFACTS_DIR, 'current_7_medium_flight.png'));

  const ref3 = toDataUri(path.join(ARTIFACTS_DIR, 'ref_frame_crashed_flew_away.png'));
  const cur3 = toDataUri(path.join(ARTIFACTS_DIR, 'current_10_flew_away_result.png'));

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body { margin: 0; padding: 24px; background: #0b0f19; color: #fff; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; }
      h1 { text-align: center; margin-bottom: 8px; font-size: 26px; color: #38bdf8; letter-spacing: 0.5px; }
      p.subtitle { text-align: center; color: #94a3b8; margin-top: 0; margin-bottom: 24px; font-size: 14px; }
      .row { display: flex; gap: 20px; justify-content: center; margin-bottom: 24px; }
      .card { background: #151e2e; border-radius: 8px; padding: 14px; border: 1px solid #243248; flex: 1; max-width: 440px; }
      .card h2 { margin: 0 0 12px 0; font-size: 16px; color: #f8fafc; text-align: center; border-bottom: 1px solid #243248; padding-bottom: 8px; }
      .img-pair { display: flex; gap: 10px; justify-content: center; }
      .pane { text-align: center; flex: 1; }
      .pane span { display: block; font-size: 11px; margin-bottom: 6px; font-weight: 700; letter-spacing: 0.5px; }
      .pane.ref span { color: #f59e0b; }
      .pane.cur span { color: #10b981; }
      img { width: 100%; height: auto; border-radius: 4px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 4px 12px rgba(0,0,0,0.5); }
    </style>
  </head>
  <body>
    <h1>AVIATOR REFERENCE vs. CURRENT GAME COMPARISON</h1>
    <p class="subtitle">Direct Pixel & Layout Analysis (WhatsApp Reference Video vs. Current Mobile Build)</p>

    <div class="row">
      <div class="card">
        <h2>1. Waiting & Countdown Phase</h2>
        <div class="img-pair">
          <div class="pane ref">
            <span>ORIGINAL REFERENCE (t=5s)</span>
            <img src="${ref1}" />
          </div>
          <div class="pane cur">
            <span>CURRENT BUILD (Countdown=6)</span>
            <img src="${cur1}" />
          </div>
        </div>
      </div>

      <div class="card">
        <h2>2. Mid-Flight Ascent & Curve</h2>
        <div class="img-pair">
          <div class="pane ref">
            <span>ORIGINAL REFERENCE (1.50x)</span>
            <img src="${ref2}" />
          </div>
          <div class="pane cur">
            <span>CURRENT BUILD (1.83x)</span>
            <img src="${cur2}" />
          </div>
        </div>
      </div>

      <div class="card">
        <h2>3. Crashed State & FLEW AWAY!</h2>
        <div class="img-pair">
          <div class="pane ref">
            <span>ORIGINAL REFERENCE (2.21x)</span>
            <img src="${ref3}" />
          </div>
          <div class="pane cur">
            <span>CURRENT BUILD (Crashed)</span>
            <img src="${cur3}" />
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(html, { waitUntil: 'load' });
  const outPath = path.join(ARTIFACTS_DIR, 'MOBILE_VISUAL_COMPARISON.png');
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Generated MOBILE_VISUAL_COMPARISON.png at:', outPath);

  fs.copyFileSync(outPath, path.join('e:/Aviator', 'MOBILE_VISUAL_COMPARISON.png'));
  console.log('Copied to e:/Aviator/MOBILE_VISUAL_COMPARISON.png');

  await browser.close();
})();
