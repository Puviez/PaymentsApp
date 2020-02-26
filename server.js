// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const session = require("express-session");
const bodyParser = require("body-parser");
var cors = require('cors')

// Environment Variables
const PORT = process.env.PORT || 3000;

const mongoURI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/paymentstesting'
  

// Connect to Mongo
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("MongoDB connection established:", mongoURI)
);

// Error / Disconnection
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(express.json()); // returns middleware that only parses JSON
app.use(express.static("public"));
app.use(
  session({
    secret: "mutusamy chen",
    resave: false,
    saveUninitialized: false
  })
);
app.use(cors())

// Routes
const merchantsController = require("./controllers/merchcontroller.js");
app.use("/merchants", merchantsController);
const sessionsController = require("./controllers/sessionscontroller.js");
app.use("/sessions", sessionsController);
const usersController = require("./controllers/usercontroller.js");
app.use("/users", usersController);
const paymentsController = require("./controllers/paymentcontroller.js");
app.use("/payments", paymentsController);

// this will catch any route that doesn't exist
app.get("*", (req, res) => {
  res.status(404).json("Sorry, page not found");
});

app.get("/", (req, res) => {
  res.send('Hallo');
});

app.listen(PORT, () => {
  console.log("Let's get things done on port", PORT);
});
