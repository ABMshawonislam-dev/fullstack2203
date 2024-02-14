const express = require("express");
const _ = express.Router();
const authroutes = require("./authRoutes");

_.use("/auth", authroutes);


module.exports = _;
