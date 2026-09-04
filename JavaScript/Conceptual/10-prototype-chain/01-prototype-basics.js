/**
 * Step 1: Prototype Basics (__proto__ vs prototype)
 *
 * Task:
 * 1. Create an object and log its '__proto__' property.
 * 2. Create a constructor function and log its 'prototype' property.
 * 3. Explain the relationship between __proto__ and prototype.
 */

// Constructor Function
// 'new' keyword: creates blank object → sets __proto__ = User.prototype
// → runs function with 'this' = blank object → returns it automatically.
function User(name) {
    this.name = name
}

const user1 = new User("Umakant")
const user2 = new User("Mrunali")

console.log(user1)  // User { name: 'Umakant' }
console.log(user2)  // User { name: 'Mrunali' }

// Every function gets an empty 'prototype' object automatically.
// user1.__proto__ === User.prototype → true
console.log(typeof User)     // "function"
console.log(User.prototype)  // {}

// Adding a shared method on User.prototype.
// Both instances share ONE copy of greet in memory — no duplication.
User.prototype.greet = function() {
    console.log("Hello, I am", this.name)
}

user1.greet()  // Hello, I am Umakant
user2.greet()  // Hello, I am Mrunali

// Proves only ONE function copy exists for both instances
console.log(user1.greet === user2.greet)  // true
