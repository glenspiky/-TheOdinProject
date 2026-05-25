const express = require("express");

const app = express();

const requestTimeStampLoger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} from ${req.method} to ${req.url}`);
  next();
};
app.use(requestTimeStampLoger);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});
app.listen(3000, () => {
  console.log("listening");
});
