const express = require("express");
const route = express.Router();

const orderController = require('../controller/orderController');

route.post('/',orderController.createOrder);
route.get('/',orderController.getOrder);



module.exports=route;