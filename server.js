//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//creating an "express" server
var app = express();
//serves the static files such as the css file
app.use(express.static(__dirname + '/app/public'));

// Sets an initial port.
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//server starts listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});