/**
 * Problem 9: Set vs Array
 * 
 * Explain Set vs Array using code.
 * 
 * Set:
 * - Collection of unique values.
 * - Hash table lookups (O(1) search complexity for has()).
 * 
 * Array:
 * - Ordered index list, duplicates allowed.
 * - Linear search (O(N) search complexity for includes()/indexOf()).
 */

const size = 100000;
const arr = [];
const set = new Set();

// Populate structures
for (let i = 0; i < size; i++) {
    arr.push(i);
    set.add(i);
}

// TODO: Run a time complexity check comparing search operations:
// Measure how long it takes to find '99999' using arr.includes() vs set.has()
console.time("Array Search");
// arr.includes(99999)
console.timeEnd("Array Search");

console.time("Set Search");
// set.has(99999)
console.timeEnd("Set Search");
