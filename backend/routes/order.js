const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Order = require('../models/order');
const Book = require('../models/book');
const User = require('../models/user');

// create order
router.post('/', auth, async(req, res) => {
    try {
        const { id } = req.headers;
        const { order } = req.body;

        if (!id) {
            return res.status(400).json({ status: "error", message: "User ID is required" });
        }

        if (!order || !Array.isArray(order) || order.length === 0) {
            return res.status(400).json({ status: "error", message: "Invalid order data" });
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        for (const orderData of order) {
            if (!orderData._id || !orderData.price) {
                return res.status(400).json({ status: "error", message: "Invalid order item data" });
            }

            const book = await Book.findById(orderData._id);
            if (!book) {
                return res.status(404).json({ status: "error", message: `Book with ID ${orderData._id} not found` });
            }

            const newOrder = new Order({
                user: id,
                book: orderData._id,
                price: orderData.price,
                status: 'pending',
            });

            await newOrder.save();

            // save order in user
            await User.findByIdAndUpdate(id, { $push: { orders: newOrder._id } });

            // clear this book from cart
            await User.findByIdAndUpdate(id, { $pull: { cart: orderData._id } });
        }

        res.json({ status: "success", message: "Order created successfully" });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ status: "error", message: "An error occurred while creating the order" });
    }
});

// get orders history of particular user
router.get('/', auth, async(req, res) => {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({ path: 'orders', populate: { path: 'book' } });
    res.json({ status: "success", data: userData.orders.reverse() });
});

// get all orders --admin
router.get('/all', auth, async(req, res) => {
    const { id } = req.headers;
    const userData = await User.findById(id);
    if (userData.role !== 'admin') {
        return res.status(403).json({ status: "error", message: "Unauthorized" });
    }
    const orders = await Order.find().populate({ path: 'book' }).populate({ path: 'user' }).sort({ createdAt: -1 });
    res.json({ status: "success", data: orders });
});

module.exports = router;