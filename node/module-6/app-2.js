const fs = require("fs");
const content = "This is some content to write to the file.";
fs.writeFile("file.txt", content, (err) => {
  if (err) throw err;
  console.log("File has been written.");
});
