// how to select element 
// 1. document.getElementById 
// 2. document.getElementsByClassName 
// 3. document.getElementsByTagName 
// 4. document.querySelector 
// 5.document.querySelectorAll
// ----------------- -----------------------------
// select by id 
let select=document.getElementById('one')
console.log(select) 
// ---------------------------------------------
// select by className 
let selectByclassName=document.getElementsByClassName('two')
console.log(selectByclassName)
// ----------------------------------------------------------
// select by tagName 
let selectBytagName=document.getElementsByTagName('p')
console.log(selectBytagName)
// --------------------------------------------------------------
// select by queryselector = select id
let query=document.querySelector('#one')
console.log(query)

// select class name
let queryClass=document.querySelector('.three')
console.log(queryClass)

// select by tag
let queryTag=document.querySelector('p')
console.log(queryTag)
// ---------------------------------------------------

// query selector 
let Query=document.querySelector('.two') // only first match element return
console.log(Query)
// -----------------------------------------------------

// query selector all 
let allQuery=document.querySelectorAll('.two') // all match element return
console.log(allQuery)

// ---------------------------------------------------------------------------
