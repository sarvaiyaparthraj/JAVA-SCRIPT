let numArray = [1,2,3,4,5,6,7,8,9];
const numArray1 = numArray.reduce((a,c)=>(a+=c))
console.log ("numArray:"+ numArray);

const cart = [
  {
    name: "samosa",
    quantity: 12,
    price: 10,
  },
  {
    name: "shirt",
    quantity: 20,
    price: 100,
  },
  {
    name: "Iphone",
    quantity: 2,
    price: 100000,
  },
];

const total1 = cart.reduce((acc, item) => {
  return acc + item.quantity * item.price;
}, 0);

console.log("Cart:", cart);
console.log("Total Price:", total1);



// EX 2

let numbers = [2, 4, 6, 8, 10];

const total = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log("Numbers:", numbers);
console.log("Sum:", total);


// EX 3

const students = [
  { name: "Raj", marks: 80 },
  { name: "Vraj", marks: 75 },
  { name: "Abhi", marks: 90 },
];

const totalMarks = students.reduce((acc, student) => {
  return acc + student.marks;
}, 0);

console.log("Students:", students);
console.log("Total Marks:", totalMarks);


// EX 4

const employees = [
  { name: "Raj", salary: 25000 },
  { name: "Amit", salary: 30000 },
  { name: "Rutik", salary: 35000 },
];

const totalSalary = employees.reduce((acc, emp) => {
  return acc + emp.salary;
}, 0);

console.log("Employees:", employees);
console.log("Total Salary:", totalSalary);


// EX 5
const products = [
  { name: "Pen", quantity: 50, price: 10 },
  { name: "Book", quantity: 20, price: 50 },
  { name: "Bag", quantity: 10, price: 500 },
];

const stockValue = products.reduce((acc, product) => {
  return acc + product.quantity * product.price;
}, 0);

console.log("Products:", products);
console.log("Stock Value:", stockValue);
