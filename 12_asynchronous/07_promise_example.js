 // In JavaScript, a Promise is an object that represents the eventual result of an asynchronous operation.

// In promise code will Types Verticle Automatically

let yourPromise = new Promise((resolve, reject) => {

  let completed = true;

  if (completed) {

    resolve("Work completed");

  } else {

    reject("Work pending");

  }

});

yourPromise

  .then((message) => {

    console.log(message);

  })

  .catch((error) => {

    
    console.log(error);
  });