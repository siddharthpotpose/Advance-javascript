// hoisting = it allow function to calling at top starting the function 
// hoisting allow to move declaration at the top of the scope
// only allow var to move at top
// hoisting only allow declartation not initialization at top
// let and const is allow after the declaration of variable and initiatization 

fun() // hoisting allow function to call beganing
function fun()
{
    console.log(z)
    {
        var y=90;       
    }
    console.log(y)
    var z; //declaration
    z=70; // initilization  / define  
}

// -------------------------------------------------------------------------------


// console.log(html)
// console.log(mumbai)
// let mumbai=100; // not allow to top
// var html; // allow to top
// -------------------------------------------------


// function fundu (){
//     {  
      
//         s=8485896373;
//         console.log(s) 
//         let s;  
//     }
   
     
// }
// fundu()


