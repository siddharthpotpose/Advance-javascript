// lexical scope = it means child function allow to access parent functions value 
// its called lexical scope
// lexical code check the value from bottom to top

let x = 10;
function fun() {
    let a = 10;
    function fun2() {
        let b = 20;
        function fun3() {
            c = 10;
            console.log(a + b + c + x)

        }
        fun3();
    }
    fun2();
}
fun();