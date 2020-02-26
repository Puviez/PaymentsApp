// const express = require("express");
// const payment = express.Router();
// const stripe = require('stripe')('sk_test_gkQR8IrPPm3BHB3HXiPDbslu00UmRZMhQc');

// payment.post("/create-payment-intent", async (req, res) => {
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: req.body.amount,
//       currency: "sgd"
//     });
  
//     // Send publishable key and PaymentIntent details to client
//     res.send({
//       publishableKey: "pk_test_c6ticSNZgRWokBFo6iYJWwvR00SHRdlRMp",
//       clientSecret: paymentIntent.client_secret
//     });
//   });

//   module.exports = payment;