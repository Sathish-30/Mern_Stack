import db from "./database/database.js";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 8000;


db.connect((err) => {
    if(err){
        console.log("Failed to connect to DB");
        console.log(err);
    }else{
        console.log("Database connected to DB")
    }
});

app.use(bodyParser.urlencoded({extended:true}));

app.use((req , res , next) => {
    console.log(`The request method is ${req.method} and the url is ${req.url}`);
    next();
})

app.get("/" , (_req , res) => {
    res.sendFile(path.normalize(__dirname+"/views/index.html"));
})

app.post("/register" , (req , res) => {
    const {username , password , re_password, gender , firstname , lastname , email } = req.body;
    if(!(username && password && gender && firstname && lastname && email)){
        res.status(400).send({"error" : "Enter all valid credentials"});
    }
    if(password === re_password){
        console.log("Password matches");
        const query = "Insert Into details values(? , ? , ? , ? , ? , ?)";
        db.query(query, [username, password, gender, firstname, lastname, email], (err) => {
            if (err) {
                console.log("Could not Insert into DB");
                console.log(err);
            } else {
                res.status(200).send({ "msg": "Added record to the database" });
            }
        });
    }   
})


app.listen(PORT , () => {
    console.log(`The server is listening to the port ${PORT}`);
})

