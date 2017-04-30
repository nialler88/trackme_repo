var api_key = 'key-69fbb41b9885295d71e0570438df55ce';
var domain = 'mg.nialler.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var contactEvent = require('./events');

var  messageHandler = function(m) {
    // The Payload
    var data = {
    from: 'WIT BSc IT <me@wit.ie>',
    to: JSON.parse(m).email,
    subject: 'Welcome',
    text: 'Welcome to the company!!!'
    };
    
    mailgun.messages().send(data, function (error, body) {
                            console.log(body);
                            });
}

contactEvent.subscribe('create_contact_event', messageHandler)
console.log('server running')
