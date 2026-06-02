
// Example 1

const studentDetails = {
  name: "Sarvaiya Parthrajsinh",
  age: "",

  set studentAge(age) {
    this.age = age;
  },
};

studentDetails.studentAge = 18;

console.log("Student Age =", studentDetails.age);


// Example 2

const carDetails = {
  model: "",

  set carModel(model) {
    this.model = model;
  },
};

carDetails.carModel = "Fortuner";

console.log("Car Model =", carDetails.model);



// Example 3
const mobileDetails = {
  brand: "",

  set mobileBrand(brand) {
    this.brand = brand;
  },
};

mobileDetails.mobileBrand = "Samsung";

console.log("Mobile Brand =", mobileDetails.brand);


// Example 4

const employeeDetails = {
  salary: "",

  set employeeSalary(salary) {
    this.salary = salary;
  },
};

employeeDetails.employeeSalary = 40000;

console.log("Employee Salary =", employeeDetails.salary);


// Example 5

const studentCourseDetails = {
  course: "",

  set studentCourse(course) {
    this.course = course;
  },
};

studentCourseDetails.studentCourse = "BCA";

console.log("Student Course =", studentCourseDetails.course);