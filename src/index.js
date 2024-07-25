const app = require("./providers/app");

require("dotenv").config();

app.listen(process.env.NODE_PORT || 3000, function () {
  console.log("start api on port", process.env.NODE_PORT || 3000);
});
