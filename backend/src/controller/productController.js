const express = require('express');
require("dotenv").config();
const Sequelize = require('sequelize');
const sequelize = require('../db/dbConnect');
const bcrypt = require("../../node_modules/bcrypt/bcrypt");
const User = require("../models/customer");
const jwt = require("jsonwebtoken");
const { MenuItems } = require('../models/menuItem');

const getProducts = async function (req, res) {

    try {
        const urunlerim = await MenuItems.findAll();
        res.status(200).json({ products: urunlerim })
    } catch (error) {
        return res.status(404).json({ errors: { msg: "Urunler getirilemedi." } });
    }

};


const createProduct = async function (req, res) {

    try {
        console.log(req.body);
        const product = await MenuItems.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        })
        res.send({ message: "Basariyla ürün eklendi.", product })

    } catch (error) {
        return res.status(404).json({ errors: { msg: "Urun olusturulamadi." , error} });
        
    }
}





module.exports = { getProducts, createProduct }
