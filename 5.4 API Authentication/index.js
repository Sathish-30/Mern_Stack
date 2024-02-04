import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "sathishammu";
const yourPassword = "ammu";
const yourAPIKey = "06d95be2-a1e0-41b6-a26d-389d71d6cc78";
const yourBearerToken = "6fca7801-3069-49a1-bc50-b3a0158a505a";
let result = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: result});
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  let response = await axios.get("https://secrets-api.appbrewery.com/random");
  result = JSON.stringify(response.data);
  console.log(result);
  res.redirect("/"); 
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  
  const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username:yourUsername,
        password:yourPassword,
      },
    });
    result = JSON.stringify(response.data);
    console.log(result);
    res.redirect("/");
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
