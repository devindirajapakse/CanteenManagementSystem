const express = require("express");
const order = express.Router();

const ORDER = require('../models/order');

order.get('/', (req, res)=>{
    res.status(200).json({msg: "order works!"});
});

order.post('/add', async (req, res) => {

    try{
        const orderData = new ORDER({
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemPrice: req.body.itemPrice,
            itemTotal: req.body. itemTotal,
            
        });
    
        const data = await orderData.save();
        res.status(200).json({id: data.id});
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

});

order.get('/all', async (req, res) => {
    try{
        const orderData = await ORDER.find().sort({ _id: -1 });

        res.status(200).json(orderData);
    }
    catch{
        res.status(400).json({ message: error.message });
    }
});

order.get('/:id', async (req, res) => {
    try{
        const orderData = await FOOD.find({_id : req.params.id});

        res.status(200).json(orderData[0]);
    }
    catch{
        res.status(400).json({ message: error.message });
    }
});

module.exports = order;