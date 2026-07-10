// console.log(document);
// console.dir(document);

//! getElementById()
// let firstPara = document.getElementById("firstPara");
// console.log(firstPara);

// firstPara = document.getElementById("html");
// console.log(firstPara);

//! getElementsByClassName
// let headings = document.getElementsByClassName("heading");
// console.log(headings);

// for (let i = 0; i < headings.length; i++) {
//   headings[i].style.background = "red";
//   headings[i].style.color = "#2c2c2c";
// }

// headings.forEach((ele, index) => {
//   console.log(ele);
// }); ❌❌❌

//! getElementsByTagName
// let headingTag = document.getElementsByTagName("h1");
// console.log(headingTag);

//! querySelector()
// let res = document.querySelector(".headin");
// console.log(res);

//! querySelectorAll()
let res = document.querySelectorAll(".heading");
console.log(res);

res = document.querySelector("[title]");
console.log(res);

res = document.querySelectorAll("#firstPara");
console.log(res);

res.forEach((ele, index) => {
  ele.style.backgroundColor = "blue";
});
