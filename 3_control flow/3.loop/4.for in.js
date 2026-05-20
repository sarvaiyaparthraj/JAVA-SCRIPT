let person = {
  name: "Sarvaiya",
  surname: "parthrajsinh",
  age: 18,
};

let value = "";

for (value in person) {
  console.log(person[value]);
}



let student = {
    name : "Parth",
    age : 18
};

for(let key in student){
    console.log(student[key]);
}

let car = {
    brand : "BMW",
    color : "Black"
};

for(let value in car){
    console.log(car[value]);
}