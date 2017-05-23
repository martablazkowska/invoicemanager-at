// var express = require('express');
// var path = require('path');
// var httpProxy = require('http-proxy');
//
// var proxy = httpProxy.createProxyServer();
// var app = express();
//
// var isProduction = process.env.NODE_ENV === 'production';
// var port = isProduction ? process.env.PORT : 3000;
// var publicPath = path.resolve(__dirname, 'public');
// var tasks = require('./routes/tasks');
//
// app.use(express.static(publicPath));
// app.use('/api', tasks);
//
// // We only want to run the workflow when not in production
// // if (!isProduction) {
// //
// //   // We require the bundler inside the if block because
// //   // it is only needed in a development environment. Later
// //   // you will see why this is a good idea
// //   var bundle = require('./server/bundle.js');
// //   bundle();
// //
// //   // Any requests to localhost:3000/build is proxied
// //   // to webpack-dev-server
// //   app.all('/build/*', function (req, res) {
// //     proxy.web(req, res, {
// //       target: 'http://localhost:8080'
// //     });
// //   });
// //
// // }
//
// // It is important to catch any errors from the proxy or the
// // server will crash. An example of this is connecting to the
// // server when webpack is bundling
// proxy.on('error', function(e) {
//   console.log('Could not connect to proxy, please try again...');
// });
//
// app.listen(port, function () {
//   console.log('Server running on port ' + port);
// });

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
