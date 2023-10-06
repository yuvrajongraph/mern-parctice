const mongoose = require('mongoose')
const todoSchema = {
    text: String,
};
  
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;