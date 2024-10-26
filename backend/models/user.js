const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    phone: { type: String, required: true },
    role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },
    avatar: { type: String, required: true, default: '../assets/boy.png' },
    favoriteBooks: { type: [mongoose.Schema.Types.ObjectId], default: [], ref: 'Book' },
    cart: { type: [mongoose.Schema.Types.ObjectId], default: [], ref: 'Book' },
    orders: { type: [mongoose.Schema.Types.ObjectId], default: [], ref: 'Order' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);