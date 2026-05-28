const express = require("express");
const { route } = require("./auth-routes");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/", authMiddleware, adminMiddleware, (req, res) => {
  res.json({
    message: "Welcome to admin page",
  });
});
module.exports = router;
