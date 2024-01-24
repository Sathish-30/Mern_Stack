const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 8000;
const User = require("./model/User.js")
const bcrypt = require("bcryptjs");
const db = require("./database/database.js");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
db.connect();
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.get("/" , (req , res) => {
  res.sendFile(path.join(__dirname , "views/index.html"));
})

app.post("/register" , async(req , res) =>{
  try{
    const {email , password} = req.body;
    if(!(email && password)){
      res.status(400).send({"error" : "All fields are compulsory"})
    }
    // Check if user is already available
    const existingUser = await User.findOne({email});
    if(existingUser !== null){
      res.status(401).send({"msg":"User already exsisted"});
    } 

    const myEncPassword = await bcrypt.hash(password , 10);
    const user = await User.create({
      email,
      password:myEncPassword,
    })
    const token = jwt.sign(
      {id:user._id , email},
      'shhh', // process.env.jwtsecret
      {
        expiresIn:"2hr"
      }
    )
    user.token = token;
    user.password = undefined;
    res.statusMessage(200).json(user);

  }catch(err){
    console.log(err);
  }
})

app.post("/login" , async(req , res) => {
  // Get all data from the frontend
  // find user in DB
  // match the password
  // send a token
  try{
    const {email , password} = req.body();
    if(!(email && password)){
      res.status(400).send({"error" : "Invalid credentials"});
    }
    const user = User.findOne({email});
    if(user && (await bcrypt.compare(password , user.password))){
      const token = jwt.sign(
        {id:user._id},
        'shhh', // process.env.jwtsecret
        {
          expiresIn:"2hr"
        }
      )
      user.token = token;
      user.password = password;

      // Cookies section
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token" , token , options).json({
        success:true,
        token,
        user,
      })
      res.status(200).json(user);
    }
  }catch(err){
    console.log(err);
  }
})

app.listen(PORT , () => console.log(`The server is running on the port ${PORT}`));
