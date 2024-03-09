const mongoose = require("mongoose");
let mongoConfig = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.z0jh60i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected!"));
};

// mongodb+srv://ecom:YZJ2EveH7ET3EtC0@cluster0.z0jh60i.mongodb.net/ecommerce?retryWrites=true&w=majority

module.exports = mongoConfig;
