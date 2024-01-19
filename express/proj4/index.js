const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;
app.use(bodyParser.urlencoded({extended : false}));

app.get("/" , (_req , res) => {
    res.setHeader('Content-Type' , "text/plain");
    res.send("Hello world");
});

app.get("/form" , (req , res) => {
    res.setHeader("Content-type","text/html");
    res.sendFile(__dirname+"/views/index.html");
});

app.post("/display" , (req , res) => {
    const {name , email, subscribe , format , subscription , comment} = req.body;
    res.setHeader("Content-type" , "application/json");
    res.send({name , email , subscribe , format , subscription , comment});
})

app.listen(PORT , () => {
    console.log(`The Server is running on the port ${PORT}`);
})