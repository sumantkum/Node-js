// const express=require("express");
// const app=express();
// const myLogger = function(req, res, next){
//     console.log("Logged");
//     next();
// }

// app.use(myLogger)
// app.get('/', (req, res) => {
//     res.send("Hello World");
// })
// app.listen(3000);


/// MiddelWare it use for Date time
// const express = require("express");
// const app = express();

// const requestTime = function(req, res, next){
//     req.requestTime = Date.now();
//     next();
// };

// app.use(requestTime);

// app.get('/', (req, res) => {
//     let responseText = "Hello World!<br>";
//     responseText += `<small>Requested at: ${req.requestTime}</small>`;
//     res.send(responseText); // Sending responseText instead of requestTime
// });

// app.listen(3000);



////  
// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.use(function(req, res, next){
//     console.log("Middleware called");
//     next();
// });

// app.get('/user', function(req, res){
//     console.log("/user request called");
//     res.send("Welcome to nodejs");
// });

// app.listen(PORT, function(err){
//     if(err) {
//         console.error("Error:", err.message);
//         return;
//     }
//     console.log(`Server listening on Port ${PORT}`);
// });


// const express = require("express");
// const app = express();
// const router = express.Router();
// const PORT = 3000;

// app.get('/user', function(req, res){
//     res.send("Handled GET Request");
// });

// app.post('/user', function(req, res){
//     res.send("Handled post Request");
// })


// app.delete('/remove', function(req, res){
//     res.send("Handled delete Request");
// })


// app.listen(PORT, function(err){

//     if(err) console.log("Error in server setup");
//     console.log("Serve listiing on Port ", PORT);
// })



// const express = require("express");
// const app = express();
// const router = express.Router();
// const PORT = 3000;

// router.use(function(req, res){
//     res.send("Middlewere called");
//     next();
// });

// router.use(function(req, res, next){
//     res.send("Greetings from node js");
// })

// app.use('/user', router){
//     app.listen(PORT, function(err){
//         if(err)
//             console.log(err);
//         console.log("Server listing on PORT", PORT);
//     })
// }



/// error handeling 

// const express = require("express");
// const app = express();

// app.use((err, req, res, next)=>{
//     console.log(err.stack);
//     res.stack(500).send("Something went worng!");
// });

// app.get("/error", (req, res, next)=>{
//     const err = new Error("intentional Error");
//     next(err);
// });

// const port = 3000;
// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`);
// });


const express = require("express");
const app = express();

app.use((err, req, res, next) => {
    console.error(err.stack); // Changed console.log to console.error
    res.status(500).send("Something went wrong!"); // Changed res.stack to res.status
});

app.get("/error", (req, res, next) => {
    const err = new Error("intentional Error");
    next(err);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






