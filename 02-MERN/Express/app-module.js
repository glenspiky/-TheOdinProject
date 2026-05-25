const express = require("express");

const app = express();

//aplication level settings

app.set("view", "ejs");

app.get("/", (req, res) => {
  res.send("home page");
});

app.post("api/data", (req, res) => {
  res.json({
    message: "Data received",
    data: req.body,
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Somthing went wrong");
});
