const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    pageCount: { type: Number, required: true },
    pricePerPage: { type: Number, required: true },
    coverPrice: { type: Number, required: true },
    framePrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    coverImage: { type: String, required: true },
    pageImages: [{ type: String, required: true }],
    category: { type: String, required: true, enum: ['Arabic', 'English', 'Math', 'Science', 'History', 'Geography', 'Biology', 'Chemistry', 'Physics', 'Computer Science', 'Art', 'Music', 'Physical Education', 'Islamic Studies', 'Other'] },
    mockupAnimation: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);