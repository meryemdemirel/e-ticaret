const express = require("express");
const route = express.Router();

const loginController = require('../controller/loginController');

route.post('/',loginController.login);


module.exports=route;