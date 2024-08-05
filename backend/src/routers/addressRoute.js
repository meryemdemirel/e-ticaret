const express = require("express");
const route = express.Router();

const addressController = require('../controller/addressController');

route.post('/',addressController.createAddress)
route.get('/',addressController.getAddress);


module.exports=route;