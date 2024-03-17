
const { count } = require("console");
var fs = require("fs");
fs.readFile('file.txt', function(err, data){

const { query } = require("express");

    if(err){
        console.log("Error is there");
    }

    else{
        console.log("Asynchronous read: "+ data.toString());
    }
});


// var fs = require("fs");
// // Synchronous read
// var data = fs.readFileSync('file.txt');
// console.log("Synchronous read: " + data.toString());

// var fs = require("fs");
// console.log("file.txt", function(err, fd){

//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("file open successfully");
//     }
// });


// var fs = require("fs");
// var buf = new Buffer(1024);
// console.log("opening an exisiting file");
// fs.open('file.txt', function(err, fd){
//     if(err){
//         console.log("error is there");
//     }
//     console.log("file opened successfully");
//     console.log("reading the file");

//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//         if(err){
//             console.log("error is there");
//         }
//         console.log(bytes+" bytes read");
//         if(bytes > 0){
//             console.log(buf.slice(0, bytes).toString());
//         }
//     });
// });

// var fs = require("fs");
// console.log("writing into existing file");
// fs.writeFile('file.txt', 'geek for geek', function(err){
//     if(err){
//         console.log("error is there");
//     }
//     console.log("data written succeaafully");
//     console.log("let's read newly written data");

//     fs.readFile('file.txt', function(err, data){
//         if(err){
//             console.log("Error is there");
//         }
//         console.log("Asynchronous read: "+data.toString());
//     });
// });


// var fs = require('fs');
// var data = "Learn Node.js";
// fs.appendFile('file.txt', data, 'utf-8',    function(err){
//         if(err){
//             throw err;
//         }
//         else{
//             console.log("it is Done file");

//         }
// });


// var fs = require('fs');
// var data = "Lear Node.js";
// fs.appendFileSync('file.txt', data, 'utf-8');
// console.log("data is appended to file successfully.");
// fs.close('file.txt', function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("File closed successfully.");
// });


// var fs = require('fs');
// console.log("deleteing an existing file");
// fs.unlink('file.txt', function(err){
//     if(err){
//         console.log("error is there");
//     }
//     console.log("file deleted successfully");
// });


/// compress the file
// const zlib = require('zlib');
// const fs = require('fs');

// const inputFile = fs.createReadStream('raj.txt');
// const outputFile = fs.createWriteStream('raj.txt.gz');

// inputFile.pipe(zlib.createGunzip()).pipe(outputFile);

/// decompress the file

// const zlib = require('zlib');   
// const fs = require('fs');   
  
// const inputFile = fs.createReadStream('input.txt.gz');   
// const outputFile = fs.createWriteStream('input2.txt');   
  
// inputFile.pipe(zlib.createUnzip()).pipe(outputFile);


// // Import the querystring module 
// const querystring = require("querystring"); 

// // Specify the URL query string 
// // to be parsed 
// let urlQuery = "username=user1&units=kgs&units=pounds&permission=false"; 

// // Use the parse() method on the string 
// let parsedObject = querystring.parse(urlQuery); 
// console.log("Parsed Query:", parsedObject); 

// // Use the parse() method on the string 
// // with sep as `&&` and eq as `-` 
// urlQuery = "username-user1&&units-kgs&&units-pounds&&permission-false"; 
// parsedObject = querystring.parse(urlQuery, "&&", "-"); 

// console.log("\nParsed Query:", parsedObject);



// Import the querystring module 
const querystring = require("querystring"); 

// Specify the URL query string 
// to be parsed 
let urlQuery = 
"user=admin&articles=1&articles=2&articles=3&access=true"; 

// Use the parse() method on the string 
// with default values 
let parsedObject = querystring.parse(urlQuery, "&", "="); 

console.log("Parsed Query:", parsedObject); 

// Use the parse() method on the string 
// with maxKeys set to 1 
parsedObject = 
querystring.parse(urlQuery, "&", "=", { maxKeys: 1 }); 

console.log("\nParsed Query:", parsedObject); 

// Use the parse() method on the string 
// with maxKeys set to 2 
parsedObject = 
querystring.parse(urlQuery, "&", "=", { maxKeys: 2 }); 

console.log("\nParsed Query:", parsedObject); 

// Use the parse() method on the string 
// with maxKeys set to 0 (no limits) 
parsedObject = 
querystring.parse(urlQuery, "&", "=", { maxKeys: 0 }); 

console.log("\nParsed Query:", parsedObject);








