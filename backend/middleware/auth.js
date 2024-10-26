const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const splitToken = token.split(' ')[1];
        if (!splitToken) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        const decoded = jwt.verify(splitToken, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: 'Token expired' });
        }
        res.status(500).json({ message: 'Server error' });
    }
};