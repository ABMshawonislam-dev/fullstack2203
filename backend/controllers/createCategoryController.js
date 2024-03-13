let Category = require("../model/catModel");

let createCategoryContoller = async (req, res) => {
  const { name, ownerId } = req.body;

  let existingName = await Category.findOne({ name: name });

  if (existingName) {
    res.send({ error: "already exists" });
  } else {
    const cat = new Category({
      name: name,
      ownerId: ownerId,
    });

    cat.save();
    res.send({ success: "Category created. Wait for admin approval" });
  }
};

module.exports = createCategoryContoller;
