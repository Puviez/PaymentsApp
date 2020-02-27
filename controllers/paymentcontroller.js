const express = require("express");
const Payment = require("../models/paymentmodel.js");
const payments = express.Router();

payments.post("/", (req, res) => {
    Payment.create(
      {
        owner: req.body.owner,
        merchant: req.body.merchant,
        description: req.body.description,
        category: req.body.category,
        amount: req.body.amount,
        date: req.body.date
      },
      (err, createdPayment) => {
        if (err) console.log(err.message);
        res.json(createdPayment);
      }
    );
  });
  
payments.get("/", (req, res) => {
    console.log("heerrree")
    Payment.find({}, (err, foundPayment) => {
        res.json(foundPayment);
    });
});

module.exports = payments;