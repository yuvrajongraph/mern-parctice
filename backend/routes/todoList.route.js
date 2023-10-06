const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoList.controller');

router.post("/todo", todoListController.createItem);

router.get("/todo", todoListController.getAllItems);

router.patch("/todo/:id", todoListController.updateItem);

router.delete("/todo/:id", todoListController.deleteItem);

module.exports = router;