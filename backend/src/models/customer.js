const { Sequelize, DataTypes } = require("sequelize");
const { sequelise } = require("../dbConfig");

const User = sequelise.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: { type: DataTypes.STRING, allowNull: false }
},{});

// ALTER TABLE `denememiz`.`customers` 
// ADD CONSTRAINT `customers_ibfk_1`
//   FOREIGN KEY (`addressId`)
//   REFERENCES `denememiz`.`adress` (id)
//   ON DELETE NO ACTION
//   ON UPDATE NO ACTION;


// async function sync() {
//   await User.sync({ force: true });
//   console.log("Tablo Oluşturuldu");
// }
//  sync();
// exports.User= User
module.exports = User
