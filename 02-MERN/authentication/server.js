require("dotenv").config();

const express = require("express");
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoute = require("./routes/homeRoute");
const adminRoute = require("./routes/adminRoute");

const app = express();  
connectToDB();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoute);
app.use("/api/admin", adminRoute);

app.listen(PORT, () => {
  console.log("Connected", PORT);
});
