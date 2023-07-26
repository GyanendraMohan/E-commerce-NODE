const mongoose = require("mongoose");
const validator = require("validator");

const UserScheema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please Provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide the valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
module.exports = mongoose.model("User", UserScheema);
