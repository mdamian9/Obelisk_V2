const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'This is the GET /index route'
    });
});

router.post('/signup', (req, res, next) => {
    res.status(201).json({ message: 'You have successfully created a new account!' });
    console.log(req.body);

    const promises = [
        db.User.findOne({ username: req.body.username }),
        db.User.findOne({ email: req.body.email })
    ];

    Promise.all(promises).then(values => {
        console.log(values);

        if (values[0]) {
            console.log("username found");
        } else {
            console.log("username available");
        };

    });

    // db.User.create(req.body).catch(err => {
    //     console.log(err);
    // });
});

module.exports = router;
