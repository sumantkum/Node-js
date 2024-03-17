
  // // Sample stream 

// const {Readable} = require('stream')
// const inStream = new Readable({
//     read(){}
// });
// inStream.push("here to study int22");
// inStream.push("an industry oriented course");
// inStream.push(null);
// inStream.pipe(process.stdout);


// const {Readable} = require("stream");
// const inStream = new Readable({
//     read(){}
// });
// inStream.push("hello there how are you");
// inStream.push("you are study here industery based");
// inStream.push(null);
// inStream.pipe(process.stdout);




//// with fs module;

var fs = require("fs");
var data = " ";
var readerStream = fs.createReadStream("file.txt");
readerStream.setEncoding('utf-8');
readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});
readerStream.on('error', function(err){
    console.log(err.stack);
});
console.log("jai sri ram");


/// writing the fs module;

var fs = require('fs');
var data = "Hello it is Symply Easy to leaning";

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'UTF8');
writeStream.end();
writeStream.on('finish', function(){
    console.log("write complete.");
});

writeStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program ended");

var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.Gzip();
var r = fs.createReadStream('test1.txt');
var w = fs.createWriteStream('test1.txt.gz');
r.pipe(gzip).pipe(w);
w.on('finish',function (){
    console.log("file successfully written");
});

/// compress data using Brotil.
const zlip = require('zlip');
var fs = require('fs');
var brot = zlip.createBrotliCompress();
var r = fs.createReadStream('test1.txt');
var w = fs.createWriteStream('test1.txt.gz');
r.pipe(brot).pipe(w);





