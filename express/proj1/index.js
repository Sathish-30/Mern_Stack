const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended : false }))

const dir = __dirname+"/views";

app.use((req , res ,next) => {
  console.log(`The request method is ${req.method} and the url is ${req.url}`);
  next();
})

app.get("/" , (_req , res) => {
  res.setHeader('Content-Type' , 'text/plain');
  res.send("User is in root")
})

app.get("/home" , (_req , res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(dir+"/home.html");
})

app.get("/login" ,(_req , res) => {
  res.setHeader('Content-Type' , 'text/html');
  res.sendFile(dir+"/login.html")
})


app.get("/signUp" , (_req , res) => {
  res.setHeader('Content-Type' , 'text/html');
  res.sendFile(dir+"/signup.html");
})

app.get("/user/fgpwd" , (_req , res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(dir+"/password.html")
})

app.use((_req , res) => {
  res.status(404).setHeader('Content-Type' , 'text/html');
  res.sendFile(dir+"/error.html");
})

app.listen(PORT , () => {
  console.log(`The server is listening on the port ${PORT}`);
}) 
