// let myName = document.getElementById("myName");
// console.log(myName);

// function PrintMyName() {
//   console.log("Hii this is Sundari");
//   myName.innerHTML = "Hey this is Shanu";
// }

// let bgChanger = document.getElementById("bgChanger");
// console.log(bgChanger);

// //! DOM way to add the events
// bgChanger.onclick = () => (document.body.style.background = "lightpink");

// let demo = document.getElementById("demo");
// console.log(demo);

// demo.addEventListener("click", function (event) {
//   console.log(event.target);
//   console.log(event.target.value);
// });

//! Window Event
// window.addEventListener("resize", (e) => {
//   console.log(e);
// });

//! form event

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  let username = document.querySelector("#username").value;
  console.log(username);
  let password = document.getElementById("password").value;
  console.log(password);
});

let password = document.getElementById("password");
let ishidden = true;
let pwd = document.getElementById("pwd");
pwd.addEventListener("click", () => {
  if (ishidden) {
    password.setAttribute("type", "text");
    pwd.innerHTML = "hide Password";
    ishidden = !ishidden;
  } else {
    password.setAttribute("type", "password");
    pwd.innerHTML = "show password";
    ishidden = !ishidden;
  }
});
