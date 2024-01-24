const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended :  true}));
app.use((req , _res , next) => {
  console.log(`The method type is ${req.method} and the url is ${req.url}`);
  next();
})


app.get("/" , (_req , res) => {
    res.send({
    "msg":"Hello world",
  })
})

app.get("/form" , (_req , res) => {
  res.sendFile("./views/form.html");
})

app.listen(PORT , () => {
  console.log(`The server is connected on the port ${PORT}`);
})


