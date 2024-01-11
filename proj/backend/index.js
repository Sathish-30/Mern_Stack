import express, { urlencoded } from "express"
import bodyParser from "body-parser";
import homeRoute from "./routes/homeRoute.js";
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use((req , res , next) => {
    console.log(`The request method is ${req.method} and the url is ${req.url}`);
    next();
})

app.use("/",homeRoute)

app.listen(PORT , () => console.log(`Listening on the ${PORT}`))