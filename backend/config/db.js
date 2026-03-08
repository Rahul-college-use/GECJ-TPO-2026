const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/college");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectdb;