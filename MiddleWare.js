const express=require("express");
const app = express();

app.use(function (req, res, next){ // request(req) mai Sara data hota hai user ka
    console.log("MiddleWare workingg"); // response mai control hota hai jinke basis pe hum server se respose bhej pate hai, next is just so that our request moves to the next thing whicch should be excuted
    next();
})
app.listen(3000);

// app.get("/" ,function(req, res, next){
//     console.log("Hello sumant don't Worry");
//     next();
// });


// app.get("/portfile" ,function(req, res, next){
//     res.send("Hello sumant don't Worry");
//     console.log(req);
// });



//// Dynamic Routing 
// ex- /profile/sumant, /profile/sumanta,  /profile/:username

// const express = require('express');
// const app=express();

// app.get("/", function(req, resp){
//     resp.send("Hello i am from bihar");
// });

// app.get("/protfile", function(req, resp){
//     resp.send("Hello i am from bihar in chhapra city");
// });

// app.get("/pr8otfile/sumant", function(req, resp){
//     resp.send("Hello i am from bihar");
// });
// app.listen(3000);



