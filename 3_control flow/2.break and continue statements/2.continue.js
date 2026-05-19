
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  
  if (numbers[i] % 2 === 0) {
    continue; 
  }

  console.log(numbers[i]); }




  
for(let i = 1; i <= 10; i++) {
    if(i % 2 == 0) {
        continue;
    }
    console.log(i);
}


for(let i = 1; i <= 5; i++) {
    if(i == 3) {
        continue;
    }
    console.log(i);
}