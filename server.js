var express = require("express");
var logger = require("morgan");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
require("./routes/controller")(app);

// Start the server
app.listen(PORT, function () {
    console.log(`App running on port http://localhost:${PORT}`);
});

