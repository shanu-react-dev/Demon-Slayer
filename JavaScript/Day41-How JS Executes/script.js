//! Scope In Javascript
// var a = "Shanu"; // Global Scope
// console.log(a);
// let b = "Shalu"; // Script Scope
// console.log(b);
// const c = "Rajesh";
// console.log(c);

// if (true) {
//   var a = 10; // global
//   console.log(a); //10
//   let b = 20; //script
//   console.log(b); //20
//   const c = 30; //script
//   console.log(c); //30
// }
// console.log(a); //10
// console.log(b); //Shalu
// console.log(c); //Rajesh

// function Demo() {
//   var a = "Mustang"; //Local
//   console.log(a);
//   let b = "Porsche"; //Local
//   console.log(b);
//   const c = "Bugatti"; //Local
//   console.log(c);
// }

// Demo();
// console.log(a); //10
// console.log(b); //Shalu
// console.log(c); //Rajesh

//! Closures
let myName = "Shanu";
console.log(myName);
// function Parent() {
//   let a = "Shanu";
//   function Child() {
//     console.log(`I am ${a}`);
//   }
//   Child();
// }

// Parent();

// function first() {
//   let favSub = "Java";
//   console.log(favSub);
//   function second() {
//     let secFavSub = "Servlet";
//     console.log(secFavSub);
//   }
//   return second;
// }
// let myfun = first();
// myfun();

// function first() {
//   let favSub = "Java";
//   console.log(favSub);
//   function second() {
//     let secFavSub = "Servlet";
//     console.log(secFavSub);
//     console.log(favSub);
//   }
//   return second;
// }
// let myfun = first();
// myfun();

function data() {
  console.log("I am a data function");
  function Child() {
    console.log("I am a child function");
  }
  Child();
}

data();
