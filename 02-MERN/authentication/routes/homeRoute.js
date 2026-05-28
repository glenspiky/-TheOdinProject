const express = require("express");
const { route } = require("./auth-routes");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/welcome", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to home page",
  });
});
module.exports = router;
