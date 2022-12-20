// advance js 
// define function 
// calling function
// call back function 
// higher order function 
// iife 
// rest parameter 
// spread parameter 
//  advance scope =1 . hoisting 
// 2. lexical scope 
// 3. closure 
// 4. curring 
// 5.prototype 
// 6. iterator , iterable , generator 
// --------------------------------------------------------
// 1 . iterator => means which repeat a lask until the condition is not false 
// ex: for loop , while loop , do-while loop 
// iterator => for/of 
// for of => this iterator is only used when there is iterable implement is done
// [Symbol.iterator ]

// let sid=100;
// console.log("sid",sid)
// array => in array for/of is applicable [symbole.iterator]
let ar=[10,20,30]
console.log(ar)
for(sid of ar ){
    console.log(sid)
} 
//  object => for / of is not aplicable in object
let ak={
    name:'sid',
    lastName:'potpose'
} 
for(ash of ak){
    console.log(ash)
}
// -----------------------------------------------------------

// 2. iterable =>  where iterable protocol is implement that we can call iterable
// iterable protocol => rules
// 1. the object must have key [symbol.iterator] 
// ex : => let sid={
//    [symbol.iterator]:
// }
// 2. it must have a function 
// let sid={
//     [Symbol.iterator]:function (){
//     }
// }
// 3. in symbol.iterator:function must have iterator object 
// let sid ={
//     [Symbol.iterator]:function (){
//         let akshay={

//         }
//     }
// }
// 4. the object must have a key [next]
// let sid={
//     [Symbol.iterator]:function (){
//         let akshay={
//             next:
//         }
//     }
// } 
// 5. after next key it must have a function  
// let sid={
    //     [Symbol.iterator]:function (){
    //         let akshay={
    //             next: function (){
    // }
    //         }
    //     }
    // } 
    // 6. this next key function retrun an object
    // let sid={
    //     [Symbol.iterator]:function (){
    //         let akshay={
    //             next: function (){
        //                    return {value:' ', done:false}
    // }
    //         }
    //     }
    // } 

    // ------------------------------------------------------------------
   
  




