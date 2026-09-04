/**
 * ES6 ESSENTIAL 2: SPREAD VS REST OPERATORS (...)
 * 
 * Golden Rule (1-Line Difference):
 * - SPREAD (...) UNPACKS / EXPANDS elements of an array/object into individual items.
 * - REST (...) PACKS / COLLECTS multiple individual elements into a single array/object.
 */

// ==========================================
// 1. SPREAD OPERATOR (UNPACKING / EXPANDING)
// ==========================================

// A. Merging Arrays
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Cherry", "Mango"];
const allFruits = [...fruits1, ...fruits2]; // Unpacks both arrays into a new array
console.log("1A. Spread Merged Arrays:", allFruits); // ['Apple', 'Banana', 'Cherry', 'Mango']

// B. Copying & Updating Objects (React State Update Pattern)
const originalUser = { name: "Rahul", age: 25 };
const updatedUser = { ...originalUser, city: "Mumbai", age: 26 }; // Overwrites age, adds city
console.log("1B. Spread Updated Object:", updatedUser);

// C. Function Call Arguments
const prices = [10, 50, 30];
console.log("1C. Spread Math.max:", Math.max(...prices)); // Output: 50


// ==========================================
// 2. REST OPERATOR (PACKING / COLLECTING)
// ==========================================

// A. Function Parameter Gathering (Packs variable arguments into an array)
function calculateTotalTax(...amounts) {
    // 'amounts' receives [100, 200, 300]
    const total = amounts.reduce((acc, val) => acc + val, 0);
    return total * 0.18; // 18% Tax
}
console.log("\n2A. Rest Function Parameter Tax:", calculateTotalTax(100, 200, 300)); // 108

// B. Rest in Destructuring (Packs remaining elements)
const scores = [100, 90, 80, 70];
const [winner, runnerUp, ...otherScores] = scores;
console.log("2B. Rest Destructuring (Others):", otherScores); // [80, 70]
