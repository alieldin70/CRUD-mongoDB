const joi = require('joi');
const productvalidator = {
    body: joi.object().required().keys({
        title: joi.string().required().min(3).max(30),
        desc: joi.string().required(),
        price: joi.number()
    })
}
const productapdavalidator = {
    body: joi.object().required().keys({
        desc: joi.string().required(),
        price: joi.number()
    }),
    params: joi.object().required().keys({
        id: joi.string().required().min(24).max(24)
    })
}
module.exports = { productvalidator, productapdavalidator };