const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Main Page");
});

app.use("/user", userRoute);

module.exports = app;
