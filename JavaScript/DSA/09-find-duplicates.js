/**
 * ============================================================================
 * 09. Find Duplicate Elements in an Array ⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 09-find-duplicates.js
 *
 * Problem Statement:
 * Given an array of elements, find and return an array of all duplicate values (values that appear more than once).
 *
 * Example:
 * Input: [1, 2, 3, 2, 4, 5, 1, 6] -> Output: [2, 1]
 * ============================================================================
 */

// Write your solution function here:
function findDuplicates(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/09-find-duplicates.js")
// ----------------------------------------------------------------------------
console.log("Result:", findDuplicates([1, 2, 3, 2, 4, 5, 1, 6])); // Expected: [2, 1]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    for (let item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    return Array.from(duplicates);
}
===============================================================================
*/
