// closure =it means function after the execution still 
// persist [save ] and
//  state [particular action]
// paricular action can done in closre it can be save

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
