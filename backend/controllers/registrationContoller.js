const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailValidator");
const secretValidator = require("../helpers/secrectValidator");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

let registrationController = async (req, res) => {
  const { username, email, password } = req.body;

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
      bcrypt.hash(password, 10, function (err, hash) {
        let user = new User({
          username: username,
          email: email,
          password: hash,
        });

        user.save();

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
