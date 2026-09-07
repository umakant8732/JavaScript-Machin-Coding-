/**
 * ============================================================================
 * 17. Find Intersection of Two Arrays ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 17-find-array-intersection.js
 *
 * Problem Statement:
 * Given two arrays, return their intersection (unique common elements).
 *
 * Example:
 * Input: arr1 = [1, 2, 2, 1], arr2 = [2, 2] -> Output: [2]
 * ============================================================================
 */

// Write your solution function here:
function findIntersection(arr1, arr2) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/17-find-array-intersection.js")
// ----------------------------------------------------------------------------
console.log("Result:", findIntersection([1, 2, 2, 1], [2, 2])); // Expected: [2]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let result = [];
    for (let item of set1) {
        if (set2.has(item)) result.push(item);
    }
    return result;
}
===============================================================================
*/
