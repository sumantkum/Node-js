var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.Gzip();
var r = fs.createReadStream('test1.txt');
var w = fs.createWriteStream('test1.txt.gz');
r.pipe(gzip).pipe(w);
w.on('finish',function (){
    console.log("file successfully written");
});