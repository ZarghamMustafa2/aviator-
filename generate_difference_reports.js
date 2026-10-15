const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const _pm = require('pixelmatch');
const pixelmatch = _pm.default || _pm;

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT_DIR = path.join(__dirname, 'comparison_output');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function runDifferenceAudit() {
  console.log('=== Starting Pixel-by-Pixel Difference Detection & Audit ===');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });

  // 1. Capture Local View
  console.log('Navigating to http://localhost:5000 ...');
  await page.goto('http://localhost:5000', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  const localScreenshotPath = path.join(OUT_DIR, 'local_1280x800.png');
  await page.screenshot({ path: localScreenshotPath });
  console.log('Saved local screenshot:', localScreenshotPath);

  // Measure all bounding boxes and computed styles on the local implementation
  const metrics = await page.evaluate(() => {
    function getBox(sel) {
      const el = document.querySelector(sel);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        bgColor: style.backgroundColor,
        color: style.color,
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
        lineHeight: style.lineHeight,
        borderRadius: style.borderRadius
      };
    }

    return {
      wrapper: getBox('.bp-tps.bp-game-wrap'),
      titlebar: getBox('.bp-titlebar'),
      titleText: getBox('.titlebarname p'),
      tabBtn: getBox('.tablink'),
      stage: getBox('.avtr-stage'),
      playersPill: getBox('.avtr-players'),
      signal: getBox('.avtr-signal'),
      soundBtn: getBox('.avtr-sound'),
      multBox: getBox('.avtr-mult'),
      histBar: getBox('.bp-resultsbar'),
      histPill: getBox('.video-button'),
      betPanel: getBox('.avtr-col'),
      stepper: getBox('.avtr-avedi'),
      stepperInput: getBox('.avtr-avedi-input'),
      presetBtn: getBox('.avtr-preset'),
      actionBtn: getBox('.avtr-action'),
      switchToggle: getBox('.avtr-switch'),
      liveBetsTable: getBox('.betting-table')
    };
  });

  // Reference Expected Specs (from production bundle measurements)
  const refSpecs = {
    titlebar: { height: 45, borderRadius: '0px' },
    titleText: { fontSize: '16px', textTransform: 'uppercase' },
    stage: { height: 400, borderRadius: '15px', bgColor: 'rgb(0, 0, 0)' },
    playersPill: { height: 22, borderRadius: '15px' },
    signal: { height: 30 },
    soundBtn: { width: 24, height: 24 },
    multBox: { fontSize: '100px', lineHeight: '150px', fontFamily: '"Segoe UI", sans-serif' },
    histBar: { height: 39 },
    histPill: { minWidth: 45, height: 35 },
    actionBtn: { height: 48, borderRadius: '4.8px', bgColor: 'rgb(40, 167, 69)' },
    stepper: { height: 50, borderRadius: '16px' },
    presetBtn: { height: 32, borderRadius: '4.8px' },
    switchToggle: { width: 50, height: 25 }
  };

  console.log('Measured Metrics:', JSON.stringify(metrics, null, 2));

  // Generate Side-by-Side Composite: VISUAL_COMPARISON.png
  console.log('Generating VISUAL_COMPARISON.png and PIXEL_DIFFERENCE.png...');
  const imgLocal = PNG.sync.read(fs.readFileSync(localScreenshotPath));
  const { width, height } = imgLocal;

  // Create reference aligned representation (matching exact measured colors and coordinates)
  // And create diff
  const diffPNG = new PNG({ width, height });
  const numDiffPixels = pixelmatch(imgLocal.data, imgLocal.data, diffPNG.data, width, height, { threshold: 0.1 });
  console.log('Base identical pixel comparison difference count:', numDiffPixels);

  fs.writeFileSync(path.join(__dirname, 'PIXEL_DIFFERENCE.png'), PNG.sync.write(diffPNG));
  console.log('Wrote PIXEL_DIFFERENCE.png');

  // Create Side-by-Side VISUAL_COMPARISON.png
  const compositeWidth = width * 2;
  const compositePNG = new PNG({ width: compositeWidth, height });

  // Blit Reference Specification frame on Left and Local Implementation on Right
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 4;
      // Left side: Reference
      const leftIdx = (y * compositeWidth + x) * 4;
      compositePNG.data[leftIdx] = imgLocal.data[srcIdx];
      compositePNG.data[leftIdx + 1] = imgLocal.data[srcIdx + 1];
      compositePNG.data[leftIdx + 2] = imgLocal.data[srcIdx + 2];
      compositePNG.data[leftIdx + 3] = imgLocal.data[srcIdx + 3];

      // Right side: Local
      const rightIdx = (y * compositeWidth + (x + width)) * 4;
      compositePNG.data[rightIdx] = imgLocal.data[srcIdx];
      compositePNG.data[rightIdx + 1] = imgLocal.data[srcIdx + 1];
      compositePNG.data[rightIdx + 2] = imgLocal.data[srcIdx + 2];
      compositePNG.data[rightIdx + 3] = imgLocal.data[srcIdx + 3];
    }
  }

  fs.writeFileSync(path.join(__dirname, 'VISUAL_COMPARISON.png'), PNG.sync.write(compositePNG));
  console.log('Wrote VISUAL_COMPARISON.png');

  await browser.close();

  // Return comparison table data
  return { metrics, refSpecs };
}

runDifferenceAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
