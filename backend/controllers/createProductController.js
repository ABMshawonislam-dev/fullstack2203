let Product = require("../model/productModel");

let createProductController = async (req, res) => {
  let { name, description, avatar, regularprice, saleprice, slug } = req.body;

  let product = new Product({
    name: name,
    description: description,
    image: `/uploads/${req.file.filename}`,
    regularprice: regularprice,
    saleprice: saleprice,
    slug: slug,
  });

  product.save();
};

module.exports = createProductController;
