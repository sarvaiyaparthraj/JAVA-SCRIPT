function normalFunction(){
    console.log("normal function")
}
normalFunction();


const arrowFunction = () => {
  console.log("arrow function");
};
arrowFunction();




const add = (a, b) => {
    console.log(a + b);
};
add(10, 20);

const greet = name => {
    console.log("Hello " + name);
};
greet("Parth");