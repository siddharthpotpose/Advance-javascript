console.log(" first way is  global this keyword call window object ",this)
// by literal (this)
// global = windows object
// local = current object
//this= empty object created
//constructor = field the properties in empty object

let sid={
    name:"siddharth",
    Id:"789AC",
    salary:79000,
    myFun:function(){
console.log('By literal second way is local = call current object  ',this)
    }

}
sid.myFun() 
// ----------------------------------------------------------------------------------


// class object 


class car                    //main class = class main
{
    constructor (carName,carPrice,carEngine)   //field property
    {
       this.carName=carName,
       this.carPrice=carPrice,
       this.carEngine=carEngine
    }
  showdata(){
    console.log(this.carName,this.carPrice,this.carEngine)
  }
}
let c1=new car("tata",978000,"hgfhd")   //new = create new object
let c2=new car("audi",2700000,"007AU")
let c3=new car()

c1.showdata()
c2.showdata()
c3.showdata()
