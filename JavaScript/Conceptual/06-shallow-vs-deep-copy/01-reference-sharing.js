// ==========================================
// REFERENCE SHARING IN JAVASCRIPT
// ==========================================

// 1. Primitive Types (Pass by Value)
// Primitive types like Strings, Numbers, Booleans are copied by their exact value.
let name1 = "Aman";
let name2 = name1; // A separate copy of "Aman" is created in memory

name2 = "Rahul"; // Changing name2 does NOT affect name1
console.log("Primitive Copy:");
console.log("name1:", name1); // Output: Aman 
console.log("name2:", name2); // Output: Rahul


console.log("-----------------------");


// 2. Reference Types (Pass by Reference)
// Objects, Arrays, and Functions are stored in the Heap memory.
// Variables only hold the "address" (reference) to that memory location.
let user1 = {
  name: "Umakant",
  age: 25
};

// Here, we are NOT creating a new object. 
// We are only copying the "memory address". Both variables now point to the exact same object.
let user2 = user1; 

// If we modify user2, we are actually modifying the original object in memory!
user2.age = 30;

console.log("Reference Sharing:");
console.log("user1 age:", user1.age); // Output: 30 😱 (Changed unintentionally!)
console.log("user2 age:", user2.age); // Output: 30

// CONCLUSION:
// This unintended mutation is why we need "Shallow Copy" and "Deep Copy" 
// to create actual independent clones of objects instead of just sharing references.
