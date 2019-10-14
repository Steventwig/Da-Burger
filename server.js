var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");
app.use("/", routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(3000)
});










// var router = require("./controllers/burgers_controller.js");
// var path = require("path");
//
//
//
// // Middleware
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//
//

//
// // Static files and routes (middleware)
//
// app.use("/", router);
//
// // Start server
