const fs = require("fs");
function getFileContents(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

getFileContents("file.txt", (err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("File contents:", data);
  }
});
