//1. define function  
// 1. by expresion 
// 2. anonaymous 
// 3. arroe function [fat arrow =>]
// ----------------------------------------
// function calling 
// 1. call by value 
// 2. call by referance 
// -------------------------------------------
//2. call back function 
// -----------------------------------------
// 3. hoisting = its means we can calling a function at a top 
// in hoisting only allow declaration can move at top
// hosting allow only var 
//let and const not allow hositing to move by default at top

// var = global level
// let = block level / function /local 
// const = block

fun()  //calling fun 
 
function fun()
{

//let num;   //declare 
    num=90;       //define // initialisation
    

{
    let sid;  //declare  // function
    sid=50;
    console.log('welcome',sid)
}
console.log("hello",num)
    var num;   // declaration
   
   
    //console.log(num)

}



