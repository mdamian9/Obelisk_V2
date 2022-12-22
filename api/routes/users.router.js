const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'This is the GET /users route'
    });
});

module.exports = router;
