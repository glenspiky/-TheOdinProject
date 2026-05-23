const lodash = require("lodash");
const path = require("path");
const fs = require("fs");

const names = ["felix", "glen", "john"];
const capitalized = lodash.map(names, lodash.capitalize);

console.log("Directry name:", path.dirname(__dirname));
console.log(capitalized);
const createFolder = path.join(__dirname, "data");

if (!fs.existsSync(createFolder)) {
  fs.mkdirSync(createFolder);
  console.log("data folder created");
}
const filePath = path.join(createFolder, "exaple.t ext");

fs.writeFileSync(filePath, "hello");
console.log("FIle created");

const readContent = fs.readFileSync(filePath, "utf8");
console.log("File content", readContent);

fs.appendFileSync(filePath, "\n This is the added line");
console.log("new content added");

//async way of creating a filePath

const asyncFilePath = path.join(createFolder, "async-exaple.txt");
fs.writeFile(asyncFilePath, "hello, async nodejs", (err, updatedData) => {
  if (err) throw err;
});
