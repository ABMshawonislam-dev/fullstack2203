const express = require("express");
const secureApi = require("../../middleware/secureApi");
const registrationController = require("../../controllers/registrationContoller");
const otpVarifyController = require("../../controllers/otpVaryfyController");
const forgotPassEmailController = require("../../controllers/forgotPassEmailController");
const changeController = require("../../controllers/changeController");
const loginContoller = require("../../controllers/loginController");

const _ = express.Router();

_.post("/registration", secureApi, registrationController);
_.post("/login", loginContoller);

_.post("/otpvarification", otpVarifyController);
_.post("/forgotpassemail", forgotPassEmailController);
_.post("/changepass", changeController);

module.exports = _;
