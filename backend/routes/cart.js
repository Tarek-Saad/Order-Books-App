const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');

// add book to cart
router.put('/', auth, async(req, res) => {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    if (!userData) return res.status(400).json({ status: "error", message: "User not found" });
    if (userData.cart.includes(bookid)) return res.status(400).json({ status: "error", message: "Book already in cart" });
    await User.findByIdAndUpdate(id, { $push: { cart: bookid } });
    res.json({ status: "success", message: "Book added to cart" });
});

// get cart books
router.get('/', auth, async(req, res) => {
    const { id } = req.headers;
    const userData = await User.findById(id).populate('cart');
    if (userData.cart.length === 0) return res.status(400).json({ status: "error", message: "Cart is empty" });
    res.json({ status: "success", data: userData.cart });
});

// delete book from cart
router.delete('/', auth, async(req, res) => {
    const { bookid, id } = req.headers;
    await User.findByIdAndUpdate(id, { $pull: { cart: bookid } });
    res.json({ status: "success", message: "Book removed from cart" });
});

module.exports = router;