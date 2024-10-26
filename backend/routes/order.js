const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Order = require('../models/order');
const Book = require('../models/book');
const User = require('../models/user');

// create order
router.post('/', auth, async(req, res) => {
    const { id } = req.headers;
    const { order } = req.body;

    for (const orderData of order) {
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
});

// get orders history of particular user
// router.get('/', auth, async(req, res) => {
//     const { id } = req.headers;
//     const orders = await User.findById(id).populate('orders');
//     res.json({ status: "success", data: orders.orders });
// });

module.exports = router;