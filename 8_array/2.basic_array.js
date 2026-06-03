// Example 1
// Accessing Elements of an Array
let fruits =["apple", "banana", "orange", "mango", "cheery",];
console.log("fruits array:", fruits);

// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.
console.log ("Favorite fruits is", fruits[2]);


// accessing first Element of an array
console.log ("Favorite fruits is", fruits[3]);


// accessing last element of an array
console.log ("last fruits is", fruits[fruits.length - 3]);

//  Modifying the Array Elements
// fruits array before changing elements

console.log ("fruits array second element before changing is :", fruits[3]);

fruits[3] = "guava";
console.log (
    "now we have changed second element in fruits array:",
    fruits[2]
);

console.log("fruits after guava added", fruits);

// Example 2 Access Element by Index

let fruits4 = ["apple", "banana", "orange", "mango", "cheery"];

console.log("Favorite Fruit :", fruits4[2]);

// Example 3 Access First Element

let fruits3 = ["apple", "banana", "orange", "mango", "cheery"];

console.log("First Fruit :", fruits3[0]);


// Example 4 Access Last Element

let fruits1 = ["apple", "banana", "orange", "mango", "cheery"];

console.log("Before Change :", fruits1[3]);

fruits1[3] = "guava";

console.log("After Change :", fruits1[3]);
console.log("Updated Fruits :", fruits1);

// Example 5 Modify Array Element

let fruits2 = ["apple", "banana", "orange", "mango", "cheery"];

fruits[2] = "kiwi";

console.log("Updated Fruits :", fruits2[2]);

