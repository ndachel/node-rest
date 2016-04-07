var csvrow = require('csvrow');
const http = require('http');
var printHello = require("./testMod.js");
const hostname = '127.0.0.1';
const port = 1337; 

var userCounter = 0;

http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type': 'text/plain' });

  userCounter++;
  res.end(printHello('Bob') + ', you are user: ' + userCounter);

}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
