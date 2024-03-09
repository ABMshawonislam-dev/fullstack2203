const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const secretValidator = require("../helpers/secrectValidator");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

let registrationController = async (req, res) => {
  const { username, email, password } = req.body;

  console.log("hello", req.body);

  if (blankInput(username)) {
    res.send({ error: "Username requires" });
  } else if (blankInput(email)) {
    res.send({ error: "Email requires" });
  } else if (!emailValidator(email)) {
    res.send({ error: "valid Email requires" });
  } else if (blankInput(password)) {
    res.send({ error: "Password requires" });
  } else if (secretValidator(password)) {
    res.send({ error: "Password is short" });
  } else {
    let existingEmail = await User.find({ email: email });

    console.log(existingEmail);

    if (existingEmail.length > 0) {
      res.send({ error: `${email} already exists` });
    } else {
      const otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });

      console.log(otp);
      bcrypt.hash(password, 10, async function (err, hash) {
        let user = new User({
          username: username,
          email: email,
          password: hash,
          otp: otp,
        });

        user.save();

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
          subject: "Email Varification OTP", // Subject line
          html: `<p>Use this otp for varify your email <b>Otp:</b>${otp}</p>`, // html body
        });

        res.send({
          username: user.username,
          email: user.email,
          role: user.role,
        });
      });
    }
  }
};

module.exports = registrationController;
