const fs = require("fs");
try {
  const data = fs.readFileSync("newFile.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}
