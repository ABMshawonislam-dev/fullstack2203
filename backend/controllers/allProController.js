let Product = require("../model/productModel");

let allProContoller = async (req, res) => {
  let allPro = await Product.find();

  //   console.log(allCat)

  res.send(allPro);
};

module.exports = allProContoller;
