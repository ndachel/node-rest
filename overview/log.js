var fs = require("fs");

fs.readFile("log.js", "utf8",
  function(error, data){
    console.log(data);
  });

console.log("other code");
