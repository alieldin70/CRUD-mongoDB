const userModel = require("../../../DB/Model/User");
const deleteuser = async(req, res) => {
    try {
        const { _id } = req.user;
        const finduser = await userModel.findOneAndDelete({ _id: _id });

        if (finduser) {
            res.status(200).json({ message: "deleted" });

        } else {
            //403 code mean that the user is not allowed to delete
            res.status(403).json({ message: "cant delete" });
        }
    } catch (error) {
        res.status(400).json({ message: "catch error", error });

    }
}
module.exports = deleteuser;