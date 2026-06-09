// indexOf() Method


const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log(
  " i want to find the index of mango and index is :",
  fruits.indexOf("graps")
);



// JavaScript includes() Method

console.log(
  " i want to find the watermelon is available in fruit array and the answer is :",
  fruits.includes("mango")
);

// now i want to check orange is available in fruit array or not :

console.log(
  "now i want to check orange is available in fruit array or not and the answer is :",
  fruits.includes("orange")
);


//  JavaScript sort() Method

let alphabet = ["a", "d", "b", "e", "c"];

console.log("sort the alphabet array : ", alphabet.sort());



// ascending method 

let numArray = [1, 3, 5, 67, 2, 49];

console.log(
  "sorting number array in ascending order : ",
  numArray.sort((a, b) => a - b)
);



// now in descending order

console.log(
  "sorting number array in descending order : ",
  numArray.sort((a, b) => b - a)
);


// indexOf() Method ex2

const cars = [
  "Nexon",
  "Creta",
  "Swift",
  "Brezza",
  "Scorpio",
  "Thar",
];

console.log(
  " i want to find the index of Scorpio and index is :",
  cars.indexOf("Scorpio")
);



// JavaScript includes() Method

console.log(
  " i want to find the Swift is available in car array and the answer is :",
  cars.includes("Swift")
);

// now i want to check Alto is available in car array or not :

console.log(
  "now i want to check Alto is available in car array or not and the answer is :",
  cars.includes("Alto")
);


// JavaScript sort() Method

let carName = ["Nexon", "Creta", "Swift", "Brezza", "Scorpio"];

console.log("sort the car array : ", carName.sort());



// ascending method

let carPrice = [1200000, 800000, 1500000, 900000, 2000000];

console.log(
  "sorting car price array in ascending order : ",
  carPrice.sort((a, b) => a - b)
);



// now in descending order

console.log(
  "sorting car price array in descending order : ",
  carPrice.sort((a, b) => b - a)
);



// indexOf() Method ex3

const mobiles = [
  "Samsung",
  "Vivo",
  "Oppo",
  "iPhone",
  "OnePlus",
  "Realme",
];

console.log(
  " i want to find the index of iPhone and index is :",
  mobiles.indexOf("iPhone")
);



// JavaScript includes() Method

console.log(
  " i want to find the Vivo is available in mobile array and the answer is :",
  mobiles.includes("Vivo")
);

// now i want to check Nokia is available in mobile array or not :

console.log(
  "now i want to check Nokia is available in mobile array or not and the answer is :",
  mobiles.includes("Nokia")
);


// JavaScript sort() Method

let mobileName = ["Samsung", "Vivo", "Oppo", "iPhone", "Realme"];

console.log("sort the mobile array : ", mobileName.sort());



// ascending method

let mobilePrice = [15000, 25000, 12000, 80000, 18000];

console.log(
  "sorting mobile price array in ascending order : ",
  mobilePrice.sort((a, b) => a - b)
);



// now in descending order

console.log(
  "sorting mobile price array in descending order : ",
  mobilePrice.sort((a, b) => b - a)
);