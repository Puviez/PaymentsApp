const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  type: String,
  stripe_id: String,
  username: {
      type: String,
      unique: true
  },
  password: String,
  name: String,
  email: String,
  // cards: Array,
  // transactions: Array
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;