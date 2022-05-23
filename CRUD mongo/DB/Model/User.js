const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto-js');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: String
}, { timestamps: true });
userSchema.pre('insertMany', async function(next, docs) {
    docs.password = await bcrypt.hash(docs.password, parseInt(process.env.Rounds));
    docs.phone = crypto.AES.encrypt(docs.phone, process.env.Key);
    next();
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;