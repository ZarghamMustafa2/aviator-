const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new' });
  const page = await browser.newPage();
  
  page.on('request', req => console.log('REQ:', req.method(), req.url()));
  page.on('response', res => console.log('RES:', res.status(), res.url()));
  page.on('requestfailed', req => console.log('FAIL:', req.url(), req.failure()?.errorText));

  page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGEERR:', err.message));

  try {
    await page.goto('http://localhost:5000/TeenPattiStudio/game/aviator', { waitUntil: 'domcontentloaded', timeout: 10000 });
  } catch (e) {
    console.log('Goto result:', e.message);
  }

  await new Promise(r => setTimeout(r, 4000));
  console.log('Title:', await page.title());
  console.log('URL:', page.url());
  const root = await page.evaluate(() => document.getElementById('root')?.innerHTML);
  console.log('Root HTML length:', root ? root.length : 0);
  console.log('Root HTML preview:', root ? root.substring(0, 300) : 'none');

  await browser.close();
})();
