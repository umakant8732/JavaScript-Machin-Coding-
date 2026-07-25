/**
 * Problem 10: Shallow vs Deep Copy
 * 
 * Explain and implement custom clones.
 * 
 * Shallow Copy:
 * Copies only first-level references (nested objects remain shared).
 * 
 * Deep Copy:
 * Recursively copies all reference layers (creates completely independent structures).
 */

const originalObj = {
    name: "John",
    skills: ["React", "Node"],
    address: {
        city: "Mumbai"
    }
};

// 1. TODO: Create a shallow copy of originalObj (e.g. using Object.assign or spread)
// Modify nested address.city and verify originalObj is affected.


// 2. TODO: Create a deep copy (e.g. using JSON.parse/stringify or custom recursion)
// Modify nested address.city and verify originalObj is NOT affected.
