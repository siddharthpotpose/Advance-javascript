// call back function = to call another function

function fun(a,b,myFun){
    myFun(a,b)
    
}
fun(100,20,division);
fun(100,20,addition);


function addition(x,y){
    console.log("this is a addition function = ", x+y)
}
function mul(x,y){
    console.log("multiplication of number = ",x*y )
}
function division(x,y){
    console.log("this is a division function = ",x/y)
}
// --------------------------------------------------------------