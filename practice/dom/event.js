

let btn=document.querySelector('#btn')
btn.addEventListener('click',sid)
console.log(btn)

function sid(){
    alert('sid is here')
}
// -------------------------------------------

let btn3=document.getElementsByClassName('one')
btn3.addEventListener('click',two)
console.log(btn3)

function two(){
    alert('btn 3')
}