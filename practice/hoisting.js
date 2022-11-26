// hoisting = its means hoisting allow to call function beginning 
// also hoisting move declaration top of the scope
// only  declaration not initialization move in top
// let and const allow hoisting if declaration  is decleared and initializied

let sid=function (){
    let m;
// m=70;
    console.log("hellow sid",m)
    {
        // let a=30; block level not allow to call in outer 
        var a=30; //it is function scope its allow to call 
   
    }
    console.log(a)
    // var m; //declaration
}
sid()