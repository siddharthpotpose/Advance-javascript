// spread operator = we can split  array

function fun(a,b,c,d,e){
    console.log(a,b,c,d,e)
    
}
let sid=[10,20,30,40,50]
fun(...sid);
// -------------------------------------
function fundu(...a){
    console.log(a)
    
}
let sidi=[10,20,30,40,50,"sid",true,null]
fundu(...sidi)

// --------------------------------------------------
// hoisting 
// lexical scope 
// closure 
// curring 
// -------------------------











// function fun(...a){
//     console.log(a)
//     // console.log(b)
//     // console.log(c)
//     // console.log(d)
// }

// // let array=[90,80,70,60,"sid",true,null]
// // fun(array[0],array[1],array[2],array[3])
// fun(...array) 