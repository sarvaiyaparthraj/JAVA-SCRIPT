let orderId= [""]

const Car = new Promise((resolve, reject)=>{

    let  cart = ["Nexon", "Thar", "Alto"];

    //   cart = [];

    if(cart.length<=0){
        reject("please enter your car name")

    }
    else{
        setTimeout(()=>{
            orderId = "19140406pgasd";
            console.log("order Book");
            resolve(orderId);
        },1000);
    }


});

Car.then((orderId)=>{

    return new Promise((resolve,reject)=>{

        if(orderId === ""){
            reject("order failed");
        }
        else{
            setTimeout(()=>{

                console.log("order created");
                resolve(orderId);

            },1000);
        }
    });
}).then((orderId)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("seller was informal for the car toy order");

            resolve(orderId);
        },1000)
    });
}).then((orderId)=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log(orderId,"Deliver Car toy");

            resolve(orderId);
        },1000)
    })
}).catch((err)=>{

    console.log(err)
}).finally(()=>{

    setTimeout(()=>{


        console.log("do you want to explore more then car toy")
    },1000)
})