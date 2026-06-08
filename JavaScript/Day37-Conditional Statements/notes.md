## Conditional Statements

_Conditional statement in JavaScript is a way to get the expected outputs based on certain conditions. We can perform conditional statements in various ways._

1. **`if` statement:** This is also known as true statement block it will be executed only if the specified condition is true else it will not be executed.
   ```JavaScript
   if(condition){
     //statement
   }
   ```
2. **`if-else` statment:** Using **if-else** we can get the outputs for true statement also as well as false statement also. If the condition is `true` only if block will be executed,. If it is false then `else` block will be executed.
   ```JavaScript
   if(condition){
   // true statement
   }else{
    // false statement
   }
   ```
3. **`else-if` statement:** This statement is used to perform more than one condition. Here multiple conditions can be checked and based on the matching statement it will return me the output.
   ```JavaScript
   if(condition){
   // true statement
   }else if(condition){
   // true statement
   }else if(condition){
   // true statement
   }else{
    //false statement
   }
   ```
4. **switch case Statement:** Using switch and case also we can perform conditional statements. Here `seitch()` is a method and accepts conditions. Inside the block will have to write cases based on the condition result and case it will get me the output.
   ```JavaScript
    let day = 1;
    switch(day){
        case 1:
            console.log("Sunday")
        case 2:
            console.log("Monday")
        default:
            console.log("Data not found")
    }
   ```
   _Switch and case here the conditions will be checked to the cases strictly._
