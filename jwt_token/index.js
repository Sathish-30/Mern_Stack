const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 8000;
const User = require("./model/User.js")
const bcryt = require("bcryptjs");
const db = require("./database/database.js");
db.connect();
app.use(bodyParser.urlencoded({extended : false}));

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
    if(existingUser){
      res.statusMessage(401).send("msg":"User already exsisted");
    } 
  }catch(err){
    console.log(err);
  }
})

app.listen(PORT , () => console.log(`The server is running on the port ${PORT}`));
