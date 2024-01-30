import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"test",
  password:"Createnumber@123",
  port:5432,
});

db.connect()
.then(() => {console.log("database connected")})
.catch((err) => console.log(err));

app.use((req , res , next) => {
  console.log(`The request method is ${req.method} and the request url is ${req.url}`);
  next();
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const {username , password} = req.body;  

  // Check if user is already present in the Db
  const checkResult = await db.query(
    "SELECT * FROM users Where email = $1",
    [username],
  );

  if(checkResult.rows.length > 0){
    res.send("Email already exists. Try logging in.");
  }
  else{
    const result = await db.query(
      "INSERT INTO users (email , password) VALUES ($1 , $2)",
      [username,  password]
    );
    console.log(result);
    res.render("secrets.ejs");
  }
});

app.post("/login", async (req, res) => {
  const {username , password} = req.body;
  console.log(`The username is ${username} and the password is ${password}`);

  // Check if user present or not
  const checkResult = await db.query(
    "SELECT * FROM users Where email = $1",
    [username],
  );

  if(checkResult.rows.length == 0){
    res.send("There is no user exists");
  }
  else{
    const user = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [username]
    );
    const userPassword = user.rows[0].password;
    if(userPassword === password){
      res.render("secrets.ejs");
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
