const express = require('express');
const app = express();
const connectDB = require('./conn/conn');


// Middleware
app.use(express.json());
require('dotenv').config();

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user-route');
const bookRoutes = require('./routes/book');
const favouriteRoutes = require('./routes/favourite');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/favourite', favouriteRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);


// Connect to MongoDB
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});