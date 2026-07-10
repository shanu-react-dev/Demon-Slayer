console.log("Hey DOM");

// let heading = document.getElementsByTagName("h1");
// console.log(heading);
// console.log(heading[0]);

let heading = document.querySelector("h1");
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

let details = document.querySelector("details");
console.log(details);
console.log(details.innerHTML);
console.log(details.innerText);
console.log(details.textContent);

details.innerHTML = `<summary>Shanu</summary> <p>Hey this is <b>shanu</b> and I am from Delhi. I am here to train people. I also guide to optimize their <mark>linkedin</mark> profile and skilling up training</p>`;

details.innerText = `<summary>Shanu</summary> <p>Hey this is <b>shanu</b> and I am from Delhi. I am here to train people. I also guide to optimize their <mark>linkedin</mark> profile and skilling up training</p>`;

details.textContent = `<summary>Shanu</summary> <p>Hey this is <b>shanu</b> and I am from Delhi. I am here to train people. I also guide to optimize their <mark>linkedin</mark> profile and skilling up training</p>`;

let box = document.querySelector("div");
console.log(box);
console.log(box.children);
console.log(box.childNodes);
// console.log(box.COMMENT_NODE);

console.log(box.getAttribute("class"));
box.setAttribute("class", "listBox");

box.setAttribute("class", "listBox shanu");
box.setAttribute("title", "List Dabba");

// box.setAttribute("class", "Sundari");
console.log(box.classList);
box.classList.add("sundari");

box.id = "myBox";

let input = document.querySelector("input");
console.log(input.type);
console.log(input.value);

input.placeholder = "Enter name";
input.value = "";
input.style.backgroundColor = "lightpink";

console.log(box.children);

let convertedArr = Array.from(box.children);
console.log(convertedArr);
console.log(convertedArr[0].children);
let unorderedList = convertedArr[0].children;
console.log(unorderedList);

for (let i = 0; i < unorderedList.length; i++) {
  if (i % 2 == 0) {
    unorderedList[i].style.color = "green";
  } else {
    unorderedList[i].style.color = "red";
  }
}
