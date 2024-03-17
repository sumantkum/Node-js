// const coourse = {
//     firstC : "java",
//     secondC : "C+++",
//     thirdC : "C",
//     four : "Html"
// }
// // let val = '';
// for(let item in coourse){
//     val += coourse[item] + " ";
// }
// console.log(val);



// let val =  1;
// while(val <= 6)
// {
//     console.log(val);
//     val++;
// }


// let val = 1;
// do{
//     console.log("Hello Sumant kumar");
//     val++;
// }while(val <= 5);


// let sum =0;
// for(let i=1; i<=5; i++){
//     sum += i;
// }
// console.log("total sum: ", sum);

// let NumArr = [1,3,4,54,65,76];
// for(let val of NumArr){
//     console.log(val);
// }




// let mpa = new Map([
//     ["sumant", 1], ["Kumar", 2], ["pandit", 3]
// ]);

// console.log("display of key-Value pair");
// for(const entry of mpa){
//     console.log(entry);
// }

// console.log("display of value only.");
// for(const [key, value] of mpa){
// console.log(value);
// }

//// Array working js

// let arr = ["Smart", "Jay", "Kaha", "Ho", "Bhai"];
// console.log(arr);

// let course = new Array("Sumant", "Kumar", "papu", "Jay kumar");
// console.log(course)

// let arr = new Array(3);
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// console.log(arr);

// let cou = ["Hello", "Jai", "Sri", "Ram"];
// let lastval = cou[cou.length - 2];
// console.log("the last valuer:",lastval);

// console.log(typeof cou);

// console.log(cou[0]);0
// console.log(cou[1]);
// console.log(cou[2]);
// console.log(cou[3]);


/// function in javaScript;

// function first(){
//     let s= 122;
//     let b= 0;

//     try{
//         if(b==0){
//             throw("do not divide by zero");
//         }
//     }
//     catch(e){
//         console.log('there is very balunder mistake.');
//     }
// }first();

// function geek(){
//     let a =10;
//     try {
//         if(a == 10){
//             console.log("a is Equal to 10");
//         }
//         else{
//             console.log("there is mistake.")
//         }
//         // console.log("value of variabl is : ", a);
//     }
//     catch(e){
//         console.log("Erroe: ", e.description);
//     }
// }
// geek();


// function sum(){
//     let a = 10 ;
//     let b= 20;
//     try{
//         if(a+b == 40){
//             console.log("the sum is Equal to 30");
//         }
//         else{
//             console.log("some this is error");
//         }
//     }
//     catch(e){
//         console.log("this is your Error sum is worong"+ e);
//     }
// }sum();

// const fs = require("fs")
// ;
// fs.readFile('hello.txt', function(err, data) {
//     if(err){
//         return console.error(err);
//     }
// });
// console.log("End of program execution");


// const EventEmitter = require("event");
// const eventEmitter = new EventEmitter();

// const EventHandler = function(){
//     console.log("hello how are you");
// }
// eventEmitter.on('event1', EventHandler);
// eventEmitter.emit('event1');



// // Importing events
// const EventEmitter = require('events');
 
// // Initializing event emitter instances
// const eventEmitter = new EventEmitter();
 
// // Register to newListener
// eventEmitter.on('newListener', (event, listener) => {
//     console.log(`The listener is added to ${event}`);
// });
 

// // Register to removeListener
// eventEmitter.on('removeListener', (event, listener) => {
//     console.log(`The listener is removed from ${event}`);
// });


// // Declaring listener fun1 to myEvent1
// const fun1 = (msg) => {
//     console.log("Message from fun1: " + msg);
// };
 
// // Declaring listener fun2 to myEvent2
// const fun2 = (msg) => {
//     console.log("Message from fun2: " + msg);
// };
 
//// Listening to myEvent with fun1 and fun2

eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);
 
// Removing listener
eventEmitter.off('myEvent', fun1);
 
// Triggering myEvent
eventEmitter.emit('myEvent', 'Event occurred');



function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
        callback("Operation complete");
    }, 1000);
    }
    
    // Define the callback function
    function callbackFunction(result) {
    console.log("Result: " + result);
    }
    
    // Call the main function with the callback function
    mainFunction(callbackFunction);
    //This code is contributed by Veerendra Singh Rajpoot
    