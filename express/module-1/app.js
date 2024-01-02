const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to OxcyTech");
});
app.listen(3000, function () {
  console.log("Example app listening at 3000");
});
