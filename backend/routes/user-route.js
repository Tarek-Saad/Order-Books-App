const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');


router.get('/', auth, async(req, res) => {
    const users = await User.find();
    res.json(users);
});

router.put('/:id', auth, async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(user);
});

router.delete('/:id', auth, async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
});

router.get('/:id', auth, async(req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
});

module.exports = router;