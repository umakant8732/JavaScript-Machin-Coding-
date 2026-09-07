/**
 * ============================================================================
 * 14. Find First Duplicate Element ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 14-find-first-duplicate.js
 *
 * Problem Statement:
 * Given an array of elements, find the first element that repeats (appears more than once). If no duplicate exists, return null.
 *
 * Example:
 * Input: [2, 5, 1, 2, 3, 5, 1] -> Output: 2
 * ============================================================================
 */

// Write your solution function here:
function findFirstDuplicate(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/14-find-first-duplicate.js")
// ----------------------------------------------------------------------------
console.log("Result:", findFirstDuplicate([2, 5, 1, 2, 3, 5, 1])); // Expected: 2


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findFirstDuplicate(arr) {
    let seen = new Set();
    for (let item of arr) {
        if (seen.has(item)) return item;
        seen.add(item);
    }
    return null;
}
===============================================================================
*/
