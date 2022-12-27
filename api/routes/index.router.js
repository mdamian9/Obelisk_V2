const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'This is the GET /index route'
    });
});

router.post('/signup', (req, res, next) => {
    // Check if username or email already exists within db
    const promises = [
        db.User.findOne({ username: req.body.username }),
        db.User.findOne({ email: req.body.email })
    ];
    Promise.all(promises).then(values => {
        if (values[0]) {
            res.status(409).json({
                success: false,
                message: 'Error: a user with this username already exists'
            });
        } else if (values[1]) {
            res.status(409).json({
                success: false,
                message: 'Error: a user with this email already exists'
            });
        } else {
            db.User.create(req.body).then(() => {
                res.status(201).json({ message: 'You have successfully created a new account!' });
            }).catch(err => {
                console.log(err);
            });
        };
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error occurred while creating a new account', error: err });
    });

});

module.exports = router;
