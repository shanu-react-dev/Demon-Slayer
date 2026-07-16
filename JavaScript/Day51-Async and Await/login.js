let userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);

let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));
console.log(isLoggedIn);
if (isLoggedIn === true) {
  window.location.href = "./index.html";
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  console.log(username, password);

  if (username === userData.email && password === userData.password) {
    window.localStorage.setItem("isLoggedIn", true);
    window.location.href = "./index.html";
  } else {
    console.log("Invalid data");
  }
});
