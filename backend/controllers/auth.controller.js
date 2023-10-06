const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const expressjwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    const body = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(body.password, salt);
    body.password = hash;
    const existingUser = await User.findOne({email:body.email})
    if(existingUser){
        return res.status(409).json({
            error:"User already exists with this email id"
        })
    }else{
    const user = new User(body);
    user.save().then((result) => {
        return res.status(201).json(result);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "Server Error",
        });
      });
    }
}

const signIn=async(req,res)=>{
    const body = req.body;
    const userWithEmail = await User.findOne({email:body.email})
    if(!userWithEmail){
        return res.status(400).json({
            error:"User does not exist, please sign up"
        })
    }
    const validPassword = bcrypt.compareSync(body.password, userWithEmail.password); 
    if(!validPassword){
        return res.status(400).json({
            error:"Password doesn't match"
        })
    }
    const token = jwt.sign({ _id: userWithEmail._id }, process.env.SECRET);
    res.cookie("token", token, { expire: new Date() + 9999 });
    return res.status(200).json({
        message: "User Login Successful",
        token:token
    })

}
const signOut = (req, res) => {
    res.clearCookie("token");
    res.json({
      messsage: "User signout",
    });
  };

module.exports={signUp, signIn, signOut}; 