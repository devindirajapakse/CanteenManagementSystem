const express = require("express");
const feedbacks = express.Router();

const FEEDBACKS = require('../models/sendFeedback');

feedbacks.get('/', (req, res)=>{
    res.status(200).json({msg: "feedback works!"});
});

feedbacks.post('/add', async (req, res) => {

    try{
        const feedbackData = new FEEDBACKS({
            name: req.body.name,
            email: req.body.email,
            feedback: req.body.feedback,
            
        });
    
        const data = await feedbackData.save();
        res.status(200).json({id: data.id});
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

});

feedbacks.get('/all', async (req, res) => {
    try{
        const feedbackData = await FEEDBACKS.find().sort({ _id: -1 });

        res.status(200).json(feedbackData);
    }
    catch{
        res.status(400).json({ message: error.message });
    }
});

feedbacks.get('/:id', async (req, res) => {
    try{
        const feedbackData = await FEEDBACKS.find({_id : req.params.id});

        res.status(200).json(feedbackData[0]);
    }
    catch{
        res.status(400).json({ message: error.message });
    }
});

module.exports = feedbacks;