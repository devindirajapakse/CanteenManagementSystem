const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  foodPrice: {
    type: Number,
    required: true
  },
  foodQuantity: {
    type: Number,
    required: true
  },
  foodImage: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Food', foodSchema)

