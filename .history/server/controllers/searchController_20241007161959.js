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
    const
}

module.exports=searchController;