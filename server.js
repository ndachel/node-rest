var http = require("http");
var static = require("./static.js");

http.createServer(function(request, response){
  debugger;
  console.log(`Incoming request: ${request.url}`);

  if (static.canHandleRequest(request)){
    static.serveStaticAsset(request,response);
    return;
  }

  response.end();

}).listen(3000,"127.0.0.1", () => {
    console.log(`Server is listening on port 3000`);
});
