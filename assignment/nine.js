// 8. Write a program with following specifiction:
//  class                           Emp l
// Data Members:
// name         ----------------------    to store the name of employee
// Emp_No       ----------------------    to store the employee number
// basic        ----------------------    to store the basic salary of employee
// DA           ----------------------    to store the dearness allowance of an employee
// HRA          ----------------------    to store the house rent allowance of an employee
// TA           ----------------------    to store thr travelling allowance of an employee
// PF           ----------------------    to store the provident fund of an employee
// Gross        ----------------------    to store the gross salary

// Member Methods:
// get()                          to accept the employee no, name, basic salary of the employees.
// calcu()                        to calculate the gross salary based on the following condition:

// Basic salary               DA(%)             TA(%)             HRA(%)               PF(%)
// >=20,000                    53                12                 10                  8
//>=10,000 to <20,000          45                10                 12                  7.5
// <10000                      40                 8                 14                  7

// Gross salary=(Basic salary+DA+TA+HRA)-PF
// display()                     to display the following data in given format:
// Employee No.           Name               Gross Salary               PF
// Write a main method to creat the object of the above class and call the above method to calculate and print the
// employee no., name,gross salary and pf of an employee
// ========================================================================
class empl{
    name ;Emp_No;basicSalary; DA; HRA;TA;PF;grossSalary
    input(){
        this.name=prompt("enter your name")
        this.number=Number(prompt("enter your number"))
        this.basicSalary=Number(prompt("enter your salary"))
    }
    calc(){
        if(this.basicSalary>=20000){
            this.DA=this.basicSalary*53/100;
            this.TA=this.basicSalary*12/100;
            this.HRA=this.basicSalary*10/100;
            this.PF=this.basicSalary*8/100;
            this.grossSalary=(this.basicSalary+this.DA+this.TA+this.HRA)-this.PF;
        }
        else if(this.basicSalary>=10000&&this.basicSalary<20000){
            this.DA=this.basicSalary*45/100;
            this.TA=this.basicSalary*10/100;
            this.HRA=this.basicSalary*12/100;
            this.PF=this.basicSalary*7.5/100;
            this.grossSalary=(this.basicSalary+this.DA+this.TA+this.HRA)-this.PF;  
        }
        else if(this.basicSalary<10000){
            this.DA=this.basicSalary*40/100;
            this.TA=this.basicSalary*8/100;
            this.HRA=this.basicSalary*14/100;
            this.PF=this.basicSalary*7/100;
            this.grossSalary=(this.basicSalary+this.DA+this.TA+this.HRA)-this.PF;
        }
      
    }
    display(){
        document.write("Employee No","Name","Gross Salary","PF","<br>")
        document.write(this.Emp_No+" "+this.name+" "+this.grossSalary+" "+this.PF+" "+"<br>")
    }

}
let data=new empl()
data.input()
data.calc()
data.display()