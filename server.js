const http = require("http");

const  port = 8081;

http
.createServer((req, res) => { // call back function
  res.writeHead(200, {"content-Type": "text/html" });
  res.write("<h2>Hey server started :-)123 </h2>");
  res.end();
})
.listen(8081, () => {  // call back function
    console.log('Nodejs Server Started Running on port: ${8081}');
});
//http:localhost:8081