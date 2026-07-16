let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));
console.log(isLoggedIn);
if (isLoggedIn === true) {
  window.location.href = "./index.html";
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let fullName = document.getElementById("fullName").value;
  let contact = document.getElementById("contact").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log({ fullName, contact, email, password });
  window.localStorage.setItem(
    "userData",
    JSON.stringify({
      fullName: fullName,
      contact: contact,
      email: email,
      password: password,
    }),
  );

  window.location.href = "./login.html";
});
