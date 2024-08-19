const puppeteer = require('puppeteer');

async function getData() {
    try {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto("https://www.yes24.com/Product/Category/BestSeller?categoryNumber=001&pageNumber=1&pageSize=24");

        await page.select("select#pg_size", "120");
        await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 0 });

        const booklist = await page.evaluate(() => {
            let books = [];
            let elements = document.querySelectorAll("#yesBestList > li");
            elements.forEach(elem => {
                const book = {
                    title: elem.querySelector("div.item_info > div.info_row.info_name > a.gd_name").innerText,
                    rank: elem.querySelector(".ico.rank").innerText,
                    img: elem.querySelector("em.img_bdr > img").getAttribute('src'),
                    auth: elem.querySelector("div.item_info > div.info_row.info_pubGrp > span.info_auth").innerText,
                    pub: elem.querySelector("div.item_info > div.info_row.info_pubGrp > span.info_pub").innerText, // 수정된 부분
                };
                books.push(book);
            });
            return books;
        });
        console.log("책 제목 :", booklist);

        await browser.close();

    } catch (error) {
        console.error(error);
    }
}

getData();
