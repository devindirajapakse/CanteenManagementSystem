const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    quantity: {
        required: true,
        type: Number
    },
    orderPrice: {
        required: true,
        type: Number
    },
    total: {
        required: true,
        type: Number
    }
},
{
  timestamps: true
})

module.exports = mongoose.model('orders', orderSchema)
