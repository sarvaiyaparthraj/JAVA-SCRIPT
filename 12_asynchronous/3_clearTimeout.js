let stop;

const currentTime = () => {

    let dateAndTime = new Date();

    let time = dateAndTime.toLocaleTimeString();

    console.log(time);

    stop = setTimeout(currentTime, 4000);
};

currentTime();

setTimeout(() => {

    clearTimeout(stop);

    console.log("Timer Stopped");

}, 10000);