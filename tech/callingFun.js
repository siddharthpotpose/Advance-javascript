// calling function 
// two ways to call function 
// 1.call by value 
// 2. call by referance 
// --------------------------------------------

// call by value = we are passing a primative data type in parametar its called call by value
// primative datat type 
// number 
// boolean 
// string 
// // null
// undefined 

function fun(a) {
    console.log(a)
}
fun(10) //number 
fun("sid") //string
fun(true) //boolean
fun(null) //null
fun(undefined)
// -----------------------------------------------

// 2. call by referance = we are passing a non primative data type in parametar its called call by referance
// non pri /////= array and object

function fun(a, b) {
    console.log(a, b)
}

let object = {
    name: "sid",
    roll: 47,
    email: "sid@gmail.com"
}

let array = [10, 20, 30, "sid", true]

fun(object, array)
// ----------------------------------------------------------

