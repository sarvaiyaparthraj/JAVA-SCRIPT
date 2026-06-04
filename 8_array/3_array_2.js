// Example 1


const fruits = ["apple", "banana", "orange", "guava", "cherry"];

console.log("Original Array:", fruits);

fruits.push("strawberry");
console.log("After Push:", fruits);

fruits.unshift("mango");
console.log("After Unshift:", fruits);

fruits.pop();
console.log("After Pop:", fruits);

fruits.shift();
console.log("After Shift:", fruits);

fruits.splice(2, 0, "watermelon", "grapes");
console.log("After Splice Add:", fruits);

fruits.splice(5, 2);
console.log("After Splice Remove:", fruits);

// Example 2
const colors = ["red", "green", "blue", "yellow", "black"];

console.log("Original Array:", colors);

colors.push("white");
console.log("After Push:", colors);

colors.unshift("pink");
console.log("After Unshift:", colors);

colors.pop();
console.log("After Pop:", colors);

colors.shift();
console.log("After Shift:", colors);

colors.splice(2, 0, "orange", "purple");
console.log("After Splice Add:", colors);

colors.splice(4, 2);
console.log("After Splice Remove:", colors);


// Example 3

const cities = ["Rajkot", "Ahmedabad", "Surat", "Vadodara", "Bhavnagar"];

console.log("Original Array:", cities);

cities.push("Junagadh");
console.log("After Push:", cities);

cities.unshift("Gandhinagar");
console.log("After Unshift:", cities);

cities.pop();
console.log("After Pop:", cities);

cities.shift();
console.log("After Shift:", cities);

cities.splice(2, 0, "Morbi", "Jamnagar");
console.log("After Splice Add:", cities);

cities.splice(4, 2);
console.log("After Splice Remove:", cities);

// Example 4

const animals = ["Lion", "Tiger", "Elephant", "Monkey", "Deer"];

console.log("Original Array:", animals);

animals.push("Zebra");
console.log("After Push:", animals);

animals.unshift("Bear");
console.log("After Unshift:", animals);

animals.pop();
console.log("After Pop:", animals);

animals.shift();
console.log("After Shift:", animals);

animals.splice(2, 0, "Fox", "Wolf");
console.log("After Splice Add:", animals);

animals.splice(4, 2);
console.log("After Splice Remove:", animals);

// Example 5

const cars = ["BMW", "Audi", "Honda", "Toyota", "Kia"];

console.log("Original Array:", cars);

cars.push("Mercedes");
console.log("After Push:", cars);

cars.unshift("Ford");
console.log("After Unshift:", cars);

cars.pop();
console.log("After Pop:", cars);

cars.shift();
console.log("After Shift:", cars);

cars.splice(2, 0, "Tesla", "Hyundai");
console.log("After Splice Add:", cars);

cars.splice(4, 2);
console.log("After Splice Remove:", cars);