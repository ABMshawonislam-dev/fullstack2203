let Category = require("../model/catModel");

let allCatContoller = async (req, res) => {


  let allCat = await Category.find();

//   console.log(allCat)

  res.send(allCat)

 
};

module.exports = allCatContoller;
