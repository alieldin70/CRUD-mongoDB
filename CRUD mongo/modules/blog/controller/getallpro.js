const productModel = require("../../../DB/Model/Product");
const moment = require('moment');
const products = async(req, res) => {
    const products = await productModel.find({}).populate([{
        path: 'user'
    }]);
    res.status(200).json({ message: "done", products });
}
const producttime = async(req, res) => {
    const yesterday = moment().add(-1, 'days');
    const products = await productModel.find({ createdAt: yesterday });
    res.status(200).json({ message: "done", products });
}
module.exports = { products, producttime };