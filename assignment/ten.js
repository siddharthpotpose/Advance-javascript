// 10.

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