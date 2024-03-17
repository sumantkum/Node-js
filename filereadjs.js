var fs = require('fs');
console.log(result);

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("error is there");
    }
    else {
        console.log(data);
    }
})

// fs.readFileSync('file.txt', 'utf-8') 
// {
//     // if (err) 
//     try{
//         console.log(data);
//     }
//     // else 
//     catch(e){
//         console.error('error');
//     }
// }


// function square(n) {
//     return n*n;
// }
// var result = square(5);
// console.log(result);


/// step 3.
// var fs =require('fs')
// try{
//     const data = fs.readFileSync('file.txt', 'utf-8')
//     console.log(data);
// }
// catch(e){
//     console.error('error');
// }

// function square(n) {
//     return n*n;
// }
// var result = square(5);
// console.log(result);
// var fs=require('fs');

// fs.writeFile("file.txt","Hai please help me",(err)=>{
//     if(err){
//         console.log('error');
//     }
//     else{
//         console.log('file is Successfully writen');
//     }
// })

/// step 4.
// check file present or not

// var fs=require('fs');

// fs.appendFile("file.txt", "i am not understaing insted trying for", (err)=>
// {
//     if(err)
//     {
//         console.error("error");
//     }
//     else{
//         console.log("file is Successfully writen");
//     }
// })

// fs.access("file1.txt", fs.constants.F_OK, (err)=>
// {
//     if(err)
//     {
//         console.error("Sorry file is not present");
//     }
//     else{
//         console.log("file is there");
//     }
// })

// fs.unlink("file.txt", (err));

// fs.rename
// fs.open
// fs.close
// fs.copyFile
// fs.stat



// const fs = require("fs");
// Sync--
// fs.writeFileSync("file.txt", "hello sumant jai sri ram");

/// Async---
// fs.writeFile("file.txt", "hello sumant jai sri ram", (err));


/// Activitiy

/// create a from in which you have to aks for user details, fetch thosendetails using java script and display the in tabular format

/// revision 
const fs = require('fs');
fs.writeFile("file.txt", "hello Jai sir ram");




