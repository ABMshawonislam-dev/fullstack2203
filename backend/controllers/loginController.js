const User = require("../model/userModel");
const bcrypt = require("bcrypt");

let loginContoller = async (req, res) => {
  const { email, password } = req.body;

  let existingEmail = await User.find({ email: email });

  if (existingEmail.length > 0) {
    console.log(existingEmail[0].password);
    bcrypt.compare(password, existingEmail[0].password, function (err, result) {
      // result == true
      console.log(result);

      if (result) {
        res.send({
          id: existingEmail[0]._id,
          username: existingEmail[0].username,
          email: existingEmail[0].email,
          role: existingEmail[0].role,
          isEmailVarified: existingEmail[0].isEmailVarified,
        });
      } else {
        res.send({
          error: "Credential Invalid",
        });
      }
    });
  } else {
    res.send({ error: `${email} not exists` });
  }
};

module.exports = loginContoller;
