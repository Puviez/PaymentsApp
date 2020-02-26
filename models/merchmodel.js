const mongoose = require("mongoose");

const merchantsSchema = mongoose.Schema({
  type: String,
  username: {
      type: String,
      unique: true
  },
  password: String,
  email: String,
  category: String,
  description: String,
  bank_account_num: Number,
  transactions: Array
});

const Merchants = mongoose.model("Merchants", merchantsSchema);

module.exports = Merchants;