// higher order function =one function return another function its called higher order function\

// 1. basic return function 
// function fun(){
//     return true
// }
// let store = fun()
// console.log(store) 
// // -------------------------------------------

// function fundu(){

//     console.log("this is a first function")

//     return function ()
//     {        
// console.log("hello")
//     };
// }
// let sid=fundu();
// sid();

// ---------------------------------------

function ak(){
    
console.log("first")

    return function ash (){
        console.log("welcome")
    }
}
let nagesh=ak()
console.log(nagesh)
nagesh();