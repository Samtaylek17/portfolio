const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  project: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
