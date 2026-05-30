console.log("I am JavaScript");
let firstNum = 100;
let secNum = 200;
console.log(firstNum + secNum);

let n1 = 10;
let n2 = "20";
console.log(n1 + n2); // concatenation

let n3 = 10;
let n4 = true;
console.log(n3 + n4); // true -> number as 1

let n5 = 20;
let n6 = null;
console.log(Number(n6)); // null -> 0
console.log(n5 + n6); // null -> 0 so the result is 20

let n7 = 20;
let n8 = undefined;
console.log(n7 + n8); //undefined -> NaN

let n9 = 10;
let n10 = Symbol;
console.log(n9 + n10); // concatenation

// let n11 = 10;
// let n12 = Symbol();
// console.log(n11 + n12); //! Cannot convert a Symbol value to a number

let n13 = 7;
let n14 = 123456789123456789n;
// console.log(n13 + n14); //! Cannot mix BigInt and other types, use explicit conversions
console.log(Number(n14) + n13);

let a1 = 15;
let a2 = 2;
console.log(a1 ** a2); //225
