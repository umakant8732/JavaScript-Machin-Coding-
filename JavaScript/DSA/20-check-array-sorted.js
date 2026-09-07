/**
 * ============================================================================
 * 20. Check Whether Array is Sorted ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 20-check-array-sorted.js
 *
 * Problem Statement:
 * Given an array of numbers, return true if the array is sorted in non-decreasing (ascending) order, otherwise return false.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5] -> Output: true | Input: [1, 3, 2, 5] -> Output: false
 * ============================================================================
 */

// Write your solution function here:
function isSorted(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/20-check-array-sorted.js")
// ----------------------------------------------------------------------------
console.log("Result:", isSorted([1, 2, 3, 4, 5])); // Expected: true
console.log("Result:", isSorted([1, 3, 2, 5])); // Expected: false


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}
===============================================================================
*/
