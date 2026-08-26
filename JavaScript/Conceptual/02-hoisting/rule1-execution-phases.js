/*
 * RULE 1: JavaScript Execution occurs in TWO distinct phases:
 * 1. Memory Creation Phase: JS scans the code for variable/function declarations and allocates memory (Hoisting).
 * 2. Execution Phase: Code runs line-by-line, assigning values and executing functions.
 */

// --- Example 1: Basic var Hoisting ---
// In Memory Phase, 'a' is allocated memory and initialized to undefined.
// In Execution Phase, the first log prints undefined, then a is assigned 10.
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10


// --- Example 2: Function Declaration Hoisting ---
// In Memory Phase, function 'greet' is fully stored in memory.
// In Execution Phase, we can call it even before its definition line.
greet(); // Output: "Hello"

function greet() {
    console.log("Hello");
}
