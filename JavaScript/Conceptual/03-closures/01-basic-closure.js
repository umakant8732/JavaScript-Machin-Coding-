/**
 * Part 1: Basic Closure & Lexical Scope
 * 
 * Explanation:
 * Every function has access to the variables of its outer (parent) function,
 * even after the parent function has finished executing.
 */

function outerFunction() {
    let message = "Hello";

    function innerFunction() {
        console.log(message);
    }

    message = "Hello World"; // Value changed before returning
    return innerFunction;
}

const myFunc = outerFunction();
// Run this to test:
myFunc(); // Prints: "Hello World"

// 🙋‍♂️ Cross Question 1:
// If we create multiple instances like `const f1 = outerFunction()` and `const f2 = outerFunction()`, 
// do they share the same 'message' variable or do they get their own separate 'message' variables?
