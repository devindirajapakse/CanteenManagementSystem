require('dotenv').config()
const cors = require("cors")
var bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const routes = require("./router");


mongoose.connect(process.env.DB).then(()=>{
    app.listen(3000, ()=>{
        console.log('Server connected!');
    });
    
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(cors());
    
    app.get('/', (req, res)=>{
        res.status(200).json({msg: 'Hello World!'});
    });
    
    app.use('/v1/api', routes);
});

