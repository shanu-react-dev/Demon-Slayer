// let arr1 = ["Mango", "Pear", "Guava", "Orange", "Grapes"]; //array literals

// console.log(arr1);
// console.log(typeof arr1);
// let data = arr1.toString("|");
// console.log(data);

// let data2 = arr1.join("|");
// console.log(data2);

// let arr2 = Array("Earth", "Mars", "Mercury", "Nova");
// console.log(arr2);

// let arr3 = new Array("India", "Bharat", "Aryavrat");
// console.log(arr3);

//! at
// let arrOfFruits = ["Grapes", "Orange"];
// let res = arrOfFruits.at(2);
// res = arrOfFruits.at(-1);
// console.log(res);
// res = arrOfFruits.at([2]);
// console.log(res);
// console.log(Boolean([]));

//! concat
// let res = arrOfFruits.concat("Pear");
// console.log(arrOfFruits);
// console.log(res);
// res = arrOfFruits.concat(["Strawberry", "Banana", "Mango", "Jackfruit"]);
// console.log(res);
// res = arrOfFruits.concat({ username: "apple Kumar", category: "fruit" });
// console.log(res);

//! flat
// console.log(arrOfFruits);
// let res = arrOfFruits.flat();
// console.log(res);
// let nestedArr = [
//   1,
//   2,
//   [3, 4, [5, ["Shanu", "Sundari", "Bandari", "Mundari"], 6], [7], 9],
//   [10, 11, 12],
// ];
// res = nestedArr.flat(2);
// console.log(res);

// res = nestedArr.flat(Infinity);
// console.log(res);
// console.log(nestedArr);

//todo flatMap
//! includes
// let arrOfUsers = ["Shashi", "Shanu", "Karthick", "Rashid", "Abrar"];
// res = arrOfUsers.includes("Selva");
// console.log(res);

//! indexOf
// res = arrOfUsers.indexOf("Shanu");
// console.log(res);

//! join
// res = arrOfUsers.join("|");
// console.log(res);
// console.log(arrOfUsers);

//! keys
// res = arrOfUsers.keys();
// for (let i of res) {
//   console.log(i);
// }

//! lastIndexOf
// let arr = ["Mercury", "venus", "Earth", "Mercury"];
// let res = arr.lastIndexOf("Mercu");
// console.log(res);

// res = arr.length;
// console.log(res);

//! pop
// console.log(arr);
// res = arr.pop();
// console.log(res);
// console.log(arr);

//!push
let arr = ["Mercury", "venus", "Earth"];
// let res = arr.push("Jupiter", "Uranus", "Neptune", "Mars", "Saturn");
// console.log(res);
// console.log(arr);

//! shift
// let res = arr.shift();
// console.log(res);

//! unshift
// console.log(arr);
// res = arr.unshift("Hii", "Byeeee");
// console.log(res);
// console.log(arr);

// res = arr.concat(["Sundari", "Mundari", "Bandari"]);
// console.log(res);
// console.log(arr);

// res = arr.push(["Sundari", "Mundari", "Bandari"]);
// console.log(res);
// console.log(arr);

//!slice
let arr2 = [10, 30, 20, 50, 100, 450];
// console.log(arr2);
// res = arr2.slice(3);
// console.log(res);

// res = arr2.slice(0, 4);
// console.log(res);

// res = arr2.slice(-5, -1);
// console.log(res);

//! splice
console.log(arr2);
// let res = arr2.splice(3);
// console.log(res);
// console.log(arr2);

// let res = arr2.splice(3, 2);
// console.log(res);
// console.log(arr2);

// let res = arr2.splice(3, 2, "Shanu");
// console.log(res);
// console.log(arr2);

let res = arr2.splice(4, 0, "Nasa", true, "Rohit");
console.log(res);
console.log(arr2);
