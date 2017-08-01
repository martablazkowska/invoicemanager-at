var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var dbUrl = 'mongodb://marta:testtest@ds147789.mlab.com:47789/mbl-mean-app';
var publicPath = path.resolve(__dirname, 'public');
var api = require('./routes');



var app = express();
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use(api);

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(dbUrl, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
