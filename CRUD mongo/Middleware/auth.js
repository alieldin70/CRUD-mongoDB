const jwt = require('jsonwebtoken');
const userModel = require('../DB/Model/User');
const auth = () => {
    return async(req, res, next) => {
        try {
            const headertoken = req.headers['authorization'];
            if (!headertoken || headertoken == null || !headertoken.startsWith(`${process.env.secretToken} `) || headertoken == undefined) {
                res.status(400).json({ message: "in-valid header token" });
            } else {
                const token = headertoken.split(" ")[1];
                if (token == null || token == undefined || token.length == 0) {
                    res.status(400).json({ message: "in-valid token" });
                } else {
                    const user = jwt.verify(token, process.env.secretWord);
                    if (user) {
                        const find = await userModel.findOne({ _id: user._id });
                        req.user = find;
                        next();
                    } else {
                        res.status(400).json({ message: "in-valid sginature" });

                    }
                }
            }
        } catch (error) {
            res.json({ message: "catch error", error });
        }

    }
}
module.exports = { auth };