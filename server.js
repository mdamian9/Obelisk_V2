// Require Express, CORS, Mongoose, and Morgan
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Require dotenv to load environment variables
require('dotenv').config();

// Import API routes
const indexRouter = require('./api/routes/index.router');

// Initialize express app and port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up middlewares: CORS / built-in body-parser, use morgan to log all requests to the console
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Supress strictQuery deprecation warning
mongoose.set('strictQuery', true);
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => {
    console.log(err);
});

mongoose.connection.once('open', () => {
    console.log(">>> Connected to MongoDB successfully");
});

// Use API routes
app.use('/', indexRouter);

// Start up server
app.listen(PORT, () => {
    console.log(`>>> Server now on port ${PORT}`);
});