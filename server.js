// server.js

// BASE SETUP
// =============================================================================


// call the packages we need
var express = require('express');   // call express
var app = express();                // define our app using express
var bodyParser = require('body-parser');

// pull in the mongoose and connect to db
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database

// pull in the bear model
var Bear = require('./models/bear'); 



// configure app to use body-parser
// this will let us get the data from post
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);


var port = process.env.port || 8080;        // set the port

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();    // get an instace of the express router

// middleware to use for all requests
router.use(function(req, res, next){
    // do loginng
    console.log('something is happening...');
    next(); // make sure we go to the next routes without stop here
});

// test the router check whether everything is fine
router.get('/',function(req, res){
    res.json({message: 'welcome..!'});
}) ;

// more routes for the api will be here

// on routes that end in bears
// --------------------------------------------------------------------------
router.route('/bears')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res){
        
        var bear = new Bear(); // create a new instance of the bear model
        bear.name = req.body.name; // set the bears name (comes from the request)

        // save the bear and check for errors
        bear.save(function(err){
            if(err)
                res.send(err);

            res.json({message: 'Bear created...!'});    
        });

    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res){
        Bear.find(function(err, bears){
            if (err)
                res.send(err);
            res.json(bears);    
        });
    });

// REGISTER ROUTES HERE
// =============================================================================

// all the apis will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("connected on port :"+port);



