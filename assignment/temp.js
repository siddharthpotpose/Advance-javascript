class Mobike
{
    bno; phno; name; days; charge;
    Input()
    {
        this.bno=prompt("Enter the bike number")
        this.phno=prompt("Enter the mobile number")
        this.name=prompt("Enter your name")
        this.days=parseInt(prompt("Enter the number of days"))
    }
    display()
    {
        document.write("Bike No.","Phone No.",'Name',"No. of Days","Charge","<br>")
        document.write(this.bno+""+this.phno+""+this.name+""+this.days+""+this.charge)
    }
    compute()
    {
        if(this.days<=5)
        {
            this.charge=500*this.days
        }
        else if(this.days>=6 && this.days<=10)
        {
            this.charge=400*this.days
        }
        else if(this.days>10)
        {
            this.charge=200*this.days
        }
    }
}
let mo=new Mobike();
mo.Input();
mo.compute();
mo.display();