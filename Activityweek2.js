


const fs = require("fs");

const data = fs.readFile("ActivityWeek2.json", "utf-8", (err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("done");
    }
})

const jsonData = JSON.parse(data);
jsonData.push({
    name:"hemant",
    age:30
});

// const updateData = JSON.stringify(jsonData);
// fs.readFileSync("kumar.json", updateData);

// const js = require('js');
// js.readFile


// // creAte a file with name lpu.txt
// // you have to  use fs module to do the following
// // convert that in json 
// // read a json
// // write a json file, open, close, rename, copy.
// // compress the same file using 
// // brotli compression
// // also decompress it



// Adi Shukla <adishukla8765@gmail.com>
// 16:54 (0 minutes ago)
// to me

// Create a file with name lookup.txt and use fs moodule to do the following work in the file:
// 1. Convert that in json ,read json file ,write json file, open ,close,rename,copy, and then compress the same file using 
// brotli compression and also decompress it



const fs = require('fs');

const myData = {
  name :"Sumant kumar pandit",
  Roll :20,
  Registration:12204358,
  Address : "Patna"
}

const Jdata = JSON.stringify(myData)
fs.writeFileSync("lpu.txt", jData);

const fileData = fs.readFileSync('Lup.txt', "utf-8");
const JsonData = JSON.parse(fileData);
console.log(JsonData);
JsonData.Registration=12204358;
console.log(JsonData);

const fileOpen = fs.openSync('Lpu.txt','r');
fs.closeSync(fileOpen);

fs.renameSync("Lpu.txt", "hello.txt")


