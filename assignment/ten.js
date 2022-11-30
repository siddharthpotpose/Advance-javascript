// 10.Define a class called Library with the following description:
// Instance variables/data members:
// int acc_num   ===================== stores the accession number of books
// string title =====================  stores the title of book
// string autho =====================  stores the name of author

// Members methods:
// void input()                    to input and store the accession number,title and author
// void compute()                  to accept the number of days late, calculate and display the fine charged the rate
//                                 of ₹2 per day
// void display()                  to display the details in the following format:

// Accession number                  Title              Author
// Write the main method to create an object of the class and call the above member methods.
// =========================================================================================

class library{
AccountNo;Title;Auther;
input(){
    this.AccountNo=Number(prompt("numbers of books"))
    this.Title=prompt("store the title of book")
    this.Auther=prompt('store the author of the book')
}
compute(){
    let late=prompt('enter the numbers of days late')
    this.fine=late*2
}
display(){
    document.write("Accession Number = "+this.AccountNo+" "+"Title = "+this.Title+" "+"Author = "+this.Auther+" "+" fine = "+this.fine)
}
}
let data=new library()
data.input()
data.compute()
data.display()