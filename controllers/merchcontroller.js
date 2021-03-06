const express = require("express");
const Merchant = require("../models/merchmodel.js");
const merchants = express.Router();
const bcrypt = require("bcrypt");

merchants.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  Merchant.create(
    {
      type: req.body.type,
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      category: req.body.category,
      description: req.body.description,
      bank_account_num: req.body.bank_account_num,
    },
    (err, createdMerchant) => {
      if (err) console.log(err.message);
      res.json(createdMerchant);
    }
  );
});

merchants.get("/:id", (req, res) => {
  console.log("heerrree")
  Merchant.findById({_id: req.params.id}, (err, foundMerchant) => {
    res.json(foundMerchant);
  });
});

merchants.put("/:id", (req, res) => {
    Merchant.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updatedMerchant) => {
      if(err) console.log(err);
      console.log('Updated Merchant');
      res.json(updatedMerchant);
    }
  );
});

module.exports = merchants;
