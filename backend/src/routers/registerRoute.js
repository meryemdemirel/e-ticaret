const express = require("express");
const route = express.Router();

const registerController = require('../controller/registerController');

route.post('/',registerController.register);


module.exports=route;