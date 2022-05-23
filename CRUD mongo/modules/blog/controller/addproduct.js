const productModel = require("../../../DB/Model/Product");

const addproduct = async(req, res) => {
    try {
        const { _id } = req.user;
        const { title, desc, price } = req.body;
        const addedproduct = await productModel.insertMany({ title, desc, price, user: _id });
        //201 means that the user is created 
        res.status(201).json({ message: "added", addedproduct });
    } catch (error) {
        res.json({ message: "catch error", error });

    }
}
module.exports = addproduct;