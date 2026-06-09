// JavaScript find() & findIndex() Method

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numGreaterThan5 = numArray.find((values) => values > 5);

console.log("finding number greater than five in numArray", numGreaterThan5);



// JavaScript slice() & splice() Method

const fruits = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

// slice()

console.log("fruits array op with slice", fruits.slice(3, 6));

// splice() can add or remove element in array

console.log("fruits array before", fruits);

console.log(
  "fruit array op with splice adding one more fruits in second index op : ",
  fruits.splice(2, 0, "orange")
);

console.log("fruits array after", fruits);

// JavaScript some() and every() Method

let num = [2, 3, 4, 78, 9, 6, 45, 64, 5, 5, 5];

console.log(
  "num greater than 100 is available ?",
  num.some((values) => values > 100)
);

// let satisfies the condition op

console.log(
  "num greater than 5 is available ?",
  num.some((values) => values > 5)
);

// now every() method will check every element in array if every element satisfies the condition then try otherwise false

console.log(
  "checking every elements that num greater than 5 is available :",
  num.every((values) => values > 5)
);

// ex 1

// JavaScript find() & findIndex() Method

const ages = [12, 15, 18, 22, 25, 30];

let ageGreaterThan20 = ages.find((value) => value > 20);

console.log("finding age greater than 20 :", ageGreaterThan20);

let ageIndex = ages.findIndex((value) => value > 20);

console.log("finding index of age greater than 20 :", ageIndex);


// JavaScript slice() & splice() Method

const students = ["Parth", "Jay", "Meet", "Raj", "Karan"];

console.log("students array op with slice", students.slice(1, 4));

console.log("students array before", students);

students.splice(2, 0, "Yash");

console.log("students array after", students);


// JavaScript some() and every() Method

let marks = [45, 55, 65, 75, 85];

console.log(
  "marks greater than 80 is available ?",
  marks.some((value) => value > 80)
);

console.log(
  "checking every marks greater than 40 :",
  marks.every((value) => value > 40)
); 

// ex 2

// JavaScript find() & findIndex() Method

const salary = [8000, 12000, 15000, 20000, 25000];

let salaryGreaterThan15000 = salary.find((value) => value > 15000);

console.log("finding salary greater than 15000 :", salaryGreaterThan15000);

let salaryIndex = salary.findIndex((value) => value > 15000);

console.log("finding index of salary greater than 15000 :", salaryIndex);


// JavaScript slice() & splice() Method

const cars = ["Nexon", "Creta", "Swift", "Brezza", "Scorpio"];

console.log("cars array op with slice", cars.slice(1, 4));

console.log("cars array before", cars);

cars.splice(3, 0, "Thar");

console.log("cars array after", cars);


// JavaScript some() and every() Method

let prices = [500000, 700000, 900000, 1200000];

console.log(
  "price greater than 1000000 is available ?",
  prices.some((value) => value > 1000000)
);

console.log(
  "checking every price greater than 400000 :",
  prices.every((value) => value > 400000)
);
