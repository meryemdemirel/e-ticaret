const bcrypt = require('bcrypt')
const sequelize = require("../db/dbConnect");
const Customer = require('../models/customer');
const express = require('express');


exports.register = async (req, res, next) => {
  let body = req.body;

  try {
    if (!body.email)
      throw new error(
       "email field must be filled"
      );

    if (!body.password)
      throw new error(
        ERR_HTTP_CODES.BAD_REQUEST,
        "Validation Error!",
        "password field must be filled"
      );

    let password = bcrypt.hashSync(body.password, bcrypt.genSaltSync(8));

    const data ={
      email: body.email,
      password: password,
      name: body.name,
      phone: body.phone
    }

    console.log('register data', data);

    await Customer.create({
      email: body.email,
      password: password,
      name: body.name,
      phone: body.phone
    });
    console.log('burda');
    res
      .status(200)
      .json(
        { success: true,msg:'kayıt başarılı!',data}

);
  } catch (error) {
   
    res.status(404).json(error);
  }
};



