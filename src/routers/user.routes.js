const express = require('express'); 
const userRoute = express.Router();
const { getUsers } = require('../controller/user.controller');
userRoute.get('/', getUsers);
// userRoute.post('/register', registerUser);

module.exports = userRoute; 