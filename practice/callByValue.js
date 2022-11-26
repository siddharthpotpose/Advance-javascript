// call by value 
// it means to pass the primitive data type in paramter

function fun(a){
    console.log("this is simple call by value =",a)
}
fun(30);                //pass the primative  number type value in parameter 
fun("stringName")      //pass the string type in parametar 
fun(true)               // pass the boolean type in parameter
fun(null)                 //pass the null data type in parametar
fun(undefined)           //pass the undefind data type in parameter

// ---------------------------------------------------------------------------------------------

// call by referance 
// it means to pass the value in parametar is non primative data type 
// like object and array is pass in parametar

function funs(c){
    console.log("this is a call by referance = ",c)
}
// Object
let c={
    name:"sid",
    mobileNo:8485896373,
    emailID:"siddharthpotpose9@gmail.com",           //this example is call by referance
    information:true
}
funs(c)
// -----------------------------------------------------------------------------------

// example = 2 - call by referance

function fundu(s){
console.log("this is a second example call by reference array = ",s)
}
let array=[10,20.30,"sid",null,true]
fundu(array)

// ---------------------------------------------------------------------------------------

