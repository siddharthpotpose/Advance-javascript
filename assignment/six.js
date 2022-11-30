//Q. Write a program with the following specifications:-
// Class name                  student
// Data members :
// name  ------------------   to store the name of a student
// hindi  -------------------  to store the marks in hindi subject
// english  ------------------- to store marks in english subject
// maths  -----------------     to store the marks in maths
// computer   ------------------ to store the marks in computer
// average  ------------------   to store the average of the marks obtained
// grade     -------------------   to store the grade depending upon the average

// Member methods:
// void accept()               to accept name and marks in the 4 subject
//void calcavg()               to calculate and store the grade according to the following slabs:
// Average marks                      Grade obtained
//  90 and above                        A++
// Between 75 to 89(both inclusive)     A
// --------------------------------------------------------------------------------

class student {
name; hindi; english; maths; computer ; average; grade
Input(){
    this.name=prompt("enter your name")
    this.hindi=Number(prompt("enter marks you got in hindi"))
    this.english=Number(prompt("enter marks you got in english"))
    this.maths=Number(prompt("enter marks you got in maths"))
    this.computer=Number(prompt("enter marks you got in computer"))
}
calc(){
this.average=(this.hindi+this.english+this.maths+this.computer)
if(this.average>=90){
    document.write("you are pass with A++")
}
else if(this.average>=75&&this.average<=89){
    document.write("you are pass with A grade")
}
else{
    document.write("you are pass with B grade")
}
}
}
let data=new student()
data.Input()
data.calc()