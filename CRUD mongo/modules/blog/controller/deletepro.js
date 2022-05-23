const productModel = require("../../../DB/Model/Product");

const deleteproduct = async(req, res) => {
    try {
        const { _id } = req.user;
        const deleteprod = await productModel.findOneAndDelete({ user: _id });
        if (deleteprod) {
            res.status(200).json({ message: "added" });

        } else {
            res.status(400).json({ message: "cant delete" });

        }
    } catch (error) {
        res.json({ message: "catch error", error });

    }
}
module.exports = deleteproduct;