// lexical scope = its means child function scopes allow to access parent scope
// lexical scope check value from bottom to start

// by expression arrow function => + lexical scope

let sid=()=>{
    let a=10;
    function  fun1(){
        b=20;
        function fun2(){
            c=30;
            function fun3(){
                let d=null;
                console.log(a+b+c)
            } fun3()
        }fun2()
    }fun1()

}
sid()