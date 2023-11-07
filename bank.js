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