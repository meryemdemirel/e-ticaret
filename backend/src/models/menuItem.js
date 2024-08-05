const { Sequelize, DataTypes } = require("sequelize");
const { sequelise } = require("../dbConfig");


// mesela bizim 1. pizzamiz varya onlar iste
const MenuItems = sequelise.define("menu_items", {
  productId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: { type: DataTypes.TEXT, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  image:{type:DataTypes.TEXT}
});
// async function sync() {
//   await MenuItems.sync({ alter: true });
//   console.log("Tablo Oluşturuldu");
// }
// sync();
// module.exports = MenuItems
exports.MenuItems = MenuItems