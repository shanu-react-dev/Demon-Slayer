// let age = 49;

//! if
// if (age === 18) {
//   console.log(`I am ${age} years old`);
// }

//! if-else
// let isMarried = false;
// if (isMarried) {
//   console.log("I am Married");
// } else {
//   console.log("I am not marrried");
// }

//! else if
// let age = prompt("Enter your age:");
// if (age < 5) {
//   console.log("I am a kid");
// } else if (age < 18) {
//   console.log("I am teenage");
// } else if (age < 45) {
//   console.log("I am adult");
// } else if (age <= 80) {
//   console.log("I am old");
// } else if (age > 80) {
//   console.log("Some dabba fellow is trying to check");
// }

//! switch
// let dayNumber = prompt("Enter number between 1 to 7:");
// console.log(typeof dayNumber);
// switch (dayNumber) {
//   case 1:
//     console.log("Today is Sunday");
//     break;
//   case 2:
//     console.log("Today is Monday");
//     break;
//   case 3:
//     console.log("Today is Tuesday");
//     break;
//   case 4:
//     console.log("Today is Wednesday");
//     break;
//   case 5:
//     console.log("Today is Thursday");
//     break;
//   case 6:
//     console.log("Today is Friday");
//     break;
//   case 7:
//     console.log("Today is Saturday");
//     break;
//   default:
//     console.log("Invalid daynumber");
// }

/**
 * ! Write a conditional statement for driving license
 * ? Details needed for Driving license
 * todo 1. Age
 * todo 2. Gender
 * todo 3. Know how to drive
 * todo 4. Medical Test
 * todo 5. Give the license
 */

let age = Number(prompt("Enter Your age:"));
if (age >= 18) {
  console.log("Eligible for next step");
  let gender = prompt("Enter your gender either male or female:");
  if (gender === "male") {
    console.log("Now will have driving test for geared vehicle");
    let medicalTest = Boolean(
      prompt("Enter true if passed else make it empty."),
    );
    if (medicalTest === true) {
      console.log("You will get the license within 6 months");
    } else {
      console.log("You are medically unfit so we can't provide the license.");
    }
  } else {
    console.log("You can go for non geared vehicle");
  }
} else {
  console.log("You are under age. Go and drink complan and horlicks");
}
