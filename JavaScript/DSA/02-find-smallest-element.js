/**
 * ============================================================================
 * 02. Find Smallest Element in an Array ⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 02-find-smallest-element.js
 *
 * Problem Statement:
 * Given an array of numbers, find and return the smallest element.
 *
 * Example:
 * Input: [3, 7, 2, 9, 5] -> Output: 2
 * ============================================================================
 */

// Write your solution function here:
function findSmallest(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/02-find-smallest-element.js")
// ----------------------------------------------------------------------------
console.log("Result:", findSmallest([3, 7, 2, 9, 5])); // Expected: 2
console.log("Result:", findSmallest([-10, -3, -5, -1])); // Expected: -10


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findSmallest(arr) {
    if (!arr || arr.length === 0) return null;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}
===============================================================================
*/
