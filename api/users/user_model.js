'use strict';

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
                            _id:String,
                               name: String,
                            password:String,
                            sport:String,
                               updated: { type: Date, default: Date.now }
                               });


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.Schema.password);
};

module.exports = mongoose.model('User', userSchema);





// https://github.com/knoldus/Node.js_UserLogin_Template/blob/master/app/models/user.js
