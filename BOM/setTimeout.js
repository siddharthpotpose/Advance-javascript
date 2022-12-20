// set timeout = performe action after specified time
setTimeout(fun,3000)
function fun(){
    alert('hello')
}
// fun()
// ---------------------------------------
// stop => set timeout 
let my=setTimeout(fun,3000)
clearTimeout(my)
function fun(){
    alert('hello')
}
// fun()
// ------------------------------------------------------------------
