// event delegation 
// event propogation 
//   1. capturing
//   2. bubbling
// ------------------------------------------
// event delegation = one event pass to another is called delegation 
// -----------------------------------------------------------
// 1. capturing => event execute from top to bottom is called capturing event propogation
//  if you want to convert bubbling into capturing than
// in parameter('click',functionNmae,true) 
//  true is for capturing
// false is for bubbling

// ----------------------------------------------------------------------------------------------------------
// 2 . bubbling => event execute from bottom to top is called bubbling event propogation
//  by default capturing is bubbling => bottom to top

let grandF=document.querySelector('#one')
let father=document.querySelector('#two')
let child=document.querySelector('#three')



grandF.addEventListener('click',fun1,true)
father.addEventListener('click',fun2,true)
child.addEventListener('click',fun3,true)


function fun1(){
    console.log(event.target.id) 
    alert('this is grand father')
}
function fun2(){
    console.log(event.target.id)
    alert('this is father')
}
function fun3(){
    console.log(event.target.id)
    alert('this is child')
}
   