const express = require("express");
const user = express.Router();

const USER = require('../models/users');

user.get('/', (req, res)=>{
    res.status(200).json({msg: "user works!"});
});

user.post('/signup', async (req, res) => {

    try{
        const userData = new USER({
            name: req.body.name,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            password: req.body.password,
        });
    
        const data = await userData.save();
        res.status(200).json({id: data.id});
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

});


user.post('/signin', async(req, res)=>{
    try{
        const userData = await USER.find({email : req.body.email});
        
        if(userData.length === 0){
            res.status(401).json({message: 'Login failed!'});
            return;
        }

        if(userData[0]['password'] != req.body.password){
            res.status(401).json({message: 'Login failed!'});
            return;
        }

        res.status(200).json({ id : data[0]['id']});
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});

module.exports = user;