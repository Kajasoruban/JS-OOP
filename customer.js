class Customer{
    constructor(CustomerID,Name,PhoneNumber,Address,AccountNumber,Balance=0){
        this.customerId=CustomerID;
        this.name=Name;
        this.phoneNumber=PhoneNumber;
        this.address=Address;
        this.accountNumber=AccountNumber; 
        this.balance=Balance;
    };

    depositMoney(Amount){
        
        this.balance+=Amount;
        console.log("Your Account Balance is "+this.balance);
        
    };
    withdrawMoney(Amount){

        if(this.balance -Amount >= 1000) { 
            this.balance -= Amount; 
            console.log("Your Account Balance is "+this.balance);
        } else{ 
            console.log(`You can only withrow ${this.balance-1000}`);
        };

    };
    // openAccount(){
        

    // }
    // closeAccount(){
        

    // }
    // applyForLoan(){

    // }


}

const c1=new Customer(1,"Abiram","0764537789","pointpedro",88329787);
console.log(c1);

c1.depositMoney(5000);
c1.withdrawMoney();


