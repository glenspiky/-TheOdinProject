const fs = require("fs");

fs.readFile("callback.txt", "utf8", (err, data) => {
  if (err) {
    console.log("err reading the file", err);
    return;
  }
  const modifyFileData = data.toUpperCase();
  fs.writeFile("callback.txt", modifyFileData, (err) => {
    if (err) {
      console.log("err reading the file", err);
    }
    console.log("data written");
    fs.readFile("callback.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file", err);
        return;
      }
      console.log(data);
    });
  });
});
