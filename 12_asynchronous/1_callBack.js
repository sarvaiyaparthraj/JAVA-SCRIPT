
// addition

function callBack(result){
    console.log(result);
}

function total(a,b,call){
    let result = a+b;

    callBack(result);
}

total(1000,800,callBack);








function multiplication(result1){

    console.log(result1)
}

function multiTotal(a,b,callBack){

    let result1 = a*b;


   callBack(result1);
}

multiTotal(15,4,multiplication)