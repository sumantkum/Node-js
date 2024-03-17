let a=123;
let b=1;
try{
    if(b==1){
        throw "do not divide by zero";
        }
    }

catch(e){
    document.getElementById('demo').innerHTML += "<br>" + e + "<br>";
    }
finally{

    document.getElementById('demo').innerHTML += "it will exexcute anyways";
}