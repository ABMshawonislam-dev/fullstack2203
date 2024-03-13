const express = require("express");
const _ = express.Router();
const authroutes = require("./authRoutes");
const productRoute = require("./productRoute");

_.use("/auth", authroutes);
_.use("/product", productRoute);

module.exports = _;
