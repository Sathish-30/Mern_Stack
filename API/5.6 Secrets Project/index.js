// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
import express from "express";
import axios from "axios";

const app = express();

app.use(express.static('public'));
app.set("view engine","ejs");

app.get("/" , async(req , res) => {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    const {secret , username} = result.data;
    res.render("index" , {secret : secret , user:username});
})

app.listen(3000 , () => console.log("Server is running on the port 3000"));

