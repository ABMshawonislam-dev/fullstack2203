const User = require("../model/userModel");
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

let changeController = async (req, res) => {
  const { token,password } = req.body;

//   console.log(token,password)
var decoded = jwt.verify(token, 'shhhhh');

console.log(decoded.email)


bcrypt.hash(password, 10, async function (err, hash) {
    await User.findOneAndUpdate({email:decoded.email},{password:hash})
    res.send({success:"Password Change"})
  });
  
};

module.exports = changeController;
