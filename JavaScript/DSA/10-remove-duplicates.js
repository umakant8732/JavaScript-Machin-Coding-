/**
 * ============================================================================
 * 10. Remove Duplicates from an Array ⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 10-remove-duplicates.js
 *
 * Problem Statement:
 * Given an array with duplicate values, return a new array with all duplicates removed.
 *
 * Example:
 * Input: [1, 2, 2, 3, 4, 4, 5] -> Output: [1, 2, 3, 4, 5]
 * ============================================================================
 */

// Write your solution function here:
function removeDuplicates(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/10-remove-duplicates.js")
// ----------------------------------------------------------------------------
console.log("Result:", removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function removeDuplicates(arr) {
    let unique = [];
    let seen = new Set();
    for (let item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            unique.push(item);
        }
    }
    return unique;
}
===============================================================================
*/
