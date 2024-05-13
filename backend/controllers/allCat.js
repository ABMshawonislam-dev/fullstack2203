let Cart = require("../model/cartModel");

let allCartContoller = async (req, res) => {


  let allCart = await Cart.find().populate("productId");

//   console.log(allCat)

  res.send(allCart)

 
};

module.exports = allCartContoller;
