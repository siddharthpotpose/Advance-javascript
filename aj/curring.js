// curring = its means separate argument function 
//  and aclling it together 

function fun(a){
    return function fundu(b){
        return a*b
    }
}
let ans=fun(30)(20);
console.log(ans)