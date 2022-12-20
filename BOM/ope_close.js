//window open  = to open a new window
let op=confirm('you are pass or fail')
if(op){
    open('https://www.w3schools.com/js/js_window_screen.asp')
    document.write('you are pass')
   
}
else{
    document.write('you are fail')
}

// --------------------------------------------------------------------

// window close 
let clo=confirm('you are awesome')
if (clo){
    document.write(':: no you are not ')
}
else {
    close()
    document.write('yes u are')
}
// -----------------------------------------------------

