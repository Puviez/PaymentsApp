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
  
payments.get("/:id", (req, res) => {
    console.log("heerrree")
    Payment.find({owner: req.params.id}).sort('date').exec((err, foundPayments) => {
        res.json(foundPayments);
    });
});

module.exports = payments;