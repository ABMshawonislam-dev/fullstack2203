const express = require("express");
const createCategoryContoller = require("../../controllers/createCategoryController");
const allCatContoller = require("../../controllers/allCatController");
const createSubCategoryContoller = require("../../controllers/createSubCategoryController");
const _ = express.Router();

_.post("/createcategory", createCategoryContoller);
_.post("/createsubcategory", createSubCategoryContoller);



_.get("/allcat", allCatContoller);

module.exports = _;
