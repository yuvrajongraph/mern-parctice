const express = require("express");
require("dotenv").config({path:'./.env'});
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const todoListRoute = require('./routes/todoList.route');
const authRouter = require('./routes/auth.route');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/todolist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/',todoListRoute);
app.use('/',authRouter);


const Port = 1010;

app.listen(Port, () => {
  console.log(`Server is starting at ${Port}`);
});
