const Todo = require('../models/todoList.model')

const createItem = (req, res) => {
    const body = req.body;
  
    const todo = new Todo(req.body);
    todo.save().then((result) => {
        return res.status(201).json(result);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "Server Error",
        });
      });
}

const getAllItems = (req, res) => {
    Todo.find({})
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "Server Error",
        });
      });
}

const updateItem = async (req, res) => {
    const params = req.params;
    const body = req.body;
    const doc = await Todo.findOneAndUpdate({ _id: params.id }, body);
    if (!doc) {
      return res.status(404).json({
        error: " Item not found",
      });
    }
  
    return res.status(200).json(doc);
}

const deleteItem = async (req, res) => {
    const params = req.params;
    const result = await Todo.findOneAndRemove({ _id: params.id });
    return res.status(200).json({
      message: "item deleted successfully",
    });
}

module.exports = {createItem, getAllItems, updateItem, deleteItem}