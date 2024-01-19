const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/form", (_req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/validate", (req, res) => {
  const { user_name, password, dob, gender, remark } = req.body;
  res.send({ user_name, password, dob, gender, remark });
});

app.listen(PORT, () => {
  console.log(`The Server is running on the port ${PORT}`);
});
