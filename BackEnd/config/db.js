const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed', err); // Log the error
    if (err.cause) {
      console.error('Cause:', err.cause);
    }
    process.exit(1);
  }
};

module.exports = connectDB;