/**
 * ============================================================================
 * 08. Find Average of Array Elements ⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 08-find-average.js
 *
 * Problem Statement:
 * Given an array of numbers, calculate and return the average (mean) value of the elements.
 *
 * Example:
 * Input: [10, 20, 30, 40, 50] -> Output: 30
 * ============================================================================
 */

// Write your solution function here:
function findAverage(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/08-find-average.js")
// ----------------------------------------------------------------------------
console.log("Result:", findAverage([10, 20, 30, 40, 50])); // Expected: 30


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findAverage(arr) {
    if (!arr || arr.length === 0) return 0;
    let sum = 0;
    for (let num of arr) sum += num;
    return sum / arr.length;
}
===============================================================================
*/
