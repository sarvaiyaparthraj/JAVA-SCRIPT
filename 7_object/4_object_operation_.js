
// ex1
class carDetails {

    constructor(car, model,type){
        this.car = car;
        this.model = model;
        this,type = type;
    }

}

const car = new carDetails("nexon", 2025, "petrol");
console.log("car  details: ", car);

// ex2
    const personDetails = {
        student:1,
        Grid:10448,
        course:"fsd",
    };

    const allDetails ={...carDetails,...personDetails};

     console.log("All Details :",allDetails);

// ex3
class MobileDetails {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}

const mobile = new MobileDetails("Samsung", 50000);


// ex4
class EmployeeDetails {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

const employee = new EmployeeDetails("Gyan", 50000);


// ex5
class CarDetails {
    constructor(car, model) {
        this.car = car;
        this.model = model;
    }
}

const car = new CarDetails("aura", 2027);

