/**
 * Problem 2: Closures
 * 
 * Explain Closures using code.
 * A closure is the combination of a function bundled together with references to its surrounding state
 * (the lexical environment). In other words, a closure gives an inner function access to the outer function's scope.
 */

// Example 1: Create a basic counter that preserves state without using global variables.
function createCounter() {
    // Write your closure logic here
}

/*
const counter = createCounter();
console.log(counter()); // Expected: 1
console.log(counter()); // Expected: 2
*/


// Example 2: Private Variables / Getters & Setters pattern using closures.
function createPerson(name) {
    // Write closure functions to get/set private variable 'name'
}

/*
const person = createPerson("Rahul");
console.log(person.getName()); // Rahul
person.setName("Amit");
console.log(person.getName()); // Amit
*/
