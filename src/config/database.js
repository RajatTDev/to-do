 const mongoose = require('mongoose');
 const connectDB = async() => {
     try {
         await mongoose.connect("mongodb+srv://nodedb_user:4uR13GgQRF9cnBCY@node.ie3cr7m.mongodb.net/devNode");
         console.log('MongoDB connected successfully');
     } catch (error) {
         console.error('MongoDB connection error:', error);
         process.exit(1);
     }
 }
 module.exports = connectDB;
