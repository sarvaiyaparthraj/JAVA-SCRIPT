// JavaScript Array join() Method
// ex 1
const fruits =[
    "apple",
    "banana",
    "mango",
    "greps",
    "cheery",
    'pinepal'

];

console.log("return new string eith each fruits element",fruits.join(" , "));

// flat method
// ex 1

const numarray = [
[1,2,3],
[4,5,6],
[7,8,9,10],
];

console.log("flatened number Array =>", numarray.flat());


// JavaScript Array join() Method

// ex 1 - Cars

const cars = [
    "Nexon",
    "Creta",
    "Brezza",
    "Swift"
];

console.log("return new string with each car element =>", cars.join(" | "));


// ex 2 - Bikes

const bikes = [
    "R15",
    "Apache",
    "Pulsar",
    "Splendor"
];

console.log("return new string with each bike element =>", bikes.join(" - "));


// ex 3 - Mobiles

const mobiles = [
    "iPhone",
    "Samsung",
    "Vivo",
    "OnePlus"
];

console.log("return new string with each mobile element =>", mobiles.join(" , "));


// ex 4 - Names

const names = [
    "Parth",
    "Raj",
    "Meet",
    "Jay"
];

console.log("return new string with each name element =>", names.join(" & "));



// flat-Method

// ex 1 - Cars

const carArray = [
    ["Nexon", "Creta"],
    ["Brezza", "Swift"]
];

console.log("flattened car array =>", carArray.flat());


// ex 2 - Bikes

const bikeArray = [
    ["R15", "Apache"],
    ["Pulsar", "Splendor"]
];

console.log("flattened bike array =>", bikeArray.flat());


// ex 3 - Mobiles

const mobileArray = [
    ["iPhone", "Samsung"],
    ["Vivo", "OnePlus"]
];

console.log("flattened mobile array =>", mobileArray.flat());


// ex 4 - Names

const nameArray = [
    ["Parth", "Raj"],
    ["Meet", "Jay"]
];

console.log("flattened name array =>", nameArray.flat());

// JavaScript Array.slice() Method

console.log("fruits elements", fruits);
console.log("slicing fruits array =>", fruits.slice(2, 3));


// JavaScript Array.slice() Method

// ex 1 - Cars


console.log("cars elements =>", cars);
console.log("slicing cars array =>", cars.slice(1, 3));


// ex 2 - Bikes


console.log("bikes elements =>", bikes);
console.log("slicing bikes array =>", bikes.slice(0, 2));


// ex 3 - Mobiles


console.log("mobiles elements =>", mobiles);
console.log("slicing mobiles array =>", mobiles.slice(2, 4));


// ex 4 - Names


console.log("names elements =>", names);
console.log("slicing names array =>", names.slice(1, 2));