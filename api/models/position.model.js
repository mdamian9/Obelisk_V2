const mongoose = require('mongoose');

const positionSchema = mongoose.Schema({
    positionType: {

    },
    asset: {

    },
    quantity: {

    },
    entryPrice: {

    },
    exitPrice: {

    },
    leverage: {

    },
    status: {

    },
    pnl: {

    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Position', positionSchema);
