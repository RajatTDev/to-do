 const mongoose = require('mongoose');
const { DB_URL } = require('./constants');
 const connectDB = async() => {
     try {
        const DB_URI = DB_URL;
        await mongoose.connect(DB_URI);
         console.log('MongoDB connected successfully');
     } catch (error) {
         console.error('MongoDB connection error:', error);
         process.exit(1);
     }
 }
 module.exports = connectDB;
