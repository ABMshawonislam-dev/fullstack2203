const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const secretValidator = require("../helpers/secrectValidator");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

let registrationController = async (req, res) => {
  const { email, otp } = req.body;

  let findEmail = await User.findOne({ email: email });

  if (findEmail) {
    if (findEmail.otp == otp) {
      console.log("milse");
      await User.findOneAndUpdate({ email: email }, { otp: "" });
      res.send({ success: "Otp  Matched" });
    } else {
      console.log("mile nai");
      res.send({ error: "Otp Not Matched" });
    }
  }
};

module.exports = registrationController;
