class Customer{
    constructor(CustomerID,Name,PhoneNumber,Address,AccountNumber,Balance=0){
        this.customerId=CustomerID;
        this.name=Name;
        this.phoneNumber=PhoneNumber;
        this.address=Address;
        this.accountNumber=AccountNumber; 
        this.balance=Balance;
    };

    depositMoney(Amount=0){
        
        this.balance+=Amount;
        console.log("Your Account Balance is "+this.balance);
        
    };
    
    withdrawMoney(Amount=0){

        if(this.balance -Amount >= 1000) { 
            this.balance -= Amount; 
            console.log("Your Account Balance is "+this.balance);
        } else{ 
            console.log(`You can only withrow ${this.balance-1000}`);
        };

    };
    openAccount(){
        console.log("account opened"); 
    }
    closeAccount(){
        console.log("account closed");
    }
    applyForLoan(){
        let loanAmount=prompt("enter the loan amount");
        let salary=prompt("enter your montly salary");
        if(loanAmount<=salary*6){
            console.log("loan application accepted");
        }else{
        console.log("loan application rejected");
        };
    }


}


const c1=new Customer(1,"Abiram","0764537789","pointpedro",88329787);


// console.log(c1);

// c1.depositMoney(5000);
// c1.withdrawMoney(500);
// c1.openAccount();
// c1.closeAccount();
// c1.applyForLoan();



// export const c1=new Customer(1,"Abiram","0764537789","pointpedro",88329787);
// module.exports={Customer};