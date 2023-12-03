class Bank{
   constructor(BankID,Name,Location){
    this.bankID=BankID;
    this.name=Name;
    this.location=Location;
   }
   getName(){
    return this.name;
   }
   getLocation(){
    return this.location;
   }

}

let a=new Bank(1,"BOC","Jaffna");
console.log(a);
console.log(a.getName());
console.log(a.getLocation());

// const customer = require("./customer");
// const c2=new customer.Customer(2,"Kajan","0763227807","poinpedro",88723757,100);
// console.log(c2);
// c2.depositMoney(50000);
// console.log(c2);

// import { Customer ,c1} from "./customer";
// console.log(c1);