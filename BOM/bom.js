// bom = browser object model 
// default browser is windows
// in default browser 
// 1. alert 2.open() 3.close() 4.prompt 5.confirm 
// -------------------------------------------------------

// let isDeleted=confirm('are you sure ? want to delete this')

// if(isDeleted){
//     open('https://www.google.co.in/')
//     document.write('you have delete successfully')
// }
// else{
//     close()
//     document.write('safely back')
// }
// -------------------------------------------------------------

// property of Browser object model 
// 1. innerHeight
// 2. innerwidth 

// 1.  innerHeight

let h=window.innerHeight;
console.log(h)

let w=window.innerWidth;
console.log(w)

// -------------------------------------------------
// method 
// confirm 

let result = confirm('you are pass or fail ?')
if (result){
    document.write('you are pass')
}
else {
    document.write('you are fail')
}
// -------------------------------------------------------

let pro=prompt('pls enter your name')
document.write(":: ",pro)
// -----------------------------------------------
let al=alert('thank you')
// -----------------------------------------

