const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Hash user password before saving to database
userSchema.pre('save', function(callback) {
    let user = this;
    // Break out if password hasn't changed
    if (!user.isModified('password')) return callback();
    // Hash new password (or if it has changed)
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return callback(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return callback(err);
            user.password = hash;
            callback();
        });
    });
});

// verifyPassword method for user
userSchema.methods.verifyPassword = (password, callback) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);
