require("dotenv").config();
const express = require("express");
var cors = require("cors");
const app = express();
const secureApi = require("./middleware/secureApi");
const routes = require("./routes");
const mongoConfig = require("./config/mongoConfig");

mongoConfig();
app.use(cors());
app.use(express.json());
app.use(routes);

// app.post("/api/v1/auth/registration", secureApi, (req, res) => {
//   console.log(req.body);
// });

app.listen(8000, () => {
  console.log("Port Connected");
});
