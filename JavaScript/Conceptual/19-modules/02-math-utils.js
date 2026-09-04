/**
 * MODULE SCENARIO 1: NAMED EXPORTS
 * File: 02-math-utils.js
 * 
 * Concept:
 * A single file can contain MULTIPLE named exports.
 * Consumers must import them using curly braces { add, subtract }.
 */

// Named Export 1: Function
function add(a, b) {
    return a + b;
}

// Named Export 2: Function
function subtract(a, b) {
    return a - b;
}

// Named Export 3: Function
function multiply(a, b) {
    return a * b;
}

// Named Export 4: Constant
const PI = 3.14159;

// ES6 Named Export Syntax:
// export { add, subtract, multiply, PI };

// Node.js CommonJS compatible export for execution:
module.exports = {
    add,
    subtract,
    multiply,
    PI
};
