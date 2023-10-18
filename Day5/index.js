import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  console.log(`The request URL is ${req.url}`);
  console.log(`The request Method is ${req.method}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`The server is running on the Port : ${PORT}`);
});
