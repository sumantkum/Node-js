// const express = require("express");
// const EventEmitter = require("events");
// const app = express();

/// Event 
const exp = require("exp");
const EventEmitter = require("events");
const app = exp();


// const event=new EventEmitter();
// let count=0;

// event.on("CountAPI", ()=>{
//     count++;
//     console.log("event called", count);
// });

// app.get("/", (req, resp)=>{
//     resp.send("Api called");
//     event.emit("CountAPI");
// })

// app.get("/serch", (req, resp)=>{
//     resp.send("seerch Api called");
// })


// app.get("/update", (req, resp)=>{
//     resp.send("update Api called");
// })
// app.listen(5000);


// const { Console } = require('console');
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// myEmitter.emit('TEST - EVENT');

// setImmediate(() => {
//     myEmitter.emit('TEST - EVENT');
// });

// myEmitter.on('TEST - EVENT', ()=>{
//     console.log("this event was fired");
// });

// myEmitter.on('TEST - EVENT', ()=>{
//     console.log("this event was fired");
// });

// myEmitter.on('TEST - EVENT', ()=>{
//     console.log("this event was fired");
// });

// myEmitter.emit('TEST - EVENT');


// const fs = require('fs');
// fs.writeFileSync("./test.txt", "hey hello");

