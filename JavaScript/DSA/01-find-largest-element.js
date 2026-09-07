/**
 * ============================================================================
 * 01. Find Largest Element in an Array ⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 01-find-largest-element.js
 *
 * Problem Statement:
 * Given an array of numbers, find and return the largest element.
 *
 * Example:
 * Input: [3, 7, 2, 9, 5] -> Output: 9
 * ============================================================================
 */

// Write your solution function here:
function findLargest(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/01-find-largest-element.js")
// ----------------------------------------------------------------------------
console.log("Result:", findLargest([3, 7, 2, 9, 5])); // Expected: 9
console.log("Result:", findLargest([-10, -3, -5, -1])); // Expected: -1


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findLargest(arr) {
    if (!arr || arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
===============================================================================
*/
