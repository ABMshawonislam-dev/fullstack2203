const express = require("express");
const secureApi = require("../../middleware/secureApi");
const registrationController = require("../../controllers/registrationContoller");
const otpVarifyController = require("../../controllers/otpVaryfyController");
const _ = express.Router();

_.post("/registration", secureApi, registrationController);
_.post("/otpvarification", otpVarifyController);

module.exports = _;
