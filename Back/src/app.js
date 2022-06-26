const express = require("express");
const app = express();

app.get("/", function (req, res){
  res.sendFile(__dirname + "/teste/index.html");
});

app.listen(3000, function() {
  console.log("Server iniciado!")
})