// console.log("This is asynchronous JavaScript");

// setTimeout(function () {
//   console.log("Hii this is  timeout");
// }, 5000);
// console.log("Hii this is Shanu");

let changeBg = document.querySelector("button");

// changeBg.addEventListener("click", () => {
//   setTimeout(() => {
//     document.body.style.background = "lightsteelblue";
//   }, 5000);
// });

let colorText = "1234567890abcdef";

// for (const i of colorText) {
//   //   console.log(colorText.indexOf(i));
//   let randomNumber = Math.random();
//   console.log(randomNumber);
// }

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    console.log(i);
    let randomIndex = Math.floor(Math.random() * 16);
    console.log(randomIndex);
    color += colorText[randomIndex];
  }
  console.log(color);
  return color;
}

let myInterval;
changeBg.addEventListener("click", () => {
  myInterval = setInterval(() => {
    document.body.style.background = randomColor();
  }, 3000);
});

let stopBtn = document.querySelector(".stopBg");
stopBtn.addEventListener("click", () => {
  clearInterval(myInterval);
});
