const http = require("http");
http.createServer((req, resp)=>{
  resp.write("hello jai sri ram");
  resp.end();
}).listen(4500);


// const http = require('http');
// http.createServer((req, resp)=>{
//   http.createServer().listen(8080);
//   resp.write("Hello sumant how are you");
//   resp.end();
// }).listen(8080);

//// const { write } = require('fs');

const http = require('http');
http.createServer((req, resp) => {
  http.createServer().listen(4500);
  // resp.write("Hello, hai how are you");
  resp.writeHead()
  resp.end();
}).listen(4500);
function dataControl(req, resp){
    resp.write("<h1>hello how are you</h1>");
    resp.end();
}

// const http = require("http");
// http.createServer((res, resp) =>{
//    http.createServer().listen(4500);
//    resp.writeHead().listen(4500)``
// })


// const http=require("http");
// http.createServer((res, reps) =>{
//     reps.write("<h1>Hello This is Sumant kumar BOLO Jai Sir Ram</h1>");
//     reps.end();
// }).listen(4500);


// const http=require("http");
// function dataControl(req, resp)
// {
//     resp.write("<h1>Hello, This is Sumant Kumar Pandit</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);


function dataControl(req, resp){
    resp.write("<h2> Hello, JAI SRI RAM Bolo BHI");
    resp.end();
}
http.createServer((req, resp)=>{
}).listen(4500);



