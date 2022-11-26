// call by value = its means we pass a primative data type value in parameter is called call by value 

function fun(a){
    console.log(a);
}
fun(10);                                //call by value
fun("string")
fun(true)
fun(undefined)
fun(null)

// ---------------------------------------------------------------------------

// call by referance :
// it means we pass a non primative data type calue in parameter is called call by referance
//  no primetive = object and array

function funs(a){
    console.log(a)
}
let student={
    name:"siddahrth",                         //call by referance
    rollNO:47,                            //example : object;
    palce:"nagpur",
}
funs(student)
// ----------------------------------------------------------------------------------

function array(a,b,c){
    console.log(a,b,c)
}                                          //call by referance 
let arr=[10,20,30]                           //example : array;
array(arr[0],arr[1],arr[2]);

// -----------------------------------------------------------------------------------

