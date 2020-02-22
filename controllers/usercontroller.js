const express = require("express");
const User = require("../models/usermodel.js");
const users = express.Router();
const bcrypt = require("bcrypt");

users.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(
    {
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
    },
    (err, createdUser) => {
      if (err) console.log(err.message);
      res.json(createdUser);
    }
  );
});

users.get("/", (req, res) => {
  console.log("heerrree")
  User.find({}, (err, foundUser) => {
    res.json(foundUser);
  });
});

module.exports = users;
