'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('mongoose');
var config = require('./config/');
var express = require('express');
var bodyParser = require('body-parser');
//create routing object
var user = require('./api/users/index');
var route = require('./api/routes/index');
var Route = require('./api/routes/player_model');
var User = require('./api/users/user_model');


//html to hbs/////////////////////////////////////////



///////////////////////////////////////////////////////


//create an express app
var app = express();

//app.set('views',__dirname+'/../views');
//app.set('view engine','pug');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());

//manages html fields
app.use(bodyParser.urlencoded({
                              extended:true
                              }));
 

//add static path.
app.use(express.static(config.root));
console.log(config.root);


app.get('/api/routes',route.index_player);
app.get('/api/routes/:game/team_played',route.index_player);


app.post('/api/routes',route.index_player);


app.get('/api/users',user.index_user);
app.post('/api/users',user.create);
app.put('/api/users/:id',user.update);
app.delete('/api/users/:id',user.delete);


app.post('/login',user.login);


// Listen on port 8000, IP defaults to 127.0.0.1 Local host
app.listen(config.port)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:"+config.port+"/");
