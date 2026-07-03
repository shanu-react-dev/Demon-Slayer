//! Object
//? Object is a non-primitive datatype and it is multivalue data type means it can store multiple values in the form of key and value pairs. It is mutable in nature. Here in object each and every key will be unique. The last updated value will be reflected in the object key.

const a = {}; //Object literals {} is known as object notation
console.log(a);
a.username = "Shanu";
a.age = 24;
a.gender = "male";
a.age = 35;
a.address = {
  streetName: "4th cross 2nd main",
  locality: "Pammal",
  city: "Chennai",
};
a.isMarried = false;
a.skills = [
  "MongoDB",
  "React JS",
  "Node JS",
  "Express JS",
  "HTML",
  "CSS",
  "JavaScript",
];
console.log(a);

//! freeze
//? freeze is an Object constructor method and it is used to prevent modification or extensiblity of an object. Once we use this property we can't able to add or modify any new or existing property.
// Object.freeze(a);

//! seal
//? Seal is an Object constructor method similar to freeze but it does not allow you to add any new property in the object but we can modify the existing property in an object.
Object.seal(a);

a.username = "Sundari";
console.log(a);
a.isdead = true;
console.log(a);


