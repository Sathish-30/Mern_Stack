const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:false}));

app.get("/form" , (req , res) => {
    res.setHeader("Content-Type" , "text/html");
    res.sendFile(__dirname+"/views/index.html");
})

app.post("/display" , (req , res) => {
    const {maths , sci , soc , ai } = req.body;
    res.send({maths , sci , soc , ai});
})

app.listen(PORT , () => {
    console.log(`The server is listening on the port ${PORT}`);
})