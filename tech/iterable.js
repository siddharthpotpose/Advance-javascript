  // 2. iterable =>  where iterable protocol is implement that we can call iterable
// iterable protocol => rules
// 1. the object must have key [symbol.iterator] 
// 2. it must have a function 
// 3. in symbol.iterator:function must have iterator object 
// 4. the object must have a key [next]
// 5. after next key it must have a function 
 // 6. this next key function retrun an object
 let obj={
    [Symbol.iterator]:function(){
        count=0
        let sid={
            next:function (){
                count++
               if(count<=5){
                return {value:'sid',done:false}
               }
               else {
                return {value:'sid',done:true}
               }        
            }
        }
        return sid
    }
 }
 for (nagesh of obj){
    console.log(nagesh)
 }
//  --------------------------------------------------------

 // iterable  
 let fr=[10,20,30,40,50]
 console.log(fr) 
 let a=fr[Symbol.iterator]();
 console.log(a.next()) //print value + done : false until the condition is not true
 console.log(a.next().value) //print only value
 console.log(a.next())
 console.log(a.next())
 console.log(a.next())
 console.log(a.next()) // in this case all condition array is print thus next value is undefined and done:true
 
//  console.log(a.next().value)
// ------------------------------------------------------------------------------
// generator 
function *n(){
    console.log('first msg')
   yield '1st'
    console.log('second msg')
    yield '2nd'
}
let s=n();
console.log(s.next())
console.log(s.next())
console.log(a.next())