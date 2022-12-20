// syncronise  

function fun(callback){
    callback()
    console.log('hey this is sync ')
}
fun(fun2)

function fun2(){
    console.log('hey this is sync second function')
}
// ---------------------------------------------------------

// asyncronise  function 

function fun3(sid){
    setTimeout(sid,5000) // only one time execute 
   // setInterval(sid,3000) // continually repeat after 3 sec 
    console.log('hey this async')
}
fun3(fun4)

function fun4 ()
{
    console.log('hello')
}


