// // // JAVA SCRIPT SOME METHOD

// let ages = ["1,2,3,4,5,18,19,20,22"];
// let oldAge = ages.some((x) =>{
// return x >19
// });
// console.log(oldAge);

// // // JAVA SCRIPT REVERSE METHOD

// let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("numarray", numArray);
// console.log("revering num array", numArray.reverse());





// ex 


// JAVA SCRIPT SOME METHOD

// ex 1 - Ages

let ages = ["1,2,3,4,5,18,19,20,22"];

let oldAge = ages.some((x) => x > 19);

console.log(oldAge);


// ex 2 - Cars

let cars = ["Nexon", "Creta", "Swift", "Brezza"];

let carCheck = cars.some((x) => {
    return x === "Swift";
});

console.log("swift available =>", carCheck);


// ex 3 - Mobiles

let mobiles = ["iPhone", "Samsung", "Vivo", "OnePlus"];

let mobileCheck = mobiles.some((x) => {
    return x === "Oppo";
});

console.log("oppo available =>", mobileCheck);


// ex 4 - Marks

let marks = [45, 50, 60, 75, 90];

let passCheck = marks.some((x) => {
    return x >= 80;
});

console.log("mark greater than 80 =>", passCheck);



// JAVA SCRIPT REVERSE METHOD

// ex 1 - Numbers

let numArray = [1, 2, 3, 4, 5];

console.log("numarray =>", numArray);
console.log("reversing num array =>", numArray.reverse());


// ex 2 - Cars

let carsArray = ["Nexon", "Creta", "Swift", "Brezza"];

console.log("cars array =>", carsArray);
console.log("reversing cars array =>", carsArray.reverse());


// ex 3 - Bikes

let bikesArray = ["R15", "Apache", "Pulsar", "Splendor"];

console.log("bikes array =>", bikesArray);
console.log("reversing bikes array =>", bikesArray.reverse());


// ex 4 - Names

let namesArray = ["Parth", "Raj", "Meet", "Jay"];

console.log("names array =>", namesArray);
console.log("reversing names array =>", namesArray.reverse());