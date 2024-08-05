const express = require('express');
require("dotenv").config();
const Sequelize = require('sequelize');
const sequelize = require('../db/dbConnect');
const bcrypt = require("../../node_modules/bcrypt/bcrypt");
const User = require("../models/customer");
const jwt = require("jsonwebtoken");
const { MenuItems } = require('../models/menuItem');
const { Order } = require('../models/order');
const { OrderedItems } = require('../models/orderItem');
const { Address } = require('../models/address');

const createOrder = async function (req, res) {

    try {
        const date = new Date();
        console.log('headers,',req.headers);
        const token = req.headers["authorization"].split(' ')[1];
        console.log('token',token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
        const user = await User.findByPk(decodedToken.id);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        const { paymentType, address, carts,totalAmount } = req.body;
        console.log('req.body',req.body);
    
        const order = await Order.create({
          isCredit :paymentType,
          userId: user.id,
          adressAddressId :address,
          totalPrice : totalAmount,
          date : date 
        });

        console.log('order',order);

        const orderId = order.dataValues.orderId;
        console.log('orderId',orderId);
    
        // Create OrderProduct entries
        for (const item of carts) {
          await OrderedItems.create({
            orderOrderID: orderId,
            menuItemProductID: item.productId,
            quantity: item.quantity,
            totalPrice: item.price
            // ... other fields
          });
        }
    
        return res.status(201).json({ message: 'Order created successfully', order });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error creating order' });
      }

};


const getOrder = async function (req, res) {

  try {
    const token = req.headers['authorization'].split(' ')[1];
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);
    const user = await User.findByPk(decodedToken.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(user);
    const orders = await Order.findAll({
      where: { userId: user.id },
      include: [
        {
          model: OrderedItems,
          include: [
            {
              model: MenuItems,
            },
          ],
        },
        {
          model: Address, // Include the Address model
        },
      ],
    });
    console.log(orders);
    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching user orders' });
}
}





module.exports = { createOrder, getOrder }
