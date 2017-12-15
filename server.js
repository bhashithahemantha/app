// server.js

// BASE SETUP
// =============================================================================


// cll the packages we need
var express = require('express');   // call express
var app = express();                // define our app using express
var bodyParser = require('body-parser');


// configure app to use body-parser
// this will let us get the data from post
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);


var port = process.env.port || 8080;        // set the port

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();    // get an instace of the express router

// test the router check whether everything is fine
router.get('/',function(req, res){
    res.json({message: 'welcome..!'});
}) ;

// more routes for the api will be here


// REGISTER ROUTES HERE
// =============================================================================

// all the apis will be prefixed with /api
app.use('/api',router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('connected on port :'+port);




