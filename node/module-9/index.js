// app.js
const mongoose = require("./db");

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a Mongoose model
const User = mongoose.model("User", userSchema);

// Create a new user
const newUser = new User({
  name: "John Doe",
  email: "john@example.com",
});

// Save the user to the database
newUser
  .save()
  .then(() => {
    console.log("User saved to the database");
  })
  .catch((error) => {
    console.error("Error saving user to the database:", error);
  });
