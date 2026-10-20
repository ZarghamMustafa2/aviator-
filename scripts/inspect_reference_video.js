const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = 'C:\\Users\\NEW PC TECH\\.gemini\\antigravity\\brain\\e99b565c-1034-41ff-b2de-0a51de45a63f';
const VIDEO_PATH = 'e:/Aviator/WhatsApp Video 2026-10-16 at 8.43.52 AM (1).mp4';

(async () => {
  console.log('Loading reference video in headless Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--allow-file-access-from-files', '--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Use file url
  const encodedPath = encodeURI(VIDEO_PATH.replace(/\\/g, '/'));
  const fileUrl = 'file:///' + encodedPath;

  await page.goto(fileUrl, { waitUntil: 'load' });

  const info = await page.evaluate(async () => {
    const v = document.querySelector('video');
    if (!v) return { error: 'No video element' };
    await new Promise((res) => {
      if (v.readyState >= 1) res();
      else v.onloadedmetadata = res;
      setTimeout(res, 5000);
    });
    return {
      duration: v.duration,
      videoWidth: v.videoWidth,
      videoHeight: v.videoHeight,
      readyState: v.readyState
    };
  });

  console.log('Reference Video Info:', info);

  // Function to extract frame at timestamp
  async function extractFrame(timeSec, filename) {
    await page.evaluate(async (t) => {
      const v = document.querySelector('video');
      v.currentTime = t;
      await new Promise((res) => {
        v.onseeked = res;
        setTimeout(res, 2000);
      });
    }, timeSec);

    const outPath = path.join(ARTIFACTS_DIR, filename);
    await page.screenshot({ path: outPath });
    console.log(`Extracted frame at t=${timeSec}s -> ${outPath}`);
  }

  // Extract key frames matching the phases
  // 1. Waiting / Countdown: R1 around t=5s
  await extractFrame(5.0, 'ref_frame_waiting_countdown.png');
  // 2. Flight takeoff: R1 around t=15s
  await extractFrame(15.0, 'ref_frame_takeoff.png');
  // 3. Mid flight: R1 around t=20s
  await extractFrame(20.0, 'ref_frame_mid_flight.png');
  // 4. High flight: R8 around t=200s (3m20s)
  await extractFrame(200.0, 'ref_frame_high_flight.png');
  // 5. Crashed FLEW AWAY: R1 around t=29s
  await extractFrame(29.0, 'ref_frame_crashed_flew_away.png');

  await browser.close();
  console.log('Done extracting reference video frames.');
})();
