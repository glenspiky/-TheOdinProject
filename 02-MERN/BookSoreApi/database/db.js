const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb is connected succesiful");
  } catch (error) {
    console.error("Mongo error: ", error);

    process.exit(1);
  }
};
module.exports = connectToDB;
