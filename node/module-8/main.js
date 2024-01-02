const express = require("express");
const app = express();
// Custom middleware function
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Registering the middleware
app.use(logger);

// Handling requests
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
