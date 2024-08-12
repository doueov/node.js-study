const puppeteer = require('puppeteer');
(async () => {
    const brower = await puppeteer.launch({
        headless: false
    });
    const page = await brower.newPage();
    await page.goto("https://www.naver.com");
    page.setViewport();

    await page.screenshot({ path: 'example2.png' });

    await brower.screenshot.close();
})