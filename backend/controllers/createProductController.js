let Product = require("../model/productModel");

let createProductController = async (req, res) => {
  let { name, description, avatar } = req.body;

  let product = new Product({
    name: name,
    description: description,
    image: `/uploads/${req.file.filename}`,
  });

  product.save();
};

module.exports = createProductController;
