const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    itemName: {
        required: true,
        type: String
    },
    itemQuantity: {
        required: true,
        type: Number
    },
    itemPrice: {
        required: true,
        type: Number
    },
    itemTotal: {
        required: true,
        type: Number
    }
},
{
  timestamps: true
})

module.exports = mongoose.model('orders', orderSchema)
