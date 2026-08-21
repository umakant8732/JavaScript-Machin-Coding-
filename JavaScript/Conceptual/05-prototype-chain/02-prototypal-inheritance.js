/**
 * Step 2: Prototypal Inheritance (Constructor + Object.create)
 *
 * Task:
 * 1. Create a parent constructor 'Animal' with a shared method 'eat'.
 * 2. Create a child constructor 'Dog' that inherits from Animal.
 * 3. Add a Dog-specific method 'bark'. Verify the prototype chain.
 */

// Parent Constructor
function Animal(name) {
    this.name = name
}

// Shared method on Animal.prototype — all animals can eat
Animal.prototype.eat = function() {
    console.log(this.name + " is eating")
}

// Child Constructor
// Animal.call(this, name) → copies Animal's own properties (name) onto Dog instance
function Dog(name, breed) {
    Animal.call(this, name)
    this.breed = breed
}

// Link Dog.prototype → Animal.prototype so Dog instances can access 'eat'
// Must be done BEFORE adding Dog-specific methods to Dog.prototype
Dog.prototype = Object.create(Animal.prototype)

// Dog-specific method — only Dog instances can access this, not Animal instances
Dog.prototype.bark = function() {
    console.log(this.name + " says: Woof!")
}

const dog1 = new Dog("Tommy", "Labrador")

console.log(dog1.name)   // Tommy  (own property — set via Animal.call)
console.log(dog1.breed)  // Labrador  (own property — set in Dog constructor)
dog1.eat()               // Tommy is eating  (inherited from Animal.prototype)
dog1.bark()              // Tommy says: Woof!  (Dog.prototype method)

// hasOwnProperty proves which properties belong directly to dog1
console.log(dog1.hasOwnProperty('name'))  // true  (own property)
console.log(dog1.hasOwnProperty('eat'))   // false (inherited via chain)

// Inheritance is one-directional: Child → Parent only
const animal1 = new Animal("Cat")
animal1.eat()    // works ✅
// animal1.bark()  // TypeError — Animal cannot access Dog's methods ❌
