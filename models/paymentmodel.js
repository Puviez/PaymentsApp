const mongoose = require("mongoose");

const paymentsSchema = mongoose.Schema({
  owner: { type: Schema.Types.ObjectId, ref: "Users" },
  merchant: { type: Schema.Types.ObjectId, ref: "Merchants" },
  description: String,
  category: String,
  amount: Number,
  date: Date
});

const Payments = mongoose.model("Payments", paymentsSchema);

module.exports = Payments;