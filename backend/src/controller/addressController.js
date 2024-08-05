const express = require('express');
require("dotenv").config();
const Sequelize = require('sequelize');
const sequelize = require('../db/dbConnect');
const bcrypt = require("../../node_modules/bcrypt/bcrypt");
const User = require("../models/customer");
const jwt = require("jsonwebtoken");
const { Address } = require('../models/address');

const createAddress = async function (req, res) {

    try {
        const token = req.headers["authorization"].split(" ")[1];
        console.log('tkn',req.headers["authorization"]);

        const data = jwt.decode(token, process.env.SECRET);
        console.log('data',data);
        const user = await User.findByPk(data.id);
        console.log('user',user.dataValues.email);
        console.log('req',req.body);


        if (user) {
            const address = await Address.create({
                userId: user.dataValues.id,
                neighbourhood: req.body.neighbourhood,
                city: req.body.city,
                county: req.body.county,
                text: req.body.text,
                addressTitle: req.body.addressTitle



            });

            if (address) {

                return res.status(201).json({ message: 'Address başarıyla oluşturuldu', address });
            }
        }

        return res.status(404).json({ errors: { msg: "Adres eklenirken hata oluştu." } });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: { msg: "Sunucu hatası." } });
    }


};


const getAddress = async function (req, res) {

    let data = jwt.decode(req.headers["authorization"].split(" ")[1], process.env.SECRET)
    // console.log('data',data);
    const user = await User.findByPk(data.id);
    // console.log('user',user);
    
    if (user.id) {
        try {
            const adreslerim = await Address.findAll({
                where: {
                    userId: data.id
                },
            });
            return res.status(200).json({adresler:adreslerim})//return res.status(200).json(orders);
        } catch (error) {
            return res.status(404).json({ errors: { msg: "Adres eklenirken hata oluştu." } });
        }
    }
    else
        res.status(404).json({ errors: { msg: "Addres girilirken hata oluştu" } });
}

module.exports = { createAddress, getAddress }
