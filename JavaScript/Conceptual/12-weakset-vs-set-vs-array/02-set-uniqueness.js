// ==========================================
// 2. SET
// ==========================================
// - Stores only UNIQUE values (no duplicates).
// - Can store any type of value (primitives and objects).
// - Performance: searching (has) takes O(1) time (Very Fast!).
// - Prevents garbage collection (Holds memory tightly).

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Ignored, because 2 is already there
mySet.add("Aman");
mySet.add("Aman"); // Ignored

console.log("Set size:", mySet.size); // 3 (1, 2, "Aman")

// Fast searching
console.log("Has Aman?", mySet.has("Aman")); // true

// Deleting
mySet.delete(1);

// Looping
mySet.forEach(item => console.log("Set item:", item));

// Memory Behavior (Important for Interviews)
let user = { name: "Rahul" };
mySet.add(user);

user = null; // We deleted the original object
console.log("Set size after user=null:", mySet.size); // Output: 3 
// The object still exists inside the Set! (Memory Leak risk)
