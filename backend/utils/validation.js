const { body, validationResult } = require('express-validator');
const User = require('../models/user');

exports.registerValidation = [
    body('name').notEmpty().withMessage('Name is required').trim().escape().toLowerCase().custom(async(value) => {
        const user = await User.findOne({ name: value });
        if (user) {
            throw new Error('Name already in use');
        }
    }),
    body('email').isEmail().withMessage('Invalid email').custom(async(value) => {
        const user = await User.findOne({ email: value });
        if (user) {
            throw new Error('Email already in use');
        }
    }),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

exports.loginValidation = [
    body('email').isEmail().withMessage('Invalid email').custom(async(value) => {
        const user = await User.findOne({ email: value });
        if (!user) {
            throw new Error('Invalid email or password');
        }
    }),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};