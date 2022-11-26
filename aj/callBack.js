// call back fynction =  when we pass function as parameter than its called call back function
function fun(a){
    console.log("hello = " +a)
}
let m=10;
// fun(m);             we are passing the value in A
// ----------------------------------------------------------------

let ab=(a,b,myFun)=>{
myFun(a,b)
}
ab(10,20,addition);
ab(100,20,mul);

function addition(x,y){
console.log(x+y)
}
function mul(x,y){
    console.log(x*y)
}
// ------------------------------------------------
