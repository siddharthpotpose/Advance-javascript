// dom = document object modal
// there are some ways to select element 
// 1. document.getElementByid
// 3.document.getElementByTagName 
// 4.document.getElementsByClassName

// 5. document.querySelector
// 6. document.querySelectorAll
// ---------------------------------------------
// 1 by id
let heading=document.getElementById('sid')
console.log(heading)
// ----------------------------------------------------
// 2. document.getElementByTagName
// let heading=document.getElementsByTagName('h1')
// console.log(heading)
// --------------------------------------------------

// 3. document.getElementByclassNmae()
// let head=document.getElementsByClassName('one')
// // console.log(head)
// for(element of head){
//     console.log(element)
// } 

// ==============================================================

// querySelector= first match will be return

// let store=document.querySelector('.one')
// console.log(store)
// --------------------------------------------------

// let attribute=document.querySelector('#sid')
// attribute.style.backgroundColor="red"
// attribute.style.color="white"
// console.log(attribute)

// -------------------------------------------------------
// let attribute=document.querySelector('#sid')
// attribute.classList.add=("success")

// console.log(attribute)
