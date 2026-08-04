/**
 * Step 1: Global Context
 * 
 * Task:
 * 1. Log the value of 'this' in the global scope (outside any function).
 * 2. Run this file in Node.js and predict the output.
 * 3. Log 'this === module.exports' and 'this === global' to check the relationship.
 */

// Write your code here

console.log("value of this is:", this);
console.log("is this equal to module.exports?:", this === module.exports);
console.log("is this equal to global?:", this === global);

/**
 * Behind the Scenes (Node.js Execution):
 * 1. Node wraps the entire file in a module function.
 * 2. It executes it internally using: moduleWrapper.call(module.exports, ...)
 * 3. As a result, global 'this' within the file refers to 'module.exports' ({}) rather than the 'global' object.
 */


