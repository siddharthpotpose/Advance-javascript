// let s1=document.querySelector('#GF')
// let s2=document.querySelector('#F')
// let s3=document.querySelector('#C')

// s1.addEventListener('click',fun1,true)
// s2.addEventListener('click',fun2,true)
// s3.addEventListener('click',fun3,true)

// function fun1(){

//     console.log(event.target.id)
//     alert('first function')
// }
// function fun2(){
//     console.log(event.target.id)
//     alert('second function')
// }
// function fun3(){
//     console.log(event.target.id)
//     alert('third function')
// }
// ----------------------------------------------------------
let s1=document.querySelector('#GF')
s1.addEventListener('click',fun)
function fun(){
    if(event.target.id==='GF'){
      alert('this is a grand father')
    }
    else if(event.target.id==='F'){
   alert('this is a father')
    }
    else if (event.target.id==='C')
    {
        alert('this is a child')
    }
}