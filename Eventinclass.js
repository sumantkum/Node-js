
const event = require("events");
const { eventNames } = require("process");
var EventEmitter = new Event();
EventEmitter.on("hello", (err, msg)=>{
    console.log(msg);
    if(err){
        console.log("there is an Error");
    }
    else{
        console.log("there is no error");
    }
});


//// EventEmitter.emit()

const event = require("event");
const {eventNames} = require("process");
var EventEmitter = new Event();
EventEmitter.on("hello", (err, msg)=>{
    console.log(msg);
    if(err){
        console.log("there is an Error");
    }
    else{
        console.log("there is no error");
    }
});



