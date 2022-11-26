// advance javascript
// 1. different types of functions define
//    a) by expression 
//    b)anonymous function ( without functionName )
//    c) arrow function =>
//      - there is no need for function keyword
//      - there is no nedd for functionName
//      -only need fat arrow => 
// -------------------------------------------------------------------
//    a) by expression 

let s=function fun (){
    console.log("this is a simple expression function")
}
s()
// -----------------------------------------------------------------------------

// b) anonymous function  = there is no need to write functionName

let a=function (){
    console.log("this is a anonymous function")
}
a()
// --------------------------------------------------------------------------
// c) arrow function [=>]
// -there is no need to write function ketword 
// -there is no need to write functionName 
// -only need to write fat arrow => 
// ex:1
let c=()=>{
    console.log("this is a arrow function")
}
c();
// ----------------------------------------------------------------------
// ex:2
let d=()=>console.log("this is a arrow function without body or curly bracket")
d();
// ----------------------------------------------------------------------------------------
// ex:3

let ab=(a,b)=>{
    ac=a-b
    console.log("this is a arrow parameter function = ",ac)
}
ab(100,10)
// -----------------------------------------------------------------------
// ex:4
let sid=(p,r)=>{
    return p*r;
}
// console.log(sid(100,5))
sid(10,2)
let ans=sid(10,2)
console.log("this is a return function = "+ans)
// ----------------------------------------------------------


