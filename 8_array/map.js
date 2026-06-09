// JavaScript map() method.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("number: ", numbers);

let newNumberArray = numbers.map((number) => number * 5);

console.log("New number array : ", newNumberArray);


// ex 1

// JavaScript map() Method

let fruits = ["apple", "banana", "mango", "orange"];

console.log("fruits : ", fruits);

let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());

console.log("uppercase fruits : ", upperCaseFruits);



// ex 2

// JavaScript map() Method

let countries = ["india", "usa", "canada", "australia"];

console.log("countries : ", countries);

let countryName = countries.map(
  (country) => country.charAt(0).toUpperCase() + country.slice(1)
);

console.log("formatted countries : ", countryName);

