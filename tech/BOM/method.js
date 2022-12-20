// bom=> browser object model 
// browser object model represent browser window 
// all global variable is =>  windows properties
// global function => method window object
// -----------------------------------------------------------
// windows 
// 1. properties 
// 2. methods 

//  1. properties 
// innerHeight 
// innerWidth 

let sid=window.innerHeight;
console.log("browser innerheight",sid)
// --------------------------------------------------------

let ash=window.innerWidth;
console.log("browser innerwidth",ash)
// -------------------------------------------

let ak=window.outerHeight;
console.log('outerheight => ', ak)

let aki=window.outerWidth;
console.log('outerwidth => ', aki)
// ---------------------------------------------------------
// window method 
// 1. alert = > to show pop up in window
// 2. prompt => get data from user . and pop  up show
// 3. confirm => show pop up ['ok'=>true/ 'cancle'=>false]
// 4.open => open new window
// 5. close  => current window close
// 6. setTimeout =>  specific time run
// 7. setinterval  => same as settimeout but continusly run
// ---------------------------------------------

// // alert
// alert('hello') 

// // // . prompt 
// let sid=prompt('enter your name')
// document.write(sid)

// // 3.confirm 
// let result = confirm ('u are pass / fail')
// if(result){
//     document.write('you are pass')
// }
// else {
//     document.write('you are fail')
// }
// ---------------------------------------------------
// window open method 
// let  result = confirm ('u are pass / fail')
// if(result){
//     open('https://www.facebook.com/')
//     document.write('you are pass')
// }
// else {
//  close()
//     document.write('you are fail')
// }
// ---------------------------------------------------
// settimeout 

// function fun(){
//     console.log('hello i m sid')
// }

//  setTimeout(fun,7000)

//  ----------------------------------------------
// setinterval 
function fun2(){
    console.log('welcome')
}
setInterval(fun2,5000)