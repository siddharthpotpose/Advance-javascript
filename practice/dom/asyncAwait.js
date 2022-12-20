// async await 

console.log('one')

async function fun(){
    let pin = await fun3()
    console.log('enter your atm pin ', pin)
}
fun()

console.log('three')

function fun3(){
  setTimeout(()=>{return 'atm pin'},3000)
    // return 'atm pin'
}