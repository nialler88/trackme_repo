
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var playerSchema = new Schema({
                              _id:String,
                              name: String,
                              team:{soccer:String,
                                  football:String},
                              game:[{team_played:String,
                                        position:String,
                                        distance:String,
                                            pace: String,
                                       heat_link:String,
                              compare_speed_link:String,
                                      speed_link:String,
                                       max_speed:String,
                                   
                            average_active_speed:String,
                                        calories:String,
                                       hydration:String,
                                    time_in_play:String}]
                              });



playerSchema.methods.generateHash = function(team_played) {
    return bcrypt.hashSync(team_played, bcrypt.genSaltSync(8), null);
};
module.exports = mongoose.model('Route', playerSchema);
