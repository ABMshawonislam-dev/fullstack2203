let SubCategory = require("../model/subCatModel");

let createSubCategoryContoller = async (req, res) => {
  const { name, ownerId,categoryId } = req.body;

  let existingName = await SubCategory.findOne({ name: name });

  if (existingName) {
    res.send({ error: "already exists" });
  } else {
    const cat = new SubCategory({
      name: name,
      ownerId: ownerId,
      categoryId:categoryId
    });

    cat.save();
    res.send({ success: "SubCategory created. Wait for admin approval" });
  }
};

module.exports = createSubCategoryContoller;
