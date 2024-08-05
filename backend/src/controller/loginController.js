const express = require('express');
require("dotenv").config();
const Sequelize = require('sequelize');
const sequelize = require('../db/dbConnect');
const bcrypt = require("../../node_modules/bcrypt/bcrypt");
const User = require("../models/customer");
const jwt = require("jsonwebtoken");

exports.login = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  console.log('burabari gel',email);


  console.log('burdamisin',req.body);

  const customer = await User.findOne({ where: { email: email } });
  console.log('customer\n', customer);
  console.log('test',bcrypt.hashSync('password', bcrypt.genSaltSync(8)));

  if (customer) {
    const comparision = await bcrypt.compare(password, customer.password);
    console.log('comparison', comparision);

    if (comparision) {
      const token = jwt.sign({ email: email, id: customer.id }, process.env.JWT_SECRET);
      console.log('tokenenenene',token);
      res.status(200).json({ message: "başarıyla giriş yaptınız" ,token});
      
    } else {
      res.status(401).json({ message: "Email and password do not match" });
    }
  } else {
    res.status(404).json({ message: "Email does not exist" });
  }
  
   // res.status(500).json({ message: "An error occurred" });
  

};
