/**
 * ============================================================================
 * 13. Find Missing Number from 1...N ⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 13-find-missing-number.js
 *
 * Problem Statement:
 * Given an array containing N-1 distinct numbers in the range 1 to N, find the single missing number.
 *
 * Example:
 * Input: [1, 2, 4, 5, 6] (N=6) -> Output: 3
 * ============================================================================
 */

// Write your solution function here:
function findMissingNumber(arr, n) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/13-find-missing-number.js")
// ----------------------------------------------------------------------------
console.log("Result:", findMissingNumber([1, 2, 4, 5, 6], 6)); // Expected: 3


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let num of arr) actualSum += num;
    return expectedSum - actualSum;
}
===============================================================================
*/
