const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT_DIR = path.join(__dirname, 'reference_data');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function inspect(url, name) {
  console.log(`Starting inspection for: ${url} (${name})`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const networkLog = [];
  page.on('request', req => {
    networkLog.push({ type: 'req', url: req.url(), method: req.method(), resourceType: req.resourceType() });
  });
  page.on('response', async res => {
    networkLog.push({ type: 'res', url: res.url(), status: res.status() });
  });

  page.on('console', msg => console.log(`[PAGE LOG ${name}]`, msg.type(), msg.text()));
  page.on('pageerror', err => console.log(`[PAGE ERR ${name}]`, err.message));

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (e) {
    console.log(`Goto finished with: ${e.message}`);
  }

  // Wait extra 3 seconds for any render
  await new Promise(r => setTimeout(r, 4000));

  const screenshotPath = path.join(OUT_DIR, `${name}_1280x800.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`Saved screenshot to ${screenshotPath}`);

  // Get HTML
  const content = await page.content();
  fs.writeFileSync(path.join(OUT_DIR, `${name}_dom.html`), content, 'utf8');

  // Check frames
  const frames = page.frames();
  console.log(`Page has ${frames.length} frames.`);
  for (let i = 0; i < frames.length; i++) {
    const f = frames[i];
    console.log(`Frame ${i}: ${f.url()}`);
    try {
      const fHtml = await f.content();
      fs.writeFileSync(path.join(OUT_DIR, `${name}_frame_${i}.html`), fHtml, 'utf8');
    } catch (e) {}
  }

  // Save network log
  fs.writeFileSync(path.join(OUT_DIR, `${name}_network.json`), JSON.stringify(networkLog, null, 2), 'utf8');

  await browser.close();
}

async function main() {
  await inspect('https://www.bpro.life/Common/TeenPattiStudio?path=game%2Faviator', 'common_tps');
  await inspect('https://www.bpro.life/TeenPattiStudio/game/aviator', 'direct_tps_aviator');
}

main().catch(console.error);
