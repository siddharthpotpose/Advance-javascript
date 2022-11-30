// 2. define a class salary
// members data are :
// name,address,phone,subject,specialisation,monthlySalary,incomeTax
// members methods :
// 1. to accept the details of a teacher including the monthly salary 
// 2.to display the details of the members
// 3.to compute the annual income tax as 5% of the annual salary above 1,75,000/
// create object of the class and cell the above members method

class salary {
     name; address;phone;subjectSpecialisation;monthlySalary;incomeTax;
     input(){
        this.name=(prompt("enter your name :: "));
        this.address=(prompt('enter your adrress :: ')),
        this.phone=(prompt('enter your phone number :: ')),
        this.subjectSpecialisation=(prompt('enter your subjectSpecialisation :: ')),
        this.monthlySalary=(prompt("menter your monthly salary :: "))
     }
     display(){
        document.write('name :: '+this.name);
        document.write('address :: '+this.address);
        document.write('phone :: '+this.phone);
        document.write("subjectSpecia :: "+this.subjectSpecialisation);
        document.write("monthly salary :: "+this.monthlySalary)
     }
     calculate (){
      
       let aSalary=this.monthlySalary*12;
        if(aSalary > 175000){
            this.incomeTax=5/100*(aSalary-175000);
        }
            else{
            this.incomeTax=0;
            }   
            document.write(this.incomeTax) 
     }
   
} 
let s1=new salary()
s1.display()
s1.calculate()


