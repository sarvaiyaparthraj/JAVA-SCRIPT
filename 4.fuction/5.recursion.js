
function factorial(num) {

  if (num < 0) {

    return "factorial is not defined for negative numbers";

  } else if (num === 0 || num === 1) {

    return 1;

  } else {

    return num * factorial(num - 1);

  }

}


console.log(factorial(5));





function printNum(num) {
    if (num > 5) return;
    
    console.log(num);
    printNum(num + 1);
}
printNum(1);


function sum(num) {
    if (num == 1) {
        return 1;
    }

    return num + sum(num - 1);
}
console.log(sum(5));