// call back function = when we pass function as parameter its called called back function

function main(a){
   a()
}
main(fun)


function fun(){
    console.log("this is a second function")
} 
// ----------------------------------------------------

function calculater(a,b,sid){
    // addition(10,20)
    // division(20,5)
    // addition(a,b)
    // division(a,b)
    // myFun(10,20)
    // ash(20,5)
    sid(a,b)
}
calculater(100,5,addition)
calculater(10,5,division)
calculater(100,50,mul)

// calculater(addition,division)
// calculater(addition,division)
// calculater(addition,division)

// calculater()


function addition(x,y){
    console.log(x+y)
}
function division(x,y){
    console.log(x/y)
}
function mul(x,y){
    console.log(x*y)
}

