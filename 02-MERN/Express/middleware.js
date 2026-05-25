const express = require("express");

const app = express();

const myMidddleware = (req, res, next) => {
  console.log("first middleware");
  next();
};
app.use(myMidddleware);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});
app.listen(3000, () => {
  console.log("listening");
});
