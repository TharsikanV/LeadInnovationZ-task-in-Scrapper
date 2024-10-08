const puppeteer = require('puppeteer');

async function searchController(req, res) {
    const keyword = req.query.keyword;

    if (!keyword) {
        return res.status(400).json({ error: "keyword not found" });


    }

    try {
        const data = await puppeteerScraper(keyword);
        res.status(200).json(data);

    }
    catch (error) {
        res.satus(500).json({ error: "failed to scrape data", details: error.message });
    }
}

async function puppeteerScraper(keyword) {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    try {
        const url = `https://ikman.lk/en/ads?query=${keyword}&page=1`;
        await page.goto(url, {
            waitUntil: 'networkidle0'
        });

        const productData = await page.evaluate((url) => {
            const data = Array.from(document.querySelectorAll('.card-link--3ssYv.gtm-ad-item')).map((product) => (
                    {
                        
                        title: product.querySelector('.heading--2eONR')?.innerText,
                        price: product.querySelector('.price--3SnqI')?.innerText,
                        location: product.querySelector('.description--2-ez3')?.innerText,
                        listing_URL: product?.href,
                        date_posted: product.querySelector('.updated-time--1DbCk')?.innerText || 'Not found'
                    }
                ))
            return data;
        }, url)

        await browser.close();
        return productData;
    } catch (error) {
        return error.message;
    }

}

module.exports = searchController;