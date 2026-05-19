let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log("Checking number: " + numbers[i]);

  
  if (numbers[i] === 5) {
    console.log("Found 5! Stopping the loop.");
    break; 
  }
}



for(let i = 1; i <= 10; i++) {
    if(i == 5) {
        break;
    }
    console.log(i);
}


for(let i = 1; i <= 20; i++) {
    if(i == 11) {
        break;
    }
    console.log(i);
}