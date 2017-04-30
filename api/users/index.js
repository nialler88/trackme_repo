'use strict';
var express = require('express');
var app = express();

var _ = require('lodash');
var User = require('./user_model');
var Player = require('../../api/routes/player_model');
var config = require('../../config/');
var path = require('path');
var contactEvent = require('../../events.js')






// Get list of users
exports.index_user = function(req, res) {
    // Connect to the db
    User.find(function (err, users) {
                 if(err) { return handleError(res, err); }
                 return res.json(200, users);
                 });
    
};






    
// Creates a new user in datastore.
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
                     else{  res.redirect('../../welcome.html')
                     
                //     app.use(express.staticProvider(__dirname + '/website'));
                    app.use(express.static(config.root));
                   
                     console.log(config.root)
                     console.log(req.body.name+' has been added, with the email: '+req.body.email)
                     
                     contactEvent.publish('create_contact_event', User);
                     }
                     })
    
};


exports.login = function(req,res){
    
    var _id = req.body.email;
    var password = req.body.password;
    
    User.findOne({_id: email,password:password},function(err,user){
                 if(err){
                 console.log(err);
                 return res.status(500).send();
                 }
                 
                 if(!user){
                 return res.status(404).send();
                 }
                 return res.status(200).send();
                 })
};


// Updates an existing user in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    User.findById(req.params.id, function (err, user) {
                     if (err) { return handleError(res, err); }
                     if(!user) { return res.send(404); }
                     var updated = _.merge(user, req.body);
                     updated.save(function (err) {
                                  if (err) { return handleError(res, err); }
                                  return res.json(200, user);
                                  });
                     });
};

// delete an existing user in datastore.
exports.delete = function(req, res) {
    User.findById(req.params.id, function (err, user) {
                     if(err) { return handleError(res, err); }
                     if(!user) { return res.send(404); }
                     user.remove(function(err) {
                                    if(err) { return handleError(res, err); }
                                    return res.send(204);
                                    });
                     });
};

function handleError(res, err) {
    return res.send(500, err);
};
