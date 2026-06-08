//! Non-Primitive Datatypes
//? Non-Primitive Datatypes are multi value datatypes. It is reference based and it can store multiple values inside a single variable. It is mutable.

/**
 * !Array
 * ? Array is a non-primitive datatype and it stores the values in the form of indexes. We can access the values here using its index.
 *
 * ? Inde is position of the elements present inside an array.
 */
// let arrOfUsers = ["Lewis Hamilton", "Mark", "Boston", "Shanu"];
// console.log(arrOfUsers);
// arrOfUsers = "Shanu";
// console.log(arrOfUsers);

// const arrOfFruits = ["Mango", "Apple", "Orange", "Grapes"];
// arrOfFruits = "Shanu";
// console.log(arrOfFruits);
// arrOfFruits.push("Kiwi");
// console.log(arrOfFruits);

// console.log(arrOfFruits[1]);
// arrOfFruits[1] = "Shanu";
// console.log(arrOfFruits);

/**
 * !Object
 * ? Object is a non primitive datatype and it stores multiple values in a single variable in the form of key and value pairs. If we want to access any specific properties then we need to use dot symbol followed by the keyname.
 */

const userObj = {
  username: "Shanu",
  age: 24,
  gender: "male",
  "first name": "Amarjeet",
};

console.log(userObj);
console.log(userObj.username);
console.log(userObj["first name"]);
console.log(userObj["gender"]);
