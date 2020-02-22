const mongoose = require("mongoose");

const merchantsSchema = mongoose.Schema({
  username: {
      type: String,
      unique: true
  },
  password: String,
  name: String,
  email: String,
  category: String,
  description: String,
  bank_account_num: Number,
  transactions: Array
});

const Merchants = mongoose.model("Merchants", merchantsSchema);

module.exports = Merchants;