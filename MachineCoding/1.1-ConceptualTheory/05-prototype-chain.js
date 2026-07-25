/**
 * Problem 5: Prototype Chain
 * 
 * Implement custom prototype chaining.
 * Prototypal inheritance allows an object to inherit properties/methods from another object.
 */

// 1. Create a base object 'parent'
const parent = {
    greet: function() {
        return "Hello from parent!";
    }
};

// 2. TODO: Create a child object that inherits methods from 'parent' using Object.create or __proto__
// Write code here...


// 3. TODO: Create a custom class/Constructor function and extend its Prototype.
function Animal(name) {
    this.name = name;
}
// Add a method 'speak' to Animal's prototype...
