const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");
const router = express.Router();

// all routes are related to authentication
router.post("/register", registerUser);
router.post('/login',loginUser)

module.exports = router;
