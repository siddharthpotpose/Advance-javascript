// higher order function 
//  it means one function return another function is called higher order function

function fun(){
    // console.log("this is a main return function")
    return function fun(){
        console.log("this is a another function under the main function")   //this line is higher order function
    }
}
//let ans = fun();
let ans=fun()();
// console.log(ans)
// ans()
