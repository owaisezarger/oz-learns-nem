const fs = require("fs");
fs.mkdir("newDirectory", (err) => {
  if (err) throw err;
  console.log("Directory created.");
});
