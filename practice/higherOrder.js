// higher order function = it means when function return another function
// its called higher order function


function fundu(){
    console.log("this is a simple function")
    return function fun(){
        console.log("this is a higher order function")
    }
}
let a=fundu()();
// console.log(a)
// a()
// -------------------------------------------------------------------
