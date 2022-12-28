// Require Express, CORS, Mongoose, Morgan, path
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

// Require dotenv to load environment variables
require('dotenv').config();

// Import API routes
const indexRouter = require('./api/routes/index.router');

// Initialize express app and port
const app = express();
const PORT = process.env.PORT || 3001;

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

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// Send every request to the React app
// Define any API routes before this runs
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Start up server
app.listen(PORT, () => {
    console.log(`>>> Server now on port ${PORT}`);
});