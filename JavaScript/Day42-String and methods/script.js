// let str = "Amarjeet Kumar Singh"; /**String literals */
// let str2 = "Hii this is Shanu";
// let str3 = `Hii this is string interpolation`; /**Template Literals / String interpolation */

// let str4 = 'He said, "I am a good person"';
// console.log(str4);

// let str5 = "I am Mohan's friend";
// console.log(str5);

// let str6 = `${str5}, ${str4}`;
// console.log(str6);

// let myName = "Shanu Kumar Singh";
// let res = myName.length;
// console.log(res);

//! at method
// res = myName.at(100);
// console.log(res);

// let age = 19;
// console.log(age.length);

//! charAt
// res = myName.charAt(1);
// console.log(res);
// res = myName.charAt(-1);
// console.log(res);
// res = myName.charAt(100);
// console.log(res);

//! charCodeAt
// res = myName.charCodeAt(1);
// console.log(res);
// res = myName.charCodeAt(100);
// console.log(res); //NaN

//! concat
// res = myName.concat("Bhardwaj", true, Symbol);
// console.log(res);

//! endsWith
// res = myName.endsWith("h");
// console.log(res);

//! includes
// res = myName.includes("hanum");
// console.log(res);

//! indexOf and lastIndexOf
// res = myName.indexOf("S");
// console.log(res);
// res = myName.indexOf("uz");
// console.log(res);
// res = myName.lastIndexOf("u");
// console.log(res);
// res = myName.lastIndexOf("z");
// console.log(res);

//todo match and matchAll on Hold
// res = myName.match("u");
// console.log(res);
// res = myName.matchAll("u");
// console.log(res);

//! slice
// console.log(myName);
// res = myName.slice(7);
// console.log(res);
// res = myName.slice(-5);
// console.log(res);
// res = myName.slice(3, 7);
// console.log(res);
// res = myName.slice(100);
// console.log(res);

//! substring
let myName = "Shanu Kumar Singh";
console.log(myName);
// let res = myName.substring(2);
// console.log(res);
// res = myName.substring(2, 4);
// console.log(res);
// res = myName.substring(-2, 4);
// console.log(res);
// res = myName.substring(-1, -3);
// console.log(res);
// res = myName.substring(4, 2);
// console.log(res);
// res = myName.substring(4, -5); // (4, 0) ~ (0, 4)
// console.log(res);

//! substr ~ Deprecated
// let res = myName.substr(3, 5);
// console.log(res);
// res = myName.substr(3);
// console.log(res);
// res = myName.substr(3, 0);
// console.log(res);
// res = myName.substr(-6, 3);
// console.log(res);
// res = myName.substr(100, 3);
// console.log(res);
// res = myName.substr(-6, -3);
// console.log(res);

//todo test
// let res = myName.slice(1, -1);
// console.log(res);
// res = myName.slice(-1, 1);
// console.log(res);

// let username = prompt("Enter Username");
// let dob = prompt("Enter DOB (ddmmyyyy)");
// let contact = prompt("Enter contact (10 digit)");

// function generatePwd(username, dob, contact) {
//   //   for (let i = 0; i < username.length; i++) {
//   //     if (username[i] == " ") {
//   //       break;
//   //     } else {
//   //       password += username[i];
//   //     }
//   //   }
//   //   console.log(dob);
//   //   console.log(contact);

//   //   for (let i = 0; i < 2; i++) {
//   //     password += dob[i];
//   //   }

//   //   for (let i = 9; i >= 7; i--) {
//   //     password += contact[i];
//   //   }

//   let password =
//     username.slice(0, username.indexOf(" ")) +
//     dob.slice(0, 2) +
//     contact.slice(7);
//   console.log(password);
// }
// generatePwd(username, dob, contact);

//! padstart and padend
let contact = "1234567890";
// let res = contact.slice(-3);
// console.log(res);
// let paddedPhoneNumber = res.padStart(10, "X");
// console.log(paddedPhoneNumber);

let res = contact.slice(-3).padStart(10, "x");
console.log(res);
res = contact.slice(0, 3).padEnd(10, "X");
console.log(res);

//! split
let username = "Shanu Singh Bhardwaj";
let result = username.split();
console.log(result);
result = username.split("");
console.log(result);
result = username.split(" ");
console.log(result);

//! toUpperCase()
let userEmail = "amarjeetjtpr@gmail.com";
let res5 = userEmail.toUpperCase();
console.log(res5);

//! toLowerCase()
let user2 = "TINKu";
let res6 = user2.toLowerCase();
console.log(res6);

//! tostring
// let isMarried = true;
// let res87 = isMarried.tostring(); ❌❌❌❌
// console.log(res87);

let today = new Date();
console.log(today);
console.log(typeof today);
let res0 = today.toString();
console.log(res0);
console.log(today.toLocaleTimeString());
console.log(today.toLocaleDateString());

let maap = new Map();
console.log(maap);
console.log(typeof maap);

let arr = ["Hello", "Hii"];
console.log(arr);
let res01 = arr.toString();
console.log(res01);

//! trim, trimEnd and trimStart
let ename = "       Shanu        Kumar";
console.log(ename.length);
console.log(ename.trim());
console.log(ename.trimStart());
console.log(ename.trimEnd());

let splittedName = ename.split(" ");
console.log(splittedName);

let myName2 = "";
for (let i = 0; i < splittedName.length; i++) {
  if (splittedName[i] != "") {
    myName2 += splittedName[i] + " ";
  }
}
console.log(myName2);

let str = new String("Amar");
console.log(str);
console.log(typeof str);
