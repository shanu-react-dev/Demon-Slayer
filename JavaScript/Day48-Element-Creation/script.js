console.log("Hii this is the last class for DOM");

let heading = document.createElement("h2");
console.log(heading);
heading.innerText = "Login Page";

// document.body.appendChild(heading);

//! creation of elements
let form = document.createElement("form");
let username = document.createElement("input");
let password = document.createElement("input");
let loginBtn = document.createElement("input");
let forgetPassword = document.createElement("a");

// console.log(form);
console.log(username);
//! setting necessary attributes
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Enter Username");
username.setAttribute("name", "username");
username.setAttribute("id", "username");
password.setAttribute("type", "password");
password.setAttribute("placeholder", "Enter Password");
password.setAttribute("name", "password");
password.setAttribute("id", "password");

loginBtn.setAttribute("type", "submit");
loginBtn.setAttribute("value", "Log in Here");

forgetPassword.setAttribute("href", "#");

//! set values
forgetPassword.innerText = "Forget Password";

// form.appendChild(heading);
// form.appendChild(username);
// form.appendChild(password);
// form.appendChild(loginBtn);
// form.appendChild(forgetPassword);

form.append(heading, username, password, loginBtn, forgetPassword);

//! appending form to formBox
let formBox = document.querySelector(".formBox");
formBox.appendChild(form);

//! styling
formBox.style.height = "350px";
formBox.style.width = "400px";
formBox.style.background =
  "linear-gradient(to top right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1))";
form.style.height = "75%";
form.style.width = "80%";
// form.style.backgroundColor = "blue";

formBox.style.display = "flex";
formBox.style.justifyContent = "center";
formBox.style.alignItems = "center";

form.style.display = "flex";
form.style.flexDirection = "column";
heading.style.textAlign = "center";
heading.style.margin = "30px 0";

forgetPassword.remove();
