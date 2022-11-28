// closure = persist [save ] its state [partical action is store]
// 
// let p;
// function fun(){
//     p=10;
//    function fundu(){
//     p=p+20;
//     console.log(p)
//    }
//    fundu()
// }
// fun()
// // --------------------------------------------
// console.log("after execution " , p)
// -----------------------------------------------------------

let k;

function fun()
{
      k=20;
     function fun3(){
    k=k+10;
    console.log(k)
    }
    fun3()
 }
 fun()         // exection finish =30
    // ----------------------------------------

    console.log(k)    // closure 
  