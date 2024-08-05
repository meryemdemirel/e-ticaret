const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
app.use('/node_modules', express.static('node_modules' + __dirname))
// require database connection
// const dbConnect = require("./src/db/dbConnect");
const User = require("./src/models/customer");
const Order = require("./src/models/order");
const Address = require("./src/models/address");
const MenuItem = require("./src/models/menuItem");
const OrderItem = require("./src/models/orderItem");

const loginRoute = require("./src/routers/loginRoute")
const registerRoute = require('./src/routers/registerRoute')
const orderRoute = require ('./src/routers/orderRoute')
const auth = require("./auth");

// execute database connection
// dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
const init =require("./src/dbConfig")
init();
app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});
/*
// register endpoint
app.post("/register", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
        name: request.body.name
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch erroe if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});
*/

app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.use('/order', orderRoute)

/*
// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password do not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});
*/

// app.post("/order", (request, response) => {

//   console.log('body', request.body);

//   console.log('bekend kart', request.body.carts);

//   let cartObject = { ...request.body.carts }

//   console.log('kartobjekt', cartObject);

//   console.log('sorun varmi');

//   const order = new Order({
//     user: request.body.user,
//     address: request.body.address,
//     carts: request.body.carts,
//     paymentType: request.body.paymentType,
//     card: request.body.card,


//   })

//   console.log('sorun varmi2');


//   order.save()
//     .then((result) => {
//       response.status(201).send({
//         message: "siparis gonderildiiii",
//         result,
//       })

//     }).catch((error) => {
//       response.status(500).send({
//         message: "sipariste hatagggggheeee" + error,
//         error,
//       });
//     });

// });

app.post("/address", async (request, response) => {

  console.log('body', request.body);

  console.log('body.address', request.body.address);
  console.log('body.user', request.body.user);

  // let cartObject = {...request.body.carts}

  // console.log('body.address.neighbourhood', request.body.address.neighborhood);

  console.log('sorun varmi');

  try {



    await Address.create({
      // user: request.body.user,
      // address: request.body.address,
      // carts: request.body.carts,
      // paymentType: request.body.paymentType,
      // card: request.body.card,


      customerId: request.body.customerId,
      // address: { type: Object, required: true },
      street: request.body.street,
      building_name: request.body.buildingName,

      buildingNumber: request.body.buildingNumber,
      neighborhood: request.body.neighborhood,
      floor: request.body.floor,
      flatNumber: request.body.flatNumber,


    })

    console.log('sorun varmi2');



    response.status(201).send({
      message: "adres olustu",
      // address,
    })
  } catch (error) {
    response.status(500).send({
      message: "sipariste hatagggggheeee" + error,
      error,
    });
  }

});

app.post("/addresss", (request, response) => {

  console.log('body', request.body);

  console.log('body.address', request.body.address);
  console.log('body.user', request.body.userId);

  // let cartObject = {...request.body.carts}

  // console.log('body.address.neighbourhood', request.body.address.neighbourhood);

  console.log('sorun varmi');

  // const address = new Address({
  //   // user: request.body.user,
  //   // address: request.body.address,
  //   // carts: request.body.carts,
  //   // paymentType: request.body.paymentType,
  //   // card: request.body.card,


  //   user: request.body.user,
  //   // address: { type: Object, required: true },
  //   city: request.body.address.city,
  //   county: request.body.address.county,
  //   neighbourhood: request.body.address.neighbourhood,
  //   text: request.body.address.text

  // })


  // Address.find({ user: request.body.userId })



  //   // if email exists
  //   .then((addresses) => {
  //     console.log('userrrr', request.body.userId);
  //     console.log('adresnieyokki', addresses);
  //     //   return success response
  //     response.status(200).send({
  //       message: "adresler alindi",
  //       adresler: addresses
  //     });

  //     // catch error if password do not match

  //   })
  //   .catch((error) => {
  //     response.status(400).send({
  //       message: "adresler alinamadiiii",
  //       error,
  //     });
  //   });
  // const customer = await Customer.findOne({ where: { email: email } });
  Address.findOne({ where: { user: request.body.userId } })


    // if email exists
    .then((addresses) => {
      console.log('userrrr', request.body.userId);

      const userAddress = addresses.filter((adres) => {
        console.log('adres.user, request.body.userId', adres.user, '     ', request.body.userId);
        return adres.user == request.body.userId
      })

      // console.log('adrezzz', adrezz);
      console.log('adresnieyokki', addresses);
      //   return success response
      response.status(200).send({
        message: "adresler alindi",
        adresler: addresses
      });

      // catch error if password do not match

    })
    .catch((error) => {
      response.status(400).send({
        message: "adresler alinamadiiii",
        error,
      });
    });


});


app.get("/user/profile", (request, response) => {
  // check if email exists
  const authHeader = request.headers['authorization']
  console.log('request headers bitch', request.headers['authorization']);
  //const x =typeof(request.headers)
  //console.log(x);
  // console.log('sasa',request);
  const token = authHeader.split(' ')[1];
  //console.log(request.headers.authorization);
  User.findOne({ email: request.body.email })
  var decoded = jwt.verify(token, 'RANDOM-TOKEN');
  console.log(decoded);

  response.status(200).send({
    email: decoded.email,
    token,
    message: "Passwords does not match",
    data: decoded,
    error: 'hataliiii',
  });
  // if email exists
  // .then((user) => {
  // compare the password entered and the hashed password found
  // bcrypt
  // .compare(request.body.password, user.password)

  // if the passwords match
  // .then((passwordCheck) => {

  //   // check if password matches
  //   if(!passwordCheck) {
  //     return response.status(400).send({
  //       message: "Passwords does not match",
  //       error,
  //     });
  //   }

  //   //   create JWT token
  //   const token = jwt.sign(
  //     {
  //       userId: user._id,
  //       userEmail: user.email,
  //     },
  //     "RANDOM-TOKEN",
  //     { expiresIn: "24h" }
  //   );

  //   //   return success response
  //   response.status(200).send({
  //     message: "Login Successful",
  //     email: user.email,
  //     token,
  //   });
  // })
  // catch error if password do not match
  // .catch((error) => {
  //   response.status(400).send({
  //     message: "Passwords does not match",
  //     error,
  //   });
  // });
  // })
  // catch error if email does not exist
  // .catch((e) => {
  //   response.status(404).send({
  //     message: "Email not found",
  //     e,
  //   });
  // });
});


// const Me = async (req, res, next) => {

//   console.log(req.body);
//   let email = req.body.email

// 	//const { email } = req.payload;

//   //console.log(email)

// 	try {
// 		// const user = await User.find(req.body.email).select("-password -__v");
// 		const user = await User.findOne({email});
//     // .select("-password -__v");

// 		res.json(user);
// 	} catch (e) {
// 		next(e);
// 	}
// };

// app.get('/me', Me);

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.send({ message: "You are authorized to access me" });
});

module.exports = app;
