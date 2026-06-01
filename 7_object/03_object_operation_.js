const employee = {
  empName: "parthrajsinh",
  empId: 109,
  department: "IT",
  salary: 80000
};

// Destructuring
const { empName } = employee;

console.log("Employee Name:", empName);

// Add Property
employee.email = "parthrajsinh@gmail.com";

console.log(employee);

// Delete Property
delete employee.salary;

console.log("After Delete:", employee);

// Check Property
console.log(employee.hasOwnProperty("salary"));
console.log(employee.hasOwnProperty("empId"));

// Loop
for (let key in employee) {
  console.log(key + ":" + employee[key]);

}

    // example 2

function Car(brand, model, year) {

  this.brand = brand;

  this.model = model;

  this.year = year;
}

const car1 = new Car("Toyota", "Innova", 2024);

const car2 = new Car("Maruti", "Ertiga", 2023);

console.log(car1);

console.log(car2);

// Prototype Property
Car.prototype.country = "India";

console.log(car1.country);

// Delete Property
delete car1.year;

console.log(car1);

// Loop
for (let key in car1) {
  console.log(key + ":" + car1[key]);
}

// example 3

function Mobile(brand, price, color) {

  this.brand = brand;

  this.price = price;

  this.color = color;
}

const mobile1 = new Mobile("Samsung", 20000, "Blue");

const mobile2 = new Mobile("Apple", 80000, "White");

console.log(mobile1);
console.log(mobile2);

// Prototype
Mobile.prototype.warranty = "1 Year";

console.log(mobile1.warranty);

// Destructuring
const { brand, price } = mobile1;

console.log("Brand:", brand);
console.log("Price:", price);

// Delete Property
delete mobile1.color;

console.log(mobile1);

// Loop
for (let key in mobile1) {
  console.log(key + ":" + mobile1[key]);
}