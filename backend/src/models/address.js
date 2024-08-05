const { sequelise } = require("../dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const Address = sequelise.define("adress", {
  addressId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  neighbourhood: { type: DataTypes.TEXT, allowNull: false },
  city: { type: DataTypes.TEXT, allowNull: false },
  county: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  addressTitle: { type: DataTypes.TEXT, allowNull: false },
}


);


exports.Address = Address
