const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  age: Number,
});

// Create a model
const User = mongoose.model("User", userSchema);

let users; // Declare users in a higher scope

// Create a new user and save to the database
const newUser = new User({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
});

newUser
  .save()
  .then((user) => {
    console.log("User created:", user);

    // Retrieve users
    return User.find();
  })
  .then((retrievedUsers) => {
    users = retrievedUsers; // Assign retrievedUsers to the higher scope variable
    console.log("Users:", users);

    // Update a user
    if (users && users.length > 0) {
      return User.findByIdAndUpdate(users[0]._id, { name: "Updated Name" });
    } else {
      throw new Error("No users found to update.");
    }
  })
  .then(() => {
    console.log("User updated successfully");

    // Delete a user
    if (users && users.length > 0) {
      return User.findByIdAndDelete(users[0]._id);
    } else {
      throw new Error("No users found to delete.");
    }
  })
  .then(() => {
    console.log("User deleted successfully");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
