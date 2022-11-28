// curring = its means separate argument function 
//  and calling it together 
// function fun(a,b)
function fun(a){
    return function fundu(b){
        return a*b
    }
}
let ans=fun(30)(70); // curring
// let sid=ans(50)
// console.log(sid)
// // let res=ans(20)
console.log(ans)