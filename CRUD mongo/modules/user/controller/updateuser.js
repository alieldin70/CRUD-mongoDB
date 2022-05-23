const userModel = require("../../../DB/Model/User");

const updateuser = async(req, res) => {
    try {
        const { name, phone } = req.body;
        const { _id } = req.user;
        const finduser = await userModel.findByIdAndUpdate(_id, { name, phone }, { new: true }).select('-password');
        if (finduser) {
            res.status(200).json({ message: "updated", finduser });

        } else {
            //403 code mean that the user is not allowed to change
            res.status(403).json({ message: "cant update" });
        }
    } catch (error) {
        res.status(400).json({ message: "catch errror", error });

    }
}
module.exports = updateuser;