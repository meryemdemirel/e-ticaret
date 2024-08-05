
//ana dizin
const express = require("express");
require("dotenv").config();


const app = express();
app.use(express.json());
const auth = require("./auth");
// const { HomeController } = require("./controller/HomeController");
// const userRouter = require("./routes/userroutes");
// const addressRouter = require("./routes/addressroutes");
// const orderRouter = require("./routes/orderroutes");
// const categoryRouter = require("./routes/categoryRoutes");
// const productRouter = require("./routes/productroutes");
const cors = require("cors");
app.use(cors())
var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
next();
});


const {init} =require("./src/dbConfig")
init();

const loginRoute = require("./src/routers/loginRoute")
const registerRoute = require('./src/routers/registerRoute')
const orderRoute = require ('./src/routers/orderRoute')
const addressRoute = require ('./src/routers/addressRoute')
const productRoute = require ('./src/routers/productRoute')


app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.use('/order', orderRoute)
app.use('/address', addressRoute)
app.use('/product', productRoute)


// app.use("/address",cors(corsOptions),addressRouter)
// app.use("/order",cors(corsOptions),orderRouter)
// app.use("/category",cors(corsOptions),categoryRouter); // ekleme yapacağım zaman kullanacağım sadece.
// app.use("/product",cors(corsOptions),productRouter); // ekleme yapacağım zaman kullanacağım sadece.
// app.get("/",(req,res)=>{
//     res.send({message : "Hello you are all the be231311212312332st people"});
// })
// app.post(
// "/register",cors(corsOptions),
// HomeController.register
// );
// app.post(
//     "/login",cors(corsOptions),
//     HomeController.login
//     );
    
app.listen(4000,()=>{
    console.log("Server running great of port 5000");
})  