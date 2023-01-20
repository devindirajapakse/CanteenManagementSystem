const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  no: {
    type: Number,
    required: true
  },
  itemImage: {
    type: Image,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  itemStatus: {
    type: String,
    required: true
  },
  addQuantity: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Admin', adminSchema)

