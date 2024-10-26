const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true, default: 'pending', enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'] }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);