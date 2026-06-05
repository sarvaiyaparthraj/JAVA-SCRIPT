// Example 1

let fruits1 = ["apple","banana","cherry","watermelon","grapes","strawberry"];

// for of loop
for (let i of fruits1) {
  console.log("for of loop", i);
}

// for each loop
fruits1.forEach((fruit,index) =>{
    console.log("fruits using for each OP", index ,fruit);
});

// concat
let vegetables1 = ["potato","tomato","ginger","chilli"];
let shopItems1 = fruits1.concat(vegetables1);
console.log("all available shop items:", shopItems1);

// Conversion Array to String
console.log("converting an Array to String", fruits1.toString());

// join array
const food1 = ["samosa","gathiya","Burger","Dosa","PaniPuri","Sandwich"];
console.log("return new string with each food element", food1.join(" "));


// Example 2

let fruits2 = ["apple","banana","mango"];

// for of loop
for (let i of fruits2) {
  console.log("for of loop", i);
}

// for each loop
fruits2.forEach((fruit,index) =>{
    console.log("fruits using for each OP", index ,fruit);
});

// concat
let vegetables2 = ["potato","tomato"];
let shopItems2 = fruits2.concat(vegetables2);
console.log("all available shop items:", shopItems2);

// Conversion Array to String
console.log("converting an Array to String", fruits2.toString());

// join array
console.log("return new string", fruits2.join(" "));


// Example 3

let foods = ["pizza","burger","dosa"];

// for of loop
for (let i of foods) {
  console.log("for of loop", i);
}

// for each loop
foods.forEach((food,index) =>{
    console.log("foods using for each OP", index ,food);
});

// concat
let drinks = ["tea","coffee"];
let menu = foods.concat(drinks);
console.log("all available menu:", menu);

// Conversion Array to String
console.log("converting an Array to String", foods.toString());

// join array
console.log("return new string", foods.join(" "));


// Example 4

let colors = ["red","green","blue"];

// for of loop
for (let i of colors) {
  console.log("for of loop", i);
}

// for each loop
colors.forEach((color,index) =>{
    console.log("colors using for each OP", index ,color);
});

// concat
let shades = ["pink","black"];
let allColors = colors.concat(shades);
console.log("all available colors:", allColors);

// Conversion Array to String
console.log("converting an Array to String", colors.toString());

// join array
console.log("return new string", colors.join(" "));


// Example 5

let students = ["parth","jay","meet"];

// for of loop
for (let i of students) {
  console.log("for of loop", i);
}

// for each loop
students.forEach((student,index) =>{
    console.log("students using for each OP", index ,student);
});

// concat
let teachers = ["patel sir","joshi sir"];
let schoolMembers = students.concat(teachers);
console.log("all school members:", schoolMembers);

// Conversion Array to String
console.log("converting an Array to String", students.toString());

// join array
console.log("return new string", students.join(" "));