let arr = ["Ram", "Radha", "Rahul", "Rqfique", "Saif"];
console.log(arr);

// function myFun(ele, index) {
//   //   console.log(ele);
//   if (ele.includes("q")) {
//     return ele.toUpperCase();
//   } else {
//     return ele;
//   }
// }

// let res = arr.map(myFun);
// console.log(res);

// let res = arr.map((ele, index, arg3) => {
//   //   console.log(ele);
//   //   console.log(index);
//   //   console.log(arg3);
//   if (ele.includes("S")) {
//     return ele.toUpperCase();
//   } else {
//     return ele.toLowerCase();
//   }
// });
// console.log(res);

//! filter
// let res = arr.filter((ele, index, myarr) => {
//   //   console.log(ele);
//   //   console.log(index);
//   //   console.log(myarr);
//   if (ele.includes("a")) {
//     return ele;
//   }
// });

// console.log(res);

//! forEach
// let res = arr.forEach((ele, index, arr) => {
//   //   console.log(ele);
//   //   console.log(index);
//   //   console.log(arr);

//   if (ele == "Saif") {
//     return ele;
//   }
// });

// console.log(res);

//! reduce
let arr2 = [10, 20, 30, 40, 50];
res = arr2.reduce((acc, ele, index, arr) => {
  console.log(acc);
  console.log(ele);
  console.log(index);
  console.log(arr);
  return acc + ele;
}, 0);

console.log(res);

let arr3 = [];
res = arr3.reduce((acc, ele, index, arr) => {
  return acc + ele;
}, 0);
console.log(res);

let arr5 = ["Rajesh", "Sundar", "Jeyaprakash", "Lokesh", "Saravanan"];
console.log(arr);
res = arr5.filter((ele, index, arr) => {
  if (ele.includes("j"));
  {
    return ele;
  }
});
console.log(res);
