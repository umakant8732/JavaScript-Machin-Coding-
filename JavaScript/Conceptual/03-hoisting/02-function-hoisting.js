/**
 * Step 2: Function Declaration vs Function Expression Hoisting
 * 
 * Task:
 * 1. Call a function declaration before its definition.
 * 2. Call a function expression (using var and const) before its definition.
 * 3. Observe and explain why function expressions fail with TypeError vs ReferenceError.
 */

// Write your code here

// 1. Function declarations are fully hoisted during the Memory Creation phase.
// 2. The entire function block is mapped in memory, allowing safe execution before its definition line.
greetNormal() // output -> Hello!
function greetNormal() {
    console.log("Hello!");
}

// 1. Function expressions using 'var' hoist only the variable declaration initialized with 'undefined'.
// 2. Calling it before assignment tries to run undefined(), throwing a TypeError.
greetWithVar() // crash! => TypeError: greetWithVar is not a function
var greetWithVar = function () {
    console.log("Hello!");
}

// 1. Function expressions using 'let/const' (and arrow functions) are hoisted but left uninitialized in the TDZ.
// 2. Accessing them before their actual initialization line throws a ReferenceError.
greetWithLet() // Crash! ReferenceError: Cannot access 'greetWithLet' before initialization
let greetWithLet = function () {
    console.log("Hello!");
}
