const cal = require("loadsh");
const num = [1,2,3,4,5];
const sum = cal.sum(num);
// const mul = cal.mul(num);
// console.log(mul);
console.log("Sum: ", sum);



const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.send("Hello world hai Sumant kumar pandit");
})
app.listen(3000);




