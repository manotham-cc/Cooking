const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://cooking:CtJUyXWI5nsBsPab@mano.bnnh1lk.mongodb.net/?retryWrites=true&w=majority&appName=mano');

app.post('/register',async(req,res)=>{
    const {username,password} = req.body;
  try{
    const userDoc =  await User.create({username,
         password:bcrypt.hashSync(password,salt)});
    res.json(userDoc);
    } catch(e){
        res.status(400).json(e);

    }

});
app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    res.json(userDoc);
    
});

app.listen(4000);
// cooking:CtJUyXWI5nsBsPab
//mongodb+srv://cooking:CtJUyXWI5nsBsPab@mano.bnnh1lk.mongodb.net/?retryWrites=true&w=majority&appName=mano