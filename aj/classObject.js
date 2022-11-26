// class = combination of function and properties 
// new keyword is used 
// constructor is used for put the property

class student{
constructor (name,rollNo,sec){
    this.name=name,
    this.rollNo=rollNo,
    this.sec=sec
}
    fun(){
        console.log(this.name,this.rollNo,this.sec)
    }
}
let a1=new student("sid",47,'A')
let a2=new student("sidi",49,'B')
let a3=new student("sidu",43,'A')
let a4=new student("pidu",47,'C')
let a5=new student("siddhu",47,'C')
let a6=new student("piddi",47,'B')
let a7=new student("simu",47,'A')

a1.fun();
a2.fun();
a3.fun();
a4.fun();
a5.fun();
a6.fun();
a7.fun();
