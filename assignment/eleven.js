// 11. define class fruitJuice
// data of members:
// int product code 
// string flavour
// string pack_type
// int pack_size
// int product_price

// member method 
// input ()==========to input and store product code, flavour,pack,type,pack size and product price
// discount ()============to reduce the product price by 10
// display ()==============display product code, flavour,pack,type,pack size and product price
// create object of the class and call the above member method
// =================================================================

class fruitJuice{
     product_code;flavour;pack_size;pack_type;product_price
     input(){
        let a=prompt("enter the product code : ")
        this.product_code=Number(a)
        this.flavour=prompt("select your flavour [orange,apple,etc]")
        this.pack_type=prompt("select type of packaging [tetra-pack,bottle,etc]")
        let b=prompt("enter packing size [200ml,400ml,etc]")
        this.pack_size=Number(b)
        let c=prompt("enter the product price : ")
        this.product_price=Number(c)
     }
     discount(){
        this.product_price-=10;
     }
     display(){
        document.write("product code = "+this.product_code+" <br>"+"flavour = "+this.flavour+"<br>"+"pack type = "+this.pack_type+"<br>"+"product price = "+this.product_price+"<br>"+"Discount = "+this.product_price+"<br>")

     }
}
let FruitJuice=new fruitJuice()
FruitJuice.input()
FruitJuice.discount()
FruitJuice.display()
