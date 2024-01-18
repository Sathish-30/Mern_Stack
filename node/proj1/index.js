const http = require("http");

const PORT = 8000;

http.createServer((req , res) => {
  console.log(`The method is ${req.method} and the url is ${req.url}`);
  res.writeHead(200 , {'Content-type' : 'text/plain'});
  res.write("Hello World");
  res.end();
}).listen(PORT , () => {
    console.log(`The Server is running on the port ${PORT}`);
});
 
