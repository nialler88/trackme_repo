/*'use strict';

// Mail service configuration
// ===========================
module.exports = require("pubnub").init({
                                        publish_key : "pub-c-32a278cf-b8d8-42d3-994a-58bb9208b29c",
                                        subscribe_key : "sub-c-c71589ba-0285-11e7-9072-02ee2ddab7fe"
                                        });


*/
 PubNub = require('pubnub');
//import PubNub from 'pubnub';

var pubnub = new PubNub({
                        subscribeKey: "pub-c-32a278cf-b8d8-42d3-994a-58bb9208b29c",
                        publishKey: "sub-c-c71589ba-0285-11e7-9072-02ee2ddab7fe",
                        secretKey: "sec-c-ZDc5MWQxYWMtMzIzNC00YjY5LTg1ZTYtMGM4Njk5Njg1MmRh",
                        ssl: true
                        })


module.exports = pubnub;
