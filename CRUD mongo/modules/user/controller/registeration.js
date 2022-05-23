const userModel = require("../../../DB/Model/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signup = async(req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const finduser = await userModel.findOne({ email });
        if (finduser) {
            //409 conflict code for exist user server will do nothing 
            res.status(409).json({ message: "exist email" });
        } else {
            const saveduser = await userModel.insertMany({ name, email, password, phone });
            //201 means that the user is created 
            res.status(201).json({ message: "created", user: saveduser });
        }

    } catch (error) {
        res.status(400).json({ message: "catch-error", error });

    }
}
const signin = async(req, res) => {
    try {
        const { email, password } = req.body;
        const finduser = await userModel.findOne({ email });
        const hashedpassword = await bcrypt.compare(password, finduser.password);
        if (hashedpassword) {
            const usertoken = jwt.sign({ _id: finduser._id }, process.env.secretWord, { expiresIn: '1h' });
            res.status(200).json({ message: "done", user: usertoken });
        } else {
            res.status(400).json({ message: "in-valid email or password" });

        }

    } catch (error) {
        res.status(400).json({ message: "catch error", error });

    }
}
module.exports = { signup, signin };