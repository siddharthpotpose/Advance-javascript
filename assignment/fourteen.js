// 14. 
class hotel {
    Rno; name; tarrif; nod;
    calc() {
        let amount;
        amount = this.nod * this.tarrif;
        if (amount > 10000) {
            amount = amount * 1.05;
            return amount
        }
    }
    checkin() {
        this.Rno =Number( prompt("enter the room no = "))
        this.name = prompt("enter the name = ")
        this.tarrif = parseInt(prompt("enter the Tarrif = "))
        this.nod = parseInt(prompt("enter the No. of the days = "))
    }
    checkout(){
        document.write("Name : " + this.name+ " <br>")
        document.write("Room no : " + this.Rno+ " <br>")
        document.write("Tarrif : " + this.tarrif+ " <br>")
        document.write("No of days : " + this.nod+ " <br>")
        document.write("Amount : " + this.ca+ " <br>")
    }
}
let h=new hotel()
h.checkin()
h.checkout()