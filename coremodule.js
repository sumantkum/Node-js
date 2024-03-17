// const fs=require('fs');

console.log("Hello Google raj coder");
fs.writeFileSync("hello.txt","Google raj coder");    
fs.writeFileSync("raj.txt", "hello how are you");

// //// other way to use
const zs=require('fs').readFileSync;
zs("xyz.txt","hello sumant kumar how are you");

console.log(__dirname);
console.log(__filename);

