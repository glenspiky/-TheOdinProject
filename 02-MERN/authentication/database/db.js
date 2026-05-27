const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb connected succesifully");
  } catch (error) {
    console.log("MongoDb connectin failed");
    process.exit(1);
  }
};
module.exports = connectToDb;
