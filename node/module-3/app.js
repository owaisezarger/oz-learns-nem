const math = require("./math.js");
console.log(math.add(12, 7));
console.log(math.sub(12, 7));

const fs = require("fs");
fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
