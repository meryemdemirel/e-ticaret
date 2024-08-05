const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'denememiz',
 'root',
 '1234',
  {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
  }
);

module.exports= sequelize