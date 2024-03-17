
///// Buffer1

const myBuffer1 = Buffer.alloc(17);
myBuffer1.write("Hello Sumant ");
console.log(myBuffer1);
const a = (myBuffer1.toString());  //is save the memory
console.log(a);


// length
var len = myBuffer1.length;
console.log(len);

// concatination

list = [Buffer1, Buffer2];
var s=Buffer.concat(list);
console.log(s);

// // method 2
const buffer = new Buffer1('hello how are');

const myBuffer = Buffer.alloc(20)
const fs = require("fs");
fs.writeFileSync("kumar1.json", "utf-8", (err, data)=>{
    if(err)
    {
        console.log("File dose not Exit.");
    }
    else
    {
        console.log("read content SuccesFully.");
        console.log(JSON.parse(data));
    }
})


// var buff = Buffer.alloc(17);
// buff.write("Jai Sri Ram");
// console.log(buff);

// method 3
// var buff3 = Buffer.from([1,2,3,4]);


/// Slicing 
// const buffold = new Buffer(
//     "nodejsisthere tointroduceyou toindustry"
// )
// const bufferNew = buffold.slice(0, 4);
// console.log(bufferNew.toString());

// comper two buffer
const buff1 = Buffer.from('m');
const buff2 = Buffer.from('m');

var result = buff1.compare(buff2);
console.log(result);





