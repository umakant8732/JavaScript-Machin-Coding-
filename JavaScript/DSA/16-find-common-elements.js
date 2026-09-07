/**
 * ============================================================================
 * 16. Find Common Elements Between Two Arrays ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 16-find-common-elements.js
 *
 * Problem Statement:
 * Given two arrays, find and return an array of elements that appear in both arrays.
 *
 * Example:
 * Input: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6] -> Output: [3, 4]
 * ============================================================================
 */

// Write your solution function here:
function findCommonElements(arr1, arr2) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/16-find-common-elements.js")
// ----------------------------------------------------------------------------
console.log("Result:", findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // Expected: [3, 4]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findCommonElements(arr1, arr2) {
    let set1 = new Set(arr1);
    let common = new Set();
    for (let item of arr2) {
        if (set1.has(item)) common.add(item);
    }
    return Array.from(common);
}
===============================================================================
*/
