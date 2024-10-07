const puppeteer=require('puppeteer');

async function searchController(req,res) {
    const keyword=req.query.keyword;

    if(!keyword){
        return res.status(400).json({error:"keyword not found"});

        
    }

    try{
        const data=await scrapeDataFromIkman(keyword);
         res.json(data);

    }
    catch(error){
        res.satus(500).json({error:"failed to scrape data",details:error.message});
    }
}

async function scrapeDataFromIkman(keyword) {
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();

    const url=`https://ikman.lk/en/ads?query=${keyword}`;

    await page.goto(url);
    
    const productData=await page.evaluate((url)=>{
        const data=Array.from(document.querySelectorAll('.card-link--3ssYv'))
            .map((product)=>(
                {
                    title: product.querySelector('.heading--2eONR').innerText,
                    price:product.querySelector('.price--3SnqI').innerText,
                    location:product.querySelector('.description--2-ez3').innerText,
                    listing_URL : product.querySelector('.
                }
        ))

    })
}

module.exports=searchController;