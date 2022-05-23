const productModel = require("../../../DB/Model/Product");

const updateproduct = async(req, res) => {
    try {
        const { _id } = req.user;
        const { id } = req.params;
        const { desc, price } = req.body
        const updateprod = await productModel.findOneAndUpdate({ _id: id, user: _id }, { desc, price }, { new: true });
        if (updateprod) {
            res.status(200).json({ message: "updated", updateprod });

        } else {
            res.status(400).json({ message: "cant update" });

        }
    } catch (error) {
        res.json({ message: "catch error", error });

    }
}
module.exports = updateproduct;