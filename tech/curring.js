// curring 
//  we can separate parameterized (a,b) / argument list in individual function\
//  and call it together
// return function 

function addition(a){
   
   return function (b){
    return a+b;
   }
}
let sid=addition()
sid()
// addition(10,20)



