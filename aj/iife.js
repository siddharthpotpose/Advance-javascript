// iifm = immediate invoked function expression 
//  it means immediatly call or invoke a function
// -----there is no need to write call function name for calling the function

(function funs(){
    console.log("this is a immediate invoked function expression")
} ())
// ----------------------------------------------------------------

// argument function 

 let a=(function fun(x,y){
    console.log(x+y)
}
(10,5))
// --------------------------------------------------

let b=(function fundu(a,b){
    return console.log(a*b)
}
(10,7))
// -------------------------------------------------------

// arrow invoked function (combination )

let c=(()=>console.log("this is a arrow function"))
c()
// ---------------------------------------------------------

let d=(()=>{
    return console.log("this is a return function")
})
d()