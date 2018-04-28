//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//-------------------------------------------------------------------------------------
//Express Configuration
// Sets up the basic properties for our express server
//-------------------------------------------------------------------------------------

//Tell node that we are creating an "express" server
var app = express();

//set up the initial port for the server to listen to
var PORT = process.env.PORT || 5200;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//------------------------------------------------------------------------------------------------------------
//ROUTER
//The below points our server to a series of route files --> starts to form a map
//These routes give our server a "map" of how to respond when users visit or request data from various URLs.
//------------------------------------------------------------------------------------------------------------
require("./app/routing/apiRoutes")(app); 
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('friendFinder App listening on PORT: ' + PORT);
});