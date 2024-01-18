const http = require("http");
const fs = require("fs");
const qs = require("querystring")

const PORT = 8000;
const app = http.createServer((req , res) => {
  const {method , url} = req;
  console.log(`The request method is ${method} and the url is ${url}`);
  if(url === "/"){
    res.writeHead(200);
    res.write("User is in home route");
    res.end();
  }

  if(url === "/signUp"){
    fs.readFile("./index.html" , (err , data) => {
      if(err){
        res.writeHead(400);
        res.end("Invalid content");
      }else{
        console.log("File readed");
        res.writeHead(200 , ({'Content-Type':'text/html'}));
        res.end(data);
      }
    })
  }

  if(url === "/validate"){
    function parseBody(req , callback){
      var body = '';
      req.on('data' , (data) => body += data);
      req.on('end' , () => callback(qs.parse(body)));
    } 
    parseBody(req , (data) => {
      console.log(data);
      const {user_name , password , dob , gender , remark} = data;
      res.write(`Welcome ${user_name} \n pwd : ${password} \n DOB : ${dob} \n Gender : ${gender} \n remark : ${remark}`);
      res.end()
    });
  }
});

app.listen(PORT , ()=> {
  console.log(`The Server is runnning on the port ${PORT}`);
});
