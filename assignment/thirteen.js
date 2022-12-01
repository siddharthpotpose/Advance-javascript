// 13. 
class flight{
fl_no;desti;distn;fuel;
calfuel(){
if(this.distn<=1000){
    this.fuel=500;
}
else if(this.distn>1000&&this.distn<=2000){
this.fuel=1100;
}
else{
    this.fuel=2200;
}
}
feedinfo(){
  this.fl_no=prompt("enter the flightr no = ")
  this.dest=prompt("enter the destination = ")
  this.distn=parseInt(prompt("enter the distance (in km) = "))  
  this.calfuel();
}
showinfo(){
    document.write("flight no = "+this.fl_no+" <br>"+"destination = "+this.desti+"<br>"+"distance = "+this.distn+"<br>"+"fuel = "+this.fuel+"<br>")

}
}
let Flight=new flight()
Flight.feedinfo()
Flight.showinfo()