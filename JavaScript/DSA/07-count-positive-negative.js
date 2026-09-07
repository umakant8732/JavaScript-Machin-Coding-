/**
 * ============================================================================
 * 07. Count Positive and Negative Numbers in an Array ⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 07-count-positive-negative.js
 *
 * Problem Statement:
 * Given an array of numbers, count and return the number of positive numbers, negative numbers, and zeros.
 *
 * Example:
 * Input: [-1, 2, 0, -4, 5, 0] -> Output: { positive: 2, negative: 2, zero: 2 }
 * ============================================================================
 */

// Write your solution function here:
function countPositiveNegative(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/07-count-positive-negative.js")
// ----------------------------------------------------------------------------
console.log("Result:", countPositiveNegative([-1, 2, 0, -4, 5, 0])); // Expected: { positive: 2, negative: 2, zero: 2 }


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function countPositiveNegative(arr) {
    let positive = 0, negative = 0, zero = 0;
    for (let num of arr) {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    }
    return { positive, negative, zero };
}
===============================================================================
*/
