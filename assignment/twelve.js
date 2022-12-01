// define class book
// data members
// book_no : int
// book_title: string
// price : float type store

// methods 
// total_cost(): calculate total cost for N number of copies where N is 
//               passed to the function agrgument
//  input (): read book_no,book_title,price
// purchase (): to ask user to input number of copies to purchase
// -------------------------------------------------------

class book{
    BOOK_NO;book_title;price;
    Input(){
        this.BOOK_NO=prompt("enter the book no = ")
        this.book_title=prompt("enter the book title = ")
        this.price=Number(prompt("enter the price = "))
    }
    Total_Cost(n){
        let tcost;
        tcost=this.price*this.n;
        document.write("total cost : "+tcost)
    }
    purchase(){
        this.n=Number(prompt("enter the no. of copies to purchase = "))
        this.Total_Cost(this.n)
    }
}
let ob=new book();
ob.Input()
ob.purchase()