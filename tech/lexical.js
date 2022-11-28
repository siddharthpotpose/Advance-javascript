// lexical =  child element can access parents value 

function fun(){  //paraent 
let a=10;
function sid(){ //child
    let b=30;
    console.log(a+b)
}
sid()
}
fun()