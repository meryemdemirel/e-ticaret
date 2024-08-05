const Customer = require("./customer");
const Address = require("./address");

const { Sequelize, DataTypes } = require("sequelize");
const { sequelise } = require("../dbConfig");

const Order = sequelise.define("orders", {
  orderId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  isCredit: {type: DataTypes.BOOLEAN, allowNull:false},
  totalPrice: DataTypes.INTEGER,
  date : DataTypes.DATE,

});
// async function sync() {
//   await Order.sync({ alter: true });
//   console.log("Tablo Oluşturuldu");
// }
// sync();
exports.Order = Order