// console.log("I am external JavaScript");
/**
 * DataTypes in JavaScript
 * !Primitive DataTypes
 * ? 1. Number
 * ? 2. String
 * ? 3. Boolean
 * ? 4. Null
 * ? 5. Undefined
 * ? 6. Bigint
 * ? 7. Symbol
 */

//! How to declare a Variable
/**
 * a = "Shanu";
 * console.log("a value is: ", a);
 * var userName = "thala Shree";
 * console.log("Username: ", userName);
 * let age = 47;
 * console.log("My age is: ", age);
 * const isRetired = true;
 * console.log("Status of retirement: ", isRetired);
 */

let name = "Shanu";
console.log("My name is " + name);
console.log(typeof name);
let age = 23;
console.log("My age is " + age);
console.log("My age is ", age);
console.log(typeof age);
let isMarried = false;
console.log("Marital Status " + isMarried);
console.log("Marital Status ", isMarried);
console.log(typeof isMarried);
let kids = null;
console.log("Number of kids " + null);
console.log("Number of Kids ", kids);
// Converting a null value into different datatypes
console.log(Number(kids));
console.log(String(null));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(-100));
console.log(typeof kids);
let marriageDate = undefined;
console.log("Marriage date " + marriageDate);
console.log("Marriage date ", marriageDate);
// Converting undefined into number
console.log(Number(marriageDate));
console.log(Number("Shanu"));
console.log(Number("72"));

let starsInTheSky = 123456789012345690675878n;
console.log(starsInTheSky);
console.log(Number(starsInTheSky));
console.log(Boolean(starsInTheSky));
console.log(typeof starsInTheSky);

let mySymbol = Symbol;
console.log(mySymbol);
console.log(typeof mySymbol);
console.log(Boolean(mySymbol));
