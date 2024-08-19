const puppeteer = require('puppeteer');
(async () => {
    const brower = await puppeteer.launch({
        headless: false 
    });
    const page = await brower.newPage();
    await page.goto("https://www.naver.com");
    page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1
    });

    await page.screenshot({ path: 'example2.pdf' });

    await page.pdf ({
        path: "examplePDF.pdf",
        format: "A4"
    });

    await page.close();
})();