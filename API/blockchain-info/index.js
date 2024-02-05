import express from "express";
import bodyParser from "body-parser";
import "dotenv/config"
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static('public'));
app.set("view engine","ejs");

app.get("/" , async(req , res) => {
    const result = await axios.get("https://api.blockchain.com/v3/exchange/symbols");
    console.log(result.data.forEach(element => console.log(element)));
    res.send("In Home route");

    // res.render("index");
})  

app.listen(PORT , () => console.log(`Server is running on the port ${PORT}`));