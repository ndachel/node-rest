var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
  debugger;
  console.log(`Incoming request: ${request.url}`);

  var responseStr = ""
  var method = request.method;
  switch(method) {
    case "POST" :  responseStr += "Method: POST\n"; break;
    case "GET" : responseStr += "Method: GET\n"; break;
    case "PUT" : responseStr += "Method: PUT\n"; break;
    case "DELETE" : responseStr += "Method: DELETE\n"; break;
    default: responseStr += "Method: GET (default)\n";      
  }

  response.end(responseStr);
}).listen(3000,"127.0.0.1", () => {
    console.log(`Server is listening on port 3000`);
});

