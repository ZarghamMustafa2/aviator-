const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = 'C:\\Users\\NEW PC TECH\\.gemini\\antigravity\\brain\\e99b565c-1034-41ff-b2de-0a51de45a63f';
const VIDEO_PATH = 'e:/Aviator/WhatsApp Video 2026-10-16 at 8.43.52 AM (1).mp4';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 480, height: 1068 });

  const encodedPath = encodeURI(VIDEO_PATH.replace(/\\/g, '/'));
  await page.goto('file:///' + encodedPath, { waitUntil: 'load' });

  async function snap(tSec, name) {
    await page.evaluate(async (t) => {
      const v = document.querySelector('video');
      v.currentTime = t;
      await new Promise(r => { v.onseeked = r; setTimeout(r, 1500); });
    }, tSec);
    const out = path.join(ARTIFACTS_DIR, name);
    await page.screenshot({ path: out });
    console.log(`Saved ${name} at t=${tSec}`);
  }

  // Round 1 countdown ends at ~13.5s.
  // So at t=10.5s it's ~3s left.
  await snap(9.0, 'ref_countdown_5s.png');
  await snap(10.5, 'ref_countdown_3s.png');
  await snap(12.5, 'ref_countdown_1s.png');
  await snap(13.5, 'ref_flight_start.png');

  // Round 8 high flight peak at t=210s (3m30s)
  await snap(208.0, 'ref_r8_peak_5x.png');
  await snap(210.8, 'ref_r8_crash.png');

  await browser.close();
  console.log('Finished capturing detailed reference frames.');
})();
