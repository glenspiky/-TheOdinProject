require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//user model
const User = mongoose.model("user", userSchema);

async function runQueryExamples() {
  try {
    //create new user
    const newUser = await User.create({
      name: "Bob",
      email: "glen@gmail.com",
      age: "40",
      isActive: false,
      tags: ["Developer", "Designer"],
    });
    // await newUser.save();
    console.log("created new user", newUser);

    const allUsers = await User.find({});

    console.log(allUsers);

    const getUserOfActiveTrue = await User.find({ isActive: false });

    console.log(getUserOfActiveTrue);
    console.log(
      "-----------------------------------------------------------------",
    );
    const getLastCreatedUserById = await User.findById(newUser._id);
    console.log(getLastCreatedUserById);

    const selectFields = await User.find().select("name email -_id");
    console.log(selectFields);

    const limitedUsers = await User.find().limit(5).skip(1);
    console.log(limitedUsers);
    const sortUsers = await user.find().sort({ age: -1 });
    console.log(sortUsers);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
}
runQueryExamples();
