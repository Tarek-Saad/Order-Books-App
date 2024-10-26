const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');

router.put('/', auth, async(req, res) => {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    if (!userData) return res.status(400).json({ message: "User not found" });
    const isBookFavourite = userData.favoriteBooks.includes(bookid);
    if (isBookFavourite) return res.status(400).json({ message: "Book already in favourite" });
    await User.findByIdAndUpdate(id, { $push: { favoriteBooks: bookid } });
    res.json({ status: "success", message: "Book added to favourite" });
});

router.get('/', auth, async(req, res) => {
    const { id } = req.headers;
    const userData = await User.findById(id).populate('favoriteBooks');
    if (!userData) return res.status(400).json({ message: "User not found" });
    res.json({ status: "success", data: userData.favoriteBooks });
});

// delete favourite book
router.delete('/', auth, async(req, res) => {
    const { bookid, id } = req.headers;
    await User.findByIdAndUpdate(id, { $pull: { favoriteBooks: bookid } });
    res.json({ status: "success", message: "Book removed from favourite" });
});


module.exports = router;