// var a = 17
// function sub(a,b){
//     return a-b
//     let c=15

// } 
// let result = sub(20,10);
// console.log(result);
// console.log(a);
// console.log(c);

// let len=16;
// let weight=7.5;

// let color="yellow";
// let lastName="Johnson";

// let x=true;
// let y=false;

// const per={firstName:"sumant", lastName:"pandit"};
// const casr=["BMW", "Volvo", "Suzuki"];
// const date=new Date("2022-03-25");

// document.getElementById("Demo: ").innerHTML=per;

// let b=10;
// let sum=b+10;
// console.log(sum)

// let c=10;
// let sub=c-5;
// console.log(sub)


// let m=10;
// let mul=m*10;
// console.log(sum)

// let d=10;
// let div=d/5;
// console.log(div)

// let mu=10;
// let mud=mu%10;
// console.log(mud)

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


const url = require("url");

const address = url.parse('http://.www.hello.com/com/hestory');

const querystring = require("querystring");
var a=querystring.stringify({year:2000, month:2});
console.log(a);

var b=querystring.decode({year:2004, month:20});
console.log(b);

var c=querystring.escape({year:2004, month:10});
console.log(c);

var d=querystring.encode({year:2004, month:15});
console.log(d)



