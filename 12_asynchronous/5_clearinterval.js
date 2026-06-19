let intervalID;

const currentTime = () => {

  const time = new Date().toLocaleTimeString();

  console.log(time);

};

intervalID = setInterval(currentTime, 4000);

setTimeout(() => {

  clearInterval(intervalID);

  console.log("time stopped");
  
}, 10000);