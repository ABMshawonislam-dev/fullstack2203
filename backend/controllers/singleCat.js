let SubCategory = require("../model/subCatModel");

let allCatContoller = async (req, res) => {


  let allCat = await SubCategory.find({categoryId:req.query.slug}).populate("ownerId");

//   console.log(allCat)

  res.send(allCat)
};

module.exports = allCatContoller;
