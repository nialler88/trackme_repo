'use strict';
var express = require('express');
var app = express();

var _ = require('lodash');
var User = require('../../api/users/user_model');
var Route = require('./player_model');
var config = require('../../config/');
var path = require('path');





exports.index_player = function(req,res){
    // Connect to the db
    Route.find(function (err, routes) {
                if(err) { return handleError(res, err); }
                return res.json(200, routes);
                });
    
};




exports.create = function(req, res) {
    new User({
             _id:req.body.email,
             name:req.body.name,
             password:req.body.password,
             sport:req.body.sport
             }).save(function(err,doc){
                     if(err){
                     
                     res.json(err);
                     }
                     else{  res.redirect('../../routes.html')
                     
                     //     app.use(express.staticProvider(__dirname + '/website'));
                     app.use(express.static(config.root));
                     /* app.get('./../../website/', function(req, res) {
                      
                      res.render('../../website/index.html');
                      
                      });*/
                     
                     // app.use(express.static(config.root2));   //line to link to webpage after entering user details
                     console.log(config.root)
                     console.log(req.body.name+' has been added, with the email: '+req.body.email)
                     }
                     })
};
/*

exports.index_player = function(req,res) {
    Player.find({},{},function(err,docs) {
                 res.render('routes', {
                            "routes" : docs
                            });
                 });
};

*/


/*
//get list of games
exports.index_player = function(req,res){
    Player.find({},function (err, docs) {
                if(err) res.json(err);
                else    res.render('index',{routes:docs});
                });
}
*/
    
    





function handleError(res, err) {
    return res.send(500, err);
};
