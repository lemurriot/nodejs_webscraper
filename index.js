const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://learnscraping.com/');
  await page.pdf({
      path: './page.pdf',
      format: 'A4'
  })

  await browser.close();

})();
