let studentDetails = {
    stu_name: "sarvaiya parthrajsinh",
    stu_id: "10448",
    stu_age: 20,
    stu_course: "fsd"
};

console.log("student details :", studentDetails);

// Accessing value in . notation
console.log("student name :", studentDetails.stu_name);

// Accessing value in [] notation
console.log("student id :", studentDetails["stu_id"]);

// Modify object property in . notation
studentDetails.stu_name = "gyandipsinh";

console.log("student modify name :", studentDetails.stu_name);

// Modify object property in [] notation
studentDetails["stu_name"] = "rutik";

console.log("student name :", studentDetails.stu_name);


// example 2

let employeeDetails = {

    emp_name: "xyz",

    emp_id: "E101",

    emp_age: 25,

    emp_department: "IT"
};

console.log("Employee Details :", employeeDetails);

// Accessing value in . notation
console.log("Employee Name :", employeeDetails.emp_name);

// Accessing value in [] notation
console.log("Employee ID :", employeeDetails["emp_id"]);

// Modify object property in . notation
employeeDetails.emp_name = "ABC";

console.log("Modified Employee Name :", employeeDetails.emp_name);

// Modify object property in [] notation
employeeDetails["emp_name"] = "DEF";

console.log("Employee Name :", employeeDetails.emp_name);

// Example 3

let carDetails = {
    car_name: "nexon",
    car_model: "Disel",
    car_price: 210000,
    car_color: "Black"
};

console.log("Car Details :", carDetails);

// Accessing value in . notation
console.log("Car Name :", carDetails.car_name);

// Accessing value in [] notation
console.log("Car Model :", carDetails["car_model"]);

// Modify object property in . notation
carDetails.car_color = "Black";

console.log("Modified Car Color :", carDetails.car_color);

// Modify object property in [] notation
carDetails["car_name"] = "Swift";

console.log("Car Name :", carDetails.car_name);