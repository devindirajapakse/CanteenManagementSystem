const mongoose = require('mongoose')

const addFoodQuantitySchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  foodPrice: {
    type: String,
    required: true
  },
  foodQuantity: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('FoodQuantity', addFoodQuantitySchema)

