

// Different Type Conversion Examples





// String to Number




console.log("String to Number 1  :", "500" - 100);

console.log("String to Number 2  :", "25" * 4);

console.log("String to Number 3  :", "144" / 12);

console.log("String to Number 4  :", "250" % 30);

console.log("String to Number 5  :", "1000" - "200");

console.log("String to Number 6  :", "50" * "2");

console.log("String to Number 7  :", "700" / "7");

console.log("String to Number 8  :", "900" - true);

console.log("String to Number 9  :", "300" * false);

console.log("String to Number 10 :", "abc" - 10);



// Number to String



console.log("Number to String 1  :", 100 + "200");

console.log("Number to String 2  :", 50 + "hello");

console.log("Number to String 3  :", 999 + "999");

console.log("Number to String 4  :", 44 + " ");

console.log("Number to String 5  :", 0 + "value");

console.log("Number to String 6  :", 10 + true);

console.log("Number to String 7  :", 25 + null);

console.log("Number to String 8  :", 55 + undefined);

console.log("Number to String 9  :", 500 + "rs");

console.log("Number to String 10 :", 1000 + "₹");



// Boolean to Number



console.log("Boolean to Number 1  :", true + 1);

console.log("Boolean to Number 2  :", false + 5);

console.log("Boolean to Number 3  :", true * 10);

console.log("Boolean to Number 4  :", false - 20);

console.log("Boolean to Number 5  :", true / 2);

console.log("Boolean to Number 6  :", false % 4);

console.log("Boolean to Number 7  :", true + "100");

console.log("Boolean to Number 8  :", false + "500");

console.log("Boolean to Number 9  :", true - "5");

console.log("Boolean to Number 10 :", false * "50");



// Null to Number



console.log("Null to Number 1  :", null + 5);

console.log("Null to Number 2  :", null - 10);

console.log("Null to Number 3  :", null * 100);

console.log("Null to Number 4  :", null / 2);

console.log("Null to Number 5  :", null % 7);

console.log("Null to Number 6  :", null + "data");

console.log("Null to Number 7  :", null + true);

console.log("Null to Number 8  :", null - false);

console.log("Null to Number 9  :", null + 999);

console.log("Null to Number 10 :", null - "55");



// Undefined to Number




console.log("Undefined to Number 1  :", undefined + 10);

console.log("Undefined to Number 2  :", undefined - 5);

console.log("Undefined to Number 3  :", undefined * 2);

console.log("Undefined to Number 4  :", undefined / 4);

console.log("Undefined to Number 5  :", undefined % 3);

console.log("Undefined to Number 6  :", undefined + "text");

console.log("Undefined to Number 7  :", undefined - "50");

console.log("Undefined to Number 8  :", undefined + false);

console.log("Undefined to Number 9  :", undefined ** 2);

console.log("Undefined to Number 10 :", undefined + null);



// Explicit Type Conversion






let value1 = 500;

let convert1 = String(value1);

console.log("Number to String :", convert1);

console.log("Type Of          :", typeof convert1);



let value2 = "1234";

let convert2 = Number(value2);

console.log("String to Number :", convert2);

console.log("Type Of          :", typeof convert2);



let value3 = false;

let convert3 = Number(value3);

console.log("Boolean to Number :", convert3);

console.log("Type Of           :", typeof convert3);



let value4 = null;

let convert4 = Boolean(value4);

console.log("Null to Boolean :", convert4);

console.log("Type Of         :", typeof convert4);



let value5 = "";

let convert5 = Boolean(value5);

console.log("Empty String to Boolean :", convert5);

console.log("Type Of                 :", typeof convert5);



let value6 = "45.786";

console.log("parseInt   :", parseInt(value6));

console.log("parseFloat :", parseFloat(value6));



let value7 = "100px";

console.log("parseInt   :", parseInt(value7));

console.log("parseFloat :", parseFloat(value7));



let value8 = "true";

let convert8 = Boolean(value8);

console.log("String to Boolean :", convert8);

console.log("Type Of           :", typeof convert8);