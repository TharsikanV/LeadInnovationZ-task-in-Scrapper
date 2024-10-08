const express=require('express');
const dotenv=require('dotenv');
const path=require('path');


const app = express();

dotenv.config({path: path.join(__dirname, 'config/config.env')});

app.use(express.json());

const search=require('./routes/search');

app.use('/api/v1/', search);

module.exports = app;



