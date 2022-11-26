console.log(" first way is  global this keyword call window object ",this)
// by literal (this)
// global = windows object
// local = current object

let sid={
    name:"siddharth",
    Id:"789AC",
    salary:79000,
    myFun:function(){
console.log('By literal second way is local = call current object  ',this)
    }

}
sid.myFun()
