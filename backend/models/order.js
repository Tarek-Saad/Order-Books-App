const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true }],
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true, default: 'pending', enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'] }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);