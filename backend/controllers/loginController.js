
const User = require("../model/userModel");
const bcrypt = require('bcrypt');

let registrationController = async (req, res) => {
  const { email, password } = req.body;
console.log("ami ami")
  let findEmail = await User.findOne({ email: email });

  if (findEmail) {
    bcrypt.compare(password, findEmail.password, function(err, result) {
        // result == true
        console.log(result)
        if(result){
            res.send({success:"Login Successful"})
        }else{
            res.send({error:"Credential Invalid"})
        }
        
    });
  }
};

module.exports = registrationController;
