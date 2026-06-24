function Payment(amount,callBack){

    if(amount < 0){

        return console.log("submit sufficient balance")

    }
    else{

        setTimeout(()=>{
           (`${amount} payment initiated`);

           callBack(null,amount);
        },1000)
    }
};


let balance = 100000;


function CheckBalance(amount,callBack){


    if(amount > balance){

        return callBack("Insufficient Balance",balance)
    }

    else{

        setTimeout(()=>{

            console.log("Balance Checked",balance)
            callBack(null,amount);
        },1000)
    }
};


function PaymentDeduct(amount,callBack){

    setTimeout(()=>{
        console.log(`${amount} deducted`);

        callBack(null,amount)
    },1000)
};


function UpdateBalance(amount,callBack){

    setTimeout(()=>{
        balance-=amount;

        console.log(`Remaining Balance : ${balance}`);

    },1000)
    callBack(null,amount);

}



function PaymentStatus(amount,callBack){

    setTimeout(()=>{

        console.log("Payment Successful");

        callBack(null,balance);
    },1000)


};



Payment(99999,(err,amount)=>{

    if(err){

        console.log(err)
    }
    else{

        CheckBalance(amount,(err,amount)=>{

            if(err){
                return console.log(err)
            }
            else{
                PaymentDeduct(amount,(err,amount)=>{

                    if(err){
                        console.log(err)
                    }
                    else{
                        UpdateBalance(amount,(err,amount)=>{
                            if(err){
                                console.log(err)
                            }
                            else{
                                PaymentStatus(amount,(err,amount)=>{
                                   if(err){

                                    console.log(err);
                                   }
                                })
                            }
                        })
                    }
                })
            }
        })

    }
})