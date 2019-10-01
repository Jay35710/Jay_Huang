var events = require('events');
var eventEmitter = new events.EventEmitter();
var http= require("http");

//Create an event handler:
/*
var myEventHandler = function () {
    console.log('I saw John the monkey!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');*/
http.createServer(function(req,res){
    var myEventHandler = function () {
        console.log('I saw John the monkey!');
    }

//Assign the event handler to an event:
    eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
    eventEmitter.emit('scream');
}).listen(8082);