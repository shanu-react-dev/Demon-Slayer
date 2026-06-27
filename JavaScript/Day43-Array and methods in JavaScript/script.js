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
let arrOfFruits = ["Grapes", "Orange"];
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
console.log(arrOfFruits);
let res = arrOfFruits.flat();
console.log(res);
let nestedArr = [
  1,
  2,
  [3, 4, [5, ["Shanu", "Sundari", "Bandari", "Mundari"], 6], [7], 9],
  [10, 11, 12],
];
// res = nestedArr.flat(2);
// console.log(res);

res = nestedArr.flat(Infinity);
console.log(res);
console.log(nestedArr);

//todo flatMap
//! includes
let arrOfUsers = ["Shashi", "Shanu", "Karthick", "Rashid", "Abrar"];
res = arrOfUsers.includes("Selva");
console.log(res);

//! indexOf
res = arrOfUsers.indexOf("Shanu");
console.log(res);

//! join
res = arrOfUsers.join("|");
console.log(res);
console.log(arrOfUsers);

//! keys
res = arrOfUsers.keys();
for (let i of res) {
  console.log(i);
}
