require("dotenv").config();
const connectToDB = require("./database/db");
const express = require("express");

const bookRoutes = require("./routes/bookRoute");

const app = express();

const PORT = process.env.PORT || 3000;

//connect to db
connectToDB();

app.use(express.json());

//Routes here
app.use('/api/books',bookRoutes)

app.listen(PORT, () => {
  console.log("App is now running");
});
