// closure = persist [save ] its state [partical action is store]
// 
let p;
function fun(){
    p=10;
   function fundu(){
    p=p+20;
    console.log(p)
 

   }
   fundu()

}
fun()
console.log("after calling " , p)