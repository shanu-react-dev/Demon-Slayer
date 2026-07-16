// console.log("Hi today we are going to learn async and await");
let products = document.querySelector(".products");
let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));
console.log(isLoggedIn);
// let loginBtn = document.querySelector(".loginBtn");

let fetchData = async () => {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    // console.log(data);
    let fData = await data.json();
    console.log(fData);

    fData.forEach((element) => {
      console.log(element);
      let card = document.createElement("div");
      card.setAttribute("class", "card");

      card.innerHTML = `
      <div class="pImage"><img src ="${element.image}"/></div>
      <div class="pDetails">
      <h3>${element.title}</h3>
      <p>${element.description}</p>
      <h4>${element.price}$</h4>
      </div>
      <div class="cardBtn">
      <button>Add to Cart</button>
      <button>Buy Now</button>
      </div>
      `;

      products.append(card);
    });
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();

let loginBtn = document.querySelector(".loginBtn");
loginBtn.addEventListener("click", () => {
  window.location.href = "./login.html";
});

if (isLoggedIn === true) {
  loginBtn.innerText = "Logout";
}

if (loginBtn.innerText === "Logout") {
  loginBtn.addEventListener("click", () => {
    window.localStorage.removeItem("isLoggedIn");
    window.location.href = "./login.html";
    loginBtn.innerText = "login";
  });
}

// console.log(loginBtn.innerText === "Logout");
