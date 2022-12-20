// Require Express, CORS, Mongoose, and Morgan
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Require dotenv to load environment variables
require('dotenv').config();
// Check if working
console.log(process.env);