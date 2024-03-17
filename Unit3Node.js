const cal = require('lodash');
const num = [1,20,30,4,5,6,7,8,9,10];
const od= cal.sortedLastIndexBy(num);
const od1= cal.compact(num);
console.log(od1);
console.log(od);



const sho= cal.sortBy(num)
console.log(sho);
const sum = cal.sum(num);  // lodash function
console.log('Sum: ', sum);


const express = require('express');
const app1=express();
app1.get('/', function(req, res){
    res.send("<h1> Hello Google Raj Coder </h1>");
    res.send(VideoColorSpace("hello Raju"))
})
app1.listen(4000);


const express = require("express")
var app = express();
app.use(express.static('public'));
app.get('/firstActivity', function(req, res){
    res.sendFile(__dirname+"/"+"firstActivity.html");
})

app.get('process_get', function(req, res){
    res={
        first_name:req.query.first_name, last_name:req.query.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8080, function(){
    
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s%s", host, port)

})






