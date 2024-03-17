// const http = require("http");
// const { delay } = require("lodash");
// function datacontrol(req, resp){
//     resp.write("Hello the is Sumant kumar");
//     resp.end();
// }
// http.createServer(datacontrol.listen(3000))



// const myfun = (parm1, parm2)=>{
//     console.log(parm1, parm2+" it is rocks");
// }
// setTimeout(myfun, 2*1000, 'Google raj', 'sumant kumar');

// const myfun=delay=>{
//     console.log("Hello after "+delay+" second");
// }
// setTimeout(myfun, 5*1000, "Hello after 5 sec");
// setTimeout(myfun, 10*1000, "this after 10 sec");


// const fs=require("fs");
// fs.readFile("nodeJsonfile.json", "utf-8", (err, data)=>{
//     if(err){
//         console.log("file is not read");
//     }
//     else{
//         console.log("done");
//         console.log(JSON.parse(data));
//     }

// });

// const fs=require("fs");
// const content = {
//     key1:"Sumant kuamr",
//     key2:300,
//     key3:"Hemant",
//     Reg:12204358,
//     Address:"patna"
// }
// const convert = JSON.stringify(content, null, 2);
// fs.writeFile("nodeJsonfile.Json", convert, (err)=>{
//     if(err){
//         console.log("there is error");
//     }
//     else{
//         console.log("Doen");
//     }  
// })


// const fs=require('fs');
// fs.copyFile("kumar.json","node1.json", (err)=>{
//     if(err){
//         console.log("there is error");
//     }
//     else{
//         console.log("it is doen");
//     }
// })

// const myBuff = Buffer.alloc(17);
// myBuff.write("Hello sumant");
// console.log(myBuff);

// const a=(myBuff.toString());
// console.log(a);
// const buffer = new Buffer.alloc("Hello How are you");

// const myBuff = Buffer.alloc();
// const fs=require("fs");
// fs.writeFileSync("kumar1.json", "utf-8", (err, data)=>{
//     if(err){
//         console.log("file does not exit");
//     }
//     else{
//         console.log("read content SuccessFully");
//     }
// })

// const {Readable} = require('stream');
// const instram = new Readable({
//     read(){}
// })
// instram.push("Here to study Node js");
// instram.push("and industry oriented");
// instram.push(null);
// instram.pipe(process.stdout);





