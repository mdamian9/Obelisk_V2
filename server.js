// Require Express, CORS, Mongoose, and Morgan
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Require dotenv to load environment variables
require('dotenv').config();

// Initialize express app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Use morgan to log all requests to the console
app.use(morgan('dev'));

// Use middlewares: CORS / built-in body-parser
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize API routes
const usersRouter = require('./api/routes/users.router');

// Use API routes
app.use('/users', usersRouter);

// Default route to check if working
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'This is the GET / route'
    });
});

// Start up server
app.listen(PORT, () => {
    console.log(`>>> Server now on port ${PORT}`);
});