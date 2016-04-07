var express = require("express");
var favicon = require("express-favicon");
var app = express();

app.use("/static", express.static("static"));
app.use(favicon(__dirname + "/static/favicon.ico"));  

app.get("/", (request, response) => {
  response.end("Hello from express");
});

app.get("/bob/", (request, response) => {
  response.end("Hello Bob\n");  
});

app.post("/", (request, response) => {
  response.end("Post from express");
});


app.delete("/", (request, response) => {
  response.end("Delete from express");
});

app.listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on localhost port 3000`);
});
