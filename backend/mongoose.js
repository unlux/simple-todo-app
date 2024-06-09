const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// .env

mongoose.connect(process.env.MONGODB_URI);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo
};


