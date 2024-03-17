const fs = require("fs");
const bioData = {
    name: "sumant",
    age: 18,
    Address: "Patna",
    channel: "Google Raj Coder"
};


const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("done");
    }
})

fs.readFile("json1.json", "utf-8", (err, data)=>{
    console.log(data);
})

const jsonobj = JSON.parse(jsonData);
console.log(jsonobj.name);


