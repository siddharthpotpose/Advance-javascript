// define a class student 
// data members  
// name , age , m1 , m2, m3(mark in 3 subject), maximum
// average member methods:
// 1. to accepet the detail of student
// 2.to display the name , age ,mark in three subjects, maximum and average.
// create object of an class and cell 

class student {
    name; age; m1; m2; m3; max; avg;
    input() {
        this.name = prompt("enter your name ")
        this.age = Number(prompt("enter your age "))
        this.m1 = Number(prompt("enter mark m1 "))
        this.m2 = Number(prompt("enter mark m2 "))
        this.m3 = Number(prompt("enter mark m3 "))
    }
    display() {
        document.write('name::' + this.name + "<br>")
        document.write('marks::' + this.m1 + ',' + this.m2 + ',' + this.m3+ "<br>")
        document.write('maximum marks::' + this.max+ "<br>")
        document.write('average::' + this.avg+ "<br>")
    }
    compute() {
        this.max = Math.max(Math.max(this.m1, this.m2), this.m3)
        this.avg = (this.m1 + this.m2 + this.m3) / 3;

    }

}

let ob = new student();
ob.input();
ob.compute();
ob.display();

// ==========================================================
