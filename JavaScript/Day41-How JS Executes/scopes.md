## Scopes

_Scopes in JavaScript is a mechanism which defines the visibility or accessibility of a variables.There are total three scopes in JavaScript._

1. **Global Scope:** Variables declared globally can be accessed anywhere in the script file. Variables declared using var keyword and named function generally considered as global variables. We can access it anywhere.
2. **Block Scope:** In JavaScript we have block scope and any variables declared using let and const keyword inside a block can be accessed within the block only. It can't be accessed outside of the block.
3. **Local Scope:** It is also known as function scope and any variables declared within the function block can't be accessed outside of the function block.

#### Script Scope

_In JavaScript, Script Scope is a specific layer of the global environment implemented by JavaScript engines (like V8 in Google Chrome and Node.js) to store top-level variables declared with let, const, and class_

### Hoisting

_Hoisting is a mechanism which helps us to move the variables to the top of their current scope. Here we can access a variable before its declaration or initialization._

_All variables are hoisted in JavaScript. Specifically variables created using let and const keyword will be hoisted in **Temporal Dead Zone** (TDZ)_

### Temporal Dead Zone

_In JavaScript TDZ refers to Temporal Dead Zone. It is a time period between declaration and intialization of a variable. Variables created using let and const keyword will wait in TDZ until and unless it is initialized._

### Closures

_It is a feature of JavaScript which allows you to access parent function variables inside Child function even after parent function has been executed._

### GEC (Global Execution Context)

_The Global Execution Context (GEC) is the default or base environment created by the JavaScript engine before it executes any code. It serves as a container that wraps and manages the execution of all JavaScript code that does not reside inside a function._

### CallStack

_The JavaScript Call Stack is a mechanism used by the runtime engine to track function execution and keep place in a script. It operates on the Last-In, First-Out (LIFO) data structure principle, meaning the last function called is the first one executed and completed._
