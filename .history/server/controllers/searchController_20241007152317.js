async function searchController(req,res) {
    const keyword=req.query.keyword;

    if(!keyword){
        return res.status(400)
    }
}