/**
 * Step 4: Shadowing & Precedence
 * 
 * Task:
 * 1. Create a global variable and a local function variable with the same name.
 * 2. Access it inside before and after local declaration to show shadowing.
 * 3. Create a function declaration and a var declaration with the same name. Observe which has higher precedence.
 */

// Concept 1: Variable Shadowing & Local Hoisting
// 1. The local variable 'var x' is hoisted to the top of testScope's local context.
// 2. This local declaration shadows the global 'x = 100' immediately.
// 3. Since the hoisted local variable is uninitialized, the first log outputs 'undefined'.
var x = 100; 

function testScope() {
    console.log(x); // outputs undefined due to shadowing & local hoisting
    var x = 50;
    console.log(x); // outputs 50 (local assignment completed)
}

testScope();

// Concept 2: Hoisting Precedence (Function vs Variable)
// 1. Function declarations are hoisted first during the Memory Creation phase.
// 2. The variable declaration 'var myName' is ignored as the name is already bound to the function.
// 3. Therefore, typeof myName outputs "function". (If we assign a value, it gets overwritten at execution).
var myName;

function myName () {
    console.log("I am a function");
}

console.log(typeof myName); // outputs "function"
