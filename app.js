// const http = require('http');
// const server = http.createServer(function(req, res){
//     if(req.url == '/api'){
//         res.end('hello api');
//     }
//     res.end('hello')
// });
// server.listen(8080);

const express = require('express');
const connectDB = require("./src/config/database");
const UserModel = require('./src/models/user');
const bcrypt = require('bcrypt');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// app.get('/', (err,req,res,next) => {
//     if(err){
//         res.status(500).send('SOmething Wrong');
//     }
//     res.status(200).send('api working');
// })

app.post('/signup', async (req,res) => {
   console.log('Request body:', req);
   
   const user = new UserModel({
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    emailId: req.params.emailId,
    password: await bcrypt.hash(req.params.password,'password'),
    age: req.params.age,
    gender: req.params.gender
   })

   user.save().then(() => {
    res.status(200).json({ message: 'User created successfully ', data: user });
   }).catch((err) => {
    console.error('Error saving user:', err);
    res.status(400).json({ error: 'Failed to create user', details: err.message });
   })
})

app.get('/users', async(req,res) => {
    const users = await UserModel.find({}); 
    res.status(200).json(users);
})

app.use('/',(err, req,res,next) => {
    if(err){
        console.log('Internal Server Error');
        res.status(500).json({ error: 'Internal Server Error' });
    }
    next();
})

app.patch('/user', async (req,res) => {
    try{
        const user = await UserModel.updateOne({emailId: req.body.emailId}, {firstName: req.body.firstName});
        res.status(200).json({ message: 'User updated successfully' });
    }catch(err){
        console.error('Error updating user:', err);
        res.status(400).json({ error: 'Failed to update user', details: err.message });
    }
})  

connectDB().then(() => {
    console.log('connected to db');
    app.listen(8000, () => console.log('app is running'));
 }).catch((err) => {
    console.log('connection error');
 })