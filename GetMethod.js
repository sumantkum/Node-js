const express = require('express');
const fs=require('fs');
var app = express();
app.use(express.static('public'))



app.get('/from1', function(req, resp){
    resp.sendFile(__dirname+"/"+"from1.html");
})

app.get("process_get", function(req, resp){
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(express.response);
    resp.end(JSON.stringify(express.response));
})
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listing at http://%s:%s", host, port);

})


