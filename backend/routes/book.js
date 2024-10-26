const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const User = require('../models/user');
const auth = require('../middleware/auth');

// add book -- admin
router.post('/', auth, async(req, res) => {
    const userId = req.headers.id;
    if (!userId) {
        return res.status(400).json({ message: 'User ID is missing in the request headers' });
    }
    let user;
    try {
        user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(user);
    } catch (error) {
        console.error('Error finding user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    try {
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: Only admins can add books' });
        }
        const book = new Book(req.body);
        await book.save();
        res.status(201).json({ message: 'Book added successfully', book: book });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }
        console.error('Error adding book:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// get all books
router.get('/', auth, async(req, res) => {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json({ status: 'success', books: books });
});

// get all books by category
router.get('/category/:category', auth, async(req, res) => {
    const books = await Book.find({ category: req.params.category }).sort({ createdAt: -1 });
    res.status(200).json({ status: 'success', books: books });
});

// get all books by author
router.get('/author/:author', auth, async(req, res) => {
    const books = await Book.find({ author: req.params.author }).sort({ createdAt: -1 });
    res.status(200).json({ status: 'success', books: books });
});

// search books by title or category
router.get('/search/:titleOrCategory', auth, async(req, res) => {
    const books = await Book.find({ $or: [{ title: { $regex: req.params.titleOrCategory, $options: 'i' } }, { category: { $regex: req.params.titleOrCategory, $options: 'i' } }] }).sort({ createdAt: -1 });
    res.status(200).json({ status: 'success', books: books });
});

// get most popular books
router.get('/popular', auth, async(req, res) => {
    const books = await Book.find().sort({ views: -1 }).limit(10);
    res.status(200).json({ status: 'success', books: books });
});

// get most recent books
router.get('/recent', auth, async(req, res) => {
    const books = await Book.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json({ status: 'success', books: books });
});

// get book by id
router.get('/:id', auth, async(req, res) => {
    const book = await Book.findById(req.params.id);
    res.status(200).json({ status: 'success', book: book });
});

// update book -- admin
router.put('/:id', auth, async(req, res) => {
    const userId = req.headers.id;
    const user = await User.findById(userId);
    if (user.role !== 'admin') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ status: 'success', book: book });
});

// delete book -- admin
router.delete('/:id', auth, async(req, res) => {
    const userId = req.headers.id;
    const user = await User.findById(userId);
    if (user.role !== 'admin') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 'success', book: book });
});

module.exports = router;