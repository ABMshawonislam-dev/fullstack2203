let Variant = require("../model/variantModel");

let createVariantController = async (req, res) => {
  let { name, avatar, regularprice, saleprice,productId } = req.body;
  console.log("ki re")

  let variant = new Variant({
    name: name,
    image: `/uploads/${req.file.filename}`,
    regularprice: regularprice,
    saleprice: saleprice,
    productId:productId
  });

  variant.save();

  res.send({succes: "Variant Created"})
};

module.exports = createVariantController;
