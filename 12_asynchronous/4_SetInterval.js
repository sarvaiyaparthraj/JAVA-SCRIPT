function currentTime(){

    let time=new Date().toLocaleDateString();

    console.log("current date is ",time);

}

setInterval(currentTime,5000);