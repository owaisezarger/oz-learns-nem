const fs = require("fs");
fs.rename("file.txt", "newFile.txt", (err) => {
  if (err) throw err;
  console.log("File renamed.");
});
