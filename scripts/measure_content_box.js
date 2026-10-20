const puppeteer = require('puppeteer-core');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const imgPath = 'C:/Users/NEW PC TECH/.gemini/antigravity/brain/e99b565c-1034-41ff-b2de-0a51de45a63f/ref_frame_waiting_countdown.png';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  const b64 = 'data:image/png;base64,' + fs.readFileSync(imgPath).toString('base64');
  
  await page.setContent('<img id="img" src="' + b64 + '">');
  
  const dims = await page.evaluate(() => {
    const img = document.getElementById('img');
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    
    let minX = canvas.width, maxX = 0;
    let minY = canvas.height, maxY = 0;
    
    // Look specifically in the middle rows (y between 100 and 700)
    for (let y = 100; y < 700; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        const r = data[i], g = data[i+1], b = data[i+2];
        if (r > 20 || g > 20 || b > 20) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    return { width: canvas.width, height: canvas.height, minX, maxX, minY, maxY, contentWidth: maxX - minX };
  });
  
  console.log('Detected Reference Content Dimensions:', dims);
  await browser.close();
})();
