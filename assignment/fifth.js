// 5.Define a class called mobile 
// with the following description:-
// Instance variable/ Data members:-
// bno                 to store the bike's number
// phno                 to store the phone number of the customer
// name                 to store the name of the customer
// days                 to store the number of days the bike is taken on rent
// charge               to calculate and store the rental charge

// Member methods:-
// void input()              to input and store the details of customer
// void compute()            to comput the rental charge. Therent for a Mobike is charged on the following basis

// First five days            ₹500 per day
// Next five Days             ₹400 per day
// Rest of the days           ₹200 per day

// void display()           to display the details in thr following format:
// Bike number           phone number         Name              number of days          charge

class mobile {
    bikeNo; phno; name; days; charge

    input() {
        this.bikeNo = Number(prompt("enter bike  number"))
        this.phno = Number(prompt("enter mobile "))
        this.name = Number(prompt("enter your name"))
        this.days = Number(prompt("enter days for bike rent"))
    }
    display() {
        document.write("bikeNo", "phone Number", "your name", "days", "charge", "<br>")
        document.write(this.bikeNo + " " + this.phno + " " + this.name + " " + this.days +" "+this.charge+" "+ "<br>")
    }
    calc() {
        if (this.day <= 5) {
            this.charge = 500 * this.day;
        }
        else if (this.day > 5 && this.day <= 10) {
            this.charge = 400 * this.day;
        }
        else if (this.day > 10) {
            this.charge = 200 * this.day;

        }
    }
}
let store=new mobile()
store.input()
store.calc()
store.display()