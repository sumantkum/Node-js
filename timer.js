const myfun = (param1, param2)=>{
    console.log(param1 + param2 + 'it rocks');
};

setTimeout(myfun, 2*1000, 'Google raj Coder', ' by Sumant kumar');
setTimeout(myfun, 5*1000, ' by Sumant2 kumar');


// const myfunc = deley =>{
//     console.log("hello after "+ deley + " second");
// };
// setTimeout(myfunc, 5*1000, ' five Google raj Coder');
// setTimeout(myfunc, 10*1000, ' ten by Sumant kumar');


/// time interval 

// const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

// function myCallback(a, b) {
//   // Your code here
//   // Parameters are purely optional.
//   console.log(a);
//   console.log(b);
// }

/// timer out
// const myfunc = () =>console.log("Hello sumant how aer you");
// const timerId=setTimeout(myfunc, 0);

// clearTimeout(timerId);

/// clear timerout

// let counter =0;
// const myfunc = () => {
//     console.log("hello Sumant jai sir Ram");
//     counter += 1;

//     if(counter === 20){
//         console.log("Done by you");
//         clearInterval(timerId);
//     }
// };

// const timerId = setInterval(myfunc, 1000);
