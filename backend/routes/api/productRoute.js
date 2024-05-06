const express = require("express");
const multer = require("multer");
const createCategoryContoller = require("../../controllers/createCategoryController");
const allCatContoller = require("../../controllers/allCatController");
const createSubCategoryContoller = require("../../controllers/createSubCategoryController");
const createProductController = require("../../controllers/createProductController");
const allProContoller = require("../../controllers/allProController");
const singleCat = require("../../controllers/singleCat");
const createVariantController = require("../../controllers/createVariantController");
const _ = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
    console.log(file);
  },
});

const upload = multer({ storage: storage });

_.post("/createcategory", createCategoryContoller);
_.post("/createsubcategory", createSubCategoryContoller);
_.post("/createproduct", upload.single("avatar"), createProductController);
_.post("/createvariant", upload.single("varinatavatar"), createVariantController);

_.get("/allcat", allCatContoller);
_.get("/allpro", allProContoller);
_.get("/singlecat", singleCat);

module.exports = _;
