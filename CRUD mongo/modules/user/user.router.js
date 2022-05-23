const { validate } = require("validate.js");
const { auth } = require("../../Meddleware/auth");
const vlidation = require("../../Meddleware/validation");
const deleteuser = require("./controller/deleteuser");
const { getuser, getusers } = require("./controller/getusers");
const { signup, signin } = require("./controller/registeration");
const updateuser = require("./controller/updateuser");
const { signup_valid, signin_validator, update_validator } = require("./user.validation");
const router = require("express").Router();
router.post('/signup', vlidation(signup_valid), signup);
router.post('/signin', vlidation(signin_validator), signin);
router.patch('/update', vlidation(update_validator), auth(), updateuser);
router.delete('/delete', auth(), deleteuser);
router.get('/user', auth(), getuser);
router.get('/users', getusers);






module.exports = router