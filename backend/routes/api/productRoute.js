const express = require("express");
const createCategoryContoller = require("../../controllers/createCategoryController");
const _ = express.Router();

_.post("/createcategory", createCategoryContoller);

module.exports = _;
