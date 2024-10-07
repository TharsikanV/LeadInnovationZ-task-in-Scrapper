async function searchController(req,res) {
    const keyword=req.query.keyword;

    if(!keyword){
        return res.status(400).json({error:"keyword not found"});

        
    }
}

async function scrapeDataFromIkman(keyword) {
    return ["hi"];
}

module.exports=searchController;