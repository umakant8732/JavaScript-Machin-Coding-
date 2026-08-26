// ==========================================
// 1. ARRAY
// ==========================================
// - Can store duplicate values.
// - Keys are numerical indices (0, 1, 2...).
// - Best for ordered lists of data.
// - Performance: searching (indexOf/includes) takes O(n) time.

const myArray = [1, 2, 2, 3, "Aman", "Aman"];
console.log("Array length:", myArray.length); // 6 (duplicates allowed)

// Searching in array
console.log("Includes Aman?", myArray.includes("Aman")); // true

// Looping
myArray.forEach(item => console.log("Array item:", item));
