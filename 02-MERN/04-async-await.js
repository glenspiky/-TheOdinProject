const fs = require("fs");
function person(name, callbackFn) {
  console.log(`Hello, ${name}`);
  callbackFn();
}
function address() {
  console.log("Kenya");
}
person("glen", address);

fs.readFile("callback.txt", "utf8", (err, data) => {
  if (err) {
    console.log("err reading file", err);
    return;
  }

  console.log(data);
});
