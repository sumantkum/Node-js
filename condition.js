// let a=50;

// if(a >= 70){
//     console.log("you are first: ",a);

// }
// else if(a >= 60){
//     console.log("you are second: ", a);
// }
// else if(a >= 50){
//     console.log("you are third div: ",a)
// }
// else{
//     console.log("you are not elagibal ",a)
// }



const fs = require('fs');
const bioData = {
    name: "sumant",
    age: 18,
    Address: "Patna",
    channel: "Google Raj Coder"
};

const jsonData = JSON.stringify(bioData);
fs.writeFile("json2.json", jsonData, (err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("done");
    }
})


