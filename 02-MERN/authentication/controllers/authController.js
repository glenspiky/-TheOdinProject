const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register controller
const registerUser = async (req, res) => {
  try {
    // Extract user info from request body
    const { username, email, password, role } = req.body;

    // Check if user already exists
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    // Save user
    await newlyCreatedUser.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Some error occurred! Please try again",
    });
  }
};

// Login controller
const loginUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Some error occurred! Please try again",
    });
  }
};

module.exports = { registerUser, loginUser };
