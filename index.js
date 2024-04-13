const puppeteer = require('puppeteer');

async function captureScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://kioskcodb.com/Kiosk-4/printed.html');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
  console.log('Screenshot saved as screenshot.png');
}

// Call the captureScreenshot function
captureScreenshot();
