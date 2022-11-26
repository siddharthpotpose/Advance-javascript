// by literal object 
// 3 ways 
// 1. global = windows object
// 2.local = current object 
// 3. construtor 


// -------------------------------------------------
// global = windows object
console.log("first way is global = windows object ")
// ------------------------------------------------------------
// local = current object

let object={
    name:'siddharth',
    Id:"789AC",
    salary:79000,
    myFun:function(){
        console.log("by literal second way is local = call current object ")
    }
}
object.myFun()