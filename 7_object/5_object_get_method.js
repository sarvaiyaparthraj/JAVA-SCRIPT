const personDetails ={

    firstName: "sarvaiya parthrajsinh "
};

const  PersonDetails = {

    name:"sarvaiya",
    age:18,

    get personAGE(){
        return this.age;
    },
};

console.log("Person Details ", personDetails);

console.log("Person age is ", PersonDetails.personAge);

// Example 2 
const carDetails = {
    car: "Nexon",
    price: 1500000,

    get carPrice() {
        return this.price;
    },
};

console.log("Car Price :", carDetails.carPrice);



// Example 3 
const mobileDetails = {
    brand: "Samsung",

    get mobileBrand() {
        return this.brand;
    },
};

console.log("Mobile Brand :", mobileDetails.mobileBrand);


// Example 4

const employeeDetails = {
    name: "Gyan",
    salary: 50000,

    get employeeSalary() {
        return this.salary;
    },
};

console.log("Employee Salary :", employeeDetails.employeeSalary);


// Example 5
const bikeDetails = {
    model: "Apache RTR 160",

    get bikeModel() {
        return this.model;
    },
};

console.log("Bike Model :", bikeDetails.bikeModel);