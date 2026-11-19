// Renders frontpage.html to entry.png at exactly 1024x1024 using headless Chrome.
// The page is fully self-contained (inline CSS/SVG, system fonts), so no network is needed.
// Usage: node render.cjs [output-path]
const puppeteer = require('/home/hatch/workspace/makefun/radar-tools/node_modules/puppeteer');
const { join } = require('node:path');

(async () => {
  const out = process.argv[2] ?? join(__dirname, 'entry.png');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
    await page.goto('file://' + join(__dirname, 'frontpage.html'), { waitUntil: 'load' });
    await new Promise((r) => setTimeout(r, 350));
    const contentHeight = await page.evaluate(() => {
      const el = document.querySelector('.page');
      let bottom = 0;
      for (const child of el.children) bottom = Math.max(bottom, child.getBoundingClientRect().bottom);
      return Math.round(bottom);
    });
    console.log('content bottom edge:', contentHeight, 'px (page is 1024)');
    await page.screenshot({ path: out, type: 'png' });
    console.log('wrote', out);
  } finally {
    await browser.close();
  }
})();
