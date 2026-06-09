// JavaScript filter() Method


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(number);

const evenNumber = number.filter((number) => number % 2 === 0);

console.log("even number: ", evenNumber);


// ex 2

// JavaScript filter() Method

const cars = ["Nexon", "Creta", "Swift", "Thar", "Scorpio"];

console.log(cars);

const longNameCars = cars.filter((car) => car.length > 5);

console.log("car names greater than 5 letters : ", longNameCars);



// ex 3

// JavaScript filter() Method

const salary = [5000, 12000, 18000, 25000, 8000, 30000];

console.log(salary);

const highSalary = salary.filter((salary) => salary >= 15000);

console.log("salary greater than 15000 : ", highSalary);