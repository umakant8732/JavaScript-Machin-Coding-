/**
 * Step 3: Constructor Function Inheritance
 * 
 * Task:
 * 1. Create a 'Person' constructor with name and age.
 * 2. Add a method 'sayHello' to Person.prototype.
 * 3. Create a 'Student' constructor that inherits from 'Person'.
 */

// 1. Parent Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a shared method to the Parent's prototype
Person.prototype.sayHello = function() {
    console.log("Hii, I am " + this.name, this.age);
}

// 2. Child Constructor
function Student(name, age, course) {
    // Inherit properties: Call the parent constructor with 'this' context
    Person.call(this, name, age);
    
    // Add child-specific properties
    this.course = course;
}

// Inherit methods: Link Student's prototype to Person's prototype
// This MUST be done before adding any Student-specific methods to the prototype!
Student.prototype = Object.create(Person.prototype);

// Add child-specific method
Student.prototype.study = function() {
    console.log(this.name + " is studying " + this.course);
}

// 3. Testing the Inheritance
const student1 = new Student("Umakant", 25, "Javascript");

student1.sayHello(); // Inherited from Person.prototype
student1.study();    // Found on Student.prototype
