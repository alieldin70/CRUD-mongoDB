const joi = require('joi');
const signup_valid = {
    body: joi.object().required().keys({
        name: joi.string().required().messages({
            'any.required': 'plz send ur name',
            'string.empty': 'plz fill in ur name',
            'string.base': 'please enter string only'
        }).min(3).max(30),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        cpassword: joi.string().valid(joi.ref('password')).required(),
        phone: joi.number()

    })
}
const signin_validator = {
    body: joi.object().required().keys({
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
}
const update_validator = {
    body: joi.object().required().keys({
        name: joi.string().required().messages({
            'any.required': 'plz send ur name',
            'string.empty': 'plz fill in ur name',
            'string.base': 'please enter string only'
        }).min(3).max(30),
        phone: joi.number()

    })
}
module.exports = { signup_valid, signin_validator, update_validator };