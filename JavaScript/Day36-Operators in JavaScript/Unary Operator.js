// let a = 7;
// let b = 8;
// let c = 2;
// let exp = ++a - b * ++c;
// console.log(exp);
//! Unary Operator
//? It is an operator which requires only one operand to perform any tasks. Here we have post increment, pre-increment, post-decrement and pre-decrement. Typeof operator is also a unary operator only it helps us to find the type of the data stored inside a variable.

//! Increment Operator: This operator increases the value by 1. Here we have pre-increment and post-increment. In Pre-increment first the value will get updated after updation the value will be used. In Post-Increment first the value will be used then it will get updated.
// let num1 = 10; //11
// console.log(num1); //10
// console.log(num1++); // Post-Increment: 10 will be printed first, after printing the value num1 will get updated as 10 + 1 that makes 11.
// console.log(num1); //11

// let n1 = 20;
// let n2 = 15;
// let expr = n1++ + n2++; //! 20 + 15=35
// console.log(expr);
// expr = expr + n2++; //! 35 + 16 = 51
// console.log(expr);

let num3 = 5;
let num4 = null;
// console.log(++num3); // Pre-Increment: Here the value will get updated first then it will be used. So here will get the updated value as 6
let expr2 = ++num3 + ++num4;
