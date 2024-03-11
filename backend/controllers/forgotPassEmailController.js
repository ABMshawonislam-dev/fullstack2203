const User = require("../model/userModel");
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');

let registrationController = async (req, res) => {
  const { email } = req.body;

  let findEmail = await User.findOne({ email: email });

  if (findEmail) {
    var token = jwt.sign({ email: email }, "shhhhh");
    console.log(token)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
          user: "shawon.cit.bd@gmail.com",
          pass: "uuhe xptk lunj boad",
        },
      });

      const info = await transporter.sendMail({
        from: "shawon.cit.bd@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Password Change Emial", // Subject line
        html: `<a href="http://localhost:5173/changepass/${token}">Click for Change Password</a>`, // html body
      });
  }
};

module.exports = registrationController;
