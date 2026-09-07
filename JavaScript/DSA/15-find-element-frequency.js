/**
 * ============================================================================
 * 15. Find Frequency of Every Element ⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 15-find-element-frequency.js
 *
 * Problem Statement:
 * Given an array of elements, return an object containing the frequency count of each unique element.
 *
 * Example:
 * Input: [1, 2, 2, 3, 1, 1] -> Output: { 1: 3, 2: 2, 3: 1 }
 * ============================================================================
 */

// Write your solution function here:
function findFrequency(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/15-find-element-frequency.js")
// ----------------------------------------------------------------------------
console.log("Result:", findFrequency([1, 2, 2, 3, 1, 1])); // Expected: { "1": 3, "2": 2, "3": 1 }


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findFrequency(arr) {
    let freq = {};
    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
    }
    return freq;
}
===============================================================================
*/
