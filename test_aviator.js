const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = path.join(__dirname, 'test_results');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runTests() {
  console.log('--- Starting Comprehensive Aviator Test Runner ---');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();

  // Test 1: Desktop 1280x800
  console.log('Testing Desktop 1280x800...');
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5000', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_1280x800_game.png'), fullPage: true });

  // Measure Computed Styles
  const computed = await page.evaluate(() => {
    const stage = document.querySelector('.avtr-stage');
    const stageStyle = stage ? window.getComputedStyle(stage) : {};

    const mult = document.querySelector('.avtr-mult');
    const multStyle = mult ? window.getComputedStyle(mult) : {};

    const placeBtn = document.querySelector('.avtr-action');
    const placeBtnStyle = placeBtn ? window.getComputedStyle(placeBtn) : {};

    const histBar = document.querySelector('.avtr-histbar');
    const histBarStyle = histBar ? window.getComputedStyle(histBar) : {};

    const presets = document.querySelectorAll('.avtr-preset');
    const presetLabels = Array.from(presets).map(p => p.textContent.trim());

    const tableRows = document.querySelectorAll('.betting-table tbody tr');

    return {
      stage: {
        width: stage?.offsetWidth,
        height: stage?.offsetHeight,
        backgroundColor: stageStyle.backgroundColor,
        borderRadius: stageStyle.borderRadius
      },
      mult: {
        fontSize: multStyle.fontSize,
        fontFamily: multStyle.fontFamily,
        lineHeight: multStyle.lineHeight
      },
      placeBtn: {
        height: placeBtnStyle.height,
        backgroundColor: placeBtnStyle.backgroundColor,
        borderRadius: placeBtnStyle.borderRadius,
        fontSize: placeBtnStyle.fontSize
      },
      histBar: {
        height: histBarStyle.height
      },
      presetLabels: presetLabels.slice(0, 4),
      liveBetsCount: tableRows.length
    };
  });

  console.log('Measured Desktop Styles:', JSON.stringify(computed, null, 2));

  // Test 2: Interact with Bet Amount and Presets
  console.log('Testing Preset interaction...');
  const presetButtons = await page.$$('.avtr-preset');
  if (presetButtons.length > 0) {
    await presetButtons[0].click(); // +1,000
    await new Promise(r => setTimeout(r, 300));
  }
  const inputVal = await page.$eval('.avtr-avedi-input', el => el.value);
  console.log('Input value after +1,000 preset click:', inputVal);

  // Test 3: Auto Cashout toggle & stepper
  console.log('Testing Auto Cashout toggle...');
  const autoCoLabels = await page.$$('.avtr-auto-line2 .avtr-auto-label');
  if (autoCoLabels.length > 0) {
    await autoCoLabels[0].click();
    await new Promise(r => setTimeout(r, 500));
  }
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_autocashout_enabled.png') });

  // Test 4: Tab Navigation (Results Tab)
  console.log('Testing Results Tab...');
  const tabButtons = await page.$$('.bp-titlebar .tablink');
  if (tabButtons.length >= 2) {
    await tabButtons[1].click(); // Results
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_results_tab.png') });
  }

  // Test 5: Tab Navigation (Rules Tab)
  console.log('Testing Rules Tab...');
  if (tabButtons.length >= 3) {
    await tabButtons[2].click(); // Rules
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_rules_tab.png') });
  }

  // Switch back to Game
  if (tabButtons.length >= 1) {
    await tabButtons[0].click();
    await new Promise(r => setTimeout(r, 500));
  }

  // Test 6: Mobile Viewport 390x844
  console.log('Testing Mobile 390x844...');
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile_390x844_game.png'), fullPage: true });

  const mobileComputed = await page.evaluate(() => {
    const mult = document.querySelector('.avtr-mult');
    const multStyle = mult ? window.getComputedStyle(mult) : {};
    const avedi = document.querySelector('.avtr-avedi');
    const avediStyle = avedi ? window.getComputedStyle(avedi) : {};
    return {
      multFontSize: multStyle.fontSize,
      avediHeight: avediStyle.height
    };
  });
  console.log('Measured Mobile Styles:', JSON.stringify(mobileComputed, null, 2));

  // Test 7: Variant Switch (Classic Variant)
  console.log('Testing Classic Variant switch...');
  await page.setViewport({ width: 1280, height: 800 });
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const classicBtn = buttons.find(b => b.textContent.includes('Aviator Classic'));
    if (classicBtn) classicBtn.click();
  });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'desktop_classic_variant.png'), fullPage: true });
  console.log('Captured Classic Variant screenshot.');

  // Save report JSON
  fs.writeFileSync(
    path.join(SCREENSHOT_DIR, 'test_metrics.json'),
    JSON.stringify({ computed, mobileComputed }, null, 2),
    'utf8'
  );

  await browser.close();
  console.log('--- Test Runner Completed Successfully ---');
}

runTests().catch(err => {
  console.error('Test runner failed:', err);
  process.exit(1);
});
