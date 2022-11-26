// iife = immediate invoked function expression
// - there is no need to write a funcationName for calling 
// -()

// function fun(a,b){
//     console.log(a-b)
// }
// fun(100,50)
// --------------------------------

let sid = (function (a,b){
    console.log(a-b)
}
(100,50)) ;
// -----------------------------------

let sidi=(function fun(a,b){
    return  console.log(a*b)
}
(100,5))
