const express = require("express");
const food = express.Router();

const FOOD = require('../models/foods');

food.get('/', (req, res)=>{
    res.status(200).json({msg: "food works!"});
});

food.post('/add', async (req, res) => {

    try{
        const foodData = new FOOD({
            foodName: req.body.foodName,
            foodPrice: req.body.foodPrice,
            foodQuantity: req.body.foodQuantity,
            foodImage: req.body.foodImage,
        });
        /*const foodData = new FOOD({
            foodName: 'pizza',
            foodPrice: '12',
            foodQuantity: '2',
            foodImage: 'image',
        });*/
    
        const data = await foodData.save();
        res.status(200).json({id: data.id});
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

});


food.get('/all', async (req, res) => {
    try{
        const foodData = await FOOD.find();

        res.status(200).json(foodData);
    }
    catch{
        res.status(400).json({ message: error.message });
    }
});


food.get('/:id', async (req, res) => {
    try{
        const foodData = await FOOD.find({_id : req.params.id});

        res.status(200).json(foodData[0]);
    }
    catch{
        res.status(400).json({ message: error.message });
    }
});

module.exports = food;