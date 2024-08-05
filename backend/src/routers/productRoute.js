const express = require("express");
const route = express.Router();

const productController = require('../controller/productController');

route.get('/',productController.getProducts);
route.post('/',productController.createProduct);



module.exports=route;