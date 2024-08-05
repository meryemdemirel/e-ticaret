const Order = require("./order");
const MenuItem = require("./menuItem");

const { Sequelize, DataTypes } = require("sequelize");
const { sequelise } = require("../dbConfig");


//sepetteki itemlar
const OrderedItems = sequelise.define("ordered_items", {
  opID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  totalPrice: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false }
});
// async function sync() {
//   await OrderedItems.sync({ force: true });
//   console.log("Tablo Oluşturuldu");
// }
// sync();
exports.OrderedItems = OrderedItems
