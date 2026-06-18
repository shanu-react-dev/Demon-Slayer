console.log("Hii this is JavaScript");

//! Pattern Printing
// for (let i = 0; i <= 4; i++) {
//   let star = "";
//   for (let j = 0; j <= i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// for (let i = 4; i >= 0; i--) {
//   let star = "";
//   for (let j = i; j <= i; j--) {
//     star += "*";
//   }
//   console.log(star); ❌❌❌
// }

// let n = 4;
// for (let i = n; i > 0; i--) {
//   //   console.log(i);
//   let star = "";
//   let space = "";
//   for (let j = n; j >= 1; j--) {
//     if (i + j > n) {
//       star += " *";
//     } else {
//       space += "  ";
//     }
//   }
//   console.log(space, star);
// }

let username = "Rajesh";
// for (let i = 0; i < username.length; i++) {
//   console.log(i);
//   console.log(username[i]);
// }

let rev = "";
for (let i = username.length - 1; i >= 0; i--) {
  //   console.log(i);
  //   console.log(username[i]);
  rev += username[i];
}

console.log(rev);
