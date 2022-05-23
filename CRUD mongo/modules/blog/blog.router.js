const { auth } = require("../../Meddleware/auth");
const vlidation = require("../../Meddleware/validation");
const addproduct = require("./controller/addproduct");
const deleteproduct = require("./controller/deletepro");
const { products, producttime } = require("./controller/getallpro");
const updateproduct = require("./controller/updateproduct");
const { productvalidator, productapdavalidator } = require("./product.validation");

const router = require("express").Router();
router.post('/add', vlidation(productvalidator), auth(), addproduct);
router.delete('/deletepro', auth(), deleteproduct);
router.put('/update/:id', vlidation(productapdavalidator), auth(), updateproduct);
router.get('/get', products);
router.get('/gett', producttime);






module.exports = router