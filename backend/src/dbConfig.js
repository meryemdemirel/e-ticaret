 const {Sequelize} = require('sequelize');

const sequelise = new Sequelize('deneme','root','1234',{
    dialect :"mysql",
    host :"localhost"
})

function init() {
    sequelise.sync({
        force : false
    }).then(res => {
        console.log("Database baglantısı kuruldu")
    }).catch(err => console.log("Errors",err))
}
async function connect()
{
    try{
        await sequelise.authenticate();
        console.log('Connection has been established succesfully');
    } catch(error){
        console.error('Unable to connect to the database',error);
    }
}
function close()
{
    sequelise.close();
}


exports.sequelise = sequelise;

exports.connect = connect;
exports.close = close;
exports.init= init;
const User = require('./models/customer')
//const {Team} = require('./models/Team')
//const {Project} = require('./models/Project');
const {Address} = require('./models/address');
const {Order} = require('./models/order');
const {OrderedItems} = require('./models/orderItem');
const {MenuItems} = require('./models/menuItem');

console.log('userrrr',User);
console.log('userrrr',Address);
console.log('userrrr',Order);
console.log('userrrr',OrderedItems);
console.log('userrrr',MenuItems);


User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderedItems);
OrderedItems.belongsTo(Order);

MenuItems.hasMany(OrderedItems);
OrderedItems.belongsTo(MenuItems);

Address.hasMany(Order);
Order.belongsTo(Address);