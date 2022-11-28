// 1. Write a class with name Employee and basic as its data member, to find 
// the gross pay of an employee for the following allowances and 
// deduction. Use meaningful variables. Dearness Allowance = 25% of the 
// Basic Pay House Rent Allowance = 15% of Basic Pay Provident Fund = 
// 8.33% of Basic Pay Net Pay = Basic Pay + Dearness Allowance + House 
// Rent Allowance Gross Pay = Net Pay − Provident Fund


class employee{
constructor(basic){
    this.basic=basic;
}

    calculation(){
        let DearnessAllowance , houseRent , netPay , ProvidentFund , grossPay
        DearnessAllowance = 25/100*this.basic;
        houseRent = 15/100*this.basic;
        ProvidentFund = 8.33/100*this.basic;
        netPay = this.basic+DearnessAllowance+houseRent;
        grossPay=netPay-ProvidentFund;
        console.log("gross pay = " + grossPay)       // gp=2633400;
    }
}
let e1=new employee(2000000)
e1.calculation()