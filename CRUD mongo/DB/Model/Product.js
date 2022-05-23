const mongoose = require('mongoose');
const schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });
const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;