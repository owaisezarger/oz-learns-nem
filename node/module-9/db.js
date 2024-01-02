// db.js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mydatabase", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose;
