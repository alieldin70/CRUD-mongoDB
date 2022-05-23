const userModel = require("../../../DB/Model/User")
const crypto = require('crypto-js');
const getuser = async(req, res) => {
    const { _id } = req.user;
    const finduser = await userModel.findById(_id);
    console.log(finduser);
    const bytes = crypto.AES.decrypt(finduser.phone, process.env.Key).toString(crypto.enc.Utf8);
    finduser.phone = bytes
    res.status(200).json({ message: "done", user: finduser });
}
const getusers = async(req, res) => {
    const findusers = await userModel.find({});
    for (let i = 0; i < findusers.length; i++) {
        const bytes = crypto.AES.decrypt(findusers[i].phone, process.env.Key).toString(crypto.enc.Utf8);
        findusers[i].phone = bytes;
    }
    res.status(200).json({ message: "done", user: findusers });
}

module.exports = { getuser, getusers };