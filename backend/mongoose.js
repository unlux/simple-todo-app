const mongoose = require("mongoose");

// .env
mongoose.connect("mongodb+srv://admin:<password>@cluster.loluthought.mongodb.net/TODO-app");
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo
};
