const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
});
  
const User = mongoose.model("User", userSchema);
module.exports = User;