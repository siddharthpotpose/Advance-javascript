// change color = with the help of js
let change=document.getElementById('one')
change.style.backgroundColor='red'
console.log(change)
// ---------------------------------------------------
let colorChange=document.querySelector('.two')
colorChange.style.color='blue'
console.log(colorChange) 
// --------------------------------------------------
// adding class 

let add=document.querySelector('#one')
add.classList.add('sid')
add.style.color='yellow'
console.log(add)
// -----------------------------------------

// adding class in p tag 
let sel=document.querySelector('p')
sel.classList.add('text')
console.log(sel)
// -------------------------------------------------

let uladd=document.querySelector('ul')

console.log(uladd)
let li=document.createElement('li')
li.innerText='chess'
//li.classList.add('six') // first way to add class
 li.setAttribute('class','five')  // second way to add class attribute
uladd.append(li)
// ----------------------------------------------
// remove attribute 

let re=document.querySelector('.two')
re.removeAttribute('class','two')
console.log(re)
// ------------------------------------------------

// traversing

let tr=document.querySelector('#list')

console.log(tr.childNodes)
// ------------------------------------------





