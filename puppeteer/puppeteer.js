const puppeteer = require('puppeteer');

async function getData() {
    try {
        const brower = await puppeteer.launch({
            headless: false
        });
        const page = await brower.newPage();
        await page.goto("https://www.yes24.com/Product/Category/BestSeller?categoryNumber=001&pageNumber=1&pageSize=24");
        
        const booklist = await page.evaluate(()=> {
            let books = [];
            let elements = document.querySelectorAll("#yesBestList > li");
            elements.forEach(elem => {
                books.push(elem.querySelector("div.info_row.info_name > a.gd_name").innerText);
            });
            return books;
        });
        console.log("책 제목 :", booklist);

        await brower.close();

    }
    catch (error) {
        console.error(error);
    }
}
getData();