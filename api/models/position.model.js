const mongoose = require('mongoose');

// Come back to this, double check / create route.
const positionSchema = mongoose.Schema({
    positionType: {
        type: String,
        required: true
    },
    asset: {
        type: String,
        required: true
    },
    assetTicker: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    currencyTicker: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    entryPrice: {
        type: Number,
        required: true
    },
    exitPrice: {
        type: Number,
        required: true
    },
    leverage: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    pnl: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Position', positionSchema);
