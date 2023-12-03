class Teller {
    constructor(ID,Name){
        this.id=ID;
        this.name=Name;
    };
    collectMoney(){
        console.log("server down comeback later");
    };
    openAccount(){
        console.log("account opened");
    };
    issueCard(){
        
        const cardNo=Math.ceil(Math.random()*10000000)
        console.log(`your card number is ${cardNo}`);
    }
}
