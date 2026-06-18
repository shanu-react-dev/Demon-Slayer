// "use strict";

//! Function Definition | Named Function
//todo What is first class function
// function greet() {
//   console.log("Good Afternoon People🩵🩵");
// }

// greet(); //! Function calling or Function invoking

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(20, 10);

//! Anonymous function
// function () {
//     console.log("Hii this is anonymous function") //!Function statements require a function name
// }

// function fn1(sum) {
//   console.log("received function", sum);
// }

// fn1(function () {
//   console.log("I am demo function");
// });

//! Function Expression
// let rajesh;
// rajesh = function () {
//   console.log("I am Rajesh");
// };
// rajesh();

//! IIFE function
// let a = 7;

// (function () {
//   console.log("I am an IIFE function");
// })();

// (function myName() {
//   console.log("Hii this is Amar!");
// })();

// myName();

//! Arrow Function
// let arrow = () => console.log("Hiii this is an arrow function");
// arrow();

// //? IIFE function wiht Arrow function
// (() => console.log("Hii this is arrow with IIFE"))();

//! difference between normal function and arrow function
/**console.log(this);

*let userData = {
*  userName: "Shanu",
*  data: this, // window object
*  myUser: function () {
*    console.log(this); // userData Object as a current object
*  },
*};
*console.log(userData.data);
*console.log(userData.myUser())*
*let shanu = {
*  userName: "Shanu",
*  data: this, // window object
*  myUser: () => {
*    console.log(this); // userData Object as a current object
*  },
*};
*shanu.myUser();
*/

//! Higher Order Function and Callback Function
// function Rajesh(proposal) {
//   console.log(proposal);
//   proposal();
// }

// function Rashmika() {
//   console.log("Hey dabba I love you 💘💘💘💘");
// }

// Rajesh(Rashmika); // Rashmika is a callback function and Rajesh is Higher order function

// function balaji(proposal) {
//   proposal();
// }
// function Jahnvi() {
//   console.log("hey handsome i love you💘💘");
// }
// balaji(Jahnvi);

//! Nested Function
// function parent() {
//   console.log("I am Parent");
//   function child() {
//     console.log("I am Child");
//   }
//   child();
// }
// parent();

//! Closures
// function parent() {
//   let amt = 10000;
//   function child() {
//     console.log(amt);
//   }
//   child();
// }

// parent();

function Parent() {
  let dataFromParent = "I am a data from parent function";
  console.log("I am Parent function");
  function child() {
    console.log(`data received: ${dataFromParent}`);
  }
  return child;
}
// console.log(Parent());
// console.log(Parent());

// let retFun = Parent();
// // console.log(retFun);
// retFun(); //! Closures

// Parent()(); //! Function Currying

//! Generator Function
// function* counter() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return "Shanu";
// }

// let data = counter();
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());

// function demo() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
// }
// demo();

function* counter(i) {
  for (let n = 0; n <= i; n++) {
    yield n;
  }
  return "balajee";
}

let res = counter(10);
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
