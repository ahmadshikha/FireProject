require('dotenv').config();
const mongoose = require('mongoose');
const mongourl=process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(mongourl).then(() => {

      console.log('\nMongoDB connected successfully..!');
    })
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
};

module.exports = connectDB;
