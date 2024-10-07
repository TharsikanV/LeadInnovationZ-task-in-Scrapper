const express=require('express');
const dotenv=require('dotenv');
const path=require('path');

dotenv.config({path: path.join(__dirname, 'config/config.env')});

const app = express();

app.use(express.json());

const port=process.env.PORT ||8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});



