/**
 * ARRAY SEARCHING & TESTING METHODS
 * 
 * Methods & Descriptions:
 * - indexOf(item)         -> Returns first index of item, or -1 if not found.
 * - lastIndexOf(item)     -> Returns last index of item, or -1 if not found.
 * - includes(item)        -> Returns true if item exists in array, else false.
 * - find(callback)        -> Returns value of first matching element.
 * - findIndex(callback)   -> Returns index of first matching element.
 * - some(callback)        -> Returns true if AT LEAST ONE element matches condition.
 * - every(callback)       -> Returns true if ALL elements match condition.
 */

// Write your code and practice questions below:


// --- METHOD 1: indexOf() & lastIndexOf() ---
const fruits = ["Apple", "Banana", "Orange", "Banana", "Apple"];

// 1. indexOf() - Searches from start (Returns first matching index)
const firstBananaIndex = fruits.indexOf("Banana");
console.log("1. indexOf('Banana'):", firstBananaIndex);     // Output: 1


// 2. lastIndexOf() - Searches from end (Returns last matching index)
const lastBananaIndex = fruits.lastIndexOf("Banana");
console.log("   lastIndexOf('Banana'):", lastBananaIndex); // Output: 3



// 3. Item Not Found (Returns -1)
const mangoIndex = fruits.indexOf("Mango");
console.log("   indexOf('Mango'):", mangoIndex);          // Output: -1




// --- METHOD 2: includes(item) ---

const items = ["Laptop", "Phone", NaN, ];


// 1. Basic Existence Check (Returns Boolean)
console.log("2. includes('Phone'):", items.includes("Phone")); // Output: true
console.log("   includes('Tablet'):", items.includes("Tablet")); // Output: false


// 2. The NaN Search Advantage over indexOf()
console.log("   indexOf(NaN):", items.indexOf(NaN));          // Output: -1 (Fails!)
console.log("   includes(NaN):", items.includes(NaN));        // Output: true (Success!)




// --- METHOD 3: find() & findIndex() ---

const users = [
  { id: 101, name: "Alice", age: 22 },
  { id: 102, name: "Bob", age: 28 },
  { id: 103, name: "Charlie", age: 35 }
];


// 1. find() - Returns the FIRST matching object (or undefined)
const userOver25 = users.find(u => u.age > 25);
console.log("3. find(age > 25):", userOver25);             // Output: { id: 102, name: 'Bob', age: 28 }

// 2. findIndex() - Returns the INDEX of first matching object (or -1)
const bobIndex = users.findIndex(u => u.name === 'Bob');
console.log("   findIndex(name === 'Bob'):", bobIndex);    // Output: 1


// 3. Item Not Found Behavior
const missingUser = users.find(u => u.age > 50);
console.log("   find(age > 50):", missingUser);           // Output: undefined




// --- METHOD 4: some() & every() ---


const scores = [45, 60, 75, 90, 30];

// 1. some() - Checks if AT LEAST ONE element passes (Returns true)
const hasPassingScore = scores.some(score => score >= 50);
console.log("4. some(score >= 50):", hasPassingScore);      // Output: true (60 passed!)


// 2. every() - Checks if ALL elements pass (Returns false because 45 & 30 failed)
const isAllPassed = scores.every(score => score >= 50);
console.log("   every(score >= 50):", isAllPassed);       // Output: false


// 3. every() with all passing scores
const highScores = [60, 70, 80];
console.log("   every(highScores >= 50):", highScores.every(s => s >= 50)); // Output: true


