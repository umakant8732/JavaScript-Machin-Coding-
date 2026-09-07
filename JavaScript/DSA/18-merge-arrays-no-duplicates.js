/**
 * ============================================================================
 * 18. Merge Two Arrays Without Duplicates ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 18-merge-arrays-no-duplicates.js
 *
 * Problem Statement:
 * Given two arrays, merge them into a single array containing only unique elements.
 *
 * Example:
 * Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4, 5] -> Output: [1, 2, 3, 4, 5]
 * ============================================================================
 */

// Write your solution function here:
function mergeNoDuplicates(arr1, arr2) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/18-merge-arrays-no-duplicates.js")
// ----------------------------------------------------------------------------
console.log("Result:", mergeNoDuplicates([1, 2, 3], [2, 3, 4, 5])); // Expected: [1, 2, 3, 4, 5]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function mergeNoDuplicates(arr1, arr2) {
    let merged = new Set([...arr1, ...arr2]);
    return Array.from(merged);
}
===============================================================================
*/
