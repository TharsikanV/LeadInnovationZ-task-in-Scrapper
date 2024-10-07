const express=require('express');
const dotenv=require('dotenv');
const path=require('path');
const seach=require('./routes/search');

const app = express();

dotenv.config({path: path.join(__dirname, 'config/config.env')});

app.use(express.json());

app.use('/search', seach);
module.exports = app;



