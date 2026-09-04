/**
 * ES6 ESSENTIAL 1: DESTRUCTURING (OBJECT & ARRAY)
 * 
 * Concept:
 * Destructuring allows unpacking values from arrays or properties from objects
 * into distinct variables cleanly without repetitive dot notation or index access.
 */

// ==========================================
// 1. OBJECT DESTRUCTURING
// ==========================================
// Features: Property Renaming (Alias) & Fallback Default Values

const user = { 
    id: 101, 
    firstName: "Rahul", 
    city: "Mumbai" 
};

// Renaming 'firstName' to 'userName', extracting 'city', setting default 'role' = "Developer"
const { firstName: userName, city, role = "Developer" } = user;

console.log("1A. Object Destructuring:");
console.log("   User Name:", userName); // "Rahul"
console.log("   City:", city);         // "Mumbai"
console.log("   Role:", role);         // "Developer" (Fallback default)


// ==========================================
// 2. ARRAY DESTRUCTURING
// ==========================================
// Features: Position-based Unpacking, Value Skipping, and Rest Elements

const topScores = [98, 92, 85, 78, 65];

// Extracting 1st and 2nd, skipping 3rd, extracting 4th, and collecting rest
const [firstPlace, secondPlace, , fourthPlace, ...remainingScores] = topScores;

console.log("\n1B. Array Destructuring:");
console.log("   1st Place:", firstPlace);      // 98
console.log("   2nd Place:", secondPlace);     // 92
console.log("   4th Place:", fourthPlace);      // 78
console.log("   Remaining:", remainingScores); // [65]
