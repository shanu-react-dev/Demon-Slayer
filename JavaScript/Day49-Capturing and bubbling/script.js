let parent = document.querySelector(".parent");
let ch = document.querySelector(".child");
let gc = document.querySelector(".grandchild");

parent.addEventListener("click", () => {
  console.log("I am parent");
});

ch.addEventListener("click", (e) => {
  console.log("I am child");
  e.stopImmediatePropagation();
});
gc.addEventListener("click", (e) => {
  console.log("I am grandchild");
  e.stopPropagation();
});
